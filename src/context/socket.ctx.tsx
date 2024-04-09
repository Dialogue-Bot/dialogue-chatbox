import { EVENTS_SOCKET } from '@/constants'
import { genId } from '@/utils'
import { createContext, useEffect, useRef, useState } from 'react'
import { Socket, io } from 'socket.io-client'
import { useUnmount } from 'usehooks-ts'

export type TSocketCtx = {
  socket: Socket
  messages: any[]
  setMessages: React.Dispatch<React.SetStateAction<any[]>>
  isTyping: boolean
  channelId: string
  onEndBot?: () => void
  isTest?: boolean
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
  isTest,
}: Props) => {
  const [messages, setMessages] = useState<any[]>([])
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
      setMessages((prev) => [
        ...prev,
        {
          message: data.message,
          isBot: true,
        },
      ])
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

  console.log(channelId || urlParams.get('channelId') || '')

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
      }}
    >
      {children}
    </SocketCtx.Provider>
  )
}
