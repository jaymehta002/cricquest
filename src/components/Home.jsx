import HomeBig from "./HomeBig";
import HomeSmall from "./HomeSmall";
import Card from "./Card";
import { Link } from "react-router-dom";

const Home = () => {

    return (
      <>
        <div className="md:block hidden">
          <HomeBig />
        </div>
        <div className="md:hidden">
          <HomeSmall />
        </div>
        <section id="about" className="font-inter">

        <Card />

        </section>
        <footer className="design-text-black font-inter bg-design-white py-4 text-center">
            <p className="text-base no-underline font-semibold">© 2024 Cricquest.in. <Link className="no-underline" to='/privacy-policy'>All rights reserved.</Link> </p>
            <p className="text-base font-semibold">contact us: <a className="font-inter no-underline text-black" href="mailto:info@cricquest.in">info@cricquest.in</a> </p>
        </footer>
      </>
    );
  }
  
  export default Home;
  