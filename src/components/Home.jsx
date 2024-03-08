import { Link } from "react-router-dom";
import Card from "./Card";

const Home = () => {
    return (

       <div className="bg-design-white">
      <div className="relative h-screen font-inter bg-cover bg-center">
    {/* Dark mode overlay */}
    <div className="absolute inset-0 bg-white opacity-90 dark:bg-white"></div>

    {/* Background image */}
    <div className="absolute inset-0">
        <img src='/background.png' alt="Background" className="w-full h-full object-cover opacity-20 dark:opacity-10" />
    </div>

    {/* Left image */}
    <div className="absolute left-0 top-0 bottom-0 w-1/2 pr-4 lg:pr-32 xl:pr-64 flex justify-end items-center">
        <img src='/LeftPlayer.png' alt="Left Image" className="max-h-80 object-cover" />
    </div>

    {/* Right image */}
    <div className="absolute right-0 top-0 bottom-0 w-1/2 pl-4 lg:pl-32 xl:pl-64 flex justify-start items-center">
        <img src='/RightPlayer.png' alt="Right Image" className="max-h-80 object-cover" />
    </div>

    {/* Play button and content */}
    <div className="z-10 flex flex-col items-center justify-center h-full relative">
        <img src='/Logosplash.svg' alt="Logo" className="md:w-56 w-32 mx-auto md:mb-8" />

        <h1 className="text-3xl md:mt-0 mt-64 lg:text-5xl design-text-black font-bold mb-1 text-white text-center ">Welcome to CricQuest</h1>
        <p className="text-lg lg:text-xl font-inter font-semibold text-blue-500 mb-4 text-center ">A fun guessing game of cricket players for this IPL season</p>

        <button className="custom-button mb-2">
            <Link to="/play">PLAY</Link>
        </button>
        <a href="" className="font-inter design-text-black font-bold">How to play?</a>
    </div>
</div>



        <Card />

        <footer className="design-text-black font-inter bg-design-white py-4 text-center">
            <p className="text-base font-semibold">© 2024 Cricquest.in. All rights reserved.</p>
        </footer>
      </div> 
    );
  }
  
  export default Home;
  