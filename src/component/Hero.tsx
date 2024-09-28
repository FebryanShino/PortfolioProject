import React from 'react';

export default function Hero() {
  return (
    <div
      style={{
        width: '100%',
        height: '100svh',
        backgroundImage: 'url(/hero.png)',
        backgroundSize: 'cover',
      }}
    >
      <div
        className=" w-full h-full"
        style={{
          background:
            'linear-gradient(180deg, hsla(0,0%,95%, .5), hsla(0,0%,95%, 1))',
          backdropFilter: 'blur(10px)',
        }}
      ></div>
    </div>
  );
}
