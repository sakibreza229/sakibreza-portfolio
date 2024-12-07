"use client";
import React, { useState } from 'react';
import { HeadingPrimary } from '@/components/Headings';
import { services } from '@/data/ServicesData';
import ServicesModal from './ServicesModal';
import { FaArrowRight } from "react-icons/fa6";

// Define the type for a single service
interface Service {
  name: string;
  iconComponent: React.ReactNode;
  tagline: string;
  overview: string;
  keyFeatures: string[];
}

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 
  const [modalName, setModalName] = useState<string>(''); 
  const [modalOverview, setModalOverview] = useState<string>(''); 
  const [modalKeyFeatures, setModalKeyFeatures] = useState<string[]>([]); 

  // Function to open the modal and set its content
  const openModal = (name: string, overview: string, keyFeatures: string[]): void => {
    setModalName(name);
    setModalOverview(overview);
    setModalKeyFeatures(keyFeatures);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = (): void => setIsModalOpen(false);  

  return (
    <section id="services" className="section-container">
      <HeadingPrimary
        title="Services"
        subtitle="What I Offer"
        context={
          <div className="hidden md:block">
            <button className="btn btn-primary">View All Services</button>
          </div>
        }
      />
      <div className="grid md:grid-cols-3 gap-5 md:gap-8">
        {services.map((service: Service, index: number) => (
          <div
            key={service.name}
            className="relative bg-white rounded-3xl px-8 py-12 z-0 overflow-hidden group shadow-[0px_0px_15px_rgba(0,0,0,0.09)] transition-colors ease-linear duration-[300] cursor-help"
          >
            <div className="flex flex-col items-center text-center group-hover:scale-110 transition-transform">
              <span className="text-7xl mb-6 text-primary group-hover:text-white">
                {service.iconComponent}
              </span>
              <h3 className="font-semibold text-xl text-primary-dark group-hover:text-typography-light">{service.name}</h3>
              <p className="text-sm text-typography-muted group-hover:text-typography-light my-3">
                {service.tagline}
              </p>
              <button 
                onClick={() => openModal(service.name, service.overview, service.keyFeatures)} 
                className="btn-arrow group-hover:text-typography-light"
              >
                See More <FaArrowRight className="arrow" />
              </button>
            </div>
            <div className="absolute z-[-1] -top-10 -right-10 w-12 h-12 bg-primary rounded-full scale-100 transition-transform ease-linear duration-300 group-hover:scale-[25]">{index+1}</div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm font-medium">
        Looking for a custom job?{' '}
        <a href="#contact" className="text-tertiary hover:underline">
          Click here
        </a>{' '}
        to contact me! 👋
      </p>

      <ServicesModal
        isOpen={isModalOpen}
        onClose={closeModal}
        name={modalName}
        overview={modalOverview}
        keyFeatures={modalKeyFeatures}
      />
    </section>
  );
};

export default Services;
