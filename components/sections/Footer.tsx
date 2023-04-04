import React from "react";
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="flex justify-center items-center border-b border-gray-300 pb-6">
          <img
            src={Logo.src}
            alt="Logo"
            className="w-[297px] object-contain"
          />
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-6">
          <a className="text-textColor font-light" href="#">Privacy Policy</a>
          <a className="text-textColor font-light" href="#">Terms and Conditions</a>
          <a className="text-textColor font-light" href="#">Legal</a>
          </div>
          <p className="text-textColor font-light">
          © 2023 Sunbeam is proudly powered by Matt.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
