import { useSocket } from '@/hooks/useSocket'
import { cn } from '@/lib/utils'
import { TMessage } from '@/types/chatbox'
import Linkify from 'linkify-react'
type Props = {
  message: TMessage
  children?: React.ReactNode
}

const renderLink = ({ attributes, content }: any) => {
  const { href, ...props } = attributes
  return (
    <a href={href} {...props} className='underline'>
      {content}
    </a>
  )
}

/**
 * Represents a message component.
 * @param {Object} props - The component props.
 * @param {boolean} props.isBot - Indicates whether the message is from a bot.
 * @param {string} props.message - The content of the message.
 *
 */
const Message = ({ message, children }: Props) => {
  const { customStyles, adminId: _adminId, isForManager } = useSocket()

  const isLeft = message.isBot

  return (
    <>
      <div
        className={cn('flex min-h-9 justify-end pl-8', {
          'justify-start pr-8 pl-0': isLeft,
        })}
      >
        <div
          className={cn('flex flex-col gap-1 w-full items-end', {
            'items-start': isLeft,
          })}
        >
          {isForManager && (
            <span
              className={cn('flex items-center text-xs text-muted-foreground', {
                'justify-end': !isLeft,
              })}
            >
              {isForManager ? (message.isBot ? 'From bot' : 'From user') : null}
            </span>
          )}
          <Linkify
            as='div'
            options={{
              render: renderLink,
              className: cn('underline', {
                'text-primary': !isLeft,
              }),
            }}
            className={cn(
              'bg-primary rounded-md text-white flex items-center justify-end w-max p-2 max-w-72 text-wrap whitespace-pre-line',
              {
                'bg-muted text-neutral-900 justify-start': isLeft,
              },
            )}
            style={{
              wordBreak: 'break-word',
              backgroundColor: isLeft ? undefined : customStyles?.color,
            }}
          >
            {message.message.trim().length ? message.message : null}
            {children}
          </Linkify>
        </div>
      </div>
    </>
  )
}

export default Message
