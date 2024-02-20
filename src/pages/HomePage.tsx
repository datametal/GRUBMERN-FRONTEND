import LandingImage from '../assets/landing.png'
import AppDownloadImage from '../assets/appDownload.png'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='roung-lg shadow-mg flex flex-col gap-5 bg-white py-8 text-center'>
        <h1 className='text-5xl font-bold tracking-tight text-orange-600'>
          Tuck into a takeaway today
        </h1>
        <span className='text-xl'>Food is just a click away</span>
      </div>
      <div className='grid gap-5 md:grid-cols-2'>
        <img src={LandingImage} alt='landing page' />
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span className='text-3xl font-bold tracking-tighter'>
            Order takeaway even faster
          </span>
          <span>Download the GRUBMERN app</span>
          <img src={AppDownloadImage} alt='App Download' />
        </div>
      </div>
    </div>
  )
}

export default HomePage
