import { EVENTS_SOCKET } from '@/constants'
import { TMessage, TTemplateType } from '@/types/chatbox'
import { genId, getAddress } from '@/utils'
import { createContext, useEffect, useRef, useState } from 'react'
import { Socket, io } from 'socket.io-client'
import { useUnmount } from 'usehooks-ts'

export type TSocketCtx = {
  socket: Socket
  messages: TMessage[]
  setMessages: React.Dispatch<React.SetStateAction<any[]>>
  isTyping: boolean
  channelId: string
  onEndBot?: () => void
  isTest?: boolean
  handleSendMessage: (options: {
    message: string
    cb?: (data: TMessage) => void
    type?: TTemplateType
    extraData?: string
  }) => void
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
}

export const SocketProvider = ({
  children,
  channelId,
  onEndBot,
  isTest = false,
}: Props) => {
  const [messages, setMessages] = useState<TMessage[]>([])
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const urlParams = new URLSearchParams(window.location.search)

  const socketRef = useRef<Socket>(
    io(URL, {
      autoConnect: false,
      transports: ['websocket'],
      query: {
        userId: genId(),
      },
    }),
  )

  useEffect(() => {
    const socket = socketRef.current

    socket.connect()

    socket.on(EVENTS_SOCKET.MESSAGE, (data) => {
      setMessages((prev) => [...prev, data])
    })

    socket.on(EVENTS_SOCKET.TYPING, () => {
      setIsTyping(true)
    })

    socket.on(EVENTS_SOCKET.STOP_TYPING, () => {
      setIsTyping(false)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  const handleSendMessage: TSocketCtx['handleSendMessage'] = ({
    message,
    cb,
    extraData,
    type,
  }) => {
    const trimmedMessage = message.trim()
    if (trimmedMessage.length === 0) return

    const _channelId = channelId || urlParams.get('channelId') || ''

    const address = getAddress(_channelId)

    console.log('Sending message:', trimmedMessage, 'to:', address)

    const newMessage: TMessage = {
      message: type === 'list-button' ? extraData || '' : trimmedMessage,
      isBot: false,
      userId: genId(),
      template: {} as any,
    }

    socketRef.current.emit(EVENTS_SOCKET.MESSAGE, {
      message: trimmedMessage,
      address,
      isTest,
    })

    setMessages((prev) => {
      return [...prev, newMessage]
    })

    cb && cb(newMessage)
  }

  useUnmount(() => {
    socketRef.current.disconnect()
  })

  return (
    <SocketCtx.Provider
      value={{
        socket: socketRef.current,
        messages,
        setMessages,
        isTyping,
        channelId: channelId || urlParams.get('channelId') || '',
        onEndBot,
        isTest,
        handleSendMessage,
      }}
    >
      {children}
    </SocketCtx.Provider>
  )
}
