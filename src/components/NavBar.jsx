import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './DropDown';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const iconsRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (iconsRef.current && !iconsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    const difference = endOfDay.getTime() - now.getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const scrollAbout = () => {
    const about = document.getElementById('about');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#about';
    }
  }

  return (
    <nav className="bg-design-white shadow-lg">
      <div className="md:max-w-4xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to='/' className='no-underline'>
            <div className="flex no-underline items-center">
              <img className="h-8 mr-2" src="/Logosplash.webp" alt="Logo" />
              <p className="design-text-black no-underline font-inter text-2xl font-semibold">CricQuest</p>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
  <div className="text-gray-500 font-semibold">
    {timeLeft.hours.toString().padStart(2, '0')}:
    {timeLeft.minutes.toString().padStart(2, '0')}:
    {timeLeft.seconds.toString().padStart(2, '0')}
  </div>
  <button onClick={scrollAbout} className="text-gray-500 bg-design-white  px-1 py-2 border-none rounded-md ">
    <i className="fas fa-question-circle"></i>
  </button>

    <Dropdown />
        </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
