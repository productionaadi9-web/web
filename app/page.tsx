import BelowHero from '@/components/BelowHero';

import Hero from '@/components/Hero';
import { MovingCards } from '@/components/MovingCards';
import Footer from '@/components/Footer';
import Story from '@/components/Story';
import { Metadata } from 'next'
;
export const metadata: Metadata = {
  title: "Aadi Production",
  description: "Home grown studio in MP, India — where creativity meets passion.",

  openGraph: {
    title: "Aadi Production",
    description: "What started as a passion for creating Instagram reels has grown into a full-blown studio in MP, India.",
    url: "https://aadiproduction.vercel.app/", 
    siteName: "Aadi Production",
    images: [
      {
        url: "https://res.cloudinary.com/duax5xong/image/upload/v1759692253/Screenshot_2025-10-06_at_12.53.51_AM_ofzqpt.png", 
        width: 1200,
        height: 630,
        alt: "Aadi Production Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aadi Production",
    description: "Home grown studio in MP, India — where creativity meets passion.",
    images: [
      "https://res.cloudinary.com/duax5xong/image/upload/v1759692253/Screenshot_2025-10-06_at_12.53.51_AM_ofzqpt.png", 
    ],
  },
};
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