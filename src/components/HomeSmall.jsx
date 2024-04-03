import { Link } from "react-router-dom";

const HomeSmall = () => {
  return (
    <>
      <div
        className="flex h-full font-inter items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(/mobileBg.webp)` }}
      >
        <div className="flex flex-col justify-center text-center items-center my-36">
          <img src="/Logosplash.webp" alt="Logo" className="w-48 mb-8" />
          <div className="flex flex-row gap-20 mb-4">
            <img
              src="/LeftPlayer.webp"
              alt="Left Image"
              width={120}
              className="max-h-52 object-cover"
            />
            <img
              src="/RightPlayer.webp"
              alt="Right Image"
              width={120}
              className="max-h-52 object-cover"
            />
          </div>
          <h1 className="text-3xl design-text-black font-bold mb-2">
            Welcome to CricQuest
          </h1>
          <p className="text-lg text-blue-500 font-semibold">
            A fun guessing game of cricket players for this IPL season
          </p>
          <Link to="/play">
            <button className="custom-button mt-8 mb-4">PLAY</button>
          </Link>
          <a
            href="#about"
            className="font-inter design-text-black no-underline text-white font-bold"
          >
            How to play?
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeSmall;
