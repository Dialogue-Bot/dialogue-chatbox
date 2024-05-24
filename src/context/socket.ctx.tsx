import { API_URL, EVENTS_SOCKET } from '@/constants'
import { TMessage, TTemplateType } from '@/types/chatbox'
import { genId, getAddress } from '@/utils'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Socket, io } from 'socket.io-client'
import { useUnmount } from 'usehooks-ts'

export type TSocketCtx = {
  socket: Socket
  messages: TMessage[]
  channelId: string
  onEndBot?: () => void
  isTest?: boolean
  handleSendMessage: (options: {
    message: string
    cb?: (data: TMessage) => void
    type?: TTemplateType
    extraData?: string
  }) => void
  handleClose: () => void
  disableInput?: boolean
  isShowClose?: boolean
  isLoadingMessages?: boolean
  isForLiveChat?: boolean
  userId?: string
  handleReload: () => void
  customStyles?: {
    color: string
    buttonSize: number
    position: {
      y: number
      x: number
    }
    windowSize: {
      width: number
      height: number
    }
    logoUrl?: string | undefined
    name?: string | undefined
  }
  handleTyping?: () => void
  adminId?: string
  isForManager?: boolean
}

export const SocketCtx = createContext<TSocketCtx>({} as TSocketCtx)

export type Props = {
  children: React.ReactNode
  channelId?: string
  onEndBot?: () => void
  className?: string
  isTest?: boolean
  onClose?: () => void
  isShowClose?: boolean
  isForLiveChat?: boolean
  userId?: string
  customStyles?: {
    color: string
    buttonSize: number
    position: {
      y: number
      x: number
    }
    windowSize: {
      width: number
      height: number
    }
    logoUrl?: string | undefined
    name?: string | undefined
  }
  isForPreview?: boolean
  isForManager?: boolean
  adminId?: string
  API_URL?: string
}

export const SocketProvider = ({
  children,
  channelId,
  onEndBot,
  isTest = false,
  onClose,
  isShowClose = true,
  isForLiveChat,
  userId,
  customStyles: _customStyles,
  isForPreview,
  isForManager,
  adminId,
  ...props
}: Props) => {
  const [disableInput, setDisableInput] = useState<boolean>(false)
  const [customStyles, setCustomStyles] = useState(
    isForManager ? undefined : _customStyles,
  )

  const queryClient = useQueryClient()

  const urlParams = useMemo(
    () => new URLSearchParams(window.location.search),
    [],
  )

  const _userId = useMemo(() => (userId ? userId : genId()), [userId])
  const _channelId = useMemo(
    () => channelId || urlParams.get('channelId') || '',
    [channelId, urlParams],
  )

  const socketRef = useRef<Socket>(
    io(props.API_URL || API_URL, {
      autoConnect: false,
      transports: ['websocket'],
      query: {
        userId: adminId ? `${_userId}_${adminId}` : _userId,
      },
    }),
  )

  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages', _channelId, userId || genId()],
    queryFn: async () => {
      try {
        if (isForPreview) {
          return [
            {
              isBot: true,
              message: 'Hello, how can I help you?',
              createdAt: new Date().toISOString(),
            },
            {
              isBot: false,
              message: 'I want to know more about your product',
              userId: genId(),
              createdAt: new Date().toISOString(),
            },
          ]
        }

        const res = await fetch(
          `${API_URL}/api/conversation-live-chat/${
            userId || genId()
          }/${_channelId}`,
        )

        const json = await res.json()

        const data = json.data

        return data as Array<any>
      } catch (error) {
        return []
      }
    },
    initialData: [],
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  const { data: custom } = useQuery({
    queryKey: ['custom-style', _channelId, userId || genId()],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${props.API_URL || API_URL}/api/custom-chatbox/${_channelId}`,
        )

        const json = await res.json()

        const data = json.data

        return data as Record<string, any>
      } catch (error) {
        return undefined
      }
    },
    enabled: !isTest && !isForPreview && !isForManager,
  })

  const handleSendMessage: TSocketCtx['handleSendMessage'] = useCallback(
    ({ message, cb, extraData, type }) => {
      const trimmedMessage = message.trim()
      if (trimmedMessage.length === 0) return

      const address = getAddress(_channelId, userId)

      const newMessage: TMessage = {
        message: type === 'list-button' ? extraData || '' : trimmedMessage,
        userId: adminId ? adminId : userId || genId(),
        template: {} as any,
        createdAt: new Date().toISOString(),
        isTest,
      }

      socketRef.current.emit(EVENTS_SOCKET.MESSAGE, {
        message: trimmedMessage,
        address,
        isTest,
        createdAt: newMessage.createdAt,
      })

      queryClient.setQueryData(
        ['messages', _channelId, userId || genId()],
        (prev: Array<any>) => {
          return [...prev, newMessage]
        },
      )

      cb && cb(newMessage)
    },
    [_channelId, adminId, isTest, queryClient, userId],
  )

  const handleClose = useCallback(() => {
    if (window.parent) {
      window.parent.postMessage(
        {
          type: 'TOGGLE_CHAT',
        },
        '*',
      )
    }
    onClose?.()
  }, [onClose])

  const handleReload = useCallback(() => {
    if (isForPreview) return

    socketRef.current.emit(EVENTS_SOCKET.MESSAGE, {
      type: 'event',
      typeName: 'endConversation',
      address: getAddress(_channelId, userId),
      isTest,
      message: '',
    })
    setDisableInput(false)

    queryClient.setQueryData(
      ['messages', _channelId, userId || genId()],
      () => {
        return []
      },
    )
  }, [_channelId, isForPreview, isTest, queryClient, userId])

  useUnmount(() => {
    socketRef.current.disconnect()
  })

  useEffect(() => {
    // if customStyles is set, don't connect to socket because it for preview
    if (isForPreview) return

    const socket = socketRef.current

    socket.connect()

    socket.on(EVENTS_SOCKET.MESSAGE, (data) => {
      if (data.template?.type === 'list-button') {
        setDisableInput(true)
      } else {
        setDisableInput(false)
      }

      queryClient.setQueryData(
        ['messages', _channelId, userId || genId()],
        (prev: Array<any>) => {
          return [...prev, data].filter((msg) => msg.userId !== 'typing')
        },
      )
    })

    socket.on(EVENTS_SOCKET.TYPING, () => {
      queryClient.setQueryData(
        ['messages', _channelId, userId || genId()],
        (prev: Array<any>) => {
          return [...prev, { userId: 'typing' }]
        },
      )
    })

    socket.on(EVENTS_SOCKET.STOP_TYPING, () => {
      queryClient.setQueryData(
        ['messages', _channelId, userId || genId()],
        (prev: Array<any>) => {
          return prev.filter((msg) => msg.userId !== 'typing')
        },
      )
    })

    return () => {
      socket.disconnect()
    }
  }, [_channelId, queryClient, userId, isForPreview])

  useEffect(() => {
    if (isForPreview) {
      setDisableInput(true)
    }
  }, [isForPreview])

  useEffect(() => {
    if (custom && !isForManager) {
      setCustomStyles(custom as any)
    }
  }, [custom, isForManager])

  useEffect(() => {
    if (_customStyles && !isForManager) {
      setCustomStyles(_customStyles)
    }
  }, [_customStyles, isForManager])

  return (
    <SocketCtx.Provider
      value={{
        socket: socketRef.current,
        messages,
        channelId: _channelId,
        onEndBot,
        isTest,
        handleSendMessage,
        handleClose,
        disableInput,
        isShowClose,
        isLoadingMessages: isLoading,
        isForLiveChat,
        userId,
        handleReload,
        customStyles,
        adminId,
        isForManager,
      }}
    >
      {children}
    </SocketCtx.Provider>
  )
}
