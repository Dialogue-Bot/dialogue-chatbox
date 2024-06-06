import { useSocket } from '@/hooks/useSocket'
import { TButtonsMessage } from '@/types/chatbox'
import { hexToHSL, openInNewTab } from '@/utils'
import Message from './message'
import { Button } from './ui/button'

type Props = {
  message: TButtonsMessage
}

const ButtonsMessage = ({ message }: Props) => {
  const {
    handleSendMessage,
    customStyles,
    handleClickButton,
    disabledButtons,
  } = useSocket()
  const hsl = customStyles?.color ? hexToHSL(customStyles.color) : null
  return (
    <div className='space-y-2' data-buttons={true}>
      <Message message={message} />
      <div className='flex gap-1 items-center w-[80%] justify-center flex-wrap mx-auto'>
        {message.template.data.map((button) => {
          return (
            <Button
              disabled={
                disabledButtons?.find((item) => item === message.createdAt)
                  ? true
                  : false
              }
              key={`${button.title}-${button.type}`}
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

                handleClickButton?.(message.createdAt)
              }}
              style={
                {
                  '--primary': hsl ? `${hsl.h} ${hsl.s}% ${hsl.l}%` : undefined,
                } as React.CSSProperties
              }
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
