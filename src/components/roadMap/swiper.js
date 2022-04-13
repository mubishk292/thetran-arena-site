import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './swiper.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Box from '@mui/material/Box';
import { Pagination, Navigation } from "swiper";
import useMediaQuery from '@mui/material/useMediaQuery';

export default () => {
    const matches = useMediaQuery('(min-width:1150px)');

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}

                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                style={{
                    // width: '50%',
                    // right: '15%',
                    // paddingBottom: '15%'
                }}
            >
                <SwiperSlide>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </SwiperSlide>
                <Box pt={15}>
                    <img src='/images/swipeB4.png' className='swiper-button-next swiperB3Next'
                        style={{ top: matches ? 'none' : '65%' , width:'8%' }}
                    />
                    <img src='/images/swipeB3.png' className='swiper-button-prev swiperB3Prev'
                        style={{ top: matches ? 'none' : '65%' ,width:'8%' }}
                    />
                </Box>

            </Swiper>
        </>
    );
}
