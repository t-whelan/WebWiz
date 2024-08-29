import React from "react";
import Image from "next/image";
import HappyClientsBadge from "@/components/HappyClientsBadge";
const ContactUsDetails = () => {
  return (
    <div>
      <Image
        src="/cv-image.jpg"
        alt="antennas"
        width={100}
        height={40}
        className="rounded-full border-2 border-white mb-4"
      />
      <h3 className="mb-2">
        Talk to our <span className="text-purple-500">Programming Expert</span>
      </h3>
      <p className="mb-4">
      Tionne, together with her team, has helped dozens of companies create unique, fast, user-friendly, and converting websites.
      <br />
      <br />

We are open, attentive, and always willing to help. If you have any questions, we are just a call or a meeting away.
      </p>
     
      <HappyClientsBadge />
    </div>
  );
};

export default ContactUsDetails;
