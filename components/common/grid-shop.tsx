import { Text, Title } from "./typography";

const products = [
  {
    id: 0,
    name: "Maillot France Domicile",
    href: "#",
    price: "90€",
    description: "Le maillot de l’équipe de France féminine lors des matchs à domicile.",
    options: "Bleu",
    imageSrc: "/img/shop/france.png",
    imageAlt: "Maillot Bleu",
  },
  {
    id: 1,
    name: "Maillot France Domicile",
    href: "#",
    price: "90€",
    description: "Le maillot de l’équipe de France féminine lors des matchs à domicile.",
    options: "Bleu",
    imageSrc: "/img/shop/france.png",
    imageAlt: "Maillot Bleu",
  },
  {
    id: 2,
    name: "Maillot France Domicile",
    href: "#",
    price: "90€",
    description: "Le maillot de l’équipe de France féminine lors des matchs à domicile.",
    options: "Bleu",
    imageSrc: "/img/shop/france.png",
    imageAlt: "Maillot Bleu",
  },
  {
    id: 3,
    name: "Maillot France Domicile",
    href: "#",
    price: "90€",
    description: "Le maillot de l’équipe de France féminine lors des matchs à domicile.",
    options: "Bleu",
    imageSrc: "/img/shop/france.png",
    imageAlt: "Maillot Bleu",
  },
  {
    id: 4,
    name: "Maillot France Domicile",
    href: "#",
    price: "90€",
    description: "Le maillot de l’équipe de France féminine lors des matchs à domicile.",
    options: "Bleu",
    imageSrc: "/img/shop/france.png",
    imageAlt: "Maillot Bleu",
  },
  {
    id: 5,
    name: "Maillot France Domicile",
    href: "#",
    price: "90€",
    description: "Le maillot de l’équipe de France féminine lors des matchs à domicile.",
    options: "Bleu",
    imageSrc: "/img/shop/france.png",
    imageAlt: "Maillot Bleu",
  },

  // More products...
];

export default function GridShop() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white "
            >
              <div className="aspect-h-7 aspect-w-5 cursor-pointer bg-gray-50 hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-contain object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <Title size={Title.size.MEDIUM} color={Title.color.DARK} weight={Text.weight.SEMIBOLD}>
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </Title>
                <Text size={Text.size.SMALL} color={Text.color.DARK}>
                  {product.description}
                </Text>
                <div className="flex flex-1 flex-col justify-end">
                  <Text size={Text.size.SMALL} color={Text.color.DARK} weight={Text.weight.LIGHT}>
                    {product.options}
                  </Text>
                  <Text size={Text.size.MEDIUM} color={Text.color.DARK} weight={Text.weight.SEMIBOLD}>
                    {product.price}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
