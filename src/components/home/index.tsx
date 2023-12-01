import homeMobile from '../../assets/Banner mobile 1.png'
import homeWeb from '../../assets/banner-hero.png'
import { Button } from '../../utils/Button'

export const Home = () => {
  return (
    <div id='home'  className='w-full'>
      <div className='absolute mt-28 ml-6 lg:ml-24 2xl:ml-72'>
        <p className="text-stone-950 text-opacity-90 font-bold font-Lato">Uma nova experiência!</p>
        <h1 className="text-yellow-950 text-6xl font-Lilita uppercase">King{' '}<span className="text-amber-500 text-6xl font-Lilita uppercase">burger</span></h1>
        <p><span className="text-stone-950 text-opacity-70 font-Lato">Para quem tem um </span><span className="text-stone-950 text-opacity-70 font-black font-Lato w-36 h-6 bg-amber-500 rounded-[5px] p-1">Apetite de um REI!</span></p>
        <Button/>
      </div>
      <img src={homeMobile} alt="home" className='lg:hidden' />
      <img src={homeWeb} alt="" className='hidden lg:block w-full h-full' />
    </div>
  )
}
