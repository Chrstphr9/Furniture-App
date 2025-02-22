import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import { newInStore } from '../data';

const NewItemsSlider = () => {
  return (
    <Swiper>
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide className='max-w-[265px] w-full flex-shrink-0' key={index}>
          <div className="rounded-lg overflow-hidden">
           <img src={product.image.type} alt='' className="w-full h-auto object-cover"  />
           <div>{product.name}</div>
          </div>
        </SwiperSlide>
        );
})}
    </Swiper>
  );
  
};

export default NewItemsSlider;
