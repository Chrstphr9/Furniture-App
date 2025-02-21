import React from 'react';
import Hero from './components/Hero'
import Features from './components/Features'


// import components

const App = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white'>
    <Hero />
    <Features />
  </div>
  );
};

export default App;
