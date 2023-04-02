import Product from "./product";
export default async function ProductPage() {
  const response = await import(`../../../public/shop-product.json`);
  let shop = response.default;

  return (
    <>
      <Product data={shop} />
    </>
  );
}
