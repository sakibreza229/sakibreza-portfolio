import React from "react";

interface NavItemProps {
  sectionId: string;
  navName: string;
  navIcon: React.ReactNode; // Use React.ReactNode for the icon
}

const NavItem: React.FC<NavItemProps> = ({ sectionId, navName, navIcon }) => {
  return (
    <div className="nav__item relative">
      <a
        href={sectionId}
        className="flex flex-col items-center gap-y-1 font-medium hover:text-primary"
      >
        <span className="text-xl lg:hidden">{navIcon}</span>
        <span className="hidden xs:block text-xs lg:text-base">{navName}</span>
      </a>
    </div>
  );
};

export default NavItem;
