'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function PlatformImage({ src, alt, emoji, width, height, className }) {
  const [imageSrc, setImageSrc] = useState(src)
  const [imageError, setImageError] = useState(false)

  const handleError = () => {
    setImageError(true)
  }

  if (imageError || !src) {
    return <span className={className}>{emoji}</span>
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
    />
  )
}
