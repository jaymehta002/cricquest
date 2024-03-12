import React from 'react';

const GameLost = ({ data }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-8">Try Again</button>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">Oh no! You've lost the game.</h1>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                    <div className="flex flex-col items-center mb-4 lg:mb-0">
                        <h2 className="text-lg lg:text-xl font-semibold text-center text-gray-800 mb-2">Games Completed</h2>
                        <span className="text-2xl lg:text-3xl font-bold text-red-500">{data.totalWins}</span>
                    </div>
                    <div className="flex flex-col items-center mb-4 lg:mb-0">
                        <h2 className="text-lg lg:text-xl font-semibold text-center text-gray-800 mb-2">Total Games Played</h2>
                        <span className="text-2xl lg:text-3xl font-bold text-red-500">{data.totalGames}</span>
                    </div>
                    <div className="flex flex-col items-center mb-4 lg:mb-0">
                        <h2 className="text-lg lg:text-xl font-semibold text-center text-gray-800 mb-2">Streak</h2>
                        <span className="text-2xl lg:text-3xl font-bold text-red-500">{data.streak}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameLost;
