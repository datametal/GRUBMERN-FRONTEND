import HeroImage from '../assets/hero.png'

const Hero = () => {
  return (
    <div>
      <img
        src={HeroImage}
        alt='Hero'
        className='max-h-[600px] w-full object-cover'
      ></img>
    </div>
  )
}

export default Hero
