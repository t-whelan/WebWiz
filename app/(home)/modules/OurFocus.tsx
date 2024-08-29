import React from "react";
import BrandingImg from '@/public/branding.png';
import DirectionsImg from '@/public/directions.png';
import ConvertImg from '@/public/convert.png'
import SeoImg from '@/public/seo.png';
import SpeedometerImg from '@/public/speedometer.png'
import ResponsiveImg from '@/public/responsive.png'
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
const features = [
  { image: BrandingImg,
    title: "Unique Design",
    description: "Our professional UX/UI design expertise will create a unique design tailored specifically to your needs and niche."
  },
  { image: SpeedometerImg,
    title: "Performance",
    description: "Website performance is one of the key SEO indicators. This is because a fast website ensures a better user experience."
  },
  { image: DirectionsImg,
    title: "Flexibility",
    description: "If you have used a template-based website or a website builder, you probably encountered the phenomenon of it's impossible to do what I want. We code from scratch, so we can offer a more flexible solution that meets your needs."
  },
  { image: SeoImg,
    title: "SEO Optimization",
    description: "Website SEO optimization is one of the most important things to do if you want your website to be found in Google search. We ensure that your website is SEO optimized and meets the main SEO requirements."
  },
  { image: ResponsiveImg,
    title: "Responsive design",
    description: "In the modern world, it is important that your website looks good on all devices, whether it is a desktop, tablet, or smartphone. We create websites that are responsive and adapt to any screen size."
  },
  { image: ConvertImg,
    title: "Conversion",
    description: "The main goal of any website is to convert visitors into customers. We create websites that are not only beautiful but also convert visitors into customers."
  },
];

const OurFocus = () => {
  return (
    <section className="bg-indigo-200 py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-6xl text-center mb-8">
          <h2 className="mb-4">
            Our <span className="text-purple-500">Focus</span>
          </h2>
          <p>We focus on building websites that help you achieve your goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={feature.description} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="inline-block p-4 bg-gradient-to-r from-purple-400 to-[#61b8fa] rounded-lg">
                {/* Use Next.js Image component for optimized images */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p dangerouslySetInnerHTML={{__html: feature.description}}></p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Link href ="#contact">
          <Button />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurFocus;
