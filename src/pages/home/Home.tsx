import Footer from "../shared/Footer";
import Banner from "./Banner";
import BestBooks from "./best-books/BestBooks";
import Categories from "./categories/Categories";
import Features from "./features/Features";
import RecentBooks from "./recentBook/RecentBooks";
import Reviews from "./reviews/Reviews";
import TrendingBook from "./trending/Trending";

function Home() {
  return (
    <section>
      <Banner />
      <TrendingBook />
      <Features />
      <BestBooks />
      <Categories />
      <RecentBooks />
      <Reviews />
      <Footer />
    </section>
  );
}

export default Home;
