import React from 'react'
import ContactUsDetails from './Components/ContactUsDetails'
import ContactUsForm from './Components/ContactUsForm'
const ContactUs = () => {
  return (
   <section id="contact" className='bg-dark py-8 md:py-16 text-black'>
    <div className ='container mx-auto px-4 max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
<ContactUsDetails />
<ContactUsForm />
        </div>
    </div>
   </section>
  )
}

export default ContactUs