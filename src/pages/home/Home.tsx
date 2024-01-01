import Banner from "./Banner";
import BestBooks from "./best-books/BestBooks";
import Categories from "./categories/Categories";
import RecentBooks from "./recentBook/RecentBooks";
import Reviews from "./reviews/Reviews";
import TrendingBook from "./trending/Trending";

function Home() {
  return (
    <section>
      <Banner />
      <TrendingBook />
      <RecentBooks />
      <Categories />
      {/* <Features /> */}
      <BestBooks />
      <Reviews />
    </section>
  );
}

export default Home;
