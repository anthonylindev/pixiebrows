import { getServices } from '@/lib/fs'
import ServiceCard from '@/components/sections/services/ServiceCard'

export const Services = async () => {
  const services = await getServices()

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-light text-[#ba867b] mb-16 text-center">Services</h2>
      <h3 className="text-2xl font-light text-[#ba867b] mb-16 text-center">Call/Text (714) 417-7859 to book!</h3>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  )
}