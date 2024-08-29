import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import ImageIsolated from "@/components/ImageIsolated";
import HappyClientsBadge from "@/components/HappyClientsBadge";
export const Hero = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-4">
          <div>
           <HappyClientsBadge />
            <h1 className="mb-2 mt-4">
              We build <span className="text-purple-400">professional</span>{" "}
              Websites
            </h1>
            <p className="text-xl mb-4">
              Goal oriented websites.<br></br>
              <b>Sell more. get more leads</b> <br></br>
              Or present yourself to the whole world as you only imagined until
              now. We love when our clients succeed.
            </p>
            <Link href='#contact'>
            <Button />
            </Link>
          </div>
          <div>
            <ImageIsolated src="/mockup.jpg" alt="mockup" />
          </div>
        </div>
      </div>
    </div>
    
  );
};
