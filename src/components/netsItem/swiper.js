import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useMediaQuery from '@mui/material/useMediaQuery';


export default () => {

    const matches = useMediaQuery('(min-width:950px)');

    return (
        <>
            <Swiper
                slidesPerView={matches ? 5 : 1}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}

                modules={[Navigation]}
                className="mySwiper"
                style={{ height: '600px' }}
            >
                <SwiperSlide>
                    <img src='/images/slide1.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/slide2.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/slide3.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/slide4.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/slide5.png' />
                </SwiperSlide>

                <img src='/images/swipeB1.png' className='swiper-button-next'
                    style={{
                        left: 'auto', right: '10%', width: { md: '4%', xs: '15%' }
                    }} />
                <img src='/images/swipeB2.png' className='swiper-button-prev'
                    style={{
                        left: 'auto', right: matches ? '14%' : '25%', width: { md: '4%', xs: '15%' }
                    }} />

            </Swiper>
        </>
    );
}
