import { cn } from '@/lib/utils'
import { Body, Header, SendArea } from '../components'
import { Props, SocketProvider } from '../context/socket.ctx'

/**
 * Represents the ChatBox component.
 * This component displays a chat box with a header, body, and send area.
 */

const ChatBox = ({ className }: { className?: string }) => {
  return (
    <div className={cn('h-[600px] w-96', className)}>
      <div className='flex flex-col shadow h-full rounded-md overflow-hidden'>
        <Header />
        <div className='flex-1 flex flex-col min-h-[1px]'>
          <Body />
          <SendArea />
        </div>
      </div>
    </div>
  )
}

/**
 * Wrapper component for the chat box.
 *
 * @returns The rendered chat box wrapped in a SocketProvider.
 */
const ChatBoxWrapper = (props: Omit<Props, 'children'>) => {
  return (
    <SocketProvider {...props}>
      <ChatBox className={props.className} />
    </SocketProvider>
  )
}

export default ChatBoxWrapper
