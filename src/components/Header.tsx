import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='border-b-2 border-b-orange-500 py-6'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link
          className='text-3xl font-bold tracking-tight text-orange-500'
          to='/'
        >
          GRUBMERN.COM
        </Link>
      </div>
    </header>
  )
}

export default Header
