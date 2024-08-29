import React from 'react'
import Logo from './Logo'
import Button from './Button'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='bg-dark pt-4'>
        <div className='container mx-auto px-4'>
           
                <header className='flex justify-between items-center'>
                   <Logo />
                   <Link href="#contact">
                  <Button />
                  </Link>
                </header>
            </div>
        </div>
      
  )
}

export default Navigation
