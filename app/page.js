import Banner from "./home/Banner";
import Brands from "./home/Brands";
import CategoryBar from "./home/CategoryBar";
import Decor from "./home/Decor";
import FreeShippingItems from "./home/FreeShippingItems";
import Offers from "./home/Offers";

export default function Home() {
  return (
    <main className="w-full">
      <Banner />
      <CategoryBar />
      <Offers />
      <FreeShippingItems />
      <Decor />
      <Brands />
    </main>
  );
}
