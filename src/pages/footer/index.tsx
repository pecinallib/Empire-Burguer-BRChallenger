import coroaIcon from '../../assets/icons/Frame.svg'
import ifoodIcon from '../../assets/icons/ifood.svg'
import instagramIcon from '../../assets/icons/instagram.svg'

export const Footer = () => {
  return (
    <div className='w-full h-[347.84px] bg-white lg:h-32'>

    <div className='flex flex-col items-center bg-red-50'>
        <h1 className='w-[364.24px] text-center text-stone-950 text-opacity-90 text-2xl font-Lilita uppercase leading-7 mt-16 xl:mt-32'>Onde fica o nosso castelo</h1>
        <p className='w-[375.68px] text-center text-stone-950 text-opacity-70 text-base font-normal font-Lato leading-snug mb-4'>Estaremos de portas abertas para a nossa realeza.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7348.810482544258!2d-42.35932650412076!3d-22.935298186242033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x974285b21f4f4d%3A0xf5e0a9a8bf043bef!2sPraia%20do%20Dentinho!5e0!3m2!1spt-BR!2sbr!4v1700959293367!5m2!1spt-BR!2sbr" className="border:0 w-full h-52 mt-4"></iframe>
      </div>

      <div className='flex flex-col items-center text-center lg:flex-row lg:mt-8 lg:border-b lg:max-w-4xl  lg:m-auto'>
        <div className='flex items-center gap-1 mt-5 mb-3 border-b w-96 justify-center lg:border-b-0 lg:mt-0'>
          <img src={coroaIcon} alt="coroa" className='w-7 h-7' />
          <h1 className='text-amber-500 text-3xl font-black font-Lato leading-loose'>
            EMPIRE 
          <span className='text-amber-500 text-3xl font-Lato uppercase leading-loose'>BURGUER
          </span>
          </h1>
        </div>
        <div className='flex items-center gap-3 mb-3 border-b w-96 justify-center mt-3 lg:hidden'>
          <img src={ifoodIcon} alt="ifood" className='w-7 h-4 mb-3' />
          <img src={instagramIcon} alt="instagram" className='w-7 h-6 mb-3' />
        </div>
        <ul className='border-b w-96 lg:border-b-0 lg:flex lg:gap-5'>
          <li className='text-yellow-950 text-lg font-bold font-Lato leading-relaxed mb-3'>Home</li>
          <li className='text-yellow-950 text-lg font-Lato leading-relaxed mb-3'>Localização</li>
          <li className='text-yellow-950 text-lg font-Lato leading-relaxed mb-3'>Cardapio</li>
          <li className='text-yellow-950 text-lg font-Lato leading-relaxed mb-4'>Sobre</li>
        </ul>
        <div className='hidden items-center gap-3 mb-3 border-b  justify-center mt-3 lg:border-b-0 lg:flex'>
          <img src={ifoodIcon} alt="ifood" className='w-7 h-4 mb-3' />
          <img src={instagramIcon} alt="instagram" className='w-7 h-6 mb-3' />
        </div>
      </div>
      <footer className='text-slate-950 text-opacity-70 text-sm font-bold font-Inter leading-5 mt-4 mb-4 flex justify-center'>2022 © EmpireBurger.  
        <span className='text-slate-950 text-opacity-30 text-sm font-normal font-Inter leading-5'>Todos os direitos reservados.
        </span>
      </footer>
    </div>
  )
}
