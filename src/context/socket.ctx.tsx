import { EVENTS_SOCKET } from '@/constants'
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
}

export const SocketCtx = createContext<TSocketCtx>({} as TSocketCtx)

const URL = import.meta.env.DEV
  ? 'http://localhost:8080'
  : 'http://localhost:8080'

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
}: Props) => {
  const [disableInput, setDisableInput] = useState<boolean>(false)

  const queryClient = useQueryClient()

  const urlParams = useMemo(
    () => new URLSearchParams(window.location.search),
    [],
  )

  const _channelId = channelId || urlParams.get('channelId') || ''

  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages', _channelId, userId || genId()],
    queryFn: async () => {
      try {
        console.log('Fetching messages...')
        const res = await fetch(
          `http://localhost:8080/api/conversation-live-chat/${
            userId || genId()
          }/${_channelId}`,
        )

        const json = await res.json()

        const data = json.data

        console.log('Data:', data)

        return data as Array<any>
      } catch (error) {
        console.log('Error:', error)
        return []
      }
    },
    initialData: [],
  })

  const socketRef = useRef<Socket>(
    io(URL, {
      autoConnect: false,
      transports: ['websocket'],
      query: {
        userId: userId || genId(),
      },
    }),
  )

  useEffect(() => {
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
          return [...prev, data]
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
  }, [_channelId, queryClient, userId])

  const handleSendMessage: TSocketCtx['handleSendMessage'] = useCallback(
    ({ message, cb, extraData, type }) => {
      const trimmedMessage = message.trim()
      if (trimmedMessage.length === 0) return

      const _channelId = channelId || urlParams.get('channelId') || ''

      const address = getAddress(_channelId)

      console.log('Sending message:', trimmedMessage, 'to:', address)

      const newMessage: TMessage = {
        message: type === 'list-button' ? extraData || '' : trimmedMessage,
        userId: userId || genId(),
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
    [channelId, isTest, queryClient, urlParams, userId],
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
    socketRef.current.emit(EVENTS_SOCKET.MESSAGE, {
      type: 'event',
      typeName: 'endConversation',
      address: getAddress(_channelId),
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
  }, [_channelId, isTest, queryClient, userId])

  useUnmount(() => {
    socketRef.current.disconnect()
  })

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
      }}
    >
      {children}
    </SocketCtx.Provider>
  )
}
