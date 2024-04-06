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
}

export const SocketCtx = createContext<TSocketCtx>({} as TSocketCtx)

// TODO: Replace this url when deploy
const URL = import.meta.env.DEV
  ? 'http://localhost:8080'
  : 'https://api.example.com'

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<any[]>([])
  const [isTyping, setIsTyping] = useState<boolean>(false)
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
      }}
    >
      {children}
    </SocketCtx.Provider>
  )
}
