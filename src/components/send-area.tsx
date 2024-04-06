import { EVENTS_SOCKET } from '@/constants'
import { useSocket } from '@/hooks/useSocket'
import { getAddress } from '@/utils'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

/**
 * Represents the send area component.
 */
const SendArea = () => {
  const { socket, setMessages } = useSocket()
  const [message, setMessage] = useState('')

  /**
   * Handles sending a message.
   */
  const handleSendMessage = () => {
    const trimmedMessage = message.trim()
    if (trimmedMessage.length === 0) return

    socket.emit(EVENTS_SOCKET.MESSAGE, {
      message: trimmedMessage,
      address: getAddress('test'),
    })

    setMessages((prev) => {
      return [...prev, { message: trimmedMessage, isBot: false }]
    })

    setMessage('')
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className='flex items-center py-2 px-3 gap-2 border-input border-t'>
      <Input
        className='flex-1'
        placeholder='Type a message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleEnter}
      />
      <Button size='icon' className='flex-shrink-0' onClick={handleSendMessage}>
        <Send className='w-4 h-4' />
      </Button>
    </div>
  )
}

export default SendArea
