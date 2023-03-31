import ProductOverview from "@/components/common/product-overview";
import HeaderBis from "@/components/common/header/headerBis";
export default function ProductPage() {
 const Head = {
   name: "Inter Montreal",
   title: "Boutique du club",
 };
 return (
   <div className="bg-white">
     <HeaderBis data={Head} />
     <div className="max-w-container">
       <ProductOverview />
     </div>
   </div>
 );
}
