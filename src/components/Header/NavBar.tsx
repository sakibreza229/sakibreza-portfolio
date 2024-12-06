"use client"
import React, { useEffect } from "react";
import NavItem from "./NavItem";
import { TbHome, TbUserHexagon, TbBriefcase, TbFolder, TbFileText } from "react-icons/tb";
import { PiMonitorPlay } from "react-icons/pi";

interface SectionElement extends HTMLElement {
  id: string;
}

const NavBar: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const section = current as SectionElement; // Typecasting to handle `id`
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(`.nav__item a[href*=${sectionId}]`)?.classList.add("active-link");
        } else {
          document.querySelector(`.nav__item a[href*=${sectionId}]`)?.classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav-menu fixed lg:static bottom-0 left-0 bg-white lg:bg-transparent w-full lg:w-auto h-16 lg:h-auto px-2 rounded-t-3xl lg:rounded-t-none content-center shadow-2xl lg:shadow-none" id="nav-menu">
      <ul className="flex justify-around items-center sm:justify-center sm:gap-x-8 md:gap-x-6">
        <NavItem sectionId="#home" navName="Home" navIcon={<TbHome />} />
        <NavItem sectionId="#about" navName="About" navIcon={<TbUserHexagon />} />
        <NavItem sectionId="#services" navName="Services" navIcon={<TbBriefcase />} />
        <NavItem sectionId="#portfolio" navName="Portfolio" navIcon={<TbFolder />} />
        <NavItem sectionId="#courses" navName="Courses" navIcon={<PiMonitorPlay />} />
        <NavItem sectionId="#blogs" navName="Blogs" navIcon={<TbFileText />} />
      </ul>
    </div>
  );
};

export default NavBar;
