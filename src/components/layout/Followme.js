import qrcode from "../../../public/images/instagramQR.png"
import Image from "next/image";
import Link from 'next/link'
const Followme = () => {
    return (
        <div>
            <div className=" w-full pb-5 overflow-hidden bg-[#dc3444] flex flex-row-reverse justify-between items-center 
        bg-gradient-to-l dark:text-white transition-all from-white dark:from-cnDarkBlue-20 to-white/30
        ">
                <div className="  pb-6 pt-18 px-6 sm:p-10 animate-fadeleft opacity-80
                text-center sm:text-right text-base sm:text-xl lg:text-3xl  sm:pl-64"data-aos="fade-left" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                   ..... اینستاگرام ما یادت نره
                </div>
                <div className="ml-5">
                    <Link className="group rounded-b-full bg-white dark:bg-cnDarkBlue-20 transition-colors
             w-40 h-40 lg:w-48 lg:h-48 flex flex-col justify-center items-center dir-ltr" target="_blank" href="https://www.instagram.com/meta.sheed2024">
                        <Image src={qrcode}
                        alt="qrcode"
                            className="w-24 h-24 lg:w-32 lg:h-32 inline-block dark:hidden transition-all"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"/>

                        <p className=" text-xs lg:text-sm transition-all group-hover:text-cnBlue-15 opacity-80">@META.SHEED2024
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Followme;
