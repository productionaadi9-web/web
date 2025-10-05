import BelowHero from '@/components/BelowHero';

import Hero from '@/components/Hero';
import { MovingCards } from '@/components/MovingCards';
import Footer from '@/components/Footer';
import Story from '@/components/Story';

export default function page(){
  return (
    <div className=''>
      <Hero/>
      <BelowHero/>
      <Story/>
      <MovingCards/>

      <Footer/>
    </div>
  )
}