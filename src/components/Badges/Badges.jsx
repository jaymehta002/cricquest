import React from 'react';
import { useEffect, useState } from 'react';
import GamesCompleted from './GamesCompleted';
import PlayersGuessed from './PlayersGuessed';
import WinStreak from './WinStreak';
import ShareStreak from './ShareStreak';

const Badges = () => {
    const [gamesCompleted, setGamesCompleted] = useState(0);
    const [playersGuessed, setPlayersGuessed] = useState(0);
    const [winStreak, setWinStreak] = useState(0);
    const [shareCount, setShareCount] = useState(0);
    useEffect(() => {
        const stat = localStorage.getItem('stat');
        const totalPlayers = JSON.parse(localStorage.getItem('totalPlayers'));
        const sc = JSON.parse(localStorage.getItem('shareCount'));
        setShareCount(sc);
        // console.log(JSON.parse(stat));
        setGamesCompleted(JSON.parse(stat).totalGames);
        setWinStreak(JSON.parse(stat).streak);
        setPlayersGuessed(totalPlayers);
      }, []);
      
  return (
    <div className="font-inter container mx-auto py-10 max-h-screen">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <GamesCompleted gamesCompleted={gamesCompleted}/>
          <PlayersGuessed playersGuessed={playersGuessed}/>
          <WinStreak streak={winStreak}/>
          <ShareStreak count={shareCount}/>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
          <GamesCompleted gamesCompleted={gamesCompleted}/>
          <PlayersGuessed playersGuessed={playersGuessed}/>
          <WinStreak streak={winStreak}/>
        </div>
      </div>
    </div>
  );
};

export default Badges;
