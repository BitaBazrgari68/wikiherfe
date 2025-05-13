"use client"



import 'animate.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function Slider() {

    return (
        <>
            <div className='flex-col items-center justify-center '>
                <div className="hidden md:flex" >
                    <Swiper
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className='h-[500px] mt-2 '
                    >
                        <SwiperSlide className=" overflow-hidden relative hover-target background-slide1">
                            <div className='flex-col items-center justify-end mx-auto pt-20 pr-36 '>
                                <h3 className='opacity-80 text-right font-medium text-3xl pr-5 animate__animated animate__fadeInDown'>ارتقاء رتبه سایت شما با بهترین استراتژی های سئو</h3>
                                <ul className='text-right text-white pr-20 '>
                                    <li className='my-8 animate__animated animate__fadeInUp animate__delay-1s '><span className='rounded-4xl bg-[#dc3444] p-2 px-5'> طراحی بهینه برای موتورهای جستجو </span></li>
                                    <li className='mb-8 animate__animated animate__fadeInUp animate__delay-2s'><span className='rounded-4xl bg-[#dc3444] p-2 px-5'> کلمات کلیدی هدفمند </span></li>
                                    <li className='mb-8 animate__animated animate__fadeInUp animate__delay-3s'><span className='rounded-4xl bg-[#dc3444] p-2 px-5'> سرعت بارگذاری بالا </span></li>
                                    <li className='animate__animated animate__fadeInUp animate__delay-4s'><span className='rounded-4xl bg-[#dc3444] p-2 px-2'> تجربه کاربری بی نظیر و رعایت اصول سئو </span></li>
                                </ul>
                            </div>
                        </SwiperSlide > 
                        <SwiperSlide className='overflow-hidden relative hover-target background-slide2'>
                            <div className='flex flex-col items-center justify-center  pt-20 w-1/2'>
                                <h3 className='opacity-80 leading-12 text-right font-medium text-3xl pl-10 animate__animated animate__fadeInDown'> 	وب‌سایت دلخواهتان را با حرفه‌ای‌ترین تیم طراحی کنید و برندتان را به اوج برسانید </h3>
                                <span className="flex flex-col mt-10 animate__animated animate__fadeIn">
                                    <Link href="#" className="font-medium text-xl leading-7 opacity-100 text-center ">
                                        تماس باما : (0123) 456 – 789
                                    </Link>
                                    <span className="opacity-70 text-center">برای هر سوال یا نگرانی</span>
                                </span>
                                <Link href="#" className="animate__animated animate__fadeInUp w-fit text-white leading-7 font-medium px-7 py-3 bg-[#dc3444] rounded-3xl mt-10">
                                    سفارش پروژه
                                </Link>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
