import Shop from "./shop";
export default async function ShopPage() {
  const response = await import(`../../public/shop.json`);
  let shop = response.default;

  return (
    <>
      <Shop data={shop} />
    </>
  );
}
