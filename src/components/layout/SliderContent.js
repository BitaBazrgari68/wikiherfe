"use client"; // علامت‌گذاری کامپوننت به عنوان کلاینت  
import Image from "next/image";
import Link from 'next/link'
import shape from '../../../public/images/shape.svg'
import about1 from '../../../public/images/about1.png'
import about2 from '../../../public/images/about2.png'
import about3 from '../../../public/images/about3.png'
import shape2 from '../../../public/images/shape2.svg'
import shape3 from '../../../public/images/shape3.svg'
import 'aos/dist/aos.css'; 
import AOS from 'aos';  
import { useEffect } from "react";

 

const SliderContent = () => {
   useEffect(() => {
    
    AOS.init({once:true}); 
   }, []);
    return (
        <div className="flex mt-5 pl-10 ">
            <div className="flex-1 flex gap-8 relative sider-content-right" data-aos="fade-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"> 
                <div>
                    <Image src={shape}
                        alt="shape"
                        className="absolute top-5 -left-4 "
                    />
                    <Image src={about1}
                        alt="about1"
                        className="mb-8 "
                    />
                    <Image src={about2}
                        alt="about2"
                        className="mb-8 "
                    />
                </div>
                <div>
                    <Image src={shape2}
                        alt="shape2"
                    />
                    <Image src={about3}
                        alt="about3"
                        className="mb-5 mt-7"
                    />
                    <Image src={shape3}
                        alt="shape3"
                    />
                </div>
            </div>
            <div className="flex-1 px-14 py-20 sider-content-right" data-aos="fade-left" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
                <div className="visible opacity-100 sider-content-right">
                    <h1 className="text-shadow text-[#dc3444] text-3xl font-semibold leading-9 mb-6 text-center">با ما بهتر دیده شوید</h1>
                    <p className="opacity-80 text-right">
                        اگر به دنبال راه حل های فناوری منحصر به فرد و نوآورانه هستید ،متاشید آماده ی همکاری با شما است . همراه ما باشید و از توانایی های فناوری برای رسیدن به اهدافتان بهره مند شوید
                    </p>
                    <div className="flex flex-col mt-10 gap-7">
                        <span className="flex flex-col">
                            <Link href="#" className="font-medium text-xl leading-7 opacity-100 text-center">
                                تماس باما : (0123) 456 – 789
                            </Link>
                            <span className="opacity-70 text-center">برای هر سوال یا نگرانی</span>
                        </span>
                        <Link href="#" className="w-fit text-white leading-7 font-medium px-7 py-3 bg-[#dc3444] rounded-3xl mx-auto">
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SliderContent;
