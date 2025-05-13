import Link from 'next/link'
import logo from '../../../public/images/logo.png'
import Image from 'next/image'
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";

import { FaAngleLeft } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  
  return (
    <div>
      <div id='contact' className="py-10 px-10 background-footer">
        <div className="py-5 px-8 border-double border-4 border-[#dc3444] grid grid-cols-1 md:grid-cols-3  gap-4 text-white leading-6">
          <div className='flex flex-col gap-5 ' data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800">
            <div className="flex flex-shrink-0 items-center border-bottom  flex-row-reverse drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] border-h3-footer ">
              <Image src={logo}
                alt="logo"
                width={50}
                height={10}
              />
              <h2 className="ps-2 text-2xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] text-[#dc3444] ">
                سئوگرام</h2>
            </div>
            <p className=' text-right text-black'>
              این متن درباره ی خدمات ماست این متن درباره ی خدمات ماست این متن درباره ی خدمات ماست
            </p>
            <div className='flex gap-3 flex-row-reverse '>
              <Link href="#" className='social hover:bg-[#dc3444] '>
                <AiOutlineInstagram />
              </Link>
              <Link href="#" className='social hover:bg-[#dc3444] '>
                <RiTelegramLine />
              </Link>
              <Link href="#" className='social hover:bg-[#dc3444] '>
                <SiWhatsapp />
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-5 text-black ' data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800">
            <h2 className={`py-2 text-2xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] border-bottom  text-[#dc3444] text-right border-h3-footer`}>دسترسی سریع</h2>
            <div className={`flex gap-2 flex-row-reverse `}>
              <FaAngleLeft className='text-[#dc3444]' />
              <Link className='hover:pr-1 transition-all ease-linear duration-300 ' href="#"> صفحه اصلی</Link>
            </div>
            <div className={`flex gap-2 flex-row-reverse  `}>
              <FaAngleLeft className='text-[#dc3444]' />
              <Link className='hover:pr-1 transition-all ease-linear duration-300 ' href="#">درباره ما</Link>
            </div>
            <div className={`flex gap-2 flex-row-reverse `}>
              <FaAngleLeft className='text-[#dc3444]' />
              <Link className='hover:pr-1 transition-all ease-linear duration-300 ' href="#">خدمات </Link>
            </div>
            <div className={`flex gap-2 flex-row-reverse `}>
              <FaAngleLeft className='text-[#dc3444]' />
              <Link className='hover:pr-1 transition-all ease-linear duration-300 ' href="#"> وبلاگ</Link>
            </div>
          </div>
          <div className='flex flex-col gap-5 text-black' data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800">
            <h2 className={`text-2xl py-2 border-bottom  text-[#dc3444] drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] text-right border-h3-footer`}>ارتباط با ما</h2>
            <div className={`flex gap-2 text-lg flex-row-reverse`}>
              <BsTelephoneFill className='text-[#dc3444]' />
              <span>+111-222-333</span>
            </div>
            <div className={`flex gap-2 text-lg flex-row-reverse`}>
              <MdEmail className='text-[#dc3444]' />
              <span>abc@gmail.com</span>
            </div>
            <div className='flex flex-col gap-5'>
              <h2 className={`pt-2 text-2xl text-[#dc3444] drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] text-right `}>ساعت کاری</h2>
              <span className='text-right' >mon - fri: 8 AM - 6 PM</span>
              <span className='text-right'> sat - sun: 10 AM - 4 PM</span>
            </div>
          </div>
        </div>

      </div>
      <div className='h-8 bg-[#dc3444]'></div>
    </div>
  )
}
