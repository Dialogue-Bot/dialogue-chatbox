import { useSocket } from '@/hooks/useSocket'
import { RefreshCcw, X } from 'lucide-react'

/**
 * Represents the header component of the chatbox.
 *
 */
const Header = () => {
  const { handleClose, isShowClose, handleReload, customStyles } = useSocket()
  return (
    <header
      className='flex items-center bg-primary select-none h-[3.75rem]'
      style={{
        backgroundColor: customStyles?.color,
      }}
    >
      <div className='flex items-center  px-2 gap-2 justify-between w-full'>
        <div className='flex items-center p-2 gap-2'>
          {customStyles?.logoUrl ? (
            <img
              src={customStyles?.logoUrl}
              alt='logo'
              className='w-10 h-10 rounded-full overflow-hidden object-cover'
            />
          ) : (
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
          )}
          <span className='font-medium text-white'>
            {customStyles?.name || 'DialogueBot'}
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <div
            className='w-6 h-6 flex items-center justify-center cursor-pointer'
            onClick={handleReload}
          >
            <RefreshCcw className='w-4 h-4 text-white' />
          </div>
          {isShowClose && (
            <div
              className='w-6 h-6 flex items-center justify-center cursor-pointer'
              onClick={handleClose}
            >
              <X className='w-4 h-4 text-white' />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
