import { SocketCtx } from '@/context/socket.ctx'
import { useContext } from 'react'

/**
 * Custom hook that provides access to the socket context.
 * @returns The socket context.
 * @throws {Error} If used outside of the SocketProvider.
 */
export const useSocket = () => {
  const socketCtx = useContext(SocketCtx)

  if (!socketCtx) {
    throw new Error('useSocket must be used within SocketProvider')
  }

  return socketCtx
}
