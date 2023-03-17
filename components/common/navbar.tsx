"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import InterMtl from "../../assets/layout/intermtl-logo.png";

export default function Navigation() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-20 min-h-[70px] ">
      {({ open }) => (
        <header className="md:max-w-container md:ajust-y  ">
          <div className="absolute w-full md:relative ">
            <div className=" lg:ajust-x hidden items-center justify-between md:flex ">
              <a href="#" className="inline-flex items-center border-b-2 border-primary font-medium ">
                Accueil
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Histoire
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Staff
              </a>
              <div className="w-[90px]">
                <Image src={InterMtl} width="250" height="251" alt="logo" />
              </div>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Actualités
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Contact
              </a>
              <div className="flex gap-5">
                <FaFacebookF size={20} className="cursor-pointer duration-200 ease-in hover:scale-110" />
                <FaInstagram size={20} className="cursor-pointer duration-200 ease-in hover:scale-110" />
              </div>
            </div>

            <div className="max-w-container flex items-center justify-between md:hidden">
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

            <Disclosure.Panel className="sticky top-0 z-10 mt-5 pl-10 md:hidden">
              <div className="space-y-1 pt-2 pb-3">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-primary bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-primary "
                >
                  Accueil
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Histoire
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Staff
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  Actualités
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
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
