import React from 'react'

export default function Container({text}: {text: string}) {
  return (
    <div className={`flex items-center justify-center py-14 bg-white ` }>
      <h1 className="lg:text-6xl md:text-5xl text-4xl text-primary">
        {text}
      </h1>
    </div>
  );
}
