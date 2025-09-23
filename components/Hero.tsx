import  Header  from '@/components/Header';
import { poppins } from '@/fonts/poppins';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Connect from '@/components/connect';
export default function Hero() {
  return (
    <div className=''>
    <div className="min-h-screen bg-custom-gradient relative overflow-hidden">     

      {/* Black gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0.9) 100%)'
        }}
      />
      {/* Navigation */}
      <Header/>      
      {/* Main Content */}
      
      <div className="flex flex-col lg:flex-row h-full items-center justify-between px-4 sm:px-6 lg:px-8 py-8 lg:py-10 relative z-10 gap-8 lg:gap-0">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className={`${poppins.className} text-2xl  sm:text-3xl lg:text-4xl font-bold text-black leading-relaxed mb-6 lg:mb-8`}>
            <div className="flex flex-col justify-start lg:items-baseline lg:gap-0">
              <span>We are</span><span>dedicated to capturing the </span><span>beauty</span><span>emotion</span><span>and magic of Your life's most </span><span>important moment.</span><span className='text-white'>And we Are</span><span className='text-white'>One Click Away!</span>
            </div>
          </h1>
      

        
        <Modal>
        <ModalTrigger className="bg-black text-white flex justify-center group/modal-btn mx-auto lg:mx-0">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Connect with us 
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          📸
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-100 font-bold text-center mb-8">
            
              <span className="px-1 py-0.5 rounded-md bg-neutral-800 border-neutral-700 border">
              Reach us on social media
              </span>{" "}
              now! 
            </h4>
            <Connect/>
          </ModalContent>
         
        </ModalBody>
      </Modal>
      

        </div>

        {/* Rest of your floating elements code remains the same */}
        <div className="relative w-[300px]  h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex-shrink-0">
          {/* Central Circle with 20k+ */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-2 border-purple-300 flex flex-col items-center justify-center">
            <span className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">20k+</span>
            <span className="text-white text-sm sm:text-base lg:text-lg">Specialists</span>
          </div>

          {/* Outer Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-purple-300"></div>

          {/* Profile Avatars */}
          <div className="absolute top-2 right-8 sm:top-4 sm:right-12 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-300 border-2 sm:border-4 border-white overflow-hidden">
            <img src="/assets/hero-bride.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute top-12 left-4 sm:top-16 sm:left-6 lg:top-20 lg:left-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-300 border-2 sm:border-4 border-white overflow-hidden">
            <img src="/assets/hero-ceremony.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>

          <div className="absolute top-20 right-2 sm:top-24 sm:right-3 lg:top-32 lg:right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-300 border-2 sm:border-4 border-white overflow-hidden">
            <img src="/assets/hero-couple.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>

          <div className="absolute bottom-20 left-6 sm:bottom-24 sm:left-8 lg:bottom-32 lg:left-12 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-300 border-2 sm:border-4 border-white overflow-hidden">
            <img src="/assets/hero-bride.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>

          <div className="absolute bottom-6 right-12 sm:bottom-8 sm:right-16 lg:bottom-12 lg:right-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gray-300 border-2 sm:border-4 border-white overflow-hidden">
            <img src="/assets/hero-bride.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Tool Icons */}
          <div className="absolute top-10 left-12 sm:top-12 sm:left-16 lg:top-16 lg:left-20 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-black rounded-lg flex items-center justify-center">
            <img src="/assets/hero-bride.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>

          <div className="absolute bottom-10 left-2 sm:bottom-12 sm:left-3 lg:bottom-16 lg:left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-black rounded-lg flex items-center justify-center">
            <img src="/assets/hero-bride.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>

          <div className="absolute right-4 top-1/2 sm:right-6 lg:right-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black rounded-lg flex items-center justify-center">
            <img src="/assets/hero-bride.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>

          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-black rounded-lg flex items-center justify-center">
            <img src="/assets/hero-bride.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
      </div>
      
      </div>

  );
}