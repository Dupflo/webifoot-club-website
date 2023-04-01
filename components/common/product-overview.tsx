"use client";
import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";
import ButtonBlue from "./button/button-blue";
import Filters from "./filters";
import { Text, Title } from "./typography";

const product = {
  name: "Maillot France Domicile",
  price: "90.00€",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Femmes", href: "#" },
    { id: 2, name: "Nouveautés", href: "#" },
  ],
  images: [
    {
      id: 1,
      imageSrc: "/img/shop/france.png",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: "/img/shop/back.png",
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: "/img/shop/front.png",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 4,
      imageSrc: "/img/shop/nike.png",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: "Grey", bgColor: "bg-gray-200", selectedColor: "ring-red" },
    { name: "Black", bgColor: "bg-black", selectedColor: "ring-red" },
    { name: "Blue", bgColor: "bg-primary", selectedColor: "ring-red" },
  ],
  sizes: [
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
};

export default function ProductOverview() {
  const [selectedColor, setSelectedColor] = useState(product.colors[2]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol role="list" className="flex items-center space-x-4">
            {product.breadcrumbs.map((breadcrumb) => (
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
              <a href={product.href} aria-current="page">
                <Text size={Text.size.SMALL} weight={Text.weight.MEDIUM} color={Text.color.DARK}>
                  {product.name}
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
                  {product.name}
                </Title>

                <Title size={Title.size.XLARGE} weight={Title.weight.BOLD} uppercase>
                  {product.price}
                </Title>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="grid gap-5 sm:grid-cols-3 sm:grid-rows-3">
                {product.images.map((image) => (
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
                      {product.colors.map((color) => (
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
                      {product.sizes.map((size) => (
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
