import { useState, useEffect, useRef } from 'react';
import { HiOutlineShare } from 'react-icons/hi';
import {
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, XIcon, WhatsappIcon } from "react-share"

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState(false);
  const text = "Dive into the excitement of IPL with CricQuest🏏. \nA fun online IPL trivia game. Show us how many of today's players you can guess!\nPlay now at ";
  const url = "cricquest.in";
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCopy = () => {
    const final = text + url;
    navigator.clipboard.writeText(final);

    setTimeout(() => {
      setPrompt(false);
    }, 1000);
    setPrompt(true);
  }


  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="w-4 h-8 flex items-center justify-center rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiOutlineShare />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 right-0 mt-2 w-16 bg-white rounded-md shadow-lg">
          <ul className='list-none'>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
             <TwitterShareButton url={"cricquest.in"} title={text}>
                <XIcon size={32} round />
              </TwitterShareButton>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              <FacebookShareButton url={"cricquest.in"} quote={text} description={text}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              <WhatsappShareButton url={"cricquest.in"} title={text}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              <RedditShareButton url={"cricquest.in"} title={text}>
                <RedditIcon size={32} round />
              </RedditShareButton>
            </li>
            <li>
            <button onClick={handleCopy} className="px-4 py-2 rounded-full border-none outline-none bg-white m-1">
            {prompt ? 
            (
            <svg className="h-6 w-6 text-green-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  
              <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  
              <rect x="9" y="3" width="6" height="4" rx="2" />  
              <path d="M9 14l2 2l4 -4" />
              </svg>
            ) :(<svg className="h-6 w-6 text-slate-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
</svg>)
}
          </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
