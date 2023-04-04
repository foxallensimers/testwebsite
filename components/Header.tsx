import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'

const navItems = ["Home", "About", "SERVICES", "MENU", "GALLERY", "CHEFS", "BLOG", "CONTACT"];
// const navItems : string[] = [];

const Header = () => {

  const [navbar, setNavbar] = useState<boolean>(false)

  function changeBackground(){
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <header  className={`border-b z-[10000] border-gray-400 border-opacity-20 sticky top-0 ${navbar ? `bg-darkColor bg-opacity-100 transition-all duration-300 ease-out` : `bg-darkColor bg-opacity-80`}`}>
      <div className="container">
        <div className={`flex justify-between items-center transition-all duration-300 ease-out py-2`}>
          <img src={Logo.src} alt="Logo" className='w-[297px] object-contain h-[80px] ' />
          <ul className="flex gap-x-6 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className={`${navbar ? `text-black`: `text-white`} font-light uppercase text-[14px] tracking-widest transition-all duration-300 ease-out `} href="#">{item}</a>
              </li>
            ))}
            {/* <button className='px-4 py-1 bg-primary text-white rounded-md transition-all duration-300 ease-out hover:bg-opacity-50'>
              Book now
            </button> */}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header