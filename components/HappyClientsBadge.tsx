import React from 'react'
import Image from 'next/image'
const HappyClientsBadge = () => {
  return (
    <div className="flex items-center  gap-4">
    <div className="flex items-center gap-2">
    {[...Array(5)].map((_, i) => (
      <Image
        src="/star.jpg"
        alt="star"
        width={20}
        height={20}
        key={`star${i}`}
      />
    ))}
  </div>
  <p className="text-sm font-bold text-purple-500">75+ Happy Clients</p>
  </div>
  )
}

export default HappyClientsBadge
