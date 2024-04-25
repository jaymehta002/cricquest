import { useEffect, useState } from "react";
import GamesCompleted from "./GamesCompleted";
import PlayersGuessed from "./PlayersGuessed";
import WinStreak from "./WinStreak";
import ShareStreak from "./ShareStreak";
import OnePlayer from "./OnePlayer";
import TwoPlayer from "./TwoPlayer";
import ThreePlayer from "./ThreePlayer";

const Badges = () => {
  const [gamesCompleted, setGamesCompleted] = useState(0);
  const [playersGuessed, setPlayersGuessed] = useState(0);
  const [winStreak, setWinStreak] = useState(0);
  const [shareCount, setShareCount] = useState(0);
  const [onePlayer, setOnePlayer] = useState(0);
  const [twoPlayer, setTwoPlayer] = useState(0);
  const [threePlayer, setThreePlayer] = useState(0);

  // useEffect(() => {
  //     const stat = localStorage.getItem('stat');
  //     const totalPlayers = localStorage.getItem('totalPlayers');
  //     if(!totalPlayers){
  //         localStorage.setItem('totalPlayers', JSON.stringify(0));
  //     } else {
  //         setPlayersGuessed(JSON.parse(totalPlayers));
  //     }

  //     const sc = (localStorage.getItem('shareCount'));
  //     if(!sc){
  //         localStorage.setItem('shareCount', JSON.stringify(0));
  //     } else {
  //         setShareCount(sc);
  //     }

  //     const one = (localStorage.getItem('onePlayer'));
  //     if(!one){
  //         localStorage.setItem('onePlayer', JSON.stringify(0));
  //     } else {
  //         setOnePlayer(one);
  //     }

  //     const two = (localStorage.getItem('twoPlayer'));
  //     if(!two){
  //         localStorage.setItem('twoPlayer', JSON.stringify(0));
  //     } else {
  //         setTwoPlayer(two);
  //     }

  //     const three = (localStorage.getItem('threePlayer'));
  //     if(!three){
  //         localStorage.setItem('threePlayer', JSON.stringify(0));
  //     } else {
  //         setThreePlayer(three);
  //     }

  //     if(!totalPlayers) localStorage.setItem('totalPlayers', JSON.stringify(0));
  //     if(!sc) localStorage.setItem('shareCount', JSON.stringify(0));
  //     if(!one) localStorage.setItem('onePlayer', JSON.stringify(0));
  //     if(!two) localStorage.setItem('twoPlayer', JSON.stringify(0));
  //     if(!three) localStorage.setItem('threePlayer', JSON.stringify(0));

  //     setOnePlayer(one);
  //     setTwoPlayer(two);
  //     setThreePlayer(three);
  //     setShareCount(sc);
  //     // console.log(JSON.parse(stat));
  //     setGamesCompleted(JSON.parse(stat).totalGames);
  //     setPlayersGuessed(totalPlayers);
  //     setWinStreak(JSON.parse(stat).streak);
  //   }, []);

  useEffect(() => {
    const stat = localStorage.getItem("stat");

    const totalPlayers = localStorage.getItem("totalPlayers");
    const sc = localStorage.getItem("shareCount");
    const one = localStorage.getItem("onePlayer");
    const two = localStorage.getItem("twoPlayer");
    const three = localStorage.getItem("threePlayer");
    if (!stat) {
      setWinStreak(0);
    } else {
      setWinStreak(JSON.parse(stat).streak);
      setGamesCompleted(JSON.parse(stat).totalGames);
    }
    if (!totalPlayers) {
      setPlayersGuessed(0);
    } else {
      setPlayersGuessed(JSON.parse(totalPlayers));
    }
    if (!sc) {
      setShareCount(0);
    } else {
      setShareCount(sc);
    }
    if (!one) {
      setOnePlayer(0);
    } else {
      setOnePlayer(one);
    }
    if (!two) {
      setTwoPlayer(0);
    } else {
      setTwoPlayer(two);
    }
    if (!three) {
      setThreePlayer(0);
    } else {
      setThreePlayer(three);
    }
  }, []);

  return (
    <div className="font-inter container mx-auto py-10 max-h-screen">
      <h1 className="text-center  font-inter mb-2">Achievements</h1>
      <p className="text-center text-base font-inter mb-2">Collect a Variety of Caps as your <b><i>Awards!</i></b></p>
      <div className="flex items-center justify-center">
      <img src="/caps.png" alt="caps" className="mb-2" height={96} width={500} />
      </div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <GamesCompleted gamesCompleted={gamesCompleted} />
          <PlayersGuessed playersGuessed={playersGuessed} />
          <WinStreak streak={winStreak} />
          <ShareStreak count={shareCount} />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
          <OnePlayer onePlayer={onePlayer} />
          <TwoPlayer twoPlayer={twoPlayer} />
          <ThreePlayer threePlayer={threePlayer} />
        </div>
      </div>
    </div>
  );
};

export default Badges;
