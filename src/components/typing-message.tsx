import Message from './message'

export const TypingMessage = () => {
  return (
    <Message
      message={{
        isBot: true,
        message: '',
        template: {} as any,
        userId: 'typing',
        createdAt: new Date().toISOString(),
      }}
      children={
        <div className='flex space-x-1 h-full flex-1 items-center'>
          <div className='w-1 h-1 bg-neutral-800 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='w-1 h-1 bg-neutral-800 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='w-1 h-1 bg-neutral-800 rounded-full animate-bounce'></div>
        </div>
      }
    />
  )
}

export default TypingMessage
