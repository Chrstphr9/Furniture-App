import React from 'react';
import {features} from '../data'

const FeaturesSecond = () => {

  const {title, subtitle, image} = features.feature2;

  return (
    <section className='section'>
       <div className="container mx-auto">
         <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
          {/* text */}
          <div className='flex-1 flex flex-col justify-end lg:ml-[40px]'>
            <h2 className='title'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
         </div>
          {/* image */}
          <div className='flex-1 xl:ml-[30px]'>
          <img src={image.type} alt="" />
          </div>

          
       </div>
       </div>
    </section>
  )
};

export default FeaturesSecond;
