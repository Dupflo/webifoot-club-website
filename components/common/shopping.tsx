"use client";
import ButtonBlue from "@/components/common/button/button-blue";
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from "@heroicons/react/20/solid";
import Steps from "./steps";
import { Text, Title } from "./typography";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Sienna",
    inStock: true,
    size: "Large",
    imageSrc: "/img/shop/france.png",
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Black",
    inStock: false,
    leadTime: "3–4 weeks",
    size: "Large",
    imageSrc: "/img/shop/france.png",
    imageAlt: "Front of men's Basic Tee in black.",
  },
];

const howMuch = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const recaps = [
  { key: "Total des articles", value: "270.00€", question: false },
  { key: "Frais de livraison", value: "4,90€", question: true },
  { key: "TVA", value: "2,10€", question: true },
];

export default function ShoppingComponent() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <Title size={Title.size.XXXLARGE} weight={Title.weight.BOLD} color={Title.color.DARK} uppercase>
          Votre Panier
        </Title>
        <Steps />
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {products.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <a href={product.href}>
                            <Title size={Title.size.SMALL} weight={Title.weight.MEDIUM} color={Title.color.DARK}>
                              {product.name}
                            </Title>
                          </a>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <Text size={Text.size.SMALL}>{product.color}</Text>
                          {product.size ? (
                            <span className="ml-4 border-l border-gray-200 pl-4">
                              <Text size={Text.size.SMALL}>{product.size}</Text>
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                          Quantity, {product.name}
                        </label>
                        <select
                          id={`quantity-${productIdx}`}
                          name={`quantity-${productIdx}`}
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        >
                          {howMuch.map((number) => (
                            <option value={number}>{number}</option>
                          ))}
                        </select>

                        <div className="absolute right-0 top-0">
                          <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Remove</span>
                            <XMarkIconMini className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product.inStock ? (
                        <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                      ) : (
                        <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                      )}

                      <span>{product.inStock ? "In stock" : `Ships in ${product.leadTime}`}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <Title size={Title.size.LARGE} weight={Title.weight.MEDIUM} color={Title.color.DARK}>
              Récapitulatif de la commande
            </Title>

            <dl className="mt-6 space-y-4">
              {recaps.map((recap) => (
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center">
                    <Text size={Text.size.SMALL}>{recap.key}</Text>
                    {recap.question ? (
                      <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                        <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    ) : null}
                  </dt>
                  <dd>
                    <Text size={Text.size.SMALL} weight={Text.weight.MEDIUM}>
                      {recap.value}
                    </Text>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex justify-center">
              <ButtonBlue data={"Valider mon panier"} />
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}
