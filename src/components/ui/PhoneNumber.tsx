'use-client'

export const PhoneNumber = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    isMobile ? (
      <a href="tel:7144177859">(714) 417-7859</a>
    ) : (
      <span>(714) 417-7859</span>
    )
  )
}