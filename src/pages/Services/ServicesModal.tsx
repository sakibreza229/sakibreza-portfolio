import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { TbSquareRoundedCheck } from "react-icons/tb";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  overview: string;
  keyFeatures: string[];
}

const ServicesModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  name,
  overview,
  keyFeatures,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className={`fixed inset-0 z-50 items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="relative w-full max-w-screen-sm bg-white p-8 rounded-3xl">
        <h3 className="text-3xl text-typography-title font-bold mb-3 font-secondary">
          {name}
        </h3>
        <p className="mb-4 text-sm">{overview}</p>
        <IoClose
          onClick={onClose}
          className="text-primary-light hover:text-typography-muted transition-colors text-2xl absolute top-4 right-4 cursor-pointer"
        />

        <span className="inline-block mb-2 font-semibold text-lg">Features & Benefits</span>

        <ul className="text-sm space-y-1 list-none">
          {keyFeatures.map((keyFeature, index) => (
            <li key={index} className="flex items-start gap-x-2">
              <TbSquareRoundedCheck className="text-primary flex-shrink-0 mt-1" />
              <span>{keyFeature}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-end gap-x-4 mt-6">
          <button className="btn btn-primary">Get Started</button>
          <button onClick={onClose} className="btn btn-secondary">
            Close
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesModal;
