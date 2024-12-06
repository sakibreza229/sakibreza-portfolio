"use client";

import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  target: number;
  sign?: string;
  icon?: React.ReactNode;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ target, sign = "", icon, label }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Scroll observer logic
  useEffect(() => {
    const counterElement = counterRef.current;

    const updateCounter = () => {
      const targetNumber = target;
      const speed = 100; // Speed of the counter animation
      const incPerCount = targetNumber / speed;

      setCount((prevCount) => {
        const newCount = Math.ceil(prevCount + incPerCount);
        if (newCount >= targetNumber) {
          return targetNumber; // Stop once the target is reached
        }
        return newCount;
      });

      if (count < targetNumber) {
        setTimeout(updateCounter, 20);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true); // Start counter animation when element comes into view
          updateCounter();
        }
      },
      {
        root: null,
        threshold: 0.4, // Trigger when 40% of the element is in view
      }
    );

    if (counterElement) {
      observer.observe(counterElement);
    }

    // Cleanup the observer when component unmounts
    return () => {
      if (counterElement) {
        observer.unobserve(counterElement);
      }
    };
  }, [count, target, hasStarted]);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-2 text-center lg:text-left px-6 py-2 hover:scale-105 transition-transform rounded-xl cursor-pointer">
      <span className="text-4xl text-primary-light">{icon}</span>
      <div>
        <h3
          className="text-3xl leading-none font-semibold text-primary counter-value"
          ref={counterRef}
        >
          {count}
          {sign}
        </h3>
        <span className="text-sm font-medium text-primary-dark">{label}</span>
      </div>
    </div>
  );
};

export default Counter;
