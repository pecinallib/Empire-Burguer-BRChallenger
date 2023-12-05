import InstagramPosts from '../../assets/instagram/burger.png'
import InstagramPosts1 from '../../assets/instagram/burger1.png'
import InstagramPosts2 from '../../assets/instagram/burger2.png'
import InstagramPosts3 from '../../assets/instagram/burger3.png'
import InstagramPosts4 from '../../assets/instagram/burger4.png'
import InstagramPosts5 from '../../assets/instagram/three-burger.png'
import InstagramPosts6 from '../../assets/instagram/woman-burger.png'

export const Instagram = () => {
  return (
    <section className='bg-red-50 pt-32 w-full'>
      <div className='w-[358px] lg:w-[630px] m-auto'>
        <h1 className=' text-center text-stone-950 text-opacity-90 text-[25px] font-Lilita uppercase leading-7'>Publicações do instagram</h1>
        <p className=' text-center text-stone-950 text-opacity-70 text-base font-Lato leading-snug'>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</p>
      </div>

      <div className='flex overflow-x-hidden mt-4'>
        <img src={InstagramPosts} alt="" className='sm:w-72 sm:h-44 w-48 h-28' />
        <img src={InstagramPosts4} alt="" className='sm:w-72 sm:h-44 w-48 h-28' />
        <img src={InstagramPosts5} alt="" className='sm:w-72 sm:h-44 w-48 h-28' />
        <img src={InstagramPosts6} alt="" className='sm:w-72 sm:h-44 w-48 h-28' />
        <img src={InstagramPosts1} alt="" className='sm:w-72 sm:h-44 w-48 h-28' />
        <img src={InstagramPosts3} alt="" className='sm:w-72 sm:h-44 w-48 h-28' />
        <img src={InstagramPosts2} alt="" className='sm:w-72 sm:h-44 w-48 h-28' />
      </div>

      <div className='w-full h-6 flex items-center bg-amber-500 truncate -mt-[1px] sm:h-12'>
        <h1 className='text-stone-950 text-opacity-90 text-sm font-Lilita uppercase leading-3 sm:text-[28px] animate-letreiro'>
        • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger
        </h1>
      </div>
    </section>
  )
}
