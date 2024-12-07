"use client"
import React, {useEffect} from 'react'
import NavBar from './NavBar'
import Image from 'next/image'
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import Link from 'next/link';
import { Avatar, Badge } from 'antd';

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
        <div className="flex items-center gap-x-2 nav-logo">
        <Badge dot color="green">
          <Avatar size={"large"} src={<Image src="/avatar.webp" alt="Avatar" layout="responsive" width={32} height={32} />} />
        </Badge>  
          <a href="#" className="font-bold text-xl sm:text-2xl font-secondary text-primary-light hover:text-primary-hover transition-colors">
            Sakib Reza<span className="text-primary">.</span>
          </a>
        </div>

        <div className="flex items-center gap-x-6">
          <NavBar />
          <button className='btn btn-secondary'>
            <Link href="#contact">Say Hi</Link>
            <PiPaperPlaneTiltFill />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header