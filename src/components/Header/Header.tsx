"use client"
import React, {useEffect} from 'react'
import NavBar from './NavBar'
import Image from 'next/image'

const Header = () => {
  useEffect(() => {
    const header = document.querySelector("#header");

    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full px-2 z-50 flex items-center transition-all duration-300 ease-linear"
    id="header">
      <nav className="nav text-typography-title lg:text-typography-light flex justify-between items-center mx-auto max-w-screen-xl xl:px-8 w-full transition-all duration-200 ease-linear">
        <div className="flex items-center gap-x-1 nav-logo">
          <div className="w-6 h-6 sm:w-8 sm:h-8 outline-2 outline outline-primary-light hover:outline-typography-muted rounded-full overflow-hidden">
          <Image src="/avatar.webp" alt="Avatar" layout="responsive" width={100} height={100} />
          </div>
          <a href="#" className="font-bold text-xl sm:text-2xl font-secondary text-primary-light hover:text-primary-hover transition-colors">
            Sakib Reza<span className="text-primary">.</span>
          </a>
        </div>

        <div className="flex items-center gap-x-6">
          <NavBar />
          <a
            href="#contact"
          >
            Say Hello!
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header