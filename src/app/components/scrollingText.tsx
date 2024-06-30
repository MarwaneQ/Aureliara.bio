import React from 'react';

const ScrollingText: React.FC = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full h-20 flex items-center bg-secondary">
      <div className="inline-block animate-scroll px-5 py-2 bg-transparent text-primary w-full">
        <div>
          <h1>icon</h1>
          <h3>Healthy</h3>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
