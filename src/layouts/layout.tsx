import Header from '../components/Header' // Import the 'Header' component
import Hero from '../components/Hero' // Import the 'Hero' component
import Footer from '../components/Footer' // Import the 'Footer'
type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header /> {/* Use the 'Header' component */}
      <Hero />
      <div className='container mx-auto flex-1 py-10'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
