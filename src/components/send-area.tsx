import { useSocket } from '@/hooks/useSocket'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

/**
 * Represents the send area component.
 */
const SendArea = () => {
  const { handleSendMessage, disableInput } = useSocket()
  const [message, setMessage] = useState('')

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSendMessage({
        message,
        cb: () => setMessage(''),
      })
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
        disabled={disableInput}
      />
      <Button
        size='icon'
        className='flex-shrink-0'
        onClick={() => {
          handleSendMessage({
            message,
            cb: () => setMessage(''),
          })
        }}
        disabled={disableInput}
      >
        <Send className='w-4 h-4' />
      </Button>
    </div>
  )
}

export default SendArea
