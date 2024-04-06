import { useSocket } from '@/hooks/useSocket'
import { useEffect, useRef } from 'react'
import Message from './message'
import TypingMessage from './typing-message'

/**
 * Represents the body component of the chatbox.
 * This component displays the main content of the chatbox.
 */

const Body = () => {
  const endMessageRef = useRef<HTMLDivElement>(null)
  const { messages, isTyping } = useSocket()

  /**
   * Scrolls to the end of the messages when a new message is received.
   */
  useEffect(() => {
    if (!endMessageRef.current) return

    endMessageRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className='p-2 flex-1 pr-3 overflow-y-auto hf'>
      <div className='flex flex-col gap-1'>
        {messages.map((msg, index) => {
          return <Message key={index} isBot={msg.isBot} message={msg.message} />
        })}
        {isTyping && <TypingMessage />}
        <div ref={endMessageRef} />
      </div>
    </div>
  )
}

export default Body
