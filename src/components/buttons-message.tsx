import { useSocket } from '@/hooks/useSocket'
import { TButtonsMessage } from '@/types/chatbox'
import { openInNewTab } from '@/utils'
import Message from './message'
import { Button } from './ui/button'

type Props = {
  message: TButtonsMessage
}

const ButtonsMessage = ({ message }: Props) => {
  const { handleSendMessage } = useSocket()
  return (
    <div className='space-y-2' data-buttons={true}>
      <Message message={message} />
      <div className='flex gap-1 items-center w-[80%] justify-center flex-wrap mx-auto'>
        {message.template.data.map((button) => {
          return (
            <Button
              variant='message'
              size='sm'
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
    </div>
  )
}

export default ButtonsMessage
