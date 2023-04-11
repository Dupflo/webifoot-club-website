"use client";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Text } from "./typography";

export default function FlyOut({ data }: any) {
  return (
    <Popover className="relative w-fit bg-white">
      <Popover.Button className="flex items-center gap-x-1 rounded-md border-2 py-3 px-5 leading-6 ">
        <Text size={Text.size.SMALL} weight={Text.weight.SEMIBOLD} color={Text.color.DARK} uppercase>
          {data.active}
        </Text>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 flex w-screen max-w-min">
          <div className="w-56 rounded-md bg-white p-2 leading-6 shadow-lg ring-1 ring-gray-900/5">
            {data.solutions.map((item: any) => (
              <a key={item.value} href="#" className="block border-b p-2 hover:bg-slate-50">
                <Text size={Text.size.SMALL} weight={Text.weight.SEMIBOLD} color={Text.color.DARK} uppercase>
                  {item.value}
                </Text>
              </a>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
