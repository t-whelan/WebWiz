import React from "react";

const OurProcess = () => {
  return (
    <section className="bg-white py-8 md:py16 text-white">
    <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="mb-8 text-center">
       <span className="text-black">Our</span>  <span className="text-purple-500">Process</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div key={step.step} className="p-6 rounded-lg bg-purple-400 ">
            <h5 className="bg-purple-400">{step.step}</h5>
            <h3 className=" mb-4">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};


const steps = [
  {
    step: "01 STEP",
    title: "Consultation",
    description:
      "Once you submitted your project request ,Web design expertise will contact you to schedule a video call. During this 1:1 consultation, we will focus on understanding your vision, goals, and requirements.",
  },
  {
    step: "02 STEP",
    title: "Planning & Strategy",
    description:
      "Our team will conduct a thorough analysis of your requirements and create a detailed plan and strategy. This will include wireframes, project timelines, and a comprehensive approach to achieve your desired outcomes",
  },
  {
    step: "03 STEP",
    title: "Design & Development",
    description:
      "Following the planning phase, our designers and developers will start working on your project. We will create visually appealing designs and develop a fully functional website tailored to your specifications.",
  },
  {
    step: "04 STEP",
    title: "Launch & Support",
    description:
      "After rigorous testing and your final approval, we will launch your website. We also provide ongoing support and maintenance to ensure your website remains up-to-date, secure, and running smoothly.",
  },
];

export default OurProcess;
