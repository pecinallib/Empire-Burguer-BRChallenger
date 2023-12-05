import { useState, useEffect } from 'react'


import { Carousel } from './carousel';

interface FeedBacks {
  name: string,
  image?: string,
  age: number,
  testimonial: string
}

export const FeedBacks = () => {

  const [feed, setFeed] = useState<FeedBacks[]>([])

  useEffect (() => {
    fetch('https://api.brchallenges.com/api/empire-burger/testimonials').then(async (response) => {
      const json = await response.json()
      setFeed(json)
    }).catch((error) => {
      console.log("Error", error);   
    })
  }, [])

  return (
    <section className="bg-red-50 pt-16">
      <div className='w-96 m-auto'>
        <h1 className="text-stone-950 text-opacity-90 text-[25px] font-Lilita leading-7">NOSSA REALEZA<br /><p className="text-stone-950 text-opacity-70 text-base font-Lato leading-snug">A satisfação de nossos clientes em primeiro lugar!</p></h1>
      </div> 
      <div className='w-[90%] m-auto'>
        <Carousel>
          {feed.map((item, key) => (
            <div className="h-52 bg-white rounded-[10px] shadow mt-2" key={key}>
              <h1 className="w-[286px] text-stone-950 text-opacity-70 text-base font-Lato leading-snug line-clamp-4 mt-4 ml-4">“{item.testimonial}”</h1>
              <div className="inline-flex gap-2 mt-6 ml-4">
                <img src={item.image} alt="" className='w-12 h-12 object-cover rounded-full'/>
                <h1 className="text-stone-950 text-opacity-90 text-lg font-Lilita uppercase leading-relaxed">{item.name}<br/><span className="text-stone-950 text-opacity-70 text-xs font-Lato leading-none">• {item.age} Anos</span></h1>     
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
