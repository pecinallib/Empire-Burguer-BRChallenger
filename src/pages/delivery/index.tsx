import bannerPhone from '../../assets/card-phone.png'
import whattsappIcon from '../../assets/icons/whatsapp.svg'
import deliveryIcon from '../../assets/icons/delivery.svg'
import icecreamIcon from '../../assets/icons/ice-cream.svg'
import ifoodIcon from '../../assets/icons/ifood-black.svg'
import phoneIcon from '../../assets/icons/phone.svg'

export const Delivery = () => {
  return (
    <div className='bg-red-50 flex-col justify-start items-center flex w-full'>
      <div className='lg:flex lg:items-center '>
        <div className='mt-28 mb-9 lg:mr-8'>
          <img src={bannerPhone} alt="Phone and Burguer" className='w-96 h-80 lg:h-[500px] lg:w-[450px]' />
        </div>

        <div>
          <h1 className='text-stone-950 text-opacity-90 text-[25px] font-Lilita uppercase leading-7 mb-4'>Nossas entregas</h1>

          <div className='w-96 h-[90px] bg-white rounded-[10px] shadow flex flex-wrap justify-center items-center mb-2 lg:w-[500px] lg:justify-start'>
            <div className='w-16 h-16 bg-orange-100 rounded-full flex justify-center items-center mr-6 lg:ml-6'>
              <img src={whattsappIcon} alt="" className=' w-8 h-8' />
            </div>
            <div className='border-l'>
              <h2 className='text-stone-950 text-opacity-90 text-lg font-Lilita uppercase leading-relaxed ml-6'>Whatsapp</h2>
              <p className='w-[228.02px] text-stone-950 text-opacity-70 text-sm font-normal font-Lato leading-tight ml-6 lg:w-72'>Vamos direto ao ponto, sem perder tempo!</p>
            </div>
          </div>

          <div className='w-96 h-[90px] bg-white rounded-[10px] shadow flex flex-wrap justify-center items-center mb-2 lg:w-[500px] lg:justify-start'>
            <div className='w-16 h-16 bg-orange-100 rounded-full flex justify-center items-center mr-6 lg:ml-6'>
              <img src={deliveryIcon} alt="" className=' w-8 h-8' />
            </div>
            <div className='border-l'>
              <h2 className='text-stone-950 text-opacity-90 text-lg font-Lilita uppercase leading-relaxed ml-6'>Entrega</h2>
              <p className='w-[228.02px] text-stone-950 text-opacity-70 text-sm font-normal font-Lato leading-tight ml-6 lg:w-80'>Entregamos menos de 45 minutos na porta da sua casa!</p>
            </div>
          </div>

          <div className='w-96 h-[90px] bg-white rounded-[10px] shadow flex flex-wrap justify-center items-center mb-2 lg:w-[500px] lg:justify-start'>
            <div className='w-16 h-16 bg-orange-100 rounded-full flex justify-center items-center mr-6 lg:ml-6'>
              <img src={icecreamIcon} alt="" className=' w-8 h-8' />
            </div>
            <div className='border-l'>
              <h2 className='text-stone-950 text-opacity-90 text-lg font-Lilita uppercase leading-relaxed ml-6'>Sobremesa</h2>
              <p className='w-[228.02px] text-stone-950 text-opacity-70 text-sm font-normal font-Lato leading-tight ml-6 lg:w-72'>Pedidos acima de 100 reais, ganham brindes.</p>
            </div>
          </div>

          <div className='w-96 h-[90px] bg-white rounded-[10px] shadow flex flex-wrap justify-center items-center mb-2 lg:w-[500px] lg:justify-start'>
            <div className='w-16 h-16 bg-orange-100 rounded-full flex justify-center items-center mr-6 lg:ml-6'>
              <img src={ifoodIcon} alt="" className=' w-8 h-8' />
            </div>
            <div className='border-l'>
              <h2 className='text-stone-950 text-opacity-90 text-lg font-Lilita uppercase leading-relaxed ml-6'>Ifood</h2>
              <p className='w-[228.02px] text-stone-950 text-opacity-70 text-sm font-normal font-Lato leading-tight ml-6'>Nossa Loja é Top 1 da região!</p>
            </div>
          </div>
        </div>
      </div>

      <div id='contato' className='w-96 h-72 mt-16 bg-red-600 rounded-[10px] flex flex-col items-center lg:w-[1000px] lg:h-32 lg:flex-row lg:justify-between'>
        <img src={phoneIcon} alt="" className='w-24 mt-3  lg:mt-0 lg:ml-6 lg:mr-4' />

        <div className='border-t lg:border-t-0 border-black mt-2 lg:border-l lg:mt-0 lg:-ml-32'>
          <h1 className='text-center text-stone-950 text-opacity-70 text-lg font-Lilita uppercase leading-relaxed mt-4 lg:text-[25px] lg:mt-0 lg:text-start lg:ml-4'>faça o seu pedido agora mesmo!</h1>
          <p className='text-center text-white text-opacity-90 text-sm font-normal font-Lato leading-tight w-72 lg:w-[460px] lg:text-start lg:ml-4'>Venha saborear a melhor experiência de hamburguenses artesanal do <span className='font-bold'>Empires Burger</span>, com temática medieval!</p>
        </div>
        <div className='mr-9'>
          <button className='w-80 h-10 px-4 py-2 mt-4 bg-orange-100 rounded text-red-600 text-base font-black font-Lato uppercase leading-snug lg:w-48 lg:mt-0'>Solicitar Pedido</button>
        </div>
      </div>
    </div>
  )
}
