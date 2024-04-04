import { Body, Header, SendArea } from './components'

const ChatBox = () => {
  return (
    <div className='h-screen w-full max-w-md'>
      <div className='flex flex-col shadow h-full'>
        <Header />
        <div className='flex-1 flex flex-col min-h-[1px]'>
          <Body />
          <SendArea />
        </div>
      </div>
    </div>
  )
}

export default ChatBox
