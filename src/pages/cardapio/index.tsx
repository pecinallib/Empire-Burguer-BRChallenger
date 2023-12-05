import { useEffect, useState } from 'react'
import cardWoman from '../../assets/card-woman-eating.png'

interface CardapioBurguer {
  plate: string,
  price: number,
  ingredients: string
}

export const Cardapio = () => {
  const [menu, setMenu] = useState<CardapioBurguer[]>([])
  
  useEffect(() => {
    fetch('https://api.brchallenges.com/api/empire-burger/menu').then(async (response) => {
      const json = await response.json()
      setMenu(json)
    }).catch((error) => {
      console.log('Error', error);  
    })
  }, [])     

  return (
    <>
      <section id='' className='lg:flex lg:w-full'>
        <div className="bg-bannerMenuMobile w-full h-60 lg:bg-bannerMenuWeb lg:bg-no-repeat lg:h-[520px] lg:bg-cover">
          <div className="flex flex-col ml-3 h-full justify-center lg:items-center lg:ml-32">
            <h1 className="w-96 text-yellow-950 text-2xl font-Lilita uppercase leading-7 lg:text-slate-950">Escolha o seu combo <br/> imperial, <span className="w-[158.08px] h-[30.09px] bg-amber-500 rounded-md p-1">peça agora!</span></h1>
            <p className="w-96 text-stone-950 text-opacity-70 mt-2 text-base font-Lato leading-tight lg:text-opacity-100">Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</p>
            <button className="w-52 h-11 px-5 py-2 bg-red-600 rounded-md mt-4 lg:-ml-44 text-center text-white text-base font-bold font-Lato">Ver Cardápio Completo</button>
          </div>
        </div>

        <div className="w-full h-[465px] bg-yellow-950 flex flex-col items-center lg:w-full lg:h-[520px] xl:items-start">
          <h1 className="w-96 text-amber-500 text-[25px] font-Lilita uppercase leading-7 mt-12 xl:hidden">Nossa especialidade</h1>
          <h1 className="w-[550px] text-amber-500 text-[25px] font-Lilita uppercase leading-7 mt-12 hidden xl:block ml-8">Cardápio imperial | Burger</h1>
          
          {menu.map((item, key) => (
            <div key={key}>

              <h2 className="w-96 mt-3 text-orange-100 text-lg font-Lilita uppercase leading-snug xl:block xl:mt-8 xl:ml-8 xl:w-[550px]">{item.plate} ............................ {new Intl.NumberFormat("pt-BR", {style: "currency",currency: "BRL"}).format(item.price)} </h2>
              <p className="w-96 text-white text-opacity-90 text-sm font-Lato leading-snug xl:w-[550px] xl:ml-8">{item.ingredients}</p>
            </div>
          ))}        
        </div>
      </section>

      <div className='bg-red-50 flex flex-col items-center'>
        <div className='border-b ml-7 lg:flex lg:items-center'>
          <div className='mt-12 lg:mb-32'>
            <img src={cardWoman} alt=""  className='w-96 h-72 xl:w-[550px] xl:h-[420px]'/>
          </div>

          <div className='flex flex-col mt-4 mb-16 lg:mt-16 lg:ml-8'>
            <h1 className='text-stone-950 text-opacity-90 text-[25px] font-Lilita uppercase leading-7'>Atendimento<br/> <span className='bg-amber-500 rounded-[5px] p-1'>personalizado</span></h1>
            <p className='w-[351.62px] text-stone-950 text-opacity-70 text-base font-Lato leading-snug mt-2'>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</p>
            <div className="w-52 h-11 px-5 py-2 bg-red-600 rounded-md mt-4 flex justify-center">
              <button className="text-white text-base font-bold font-Lato ">Cardápio Imperial</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
