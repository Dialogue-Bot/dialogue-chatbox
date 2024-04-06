import { Body, Header, SendArea } from './components'
import { SocketProvider } from './context/socket.ctx'

/**
 * Represents the ChatBox component.
 * This component displays a chat box with a header, body, and send area.
 */

type Prop = {
  channelId?: string;
}

const ChatBox = () => {
  return (
    <div className='h-[600px] w-96'>
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
const ChatBoxWrapper = () => {
  return (
    <SocketProvider>
      <ChatBox />
    </SocketProvider>
  )
}

export default ChatBoxWrapper
