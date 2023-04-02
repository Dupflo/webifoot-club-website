"use client";
import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";
import ButtonBlue from "./button/button-blue";
import Filters from "./filters";
import { Text, Title } from "./typography";

export default function ProductOverview({ data }: any) {
  const [selectedColor, setSelectedColor] = useState(data.product.colors[2]);
  const [selectedSize, setSelectedSize] = useState(data.product.sizes[1]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol role="list" className="flex items-center space-x-4">
            {data.product.breadcrumbs.map((breadcrumb: any) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-4">
                    <Text size={Text.size.SMALL} weight={Text.weight.MEDIUM} color={Text.color.DARK}>
                      {breadcrumb.name}
                    </Text>
                  </a>
                  <svg viewBox="0 0 6 20" aria-hidden="true" className="h-5 w-auto text-gray-300">
                    <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={data.product.href} aria-current="page">
                <Text size={Text.size.SMALL} weight={Text.weight.MEDIUM} color={Text.color.DARK}>
                  {data.product.name}
                </Text>
              </a>
            </li>
          </ol>
        </nav>
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex flex-col gap-y-5">
                <Title size={Title.size.XLARGE} weight={Title.weight.SEMIBOLD} uppercase>
                  {data.product.name}
                </Title>

                <Title size={Title.size.XLARGE} weight={Title.weight.BOLD} uppercase>
                  {data.product.price}
                </Title>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="grid gap-5 sm:grid-cols-3 sm:grid-rows-3">
                {data.product.images.map((image: any) => (
                  <img
                    key={image.id}
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className={classNames(
                      image.primary
                        ? "h-full w-full object-cover sm:col-span-2 sm:row-span-3"
                        : "block object-contain sm:h-36 sm:w-36",
                      "rounded-lg bg-gray"
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                {/* Color picker */}
                <div>
                  <Text size={Text.size.SMALL} weight={Text.weight.MEDIUM} color={Text.color.DARK}>
                    Couleur
                  </Text>

                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                    <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {data.product.colors.map((color: any) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {" "}
                            {color.name}{" "}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Size picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <Text size={Text.size.SMALL} weight={Text.weight.MEDIUM} color={Text.color.DARK}>
                      Taille
                    </Text>
                  </div>

                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2">
                    <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {data.product.sizes.map((size: any) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          className={({ active, checked }) =>
                            classNames(
                              size.inStock ? "cursor-pointer focus:outline-none" : "cursor-not-allowed opacity-25",
                              active ? "ring-2 ring-primary ring-offset-2" : "",
                              checked
                                ? "border-transparent bg-primary text-white hover:bg-red"
                                : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                              "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                            )
                          }
                          disabled={!size.inStock}
                        >
                          <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="mt-10">
                  <ButtonBlue data={"Ajouter au panier"} />
                </div>
                <Filters />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
