import { cn } from '@/lib/utils'

type Props = {
  isBot: boolean
  message: string
}

const Message = ({ isBot, message }: Props) => {
  return (
    <div
      className={cn('flex items-center justify-end pl-14', {
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
