import Image from 'next/image'
import ScrollButton from '@/components/ui/ScrollButton'

export const Hero = () => {
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="absolute inset-0 overflow-hidden">
        <Image
            src="/images/gallery/brow1.jpg"
            alt="Beautiful eyebrows"
            fill
            style={{objectFit:"cover"}}
            className="opacity-40"
            priority
            sizes="100vw, 100vh"
          />
      </div>
      <div className="flex flex-col items-center justify-center h-100">
        <Image
          src="/images/logo-lg.png"
          alt="Pixie Brows"
          width={1775}
          height={802}
          className="w-11/12 md:w-full max-w-2xl mx-auto animate-scale-in opacity-100 z-10"
          priority
          sizes="100vh, 100vw"
        />
          <ScrollButton />  
      </div>
    </div>
  )
}