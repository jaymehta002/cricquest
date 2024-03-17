import React, { useState, useEffect, useRef } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const text = 'Check out this IPL quiz game!';
  const options = [
    (
      <TwitterShareButton url={'cricquest.in'} title={text}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    ),
    (
      <FacebookShareButton url={'cricquest.in'} quote={text} description={text}>
        <FacebookIcon size={32} round />      
      </FacebookShareButton>
    ),
    (
      <WhatsappShareButton url={'cricquest.in'} title={text}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    ), 
  ];

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-design-white border-none"
          onClick={toggleDropdown}
        >
          <i className='fas fa-share-alt'></i> 
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right z-50 absolute right-0 mt-2 w-full md:w-56 rounded-md shadow-lg bg-none ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 grid md:grid-cols-3 gap-2">
            {options.map((option, index) => (
              <div
                key={index}
                className="block px-2 py-2 md:px-4 md:py-2 text-sm text-gray-700 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
