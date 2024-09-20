import Banner from "./home/Banner";
import CategoryBar from "./home/CategoryBar";
import Offers from "./home/Offers";

export default function Home() {
  return (
    <main className="w-full">
      <Banner />
      <CategoryBar />
      <Offers />
    </main>
  );
}
