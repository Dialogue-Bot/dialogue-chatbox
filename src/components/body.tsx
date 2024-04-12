import { useSocket } from '@/hooks/useSocket'
import { TMessage } from '@/types/chatbox'
import dayjs from 'dayjs'
import { Fragment, useEffect, useRef } from 'react'
import ButtonsMessage from './buttons-message'
import { CardsMessage } from './cards-message'
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

  const renderMessage = (msg: TMessage, index: number) => {
    if (msg.template.type === 'list-button') {
      return <ButtonsMessage key={`${msg.createdAt}+${index}`} message={msg} />
    }

    if (msg.template.type === 'list-card') {
      return <CardsMessage key={`${msg.createdAt}+${index}`} message={msg} />
    }

    return <Message key={`${msg.createdAt}+${index}`} message={msg} />
  }

  return (
    <div className='p-2 flex-1 pr-3 overflow-y-auto hf'>
      <div className='flex flex-col gap-1'>
        {messages.length > 0 && (
          <div className='text-center text-xs text-neutral-500 py-2'>
            {dayjs(messages[0].createdAt).format('DD/MM/YYYY HH:mm')}
          </div>
        )}
        {messages.map((msg, index) => {
          return (
            <Fragment key={index}>
              {index > 0 &&
                dayjs(msg.createdAt).diff(
                  dayjs(messages[index - 1].createdAt),
                  'minutes',
                ) > 10 && (
                  <div className='text-center text-xs text-neutral-500 py-2'>
                    {dayjs(msg.createdAt).format('DD/MM/YYYY HH:mm')}
                  </div>
                )}
              {renderMessage(msg, index)}
            </Fragment>
          )
        })}
        {isTyping && <TypingMessage />}
        <div ref={endMessageRef} />
      </div>
    </div>
  )
}

export default Body
