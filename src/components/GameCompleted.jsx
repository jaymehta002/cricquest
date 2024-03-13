import React, { useState } from "react";

const GameCompleted = ({ data, handleScreenshot }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    handleScreenshot();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); 
  };

  return (
    <div className="flex font-inter flex-col justify-center items-center">
      {copied && (
        <div className="bg-green-200 text-green-700 p-2 rounded mb-4">
          Text copied to clipboard!
        </div>
      )}
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 mt-8"
      >
        Share Your Victory
      </button>
      <div className="bg-design-white  rounded-lg p-8 mb-8">
        <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
          Congratulations! You've completed the game.
        </h1>
        <div className="grid grid-cols-4 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <span className="text-2xl lg:text-3xl font-bold text-blue-500">
              {Number(data.totalWins)}
            </span>
            <h2 className="text-xs text-gray-500 font-semibold text-center  mb-2">
              GAMES <br /> COMPLETED
            </h2>
          </div>
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <span className="text-2xl lg:text-3xl font-bold text-blue-500">
              {Number(data.playerGuessed)}
            </span>
            <h2 className="text-xs font-semibold text-center text-gray-500 mb-2">
              PLAYERS
              <br />
              GUESSED
            </h2>
          </div>
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <span className="text-2xl lg:text-3xl font-bold text-blue-500">
              {Number(data.totalGames)}
            </span>
            <h2 className="text-xs font-semibold text-center text-gray-500 mb-2">
              TOTAL <br />
              GAMES
            </h2>
          </div>
          <div className="flex flex-col items-center mb-4 lg:mb-0">
            <span className="text-2xl lg:text-3xl font-bold text-blue-500">
              {Number(data.streak)}
            </span>
            <h2 className="text-xs font-semibold text-center text-gray-500 mb-2">
              WIN <br />
              STREAK
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCompleted;
