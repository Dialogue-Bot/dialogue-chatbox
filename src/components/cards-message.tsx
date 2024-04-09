import { useSocket } from '@/hooks/useSocket'
import { TCard, TCardsMessage } from '@/types/chatbox'
import { openInNewTab } from '@/utils'
import Message from './message'
import { Button } from './ui/button'

type Props = {
  message: TCardsMessage
}

const Card = ({ card }: { card: TCard }) => {
  const { handleSendMessage } = useSocket()
  return (
    <div className='w-full space-y-1 text-center'>
      <img
        src={card.image_url}
        alt={card.title}
        className='rounded-md object-cover h-full w-full'
      />
      <h3 className='font-semibold'>{card.title}</h3>
      <p className='text-sm'>{card.subtitle}</p>
      {card.buttons && card.buttons.length > 0 && (
        <div className='w-full mt-2'>
          {card.buttons.map((button, index) => {
            return (
              <Button
                key={index}
                variant='message'
                className='!rounded-md w-full'
                onClick={() => {
                  if (button.type === 'postback') {
                    if (!button.payload) return
                    handleSendMessage({
                      message: button.payload,
                      extraData: button.title,
                      type: 'list-button',
                    })
                  }

                  if (button.type === 'web_url') {
                    if (!button.url) return

                    openInNewTab(button.url)
                  }
                }}
              >
                {button.title}
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export const CardsMessage = ({ message }: Props) => {
  return (
    <div className='flex flex-col space-y-2 gap-1'>
      {message.template.data.map((card, index) => {
        return (
          <Message
            key={index}
            message={message}
            children={<Card card={card} />}
          />
        )
      })}
    </div>
  )
}
