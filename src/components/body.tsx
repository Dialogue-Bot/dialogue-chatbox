import Message from './message'

const Body = () => {
  return (
    <div className='p-2 flex-1 pr-3 overflow-y-auto hf'>
      <div className='flex flex-col gap-1'>
        <Message isBot={true} message='Hello! How can I help you today?' />
        <Message
          isBot={false}
          message="I'm having trouble with my account. Can you help me?"
        />
        <Message isBot={true} message='Sure! I can help you with that.' />
        <Message
          isBot={true}
          message='Please provide me with your email address.'
        />
        <Message
          isBot={false}
          message='My email is hoanghuy.dev0210@gmail.com'
        />

        <Message isBot={true} message='Thank you! Let me check your account.' />

        <Message isBot={true} message='Your account is currently active.' />

        <Message
          isBot={true}
          message='Is there anything else I can help you with?'
        />

        <Message isBot={false} message='No, that will be all. Thank you!' />

        <Message isBot={true} message='You are welcome! Have a great day!' />

        <Message isBot={true} message='Goodbye!' />

        <Message isBot={false} message='Goodbye!' />

        <Message
          isBot={false}
          message='Hi! Can you provider for me the information about the product?'
        />

        <Message
          isBot={true}
          message='Sure! What product are you looking for?'
        />

        <Message isBot={false} message='I am looking for a laptop.' />

        <Message isBot={true} message='What is your budget?' />

        <Message isBot={false} message='My budget is $1000.' />

        <Message isBot={true} message='What is the purpose of the laptop?' />

        <Message isBot={false} message='I will use it for programming.' />

        <Message isBot={true} message='I have some suggestions for you.' />

        <Message isBot={true} message='1. Dell XPS 13' />

        <Message isBot={true} message='2. Macbook Pro' />

        <Message isBot={true} message='3. Lenovo ThinkPad X1 Carbon' />

        <Message isBot={true} message='4. HP Spectre x360' />

        <Message isBot={true} message='5. Asus ZenBook 13' />

        <Message isBot={true} message='6. Microsoft Surface Laptop 4' />

        <Message isBot={false} message='Thank you for your suggestions!' />

        <Message isBot={true} message='You are welcome!' />

        <Message
          isBot={true}
          message='Is there anything else I can help you with?'
        />

        <Message isBot={false} message='No, that will be all. Thank you!' />
      </div>
    </div>
  )
}

export default Body
