import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-purple-500 text-white py-4">
        <div className="container mx auto px-4">
          <p className=" text-center text-sm">
            &copy; {new Date().getFullYear()} WebWiz Codes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
