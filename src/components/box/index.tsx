import burguerIcon from '../../assets/icons/burger.svg';
import headsetIcon from '../../assets/icons/headset.svg'
import deliveryIcon from '../../assets/icons/delivery.svg'
import vectorIcon from '../../assets/icons/Vector 10.svg'

export const Box = () => {
  return (
    <div className='max-w-full w-96 h-80 bg-white flex flex-wrap justify-center shadow rounded-lg absolute -mt-36 inset-x-0 m-auto z-10 lg:w-[970px] lg:h-28 lg:-mt-14'>
      <div className='flex gap-4 items-center border-b border-yellow-950 border-opacity-10'>
        <div className='my-4 w-16 h-16 bg-orange-100 rounded-full flex justify-center items-center'>
          <img src={burguerIcon} alt="hamburguer" className='w-8 h-8' />
        </div>
        <div className='mb-2'>
          <h2 className="opacity-80 text-stone-950 text-opacity-90 text-xl font-normal font-Lilita uppercase">
          Artesanal
          </h2>
          <p className="w-44 opacity-60 text-stone-950 text-opacity-70 font-Lato leading-tight lg:flex">
          Nossas receitas são feitas com todo cuidado
          </p>
        </div>
        <div className='hidden lg:block mr-16'>
        <img src={vectorIcon} alt="detalhe" className='h-20' />
        </div>
      </div>

      <div className=' flex gap-4 justify-center items-center border-b border-yellow-950 border-opacity-10'>
        
        <div className='my-5 w-14 h-14 bg-orange-100 rounded-full flex justify-center items-center'>
          <img src={headsetIcon} alt="hamburguer" className='w-8 h-8' />
        </div>
        <div className='mb-2'>
          <h2 className="opacity-80 text-stone-950 text-opacity-90 text-xl font-normal font-Lilita uppercase">
          Atendimento
          </h2>
          <p className="w-44 opacity-60 text-stone-950 text-opacity-70 font-Lato leading-tight">
          Totalmente personalizado
          </p>
        </div>
        <div className='hidden lg:block mr-16'>
        <img src={vectorIcon} alt="" className='h-20' />
        </div>
      </div>

      <div className=' flex gap-4 justify-center items-center'>
        <div className='my-5 w-14 h-14 bg-orange-100 rounded-full flex justify-center items-center'>
          <img src={deliveryIcon} alt="hamburguer" className='w-8 h-8' />
        </div>
        <div>
          <h2 className="opacity-80 text-stone-950 text-opacity-90 text-xl font-normal font-Lilita uppercase">
          DELIVERY Speed
          </h2>
          <p className="w-44 opacity-60 text-stone-950 text-opacity-70 font-Lato leading-tight">
          Entregamos menos de 30 minutos
          </p>
        </div>
      </div>
    </div>
  );
};
