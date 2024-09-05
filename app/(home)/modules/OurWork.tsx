import React from "react";
import InfesImg from "@/public/infes.png";
import StatybosImg from "@/public/statybos.png";
import ShawnImg from "@/public/shawn.jpg";
import RafaelImg from "@/public/john.jpg";
import HomeMakersImg from "@/public/homemakers.png";
import PetsureImg from "@/public/petsure.png";
import QuizAppImg from "@/public/quizapp.png";
import DeliciousDelightsImg from "@/public/deliciousdelights.png";
import StaminaFitnessImg from "@/public/staminafitness.png";
import ImageIsolated from "@/components/ImageIsolated";
import Button from "@/components/Button";

const OurWork = () => {
  const projects = [
    {
      title: "The infes team decided to renew",
      image: InfesImg,
      link: "https://infes.lt",
      stats: [
        { value: "+218%", description: "Qualified inquiries" },
        { value: "+22%", description: "Time spent on the website" },
        { value: "+81%", description: "Pages visited per session" },
      ],
      review: {
        name: "John",
        image: ShawnImg,
        position: "CEO, Infes",
        text: "The WizGenie Work and Ethic is incredible. They are professional and very easy to work with. They took our ideas and brought them to life. I highly recommend them.",
      },
    },
    {
      title: "The uniqueness of Aronvera",
      image: StatybosImg,
      link: "https://aronvera.lt",
      stats: [
        { value: "+128%", description: "Qualified inquiries" },
        { value: "+44%", description: "Time Spent on the website" },
        { value: "+81%", description: "Pages visited per session" },
      ],
      review: {
        name: "Shawn",
        image: RafaelImg,
        position: "CEO, Aronvera",
        text: "We constantly did not find time for our website. Thankfully with WizGenie, it required minimal effort from our side. Highly Recommend.",
      },
    },
    {
      title: "Home Makers Furniture",
      image: HomeMakersImg,
      link: "https://homemakers.com",
      stats: [
        { value: "+120%", description: "Product sales" },
        { value: "+35%", description: "Customer retention" },
        { value: "+60%", description: "Website traffic" },
      ],
    },
    {
      title: "Petsure Insurance",
      image: PetsureImg,
      link: "https://petsure.com",
      stats: [
        { value: "+150%", description: "Policy holders" },
        { value: "+25%", description: "Customer satisfaction" },
        { value: "+80%", description: "Claims processed" },
      ],
    },
    {
      title: "A JavaScript Quiz Web App",
      image: QuizAppImg,
      link: "https://t-whelan.github.io/javascript-quiz/",
      stats: [
        { value: "10,000+", description: "Quiz completions" },
        { value: "+200%", description: "User registrations" },
        { value: "+150%", description: "Quiz topics covered" },
      ],
    },
    {
      title: "Delicious Delights Bakery",
      image: DeliciousDelightsImg,
      link: "https://delicious-delights-bakery.netlify.app",
      stats: [
        { value: "+180%", description: "Daily pastry sales" },
        { value: "+40%", description: "Customer reviews" },
        { value: "+90%", description: "New menu items" },
      ],
    },
    {
      title: "Stamina Fitness",
      image: StaminaFitnessImg,
      link: "https://stamina-fitness.netlify.app/",
      stats: [
        { value: "+250%", description: "Gym memberships" },
        { value: "+50%", description: "Fitness class attendance" },
        { value: "+100%", description: "Personal training sessions" },
      ],
    },
  ];

  return (
    <>
      <section className="bg-indigo-200 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-8">
            <span>Our</span>{" "}
            <span className="text-purple-500 text-center mb-8">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="mb-4 text-xl font-semibold">{p.title}</h3>
                <div className="mb-4">
                  <div className="border-8 rounded-lg border-purple-500">
                    <ImageIsolated
                      src={p.image}
                      alt={`project-${index}`}
                    />
                  </div>
                </div>
                <div className="flex grid-cols-2 gap-2">
                  {p.stats.map((s, i) => (
                    <div key={i} className="text-center">
                      <h3 className="text-purple-500 mb-2">{s.value}</h3>
                      <p className="font-bold">{s.description}</p>
                    </div>
                  ))}
                </div>
                {p.review && (
                  <div className="mt-8 flex items-center gap-4 justify-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-white">
                      <ImageIsolated
                        src={p.review.image}
                        alt={`review person ${index}`}
                      />
                    </div>
                    <div>
                      <h5 className="mb-1">{p.review.name}</h5>
                      <p className="text-xl font-bold">{p.review.position}</p>
                      <p className="italic">{p.review.text}</p>
                    </div>
                  </div>
                )}
                <div className="mt-4 text-center">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 underline hover:text-purple-700"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Button />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
