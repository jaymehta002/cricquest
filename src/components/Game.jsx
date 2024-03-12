import { useEffect, useState } from "react";
import PlayerCol from "./PlayerCol";
import KeyBoard from "./KeyBoard"
import { PLAYERS } from '../assets/players';
import { compare } from '../functions/Players';
import { checkLocalStorage } from "../functions/Players";
import { updateStorePlayer } from "../functions/Players";
import { Franchise } from "../utils/design";
import { CountryFlag } from "../utils/TeamDesign";
import { FaHeart, FaMagnifyingGlass } from "react-icons/fa6";
import GameCompleted from "./GameCompleted";
import GameLost from "./GameLost";
import html2canvas from 'html2canvas';
const Game = () => {
  const [inputValue, setInputValue] = useState('');
  const [store, setStore] = useState({
    players: [
      {playerName: '', team: '', age: '', nation: ''},
      {playerName: '', team: '', age: '', nation: ''},
      {playerName: '', team: '', age: '', nation: ''},
      {playerName: '', team: '', age: '', nation: ''}
    ],
    lives: 15,
    hints: [],
    hintsLeft: 3,
  });
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [data, setData] = useState({
    totalGames:0,
    totalWins:0,
    streak:0,
    curDate: '',
    lastPlayed: '',
  }); 
  const [hintMode, setHintMode] = useState(false);
  const [isEnterPressed, setEnterPressed] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [attempt, setAttempt] = useState(false);
  const [mask, setMask] = useState(false);
  const [animationValue, setAnimationValue] = useState('');
  const [hidePlayer, setHidePlayer] = useState(false);
  const hero = [
    PLAYERS[0],
    PLAYERS[1],
    PLAYERS[2],
    PLAYERS[33]
  ]
  
  useEffect(() => {
    checkLocalStorage(store, setStore, data, setData, setGameCompleted, setGameOver);
  },[])

  function toggleHint() {
    setHintMode((prevHintMode) => !prevHintMode);
  }

  const revealHint= (index, key, value) => {
    // console.log(index, key, value);
    if(store.hintsLeft === 0) return;
    updateStorePlayer(index, value, key, store, setStore)
    const newStore = {...store};
    newStore.hints.push({index, key, value});
    newStore.hintsLeft -= 1;
    setStore(newStore);
    localStorage.setItem('store', JSON.stringify(store));
    toggleHint();
  }

  const handleKeyPress = (key) => {
    if(key === 'DEL' ){
      setInputValue((prevInputValue) => prevInputValue.slice(0, -1));
    } else if (key === 'SPACE') {
      setInputValue((prevInputValue) => prevInputValue + ' ');
    } else if (key === 'GUESS') {
      if(inputValue === '') return;
      setTimeout(() => {
        setEnterPressed(false);
      }, 3000);
      setTimeout(() => {
        setShowPlayer(false);
        setAttempt(true);
      }, 1600);
      setTimeout(() => {
        setAttempt(false);
      }, 2500)
      setTimeout(() => {
        setMask(false);
      }, 2000)
      setEnterPressed(true);
      setShowPlayer(true);
      setMask(true);
      const val = handleSuggestions();
      setAnimationValue(val);
      compare(val, hero, store, setStore, data, setData, gameCompleted, gameOver, setGameOver, setGameCompleted);
      console.log(store);
      setInputValue('');
    } else if (key === 'HINT') {
      if(store.hintsLeft === 0) return;
      toggleHint();
    } else {
      setInputValue((prevInputValue) => prevInputValue + key);
    }

  }
  const handleSuggestions = () => {
    const input = inputValue.toLowerCase();
    const suggestions = PLAYERS.filter((player) => player.playerName.toLowerCase().includes(input));
    return suggestions[0]? suggestions[0] : null;
  }

  const displaySuggestion = () => {
    const val = handleSuggestions();
    if(!val) return inputValue;
    const idx = val.playerName.toLowerCase().indexOf(inputValue.toLowerCase());
    if (val) {
      return (
        <>
          {/* <span>{val.playerName.slice(0,idx)}</span> */}
          <span style={{opacity:0.3}}>{val.playerName.slice(0,idx).toUpperCase()}</span>
          <span>{inputValue.toUpperCase()}</span>
          <span style={{opacity:0.3}}>{val.playerName.slice(idx + inputValue.length).toUpperCase()}</span>
        </>
      )
    } else {
      return inputValue;
    }
  }

  const handleScreenshot = async () => {
    setHidePlayer(true);
    setTimeout(() => {
        setHidePlayer(false);
    }, 1000)
    try {
        await setTimeout(800);
        const screenElement = document.getElementById('screen');
        console.log(screenElement);
        if (!screenElement) return;
        const canvas = await html2canvas(screenElement);
        console.log(canvas);
        const imageUrl = await canvas.toDataURL('image/png');
        window.open(imageUrl);
        console.log('Screenshot captured:', imageUrl);
    } catch (error) {
        console.error('Error capturing screenshot:', error);
    }
};

// function checkDisabled(key) {
//   if(key === 'GUESS') return false;
//   if(key === 'HINT') return false;
//   if(key === 'DEL') return true;
//   const combination = (inputValue + key).toLowerCase();
//   const contains = PLAYERS.some((player) => player.playerName.toLowerCase().includes(combination));
//   console.log(key, contains);
//   return !contains
// }

  const animate = (val) => {
    if (val === '') return null;
    return (
      <>
        {showPlayer ? <div className="flex flex-row gap-4 text-center items center">
        <span className="animate-custom-1">
          <Franchise team={val.team} />
          <p className="design-text-black">{val.team}</p>
        </span>
        <span className="animate-custom-2">
          <p className="font-luckiest-guy age text-4xl">{val.age}</p>
        </span>
        <span className="mt-2 animate-custom-3">
          <CountryFlag country={val.nation} />
          <p className="design-text-black">{val.nation}</p>
        </span>
        </div> : attempt ? <div className="text-center">Incorrect attempt</div> : <span> {store.lives} lives left </span>}
        
        {/* <div>
          {store.lives} lives left
        </div> */}
      </>
    );
  };

  return (
    <div className='bg-design-white font-inter mt-4'>
    

    <div>
    <div className="flex justify-center flex-row font-inter gap-9 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32 px-4 text-center items-center mb-1">
      <span className="bg-hint text-white flex flex-row items-center px-1 py-1 rounded-lg gap-1 font-inter font-semibold"> < FaMagnifyingGlass color='yellow' /> {store.hintsLeft}</span>
      <span className="design-text-black text-xl">Find today&#39;s player</span>
      <span className="bg-hint text-white flex flex-row items-center px-1 py-1 rounded-lg gap-1 font-inter font-semibold"> < FaHeart color='red'/> {store.lives}</span>
    </div> 
    <div id='screen' className="m-4 flex justify-center gap-1 items-center">
        <PlayerCol index={0} hero={hero[0]} player={store.players[0]} hintMode={hintMode} revealHint={revealHint} mask={mask} hidePlayer={hidePlayer}/>
        <PlayerCol index={1} hero={hero[1]} player={store.players[1]} hintMode={hintMode} revealHint={revealHint} mask={mask} hidePlayer={hidePlayer}/>
        <PlayerCol index={2} hero={hero[2]} player={store.players[2]} hintMode={hintMode} revealHint={revealHint} mask={mask} hidePlayer={hidePlayer}/>
        <PlayerCol index={3} hero={hero[3]} player={store.players[3]} hintMode={hintMode} revealHint={revealHint} mask={mask} hidePlayer={hidePlayer}/>
    </div>
    </div>
    { gameCompleted? (
      <>
        <GameCompleted data={data} handleScreenshot={handleScreenshot} />
      </>
    ) : gameOver ? (
      <>
        <GameLost data={data} />
      </>
    ) : (
      <>
      <div className="flex justify-center gap-1 items-center">
      <span className="text-xl py-10 font-bold">
      {isEnterPressed && animate(animationValue)}
        {inputValue 
          ? displaySuggestion()
          : isEnterPressed? '' :'Exter text here..'}</span>
      </div>
    <KeyBoard onKeyPress={handleKeyPress}  />
      </>
    )}
    </div>
  )
}

export default Game
