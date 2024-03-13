import { useEffect, useState } from "react";
import PlayerCol from "./PlayerCol";
import KeyBoard from "./KeyBoard";
import { PLAYERS } from "../assets/players";
import { compare, generatePlayers } from "../functions/Players";
import { checkLocalStorage } from "../functions/Players";
import { updateStorePlayer } from "../functions/Players";
import { Franchise } from "../utils/design";
import { CountryFlag } from "../utils/TeamDesign";
import { FaHeart, FaMagnifyingGlass } from "react-icons/fa6";
import GameCompleted from "./GameCompleted";
import GameLost from "./GameLost";
const Game = () => {
  const [gameNumber, setGameNumber] = useState(1);
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
      }, 3000);
      setTimeout(() => {
        setShowPlayer(false);
        setAttempt(true);
      }, 1600);
      setTimeout(() => {
        setAttempt(false);
      }, 2500);
      setTimeout(() => {
        setMask(false);
      }, 2000);
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

  const handleScreenshot = async () => {
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

    const finalText = `cricquest #${gameNumber}\nI have completed the game with ${
      store.lives
    } lives left.\n${statusText}\n${
      data.playerGuessed
    } of 4 - players found.\n${
      3 - store.hintsLeft
    } - Hints Used.\nplay now at https://cric-quest.vercel.app/`;

    navigator.clipboard
      .writeText(finalText)
      .then(() => {
        console.log("Text copied to clipboard:\n", finalText);
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard:", err);
      });
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
              <p className="design-text-black">{val.team}</p>
            </span>
            <span className="animate-custom-2 mt-3">
              <p className="font-luckiest-guy age text-5xl">{val.age}</p>
            </span>
            <span className="mt-2 animate-custom-3">
              <CountryFlag country={val.nation} />
              <p className="design-text-black">{val.nation}</p>
            </span>
            {/* </div> : attempt ? correct ? <span> {store.lives} lives left </span> : <div className="text-center">Incorrect attempt</div> : ''} */}
          </div>
        ) : attempt && correct ? (
          <div className="text-center">{store.lives} Live left</div>
        ) : attempt && !correct ? (
          <div className="text-center">Incorrect attempt</div>
        ) : (
          <p>{store.lives} Lives left</p>
        )}
      </>
    );
  };

  return (
    <div className="bg-design-white font-inter mt-4">
      <div>
        <div className="flex justify-center flex-row font-inter gap-9 md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32 px-4 text-center items-center mb-1">
          <span className="bg-hint text-white flex flex-row items-center px-1 py-1 rounded-lg gap-1 font-inter font-semibold">
            {" "}
            <FaMagnifyingGlass color="yellow" /> {store.hintsLeft}
          </span>
          <span className="design-text-black text-xl">
            Find today&#39;s player
          </span>
          <span className="bg-hint text-white flex flex-row items-center px-1 py-1 rounded-lg gap-1 font-inter font-semibold">
            {" "}
            <FaHeart color="red" /> {store.lives}
          </span>
        </div>
        <div id="screen" className="m-4 flex justify-center gap-1 items-center">
          <PlayerCol
            index={0}
            hero={hero[0]}
            player={store.players[0]}
            hintMode={hintMode}
            revealHint={revealHint}
            mask={mask}
          />
          <PlayerCol
            index={1}
            hero={hero[1]}
            player={store.players[1]}
            hintMode={hintMode}
            revealHint={revealHint}
            mask={mask}
          />
          <PlayerCol
            index={2}
            hero={hero[2]}
            player={store.players[2]}
            hintMode={hintMode}
            revealHint={revealHint}
            mask={mask}
          />
          <PlayerCol
            index={3}
            hero={hero[3]}
            player={store.players[3]}
            hintMode={hintMode}
            revealHint={revealHint}
            mask={mask}
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
          <div className="flex justify-center gap-1 items-center">
            <span className="text-xl py-10 font-bold">
              {isEnterPressed && animate(animationValue)}
              {inputValue
                ? displaySuggestion()
                : isEnterPressed
                ? ""
                : "Exter text here.."}
            </span>
          </div>
          <KeyBoard onKeyPress={handleKeyPress} checkDisabled={checkDisabled} />
        </>
      )}
    </div>
  );
};

export default Game;
