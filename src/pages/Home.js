import Hero from "../components/Hero";
import LastProduct from "../components/Home/LastProduct";
import Collection from "../components/Home/Collection";
import "../assets/css/Home.css";

function Home() {
  return (
    <section className="main" id="main">
      <Hero />
      <LastProduct />
      <Collection />
    </section>
  );
}

export default Home;
