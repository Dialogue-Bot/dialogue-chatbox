import { useSocket } from '@/hooks/useSocket'
import { cn } from '@/lib/utils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Body, Header, SendArea } from '../components'
import { Props, SocketProvider } from '../context/socket.ctx'

const queryClient = new QueryClient()

/**
 * Represents the ChatBox component.
 * This component displays a chat box with a header, body, and send area.
 */

const ChatBox = ({ className }: { className?: string }) => {
  const { customStyles } = useSocket()

  console.log(customStyles)

  return (
    <div
      className={cn(
        'select-none w-full h-screen flex flex-col shadow',
        className,
      )}
      style={{
        width: customStyles?.windowSize.width,
        height: customStyles?.windowSize.height,
      }}
    >
      <div className='flex flex-col h-full overflow-hidden w-full flex-1'>
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
    <QueryClientProvider client={queryClient}>
      <SocketProvider {...props}>
        <ChatBox className={props.className} />
      </SocketProvider>
    </QueryClientProvider>
  )
}

export default ChatBoxWrapper
