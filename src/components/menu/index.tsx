import logo from '../../assets/logo.png'
import menuIcon from '../../assets/icons/bars-solid 2.svg'
import whatsApp from '../../assets/icons/whatsapp.svg'
import ifoodMenu from '../../assets/menu/ifood-43 1.svg'
import instagramMenu from '../../assets/menu/instagram-brands.svg'
import barraIcon from '../../assets/menu/Vector 9.svg'

export const Menu = () => {
  return (
      <div  className='w-full h-16 bg-yellow-950 bg-opacity-5 backdrop-blur-md fixed z-50 flex justify-between items-center lg:justify-center'>
        <img src={logo} alt="logo" className='w-64  ml-6' />
        <img src={menuIcon} alt="" className='lg:hidden w-8 h-8 relative bg-stone-950 bg-opacity-20 rounded-[3px] mr-6' />

        <div className='hidden lg:block ml-11'>
          <ul className='flex gap-4'>
            <a href='#home' className='text-stone-800 text-lg font-bold font-Lato leading-relaxed'>Home</a>
            <a href='#promocao' className='text-stone-600 text-lg font-Lato leading-relaxed'>Promoção</a>
            <a href='#cardapio' className='text-stone-600 text-lg font-Lato leading-relaxed'>Cardápio</a>
            <a href='#comentario' className='text-stone-600 text-lg font-Lato leading-relaxed'>Comentário</a>
            <a href='#contato' className='text-stone-600 text-lg font-Lato leading-relaxed'>Contato</a>
          </ul>
        </div>

        <div className='hidden lg:flex gap-3 items-center ml-8'>
          <img src={ifoodMenu} alt="" />
          <img src={instagramMenu} alt="" />
          <img src={barraIcon} alt="" className='h-12' />
          <button className='flex items-center gap-2 bg-amber-500 px-8 h-8 rounded justify-center text-stone-800 text-base font-bold font-Lato leading-relaxed mr-5'> <img src={whatsApp} alt="" className='w-4' /> Contato</button>
        </div>

      </div>
  )
}
