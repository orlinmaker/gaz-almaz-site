"use client"

import Image from "next/image"

interface DiamondLogoProps {
  size?: number
  className?: string
}

export function DiamondLogo({ size = 140, className = "" }: DiamondLogoProps) {
  return (
    <Image
      src="/logo/logo_diamond.png"  // PNG без фона
      alt="Газ Алмаз"
      width={size}
      height={size}
      priority
      className={`object-contain ${className}`}
    />
  )
}
