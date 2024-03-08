import { useEffect, useState } from "react";
import PlayerCol from "./PlayerCol"
import KeyBoard from "./KeyBoard"
import { PLAYERS } from '../assets/players';
import { compare } from '../functions/Players';
import { checkLocalStorage } from "../functions/Players";
import { updateStorePlayer } from "../functions/Players";
import { Franchise } from "../utils/design";
import { CountryFlag } from "../utils/TeamDesign";
import { FaHeart, FaMagnifyingGlass } from "react-icons/fa6";
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
    hintsLeft: 3
  });
  const [hintMode, setHintMode] = useState(false);
  const [isEnterPressed, setEnterPressed] = useState(false);
  const [animationValue, setAnimationValue] = useState('');
  const hero = [
    PLAYERS[0],
    PLAYERS[1],
    PLAYERS[2],
    PLAYERS[33]
  ]
  checkLocalStorage();

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
      setEnterPressed(true);
      const val = handleSuggestions();
      setAnimationValue(val);
      compare(val, hero, store, setStore);
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
    return suggestions[0];
  }

  const displaySuggestion = () => {
    const val = handleSuggestions();
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
    }
  }


  const animate = (val) => {
    if (val === '') return null; // Return null if val is empty
    return (
      <>
        <div className="flex flex-row gap-4 text-center items center">
        <span>
          <Franchise team={val.team} />
          <p className="design-text-black">{val.team}</p>
        </span>
        <span>
          <p className="font-luckiest-guy age text-4xl">{val.age}</p>
        </span>
        <span className="mt-2">
          <CountryFlag country={val.nation} />
          <p className="design-text-black">{val.nation}</p>
        </span>
        </div>
        <div>
          {store.lives} lives left
        </div>
      </>
    );
  };

  return (
    <div className='bg-design-white'>
    

    <div>
    <div className="flex justify-center flex-row gap-16 text-center items-center mb-1">
      <span className="bg-hint text-white flex flex-row items-center px-1 py-1 rounded-lg gap-1 font-inter font-semibold"> < FaMagnifyingGlass color='yellow' /> {store.hintsLeft}</span>
      <span className="design-text-black text-xl">Find today&#39;s player</span>
      <span className="bg-hint text-white flex flex-row items-center px-1 py-1 rounded-lg gap-1 font-inter font-semibold"> < FaHeart color='red'/> {store.lives}</span>
    </div>
    <div className="flex justify-center gap-1 items-center">
        <PlayerCol index={0} hero={hero[0]} player={store.players[0]} hintMode={hintMode} revealHint={revealHint}/>
        <PlayerCol index={1} hero={hero[1]} player={store.players[1]} hintMode={hintMode} revealHint={revealHint}/>
        <PlayerCol index={2} hero={hero[2]} player={store.players[2]} hintMode={hintMode} revealHint={revealHint}/>
        <PlayerCol index={3} hero={hero[3]} player={store.players[3]} hintMode={hintMode} revealHint={revealHint}/>
    </div>
    </div>

    <div className="flex justify-center gap-1 items-center">
        <span className="text-xl py-10 font-bold">
        {isEnterPressed && animate(animationValue)}
          {inputValue 
            ? displaySuggestion()
            : isEnterPressed? '' :'Exter text here..'}</span>
        </div>
      <KeyBoard onKeyPress={handleKeyPress} />
    </div>
  )
}

export default Game
