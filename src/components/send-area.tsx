import { Send } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const SendArea = () => {
  return (
    <div className='flex items-center py-2 px-3 gap-2 border-input border-t'>
      <Input className='flex-1' placeholder='Type a message...' />
      <Button size='icon' className='flex-shrink-0'>
        <Send className='ư-4 h-4' />
      </Button>
    </div>
  )
}

export default SendArea
