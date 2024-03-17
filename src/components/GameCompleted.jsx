import React, { useState } from "react";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, XIcon, RedditShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, RedditIcon } from 'react-share';

const GameCompleted = ({ data, handleScreenshot }) => {
  
  const text = handleScreenshot()


  return (
    <div className="flex font-inter flex-col justify-center items-center">
      <p className=" text-black font-bold mb-4 px-8 rounded-lg transition duration-300 ease-in-out transform  mt-8">Challenge Your Friends</p>
            <div className='flex flex-row gap-2'>
                <TwitterShareButton url={'cricquest.in'} title={text}>
                    <XIcon size={32} round />
                </TwitterShareButton>
                <FacebookShareButton url={'cricquest.in'} quote={text} description={text}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <WhatsappShareButton url={'cricquest.in'} title={text}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <RedditShareButton url={'cricquest.in'} title={text}>
                    <RedditIcon size={32} round />
                </RedditShareButton>
            </div>
      <div className="bg-design-white  rounded-lg p-5 mb-8">
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
