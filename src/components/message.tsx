import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  isBot: boolean
  message: string | React.ReactNode
}

/**
 * Represents a message component.
 * @param {Object} props - The component props.
 * @param {boolean} props.isBot - Indicates whether the message is from a bot.
 * @param {string} props.message - The content of the message.
 *
 */
const Message = ({ isBot, message }: Props) => {
  return (
    <div
      className={cn('flex justify-end pl-14 min-h-10', {
        'justify-start pr-8 pl-0': isBot,
      })}
      data-is-bot={isBot}
    >
      <div
        className={cn(
          'bg-primary p-2 rounded-md text-white flex items-center justify-end w-max',
          {
            'bg-muted text-neutral-900 justify-start': isBot,
          },
        )}
      >
        {message}
      </div>
    </div>
  )
}

export default Message
