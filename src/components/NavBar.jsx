import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate time left until the end of the day
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

  return (
    <nav className="bg-design-white shadow-lg">
      <div className="md:max-w-4xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
            <Link to='/' className='no-underline'>
          <div className="flex no-underline items-center">
            <img className="h-8 mr-2" src="/Logosplash.svg" alt="Logo" />
            <p className="design-text-black no-underline font-inter text-2xl font-semibold">Cricquest</p>
          </div>
            </Link>
          <div className="flex items-center space-x-4">
            <div className="text-gray-500 font-semibold">
              {timeLeft.hours.toString().padStart(2, '0')}:
              {timeLeft.minutes.toString().padStart(2, '0')}:
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <button className="text-gray-500 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">
              <i className="fas fa-question-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
