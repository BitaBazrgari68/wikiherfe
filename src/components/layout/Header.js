
"use client"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaInstagram } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaPhone } from "react-icons/fa";


import Link from 'next/link';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {



  const navigation = [
    { name: 'ارتباط با ما', href: '#contact', current: false },
    { name: 'نمونه کارها', href: '#portfolio', current: false },
    { name: 'وبلاگ', href: '#', current: false },
    { name: 'خدمات', href: '#services', current: false },
    { name: 'صفحه اصلی', href: '#', current: false },
  ]


  return (
    <>
      <div className='flex bg-[#dc3444] h-8 px-10'>
        <div className='flex flex-1'>
          <ul className='flex gap-3'>
            <li className='text-white flex items-center text-xl hover:text-purple-500'>
              <FaInstagram />
            </li>
            <li className='text-white flex items-center text-xl hover:text-blue-500'>
              <RiTelegram2Fill />
            </li>
            <li className='text-white flex items-center text-xl hover:text-green-400'>
              <FaWhatsapp />
            </li>
            <li className='text-white flex items-center text-xl hover:text-blue-600'>
              <IoLogoLinkedin />
            </li>

          </ul>
        </div>
        <div className='flex flex-1 items-center text-white justify-end'>
          <span>09158187521</span>
          <FaPhone  className=' ml-2'/>

        </div>
      </div>
      <div className="text-lg  shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)]" >
        <Disclosure as="nav" className=" drop-shadow-lg ">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
                <DisclosureButton className=" group relative inline-flex items-center justify-center rounded-md p-2 text-[#dc3444] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block " />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  {/* <Image src={logo}
                  alt="logo"
                  width={50}
                  height={10}
                /> */}
                  <h3 className=" logo ps-2">aroma</h3>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center ">

                  <div className={`flex space-x-4  flex-row `}>
                    {navigation.map((item) => (

                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? '  text-white' : 'group ',
                          'rounded-md px-3 py-2 text-base font-medium hover:text-[#dc3444] transition-all ease-linear duration-300',
                        )}
                      >

                        {item.name}
                        {/* <span className="w-0 h-[2px] bg-white absolute left-0 bottom-0 opacity-0  invisible 
                    rounded-md transition-all ease-out duration-700 group-hover:opacity-100 group-hover:visible group-hover:w-16"></span> */}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                <button
                  type="button"
                  className=" flex relative rounded-full bg-[#4E6BFF] p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {/* <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span> */}

                </button>

              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className={`space-y-1 px-2 pb-3 pt-2 `}>
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : ' text-right hover:bg-[#dc3444] hover:text-white',
                    `block rounded-md px-3 py-2 text-base font-medium text-end`,
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure >
      </div >
    </>
  )
}
