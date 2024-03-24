import { useEffect, useState } from "react";
import PlayerCol from "./PlayerCol";
import { PLAYERS } from "../assets/players";
import KeyBoard from "./KeyBoard";
import { compare, generatePlayers } from "../functions/Players";
import { checkLocalStorage } from "../functions/Players";
import { updateStorePlayer } from "../functions/Players";
import { Franchise } from "../utils/design";
import { CountryFlag } from "../utils/TeamDesign";
import { FaHeart, FaMagnifyingGlass } from "react-icons/fa6";
import GameCompleted from "./GameCompleted";
import GameLost from "./GameLost";
const Game = () => {
  const [inputValue, setInputValue] = useState("");
  const [store, setStore] = useState({
    players: [
      { playerName: "", team: "", age: "", nation: "" },
      { playerName: "", team: "", age: "", nation: "" },
      { playerName: "", team: "", age: "", nation: "" },
      { playerName: "", team: "", age: "", nation: "" },
    ],
    lives: 15,
    hints: [],
    hintsLeft: 3,
  });
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [data, setData] = useState({
    totalGames: 0,
    totalWins: 0,
    streak: 0,
    playerGuessed: 0,
    curDate: "",
    lastPlayed: "",
  });
  const [guessed, setGuessed] = useState([]);
  const [hintMode, setHintMode] = useState(false);
  const [isEnterPressed, setEnterPressed] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [attempt, setAttempt] = useState(false);
  const [mask, setMask] = useState(false);
  const [animationValue, setAnimationValue] = useState("");
  const [warning, setWarning] = useState(false);
  const [correct, setCorrect] = useState(false);

  const hero = generatePlayers();

  useEffect(() => {
    checkLocalStorage(
      store,
      setStore,
      data,
      setData,
      setGameCompleted,
      setGameOver,
      setGuessed
    );
    checkLocalStorage(
      store,
      setStore,
      data,
      setData,
      setGameCompleted,
      setGameOver,
      setGuessed
    );
  }, []);

  function toggleHint() {
    setHintMode((prevHintMode) => !prevHintMode);
  }

  const revealHint = (index, key, value) => {
    if (store.hintsLeft === 0) return;
    updateStorePlayer(index, value, key, store, setStore);
    const newStore = { ...store };
    newStore.hints.push({ index, key, value });
    newStore.hintsLeft -= 1;
    setStore(newStore);
    localStorage.setItem("store", JSON.stringify(store));
    toggleHint();
  };

    const handleKeyPress = (key) => {
      if (key === "DEL") {
        setInputValue((prevInputValue) => prevInputValue.slice(0, -1));
      } else if (key === "SPACE") {
        setInputValue((prevInputValue) => prevInputValue + " ");
      } else if (key === "GUESS") {
        if (inputValue === "") return;
        const val = handleSuggestions();
        setTimeout(() => {
          setEnterPressed(false);
        }, 3500);
        setTimeout(() => {
          setShowPlayer(false);
          setAttempt(true);
        }, 2000);
        setTimeout(() => {
          setAttempt(false);
        }, 2500);
        setTimeout(() => {
          setMask(false);
        }, 2500);
        if (
          val.playerName === hero[0].playerName ||
          val.playerName === hero[1].playerName ||
          val.playerName === hero[2].playerName ||
          val.playerName === hero[3].playerName
        ) {
          setTimeout(() => {
            setCorrect(true);
          }, 1000);
        }
        setEnterPressed(true);
        setShowPlayer(true);
        setMask(true);
        setAnimationValue(val);
        guessed.push(val.playerName);
        setGuessed(guessed);
        localStorage.setItem("guessed", JSON.stringify(guessed));
        compare(
          val,
          hero,
          store,
          setStore,
          data,
          setData,
          gameCompleted,
          gameOver,
          setGameOver,
          setGameCompleted,
          setCorrect
        );
        setInputValue("");
      } else if (key === "HINT") {
        if (store.hintsLeft === 0) return;
        toggleHint();
      } else {
        setInputValue((prevInputValue) => prevInputValue + key);
      }
    };
  const handleSuggestions = () => {
    const input = inputValue.toLowerCase();
    const suggestions = PLAYERS.filter(
      (player) =>
        player.playerName.toLowerCase().includes(input) &&
        !guessed.includes(player.playerName)
    );
    if (suggestions.length > 0) {
      return suggestions[0];
    } else {
      setTimeout(() => {
        setWarning(false);
      }, 1000);
      setWarning(true);
      setInputValue("");
      return null;
    }
  };

  const displaySuggestion = () => {
    const val = handleSuggestions();
    if (!val) return inputValue;
    const idx = val.playerName.toLowerCase().indexOf(inputValue.toLowerCase());
    if (val) {
      return (
        <>
          {/* <span>{val.playerName.slice(0,idx)}</span> */}
          <span style={{ opacity: 0.3 }}>
            {val.playerName.slice(0, idx).toUpperCase()}
          </span>
          <span>{inputValue.toUpperCase()}</span>
          <span style={{ opacity: 0.3 }}>
            {val.playerName.slice(idx + inputValue.length).toUpperCase()}
          </span>
        </>
      );
    } else {
      return inputValue;
    }
  };

  const handleScreenshot = () => {
    const val = store.players;
    let statusText = "";
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (val[j].playerName === "") {
          if (val[j].team !== "" && i === 0) {
            statusText += "✅";
          } else if (val[j].age !== "" && i === 1) {
            statusText += "✅";
          } else if (val[j].nation !== "" && i === 2) {
            statusText += "✅";
          } else {
            statusText += "⬜";
          }
          statusText += " ";
        } else {
          statusText += "🟦";
          statusText += " ";
        }
      }
      statusText += "\n";
    }

    const finalText = `My Today's CricCard\n${statusText}💡${
      data.playerGuessed
    } of 4 - players guessed.\n🧠${15 - store.lives} - Guesses taken\n👀${
      3 - store.hintsLeft
    } - Hints Used.\nShow us how many of today's players you can guess!\nplay now at cricquest.in\n #cricquest #ipl #cricket`;
    return finalText;
  };

  const checkDisabled = (key) => {
    if (key === "GUESS") return false;
    if (key === "HINT") return false;
    if (key === "DEL") return false;
    if (key === "SPACE") {
      const comb = (inputValue + " ").toLowerCase();
      return !PLAYERS.some((player) =>
        player.playerName.toLowerCase().includes(comb)
      );
    }
    const combination = (inputValue + key).toLowerCase();
    const contains = PLAYERS.some((player) =>
      player.playerName.toLowerCase().includes(combination)
    );
    return !contains;
  };

  const animate = (val) => {
    if (val === "") return null;
    return (
      <>
        {showPlayer ? (
          <div className="flex flex-row gap-4 text-center items center">
            <span className="animate-custom-1">
              <Franchise team={val.team} />
              {/* <p className="design-text-black">{val.team}</p> */}
            </span>
            <span className="animate-custom-2 md:pt-0 pt-2">
              <p className="font-luckiest-guy age text-5xl pt-1">{val.age}</p>
            </span>
            <span className="mt-2 animate-custom-3">
              <CountryFlag country={val.nation} />
              {/* <p className="design-text-black">{val.nation}</p> */}
            </span>
            {/* </div> : attempt ? correct ? <span> {store.lives} lives left </span> : <div className="text-center">Incorrect attempt</div> : ''} */}
          </div>
        ) : attempt && correct ? (
          <div className="text-center">{store.lives} Lives left</div>
        ) : attempt ? (
          <div className="text-center">Incorrect attempt</div>
        ) : (
          <div className="text-center">{store.lives} Lives left</div>
        )}
      </>
    );
  };

  return (
    <div className="bg-design-white font-inter mt-4">
      <div>
        <div className="flex justify-center flex-row font-inter gap-12 md:gap-16 px-4 text-center items-center mb-1">
          <div className="bg-hint text-white flex flex-row items-center px-1 py-1 rounded-lg gap-1 font-inter font-semibold">
            {" "}
            <FaMagnifyingGlass color="yellow" /> {store.hintsLeft}
          </div>
          <span className="design-text-black text-base md:text-xl">
            Find today&#39;s player
          </span>
          <span className="bg-hint text-white flex flex-row items-center px-1 py-1 rounded-lg gap-1 font-inter font-semibold">
            {" "}
            <FaHeart color="red" /> {store.lives}
          </span>
        </div>
        <div
          id="screen"
          className=" mx-2 flex justify-center gap-1 items-center"
        >
          <PlayerCol
            index={0}
            hero={hero[0]}
            player={store.players[0]}
            hintMode={hintMode}
            revealHint={revealHint}
            mask={mask}
            gameOver={gameOver}
          />
          <PlayerCol
            index={1}
            hero={hero[1]}
            player={store.players[1]}
            hintMode={hintMode}
            revealHint={revealHint}
            mask={mask}
            gameOver={gameOver}
          />
          <PlayerCol
            index={2}
            hero={hero[2]}
            player={store.players[2]}
            hintMode={hintMode}
            revealHint={revealHint}
            mask={mask}
            gameOver={gameOver}
          />
          <PlayerCol
            index={3}
            hero={hero[3]}
            player={store.players[3]}
            hintMode={hintMode}
            revealHint={revealHint}
            mask={mask}
            gameOver={gameOver}
          />
        </div>
      </div>
      {gameCompleted ? (
        <>
          <GameCompleted data={data} handleScreenshot={handleScreenshot} />
        </>
      ) : gameOver ? (
        <>
          <GameLost data={data} handleScreenshot={handleScreenshot} />
        </>
      ) : (
        <>
          <div className="flex justify-center gap-1 mt-2 items-center">
            <span className="md:text-xl text-base py-4 font-bold">
              {isEnterPressed && animate(animationValue)}
              {inputValue
                ? displaySuggestion()
                : isEnterPressed
                ? ""
                : "Enter Player Name.."}
            </span>
          </div>
          <KeyBoard onKeyPress={handleKeyPress} checkDisabled={checkDisabled} />
        </>
      )}
    </div>
  );
};

export default Game;
