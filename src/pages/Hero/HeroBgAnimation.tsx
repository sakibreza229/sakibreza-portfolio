import React from 'react'

const HeroBgAnimation = () => {
    const squares = [
        { left: 25, size: 80, animationDelay: 0, animationDuration: 'unset' },
        { left: 10, size: 20, animationDelay: 2, animationDuration: 12 },
        { left: 70, size: 20, animationDelay: 4, animationDuration: 'unset' },
        { left: 40, size: 60, animationDelay: 0, animationDuration: 18 },
        { left: 65, size: 20, animationDelay: 0, animationDuration: 'unset' },
        { left: 75, size: 110, animationDelay: 3, animationDuration: 'unset' },
        { left: 35, size: 150, animationDelay: 7, animationDuration: 'unset' },
        { left: 50, size: 25, animationDelay: 15, animationDuration: 45 },
        { left: 20, size: 15, animationDelay: 2, animationDuration: 35 },
        { left: 85, size: 150, animationDelay: 0, animationDuration: 11 },
      ];
    
  return (
    <div className="squares absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {squares.map((square, index) => (
          <span
            key={index}
            className="block absolute -bottom-36 w-20 h-20 bg-[rgba(52,46,75,0.5)] animate-rotate-up"
            style={{
                left: `${square.left}%`,
                width: `${square.size}px`,
                height: `${square.size}px`,
                animationDelay: `${square.animationDelay}s`,
                animationDuration: `${square.animationDuration}s`,
              }}
          ></span>
        ))}
      </div>
  )
}

export default HeroBgAnimation