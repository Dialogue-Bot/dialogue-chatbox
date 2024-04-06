import { RefreshCcw } from 'lucide-react'

/**
 * Represents the header component of the chatbox.
 *
 */
const Header = () => {
  return (
    <header className='h-14 flex items-center rounded-t-md bg-primary select-none'>
      <div className='flex items-center p-2 gap-2 justify-between w-full'>
        <div className='flex items-center p-2 gap-2'>
          <svg
            width='40'
            height='40'
            className='text-neutral-700 fill-neutral-700 bg-neutral-700 rounded-full'
          >
            <text
              text-anchor='middle'
              x='50%'
              y='50%'
              dy='0.35em'
              fill='#ffffff'
              font-size='1rem'
            >
              B
            </text>
          </svg>
          <span className='font-medium text-white'>DialogueBot</span>
        </div>
        <div className='w-6 h-6 flex items-center justify-center cursor-pointer'>
          <RefreshCcw className='w-4 h-4 text-white' />
        </div>
      </div>
    </header>
  )
}

export default Header
