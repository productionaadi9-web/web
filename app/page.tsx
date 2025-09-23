import BelowHero from '@/components/BelowHero';

import Hero from '@/components/Hero';
import { MovingCards } from '@/components/MovingCards';
import Footer from '@/components/Footer';

export default function page(){
  return (
    <div className=''>
      <Hero/>
      <BelowHero/>
      <MovingCards/>
      <Footer/>
    </div>
  )
}