import { useState, useEffect } from 'react'
import offerOne from '../../assets/ofertas/oferta-1.png'
import offerTwo from '../../assets/ofertas/oferta-2.png'
import offerThree from '../../assets/ofertas/oferta-3.png'
import relogioIcon1 from '../../assets/tempo/Ellipse 33.svg'
import relogioIcon2 from '../../assets/tempo/Frame.svg'
import relogioIcon3 from '../../assets/tempo/Vector 19.svg'




export const Services = () => {
  const [bgColor, setBgColor] = useState('bg-red-600')

    useEffect(() => {
      const timer = setInterval(() => {
        const day = new Date().getDay()
        const hours = new Date().getHours()
        const minutes = new Date().getMinutes()

        if( hours >= 17 && hours <23 && (day >= 1  && day <= 5) || (day === 6 && hours >= 18 && minutes > 30) || (day === 0 && hours < 23)) {
          setBgColor('bg-green-600')
        } else {
          setBgColor('bg-red-600')
        }
      }, 10000)
      return () => clearInterval(timer)
    }, [])
    return (  
     
      <div id='promocao' className='bg-red-50 h-full max-w-full pb-16'>

        <div className="grid justify-center lg:mx-4">
          <div className="pt-64 grid lg:grid-cols-3 lg:gap-8">
            <div className='lg:col-span-2'>
              <h1 className="w-96 text-stone-950 text-opacity-90 text-2xl font-Lilita uppercase">Ofertas especiais</h1>
              <p className="w-96 text-stone-950 text-opacity-70 font-normal font-Lato leading-snug lg:w-[750px]">Aproveite todas as nossas ofertas, fiquei de olho porque sempre estamos mudando o nosso cardapio.</p>
              <div className='mt-4'>
                <p className='text-white text-opacity-90 text-xl font-Lilita leading-snug absolute m-3'> BURGER PRIME+BATATA
                </p>
                <p className='text-white text-opacity-70 text-lg font-Lato leading-relaxed absolute mt-8 ml-3'>250g
                </p>
                <img src={offerOne} alt="promoção 1" className='max-w-full w-96 rounded-lg lg:w-[770px] lg:h-[430px]' />
                <p className='absolute text-white text-opacity-70 text-[11px] font-Lato leading-3 ml-80 -mt-11 lg:text-base lg:-mt-20 lg:ml-[52%] xl:ml-[620px]'>Apenas</p>
                <p className='absolute text-white text-opacity-90 text-xl font-Lilita leading-3 ml-80 -mt-7 lg:text-4xl lg:-mt-14 lg:ml-[52%] xl:ml-[620px]'>HOJE</p>
              </div>
            </div>

              <div className='lg:self-end'>
                <div className=' mt-2'>
                  <p className='text-stone-950 text-opacity-90 text-xl font-Lilita leading-snug absolute m-3'>BATATA</p>
                  <p className='absolute text-stone-950 text-opacity-70 text-lg font-Lato leading-relaxed mt-8 ml-3'>150g</p>
                  <img src={offerTwo} alt="promoção 2" className='lg:w-[370.96px] lg:h-[200px]' />
                </div>
              
                <div className=' mt-2'>
                  <p className='text-stone-950 text-opacity-90 text-xl font-Lilita leading-snug absolute m-3'>SORVETE</p>
                  <p className='absolute text-stone-950 text-opacity-70 text-lg font-Lato leading-relaxed mt-8 ml-3'>50g</p>
                  <img src={offerThree} alt="promoção 3" className='lg:w-[370.96px] lg:h-[200px] lg:mt-7' />
                </div>
              </div>
          </div>
        </div>

        <div className='lg:flex lg:mt-10 lg:justify-start xl:justify-center lg:mx-4'>
          <div className={`max-w-full w-96 h-28 rounded-xl mt-9 flex justify-start items-center m-auto lg:m-0 lg:w-[500px] lg:h-[131px] ${bgColor}`}>
            <div className='flex justify-center absolute ml-3'>
              <img src={relogioIcon1} alt="relogio part-1" className='w-20' />
              <img src={relogioIcon2} alt="relogio part-2" className='w-10 h-11 absolute mt-4 -ml-5 ' />
              <img src={relogioIcon3} alt="relogio part-3" className='h-20 ml-3' />
            </div>
            <div className='ml-28'>
              <h1 className='text-stone-950 text-opacity-70 text-lg font-Lilita uppercase leading-relaxed lg:text-2xl'>Horário de funcionamento</h1>
              <p className='w-56 text-white text-opacity-90 text-sm font-Lato leading-tight lg:text-base'>Segunda a sexta: 17h00 - 23h00</p>
              <p className='w-56 text-white text-opacity-90 text-sm font-Lato leading-tight lg:text-base lg:w-96' >Sabado a Domíngo: 18h30 - 23h00</p>
            </div>
          </div>
          <div className='flex flex-col items-center mt-20 lg:mt-8 lg:ml-7'>
            <p className='w-96 lg:text-start text-center text-stone-950 text-opacity-70 text-lg font-Lato leading-relaxed'>Não esqueça de marcar a gente no Instagram:</p>
            <h1 className='w-96 lg:text-start text-center text-red-600 text-4xl font-Lilita uppercase leading-7'>#empireburger </h1>
          </div>
        </div>
      </div>
    )
  
}
