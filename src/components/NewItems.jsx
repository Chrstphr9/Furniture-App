import React from 'react';
import {newInStore} from '../data'
import NewItemsSlider from './NewItemsSlider'

const NewItems = () => {
  // destructure newInStore
  const {title, subtitle, link, icon} = newInStore;

  return (
  <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
            <div className='flex md:flex-col items-baseline gap-x-6
            mb-6 lg:mb-0'>
              <h2 className='title max-w-[245px] lg:mt-[30px]
              lg:mb-[90px] xl:ml-[30px]'>{title}</h2>
              <p>{subtitle}</p>
              <div>
                <a href="#">{link}</a>
              </div>
            </div>
            <NewItemsSlider />
      </div>
      </div>
  </section>
  )
};

export default NewItems;
