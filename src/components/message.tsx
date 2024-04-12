import { cn } from '@/lib/utils'
import { TMessage } from '@/types/chatbox'
import { genId } from '@/utils'

type Props = {
  message: TMessage
  children?: React.ReactNode
}

/**
 * Represents a message component.
 * @param {Object} props - The component props.
 * @param {boolean} props.isBot - Indicates whether the message is from a bot.
 * @param {string} props.message - The content of the message.
 *
 */
const Message = ({ message, children }: Props) => {
  const isBot = message.isBot || message.userId !== genId()

  return (
    <>
      <div
        className={cn('flex justify-end pl-14 min-h-9', {
          'justify-start pr-8 pl-0': isBot,
        })}
        data-is-bot={isBot}
      >
        <div
          className={cn(
            'bg-primary rounded-md text-white flex items-center justify-end w-max p-2 max-w-72 text-wrap ',
            {
              'bg-muted text-neutral-900 justify-start': isBot,
            },
          )}
          style={{
            wordBreak: 'break-word',
          }}
        >
          {message.message}
          {children}
        </div>
      </div>
    </>
  )
}

export default Message
