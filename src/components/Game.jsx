import { useState } from "react";
import PlayerCol from "./PlayerCol"
import KeyBoard from "./KeyBoard"
import { PLAYERS } from '../assets/players';
import { compare } from '../functions/Players';
import { checkLocalStorage } from "../functions/Players";
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
  const hero = [
    PLAYERS[0],
    PLAYERS[1],
    PLAYERS[2],
    PLAYERS[33]
  ]
  checkLocalStorage();

  function revealHint(index, type, value) {
    const newStore = {...store};
    newStore.hintsLeft -= 1;
    newStore.hints.push({index, type, value});
    setStore(newStore);
    setHintMode(false);
}

  const handleKeyPress = (key) => {
    if(key === 'DEL' ){
      setInputValue((prevInputValue) => prevInputValue.slice(0, -1));
    } else if (key === 'SPACE') {
      setInputValue((prevInputValue) => prevInputValue + ' ');
    } else if (key === 'GUESS') {
      if(inputValue === '') return;
      const val = handleSuggestions();
      compare(val, hero, store, setStore);
      console.log(store);
      setInputValue('');
    } else if (key === 'HINT') {
      if(store.hintsLeft === 0) return;
      setHintMode(true);
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

  return (
    <>
    <div className="flex justify-center gap-1 items-center">
        <PlayerCol index={0} hero={hero[0]} player={store.players[0]} hintMode={hintMode} setHintMode={setHintMode} revealHint={revealHint} store={store} setStore={setStore}/>
        <PlayerCol index={1} hero={hero[1]} player={store.players[1]} hintMode={hintMode} setHintMode={setHintMode} revealHint={revealHint} store={store} setStore={setStore}/>
        <PlayerCol index={2} hero={hero[2]} player={store.players[2]} hintMode={hintMode} setHintMode={setHintMode} revealHint={revealHint} store={store} setStore={setStore}/>
        <PlayerCol index={3} hero={hero[3]} player={store.players[3]} hintMode={hintMode} setHintMode={setHintMode} revealHint={revealHint} store={store} setStore={setStore}/>
    </div>

    <div className="flex justify-center gap-1 items-center">
        <span className="text-xl py-10 font-bold">{inputValue?displaySuggestion():'Exter text here..'}</span>
        </div>
      <KeyBoard onKeyPress={handleKeyPress} />
    </>
  )
}

export default Game
