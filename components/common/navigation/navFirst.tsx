"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function NavFirst({ data }: any) {
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
      className={classNames(
        navBg ? " bg-white py-3 shadow-sm" : "ajust-y fixed  ",
        "fixed top-0 z-50 min-h-[70px] w-full duration-300 ease-in-out"
      )}
    >
      {({ open }) => (
        <header className="max-w-container  ">
          <div className="w-full md:relative ">
            <div
              className={classNames(
                navBg ? "text-xs lg:text-sm " : "text-sm lg:text-base ",
                "lg:ajust-x hidden items-center justify-between font-medium duration-300 ease-in-out md:flex"
              )}
            >
              <div className={classNames(navBg ? "w-[70px] " : "w-[90px]", "duration-200 ease-in")}>
                <Image src={data.logo} width="250" height="251" alt="logo" />
              </div>
              {data.navigation.map((el: any) => (
                <a
                  href={`/${el.id}`}
                  className={classNames(
                    el.selected ? "border-b-2 border-primary" : "border-transparent",
                    "inline-flex items-center"
                  )}
                >
                  {el.name}
                </a>
              ))}
              <div className="flex gap-5">
                <FaFacebookF size={20} className="cursor-pointer duration-200 ease-in hover:scale-110" />
                <FaInstagram size={20} className="cursor-pointer duration-200 ease-in hover:scale-110" />
              </div>
            </div>

            <div className="flex items-center justify-between md:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                {open ? (
                  <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                )}
              </Disclosure.Button>
              <div className="w-[70px]">
                <Image src={data.logo} width="250" height="251" alt="logo" />
              </div>
            </div>

            <Disclosure.Panel className="z-10 mt-5  md:hidden">
              <div className="space-y-1 pt-2 pb-3">
                {data.navigation.map((el: any) => (
                  <Disclosure.Button
                    as="a"
                    href={`/${el.id}`}
                    className={classNames(
                      el.selected ? "bg-primary text-white" : "hover:bg-primary hover:text-white",
                      "block py-2  pl-3 pr-4"
                    )}
                  >
                    {el.name}
                  </Disclosure.Button>
                ))}
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
