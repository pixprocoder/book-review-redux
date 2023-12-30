import Banner from "./Banner";
import Features from "./features/Features";
import TrendingBook from "./trending/Trending";

function Home() {
  return (
    <section>
      <Banner />
      <TrendingBook />
      <Features />
    </section>
  );
}

export default Home;
