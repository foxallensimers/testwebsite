import React, { useEffect, useState } from 'react'


// const navItems = ["Home", "About", "SERVICES", "MENU", "GALLERY", "CHEFS", "BLOG", "CONTACT"];
const navItems : string[] = [];

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
    <header  className={`border-b z-[10000] border-gray-400 border-opacity-20 sticky top-0 ${navbar && `bg-black transition-all duration-300 ease-out`}`}>
      <div className="container">
        <div className={`flex justify-between items-center transition-all duration-300 ease-out ${navbar ? `py-4` : `py-6`}`}>
          <img src="http://www.themezaa.com/html/leadgen/demo/restaurant/images/logo-white.png" alt="Logo" className='w-[297px] object-contain h-[35px]' />
          <ul className="flex gap-x-6 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className='text-white font-light uppercase text-[12px]' href="#">{item}</a>
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