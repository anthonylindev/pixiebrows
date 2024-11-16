import Image from 'next/image';

export const StaticHeroImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="Eyebrow background image"
      fill
      style={{ objectFit: 'cover' }}
      priority
      sizes="100vw, 100vh"
    />
  );
};