import Accordion from '@/components/Accordion/Accordion';
import React from 'react'

const FAQ = () => {
  return (
  <section className='bg-gray-200 py-8 md:py-16'>
   <div className='container mx-auto px-4 max-w-6xl'>
    <div className='text-center mb-8'>
        <h2 className='mb-4'>FAQ</h2>
        <p>Here are some common questions and answers about our services.</p>
    </div>
   </div>
   <div className='px-6'> <Accordion questions = {questions}/>
   </div>
  
  </section>
  )
};

const questions =[
{
    question:"How much will the website cost?",
    answer:"The cost varies depending on the complexity and features required. We'll provide a detailed quote after discussing your specific needs."
},
{
    question:"How long will it take to build the website?",
    answer:"Typically, a basic website takes 2-3 weeks. More complex projects may take longer. We'll provide a timeline after scoping your project."
},
{
    question:"Will the website be mobile-friendly?",
    answer:"Yes, all our websites are responsive and designed to work well on mobile devices, tablets, and desktops."
},
{
    question:"Can I update the website content myself?",
    answer:"Yes, we'll set up a user-friendly content management system (CMS) that allows you to easily update text and images."
},
{
    question:"Do you provide hosting services?",
    answer:"We offer hosting options, but you're also free to use your own hosting provider if preferred."
},
{
    question:"Will my website be search engine optimized (SEO)?",
    answer:"We implement basic on-page SEO best practices. For more comprehensive SEO services, we offer additional packages."
},
{
    question:"Can you integrate social media into my website?",
    answer:"Yes, we can integrate social media feeds and sharing buttons to enhance your site's connectivity."
},
{
    question:"What's included in the website maintenance package?",
    answer:"Our maintenance package typically includes regular updates, security checks, backups, and minor content changes."
},
{
    question:"How secure will my website be?",
    answer:"We implement standard security measures including SSL certificates and regular security updates to protect your site."
},
{
    question:"Do you offer e-commerce functionality?",
    answer:"Yes, we can integrate e-commerce solutions to allow you to sell products or services directly through your website."
},
]

export default FAQ
