import Header from '../components/Header' // Import the 'Header' component

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header /> {/* Use the 'Header' component */}
      <div className='container mx-auto flex-1 py-10'>{children}</div>
    </div>
  )
}

export default Layout
