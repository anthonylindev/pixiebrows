import ServiceCardContent from './ServiceCardContent'
import { Service } from '@/types'
import Image from 'next/image'

export default function ServiceCard(service: Service) {
  const renderImage = () => {
    return (
      <Image
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
        style={{ objectFit: "cover" }}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    )
  }

  return (
    <ServiceCardContent
      {...service}
      renderImage={renderImage()}
    />
  )
}