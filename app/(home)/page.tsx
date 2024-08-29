import Image from "next/image";
import { Hero } from "./modules/Hero";
import OurFocus from "./modules/OurFocus";
import OurWork from "./modules/OurWork";
import FAQ from "./modules/FAQ";
import ContactUs from "./modules/ContactUs/ContactUs";
import OurProcess from "./modules/OurProcess";
export default function Home() {
  return (
   <>
   <Hero />
   <OurFocus />
   <OurWork />
   <FAQ />
   <ContactUs />
   <OurProcess />
   </> 
     
  );
}
