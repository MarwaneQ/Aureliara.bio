import React from 'react';

const ScrollDownButton: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = (e.currentTarget.getAttribute('href') as string).slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="products" className="relative flex flex-col justify-end w-full items-center py-16">
      <a href="#Products" onClick={handleClick} className="relative pt-14 block">
        <span className="absolute top-0 left-1/2 w-7 h-12 -ml-3 border-2 border-primary rounded-full box-border">
          <span className="absolute top-2.5 left-1/2 w-1.5 h-1.5 -ml-0.5 bg-primary rounded-full box-border animate-scroll-dot"></span>
        </span>
      </a>
    </section>
  );
};

export default ScrollDownButton;
