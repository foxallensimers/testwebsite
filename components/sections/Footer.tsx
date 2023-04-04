import React from "react";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="flex justify-center items-center border-b border-gray-300 pb-6">
          <img
            src="http://www.themezaa.com/html/leadgen/demo/restaurant/images/logo.png"
            alt="Logo"
            className="w-[297px] object-contain h-[35px]"
          />
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-6">
          <a className="text-textColor font-light" href="#">Privacy Policy</a>
          <a className="text-textColor font-light" href="#">Terms and Conditions</a>
          <a className="text-textColor font-light" href="#">Legal</a>
          </div>
          <p className="text-textColor font-light">
          © 2023 LeadGen is proudly powered by Matt.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
