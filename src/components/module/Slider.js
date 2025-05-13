"use client"

import Image from "next/image";
import logo1 from '../../../public/images/sample1/logo1.png'
import sample1 from '../../../public/images/sample1/sample1.jpg'
import logo2 from '../../../public/images/sample2/logo2.WEBP'
import logo3 from '../../../public/images/sample3/logo3.png'
import logo4 from '../../../public/images/sample4/logo4.png'
import logo5 from '../../../public/images/sample5/logo5.png'
import logo7 from '../../../public/images/sample7/logo7.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function Slider() {

    return (
        <>
            <div id="portfolio" className='px-10 flex-col items-center justify-center  py-20'>
                <div className=" text-center visibility: visible opacity: 1" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div className='flex'>
                        <h2 className="text-shadow text-[#dc3444] text-4xl leading-[55px] font-semibold mx-auto ">نمونه کارهای ما</h2>
                    </div>
                    <p className="mb-10 mt-3 opacity-80"> !برای الهام‌بخشی و مشاهده مهارت‌ها و خلاقیت ما، حتماً نمونه کارهای ما را ببینید</p>
                </div>
                <div className='flex-col'>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        speed={500}
                        className='swiper-wrapper'
                    >

                        <SwiperSlide className='sample1 overflow-hidden block relative hover-target opacity-100 transform-3d rounded-2xl slider-transition'>
                            <div className='bg-black h-64 flex flex-col justify-center items-center text-2xl text-white opacity-0 p-5 hover:opacity-80 transition-all ease-linear duration-300'>
                                <h3 className='p-5'>تشریفات سالی فینگرفود</h3>
                                <Image src={logo1}
                                    alt='logo1'
                                    width={100}
                                    height={100}
                                    className='rounded-full'
                                />
                                <a target='_blank' href="https://www.salifingerfood.ir" className='text-[#dc3444]'> salifingerfood.ir </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='sample6 overflow-hidden block relative hover-target opacity-100 transform-3d rounded-2xl slider-transition'>
                            <div className='bg-black h-64 flex flex-col justify-center items-center text-2xl text-white opacity-0 p-5 hover:opacity-80 transition-all ease-linear duration-300'>
                                <h3 className='p-5'> موسسه فرهنگی هنری آرتا </h3>
                                <Image src={logo5}
                                    alt='logo5'
                                    width={100}
                                    height={100}
                                    className='rounded-full mb-2'
                                />
                                <a target='_blank' href="https://oxygenstudio.ir/arta" className='text-[#dc3444]'> oxygenstudio.ir/arta </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='sample5 overflow-hidden block relative hover-target opacity-100 transform-3d rounded-2xl slider-transition'>
                            <div className='bg-black h-64 flex flex-col justify-center items-center text-2xl text-white opacity-0 p-5 hover:opacity-80 transition-all ease-linear duration-300'>
                                <h3 className='p-5'> آتلیه عروس و داماد اکسیژن</h3>
                                <Image src={logo5}
                                    alt='logo5'
                                    width={100}
                                    height={100}
                                    className='rounded-full mb-2'
                                />
                                <a target='_blank' href="https://wedding.oxygenstudio.ir" className='text-[#dc3444]'> wedding.oxygenstudio.ir </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='sample7 overflow-hidden block relative hover-target opacity-100 transform-3d rounded-2xl slider-transition'>
                            <div className='bg-black h-64 flex flex-col justify-center items-center text-2xl text-white opacity-0  hover:opacity-80 transition-all ease-linear duration-300'>
                                <h3 className='p-5 '>معماری و دکوراسیون داخلی</h3>
                                <Image src={logo7}
                                    alt='logo7'
                                    width={100}
                                    height={100}
                                    className='rounded-full mb-5'
                                />
                                <a target='_blank' href="https://hamidalizade.com" className='text-[#dc3444]'> hamidalizade.com </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='sample4 overflow-hidden block relative hover-target opacity-100 transform-3d rounded-2xl slider-transition'>
                            <div className='bg-black h-64 flex flex-col justify-center items-center text-2xl text-white opacity-0 p-5 hover:opacity-80 transition-all ease-linear duration-300'>
                                <h3 className='p-5'> استودیو دیجیتال مارکتینگ اکسیژن </h3>
                                <Image src={logo4}
                                    alt='logo4'
                                    width={100}
                                    height={100}
                                    className='rounded-full mb-2'
                                />
                                <a target='_blank' href="https://ad.oxygenstudio.ir" className='text-[#dc3444]'> ad.oxygenstudio.ir </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='sample2 overflow-hidden block relative hover-target opacity-100 transform-3d rounded-2xl slider-transition'>
                            <div className='bg-black h-64 flex flex-col justify-center items-center text-2xl text-white opacity-0  hover:opacity-80 transition-all ease-linear duration-300'>
                                <h3 className='p-5 '>ونگارد</h3>
                                <Image src={logo2}
                                    alt='logo2'
                                    width={100}
                                    height={100}
                                    className='rounded-full my-8'
                                />
                                <a target='_blank' href="https://vanguardbelt.com" className='text-[#dc3444]'> vanguardbelt.com </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='sample3 overflow-hidden block relative hover-target opacity-100 transform-3d rounded-2xl slider-transition'>
                            <div className='bg-black h-64 flex flex-col justify-center items-center text-2xl text-white opacity-0 p-5 hover:opacity-80 transition-all ease-linear duration-300'>
                                <h3 className='p-5'> کارا کیت </h3>
                                <Image src={logo3}
                                    alt='logo3'
                                    width={100}
                                    height={100}
                                    className='rounded-full mb-5'
                                />
                                <a target='_blank' href="https://karakitpart.ir" className='text-[#dc3444]'> karakitpart.ir </a>
                            </div>
                        </SwiperSlide>






                    </Swiper>

                </div>
            </div>
        </>
    );
}
