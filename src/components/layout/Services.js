"use client";
import Image from "next/image";
import Link from 'next/link'

import shape5 from '../../../public/images/shape5.svg'
import { CgWebsite } from "react-icons/cg";
import { FcAdvertising } from "react-icons/fc";
import { IoPulseOutline } from "react-icons/io5";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const Services = () => {
    useEffect(() => {
        AOS.init();

    }, []);
    return (
        <div className=" ">

            <div id="services" className=" bg-[#dc3444] p-16 relative " >
                <div className="elementor-shape elementor-shape-top" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z " fill="#FFFFFF"></path>
                    </svg>
                </div>

                <Image src={shape5}
                    alt="shape5"
                    className="absolute bottom-0 left-0"
                />

                <div className="gap-20 justify-between flex-nowrap sm:flex ">
                    <div className="flex flex-1 flex-col services-item p-5 rounded-3xl bg-white sm:gap-y-2 " data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="600">
                        <div className="bg-[#F7B9A1] text-white mx-auto shrink-0 text-5xl flex justify-center items-center rounded-full shadow-xl border-b border-white w-28 h-28 ">
                            <CgWebsite />
                        </div>
                        <div className="text-right p-5">
                            <h4 className="text-2xl leading-8  font-medium mb-2.5 text-[#dc3444] text-shadow">طراحی سایت</h4>
                            <p className="opacity-70"> ما به شما وب سایتی مدرن و کاربرپسند ارائه می‌دهیم   </p>
                            <p className="leading-8"> یک طراحی سایت خوب باید هماهنگی بین ظاهر جذاب، تجربه کاربری ساده و عملکرد بهینه داشته باشد. رعایت اصول ریسپانسیو (واکنش‌گرا بودن برای دستگاه‌های مختلف)، سرعت بارگذاری مناسب، استفاده از رنگ‌ها و فونت‌های متناسب، و ساختار منطقی از نکات کلیدی در طراحی مؤثر است. </p>
                            <p className="mt-2 text-left">
                                <Link href="#" >ادامه مطلب</Link>
                            </p>

                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 services-item p-5 rounded-3xl bg-white" data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="700">
                        <div className="bg-[#F7B9A1] text-white mx-auto shrink-0 text-5xl flex justify-center items-center rounded-full shadow-xl border-b border-white w-28 h-28">
                            <FcAdvertising />
                        </div>
                        <div className="text-right p-5">
                            <h4 className="text-2xl leading-8  font-medium mb-2.5 text-[#dc3444] text-shadow">تبلیغات</h4>
                            <p className="opacity-70">ایجاد تجربه‌های بی‌نظیر شما با طراحی‌های خلاقانه و جذاب</p>
                            <p className="leading-8"> در دنیای دیجیتال امروز، تبلیغات شکل‌های مختلفی دارد، از جمله تبلیغات آنلاین در شبکه‌های اجتماعی، گوگل، وب‌سایت‌ها، ویدئوها و ایمیل مارکتینگ.هدف اصلی تبلیغات ایجاد آگاهی، افزایش اعتبار و جلب مشتری است. استراتژی‌های مؤثر در تبلیغات، نیازمند شناخت دقیق بازار هدف و پیام‌گذاری جذاب هستند.  </p>
                            <p className="mt-2 text-left">
                                <Link href="#" >ادامه مطلب</Link>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 services-item p-5 rounded-3xl bg-white" data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="800">
                        <div className="bg-[#F7B9A1] text-white mx-auto shrink-0 text-5xl flex justify-center items-center rounded-full shadow-xl border-b border-white w-28 h-28">
                            <IoPulseOutline />
                        </div>
                        <div className="text-right p-5">
                            <h4 className="text-2xl leading-8  font-medium mb-2.5 text-[#dc3444] text-shadow">سئو</h4>
                            <p className="opacity-70">به شما کمک می‌کند تا در دنیای دیجیتال بیشتر دیده شوید  </p>
                            <p className="leading-8"> سئو شامل بهینه‌سازی محتوا، ساختار سایت، سرعت بارگذاری، تجربه کاربری و لینک‌سازی است. رعایت نکات فنی و تولید محتوای ارزشمند، نقش کلیدی در موفقیت سئو دارد. این فرآیند نیازمند پیگیری مداوم و بروز بودن با الگوریتم‌های موتورهای جست‌وجو است تا بتوان نتایج مثبت در رشد آنلاین کسب‌وکار یا وب‌سایت حاصل کرد.

                            </p>
                            <p className="mt-2 text-left">
                                <Link href="#" >ادامه مطلب</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Services;
