import { BsFillGrid1X2Fill } from "react-icons/bs";
import { ImAndroid } from "react-icons/im";
import { FaPenRuler } from "react-icons/fa6";

export const services = [
  {
    name: "Website Development",
    tagline: "Crafting responsive & high-performance websites.",
    iconComponent: <BsFillGrid1X2Fill />,
    overview:
      "We offer comprehensive website development services, taking your project from concept to deployment. Our focus is on delivering fast-loading, responsive, and user-friendly websites that reflect your brand's identity.",
    keyFeatures: [
      "Custom website design and development",
      "Mobile, tablet, and desktop responsive design",
      "Performance optimization and SEO integration",
      "E-commerce solutions and online store setup",
      "Content Management System (CMS) implementation",
      "Continuous maintenance and support",
    ],
  },
  {
    name: "Application Development",
    tagline: "Delivering seamless and scalable apps for desktop and mobile.",
    iconComponent: <ImAndroid />,
    overview:
      "Our application development services provide custom, scalable solutions for mobile and desktop platforms. We build high-performance apps tailored to meet your business needs.",
    keyFeatures: [
      "Cross-platform development for iOS and Android",
      "Native mobile app development",
      "Custom desktop application development",
      "API integration and backend support",
      "Intuitive UI/UX design for an enhanced user experience",
      "Comprehensive app testing and quality assurance",
    ],
  },
  {
    name: "UI/UX Design Services",
    tagline: "Designing intuitive and engaging digital experiences.",
    iconComponent: <FaPenRuler />,
    overview:
      "Our UI/UX design services prioritize user-centric designs, creating visually appealing and functional experiences that enhance user satisfaction and engagement.",
    keyFeatures: [
      "User research and persona creation",
      "Wireframing and interactive prototyping",
      "Visual and interaction design optimization",
      "Comprehensive usability testing and iteration",
      "Responsive designs for all device types",
      "Design system development and branding integration",
    ],
  },
];
