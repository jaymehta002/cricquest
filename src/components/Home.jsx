import { Link } from "react-router-dom";
import Card from "./Card";

const Home = () => {
    return (

       <div className="bg-design-white">
    <div className="custom-container">
  <div className="relative h-screen font-inter bg-cover bg-center">
    {/* Dark mode overlay */}
    <div className="absolute inset-0 bg-white opacity-90 dark:bg-white"></div>

    {/* Background image */}
    <div className="absolute inset-0">
      <img src='/background.png' alt="Background" className="w-full h-full object-cover opacity-20 dark:opacity-10" />
    </div>

    {/* Left image */}
    <div className="absolute left-0 top-0 bottom-0 md:w-1/3 hidden md:flex justify-end items-center">
      <img src='/LeftPlayer.png' alt="Left Image" className="max-h-80 object-cover" />
    </div>

    {/* Right image */}
    <div className="absolute right-0 top-0 bottom-0 md:w-1/3  hidden md:flex justify-start items-center">
      <img src='/RightPlayer.png' alt="Right Image" className="max-h-80 object-cover" />
    </div>

    {/* Play button and content */}
    <div className="z-10 flex flex-col items-center justify-center h-full relative">
      <img src='/Logosplash.svg' alt="Logo" className="md:w-56 w-48 mx-auto md:mb-8" />

      <h1 className="text-3xl md:mt-0 md:mt-64 lg:text-5xl design-text-black font-bold mb-1 text-white text-center">Welcome to CricQuest</h1>
      <p className="text-lg lg:text-xl font-inter font-semibold text-blue-500 mb-4 text-center">A fun guessing game of cricket players for this IPL season</p>
      <Link to="/play">
        <button className="custom-button mb-2">
          PLAY
        </button>
      </Link>
      {/* <a to="#about" className="font-inter design-text-black hover:cursor-auto font-bold"> How to play?</a> */}
      <a href="#about" className="font-inter design-text-black font-bold">How to play?</a>
    </div>
  </div>
</div>
        <section id="about font-inter">

        <Card />

        </section>
        <footer className="design-text-black font-inter bg-design-white py-4 text-center">
            <p className="text-base font-semibold">© 2024 Cricquest.in. <Link to='/privacy-policy'>All rights reserved.</Link> </p>
        </footer>
      </div> 
    );
  }
  
  export default Home;
  