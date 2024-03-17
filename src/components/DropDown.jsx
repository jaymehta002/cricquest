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
  const text = "Check out this IPL quiz game!";
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


  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="w-8 h-8 flex items-center justify-center rounded-md cursor-pointer"
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
