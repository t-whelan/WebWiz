import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 cursor-pointer">
        <Image
          src="/favicon-32x32.png"
          alt="logo"
          width={40}
          height={40}
          className="rounded"
        />
        <span className="font-bold text-purple-500 text-xl">WizGenie</span>
      </div>
    </Link>
  );
};

export default Logo;
