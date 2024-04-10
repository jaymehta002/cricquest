import { useState } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, XIcon, RedditShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, RedditIcon } from 'react-share';
import PropTypes from 'prop-types';

const GameLost = ({ data, handleScreenshot }) => {
    const [prompt, setPrompt] = useState(false);
    const text = handleScreenshot()
    
    const handleCopy = () => {
        navigator.clipboard.writeText(text );
        setTimeout(() => {
            setPrompt(false);
        }, 1000);
        setPrompt(true);
    }
    const shareCount = async () => {
        const count = JSON.parse(localStorage.getItem("shareCount"));
        await localStorage.setItem("shareCount", JSON.stringify(count + 1));
      }
    return (
        <div className="flex flex-col justify-center items-center">
            <p className=" text-black font-bold mb-4 px-8 rounded-lg transition duration-300 ease-in-out transform  mt-8">Challenge Your Friends</p>
            <div className='flex flex-row gap-2' onClick={shareCount}>
                <TwitterShareButton url={' '} title={text}>
                    <XIcon size={32} round />
                </TwitterShareButton>
                <FacebookShareButton url={'cricquest.in'} quote={text} description={text}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <WhatsappShareButton url={' '} title={text}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <RedditShareButton url={' '} title={text}>
                    <RedditIcon size={32} round />
                </RedditShareButton>
                <button onClick={handleCopy} className="px-1 py-2 rounded-full border-none outline-none bg-design-white">
                {prompt ? 
            (
            <svg className="h-8 w-8 text-green-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  
              <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  
              <rect x="9" y="3" width="6" height="4" rx="2" />  
              <path d="M9 14l2 2l4 -4" />
              </svg>
            ) :(<svg className="h-8 w-8 text-slate-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
            </svg>)
            }
                </button>
            </div>
            <div className="bg-design-white rounded-lg p-8 mb-8">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Oh no! You&#39;ve lost the game.</h1>
                <div className="grid grid-cols-4 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center mb-4 lg:mb-0">
                        <span className="text-2xl font-bold text-red-500">{data.totalWins}</span>
                        <h2 className="text-xs font-semibold text-center text-gray-500 mb-2">GAMES <br />COMPLETED</h2>
                    </div>
                    <div className="flex flex-col items-center mb-4 lg:mb-0">
                        <span className="text-2xl  font-bold text-red-500">{data.playerGuessed}</span>
                        <h2 className="text-xs font-semibold text-center text-gray-500 mb-2">PLAYERS <br />FOUND</h2>
                    </div>
                    <div className="flex flex-col items-center mb-4 lg:mb-0">
                        <span className="text-2xl  font-bold text-red-500">{data.totalGames}</span>
                        <h2 className="text-xs font-semibold text-center text-gray-500 mb-2">TOTAL <br />GAMES </h2>
                    </div>
                    <div className="flex flex-col items-center mb-4 lg:mb-0">
                        <span className="text-2xl font-bold text-red-500">{data.streak}</span>
                        <h2 className="text-xs font-semibold text-center text-gray-500 mb-2">WIN <br />STREAK</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

GameLost.propTypes = {
    data: PropTypes.object.isRequired,
    handleScreenshot: PropTypes.func.isRequired
};


export default GameLost;
