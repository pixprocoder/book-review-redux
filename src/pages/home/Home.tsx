import Banner from "./Banner";
import BestBooks from "./best-books/BestBooks";
import Categories from "./categories/Categories";
import Features from "./features/Features";
import TrendingBook from "./trending/Trending";

function Home() {
  return (
    <section>
      <Banner />
      <TrendingBook />
      <Features />
      <BestBooks />
      <Categories />
    </section>
  );
}

export default Home;
