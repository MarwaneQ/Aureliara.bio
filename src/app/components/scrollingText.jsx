import  {Wheat}  from 'lucide-react';
import React from 'react';

const ScrollingText = () => {
  const skincarePhrases = [
    "Radiant Skin",
    "Glowing Complexion",
    "Natural Beauty",
    "Hydrate & Protect",
    "Revitalize Your Skin",
    "Gentle & Effective",
    "Smooth & Soft",
    "Youthful Glow",
    "Pure & Clean",
    "Skin Confidence",
    "Healthy & Balanced",
    "Restore & Renew",
    "Luxurious",
    "Beauty Rituals",
    "Organic & Sustainable",
    "Pamper Yourself",
    "Skin Wellness"
  ];
  
  return (
    <div className="overflow-hidden whitespace-nowrap w-full h-20 flex items-center bg-secondary">
      <div className="inline-block animate-scroll px-5 py-2 bg-transparent text-primary w-full">
        {skincarePhrases.map((phrase, index) => (
          <span key={index} className="inline-block px-5 py-2">
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
