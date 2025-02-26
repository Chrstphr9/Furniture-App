import React from 'react';
import { Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import '../slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from '../data';
import { HiPlus } from 'react-icons/hi'

const ProductSlider = () => {

  const { pages } = products

  return (
    <Swiper modules={[Pagination, Navigation]} pagination={{clickable:true}}>
      {pages.map((page, index)=> {
        return <SwiperSlide key={index}>
          <div>
            {page.productList.map((product, index) => {
              const { image, name, price, oldPrice } =product;
              return <div>
                <div>
                  <img src={image.type} alt="" />
                  <div>
                    <HiPlus className='text-xl text-purple-950' />
                  </div>
                </div>
                <div>{name}</div>
                <div>
                  <div>${price}</div>
                  <div>${oldPrice}</div>
                  <div></div>
                </div>
              </div>
            })}
          </div>
        </SwiperSlide>
      })}
    </Swiper>
  )
};

export default ProductSlider;
