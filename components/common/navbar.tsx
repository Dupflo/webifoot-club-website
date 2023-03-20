"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import InterMtl from "../../assets/layout/intermtl-logo.png";

export default function Navigation() {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleBackground = () => {
      if (window.scrollY >= 80) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleBackground);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={
        navBg
          ? "fixed top-0 z-20 min-h-[70px] w-full bg-white py-3  shadow-sm duration-300 ease-in-out"
          : "ajust-y fixed top-0 z-20 min-h-[70px]  w-full duration-300 ease-in-out"
      }
    >
      {({ open }) => (
        <header className="max-w-container  ">
          <div className="w-full md:relative ">
            <div
              className={
                navBg
                  ? " lg:ajust-x hidden items-center justify-between text-xs font-medium duration-300 ease-in-out md:flex lg:text-sm "
                  : " lg:ajust-x hidden items-center justify-between text-sm font-medium duration-300 ease-in-out md:flex lg:text-base "
              }
            >
              <a href="/" className="inline-flex items-center border-b-2 border-primary ">
                Accueil
              </a>
              <a href="/history" className="inline-flex items-center border-b-2 border-transparent ">
                Histoire
              </a>
              <a href="/staff" className="inline-flex items-center border-b-2 border-transparent">
                Staff
              </a>
              <div className={navBg ? "w-[70px] duration-200 ease-in" : "w-[90px] duration-200 ease-out"}>
                <Image src={InterMtl} width="250" height="251" alt="logo" />
              </div>
              <a href="/news" className="inline-flex items-center border-b-2 border-transparent">
                Actualités
              </a>
              <a href="#" className="inline-flex items-center border-b-2 border-transparent">
                Contact
              </a>
              <div className="flex gap-5">
                <FaFacebookF size={20} className="cursor-pointer duration-200 ease-in hover:scale-110" />
                <FaInstagram size={20} className="cursor-pointer duration-200 ease-in hover:scale-110" />
              </div>
            </div>

            <div className="flex items-center justify-between md:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                {open ? (
                  <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                )}
              </Disclosure.Button>
              <div className="w-[70px]">
                <Image src={InterMtl} width="250" height="251" alt="logo" />
              </div>
            </div>

            <Disclosure.Panel className="z-10 mt-5  md:hidden">
              <div className="space-y-1 pt-2 pb-3">
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="block border-l-4 border-primary bg-indigo-50 py-2 pl-3 pr-4 text-primary "
                >
                  Accueil
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/history"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 hover:bg-gray-50"
                >
                  Histoire
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/staff"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 hover:bg-gray-50"
                >
                  Staff
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/news"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 hover:bg-gray-50"
                >
                  Actualités
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 hover:bg-gray-50"
                >
                  Contact
                </Disclosure.Button>
                <div className="flex gap-5 pl-6 pt-2">
                  <FaFacebookF size={15} />
                  <FaInstagram size={15} />
                </div>
              </div>
            </Disclosure.Panel>
          </div>
        </header>
      )}
    </Disclosure>
  );
}
