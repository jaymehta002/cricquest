export async function checkLocalStorage(
  store,
  setStore,
  data,
  setData,
  setGameCompleted,
  setGameOver,
  setGuessed,
  setTotalPlayersGuessed
) {
  const fullDate = new Date();
  const date = fullDate.getDate();
  const lastPlayed = localStorage.getItem("lastPlayed");
  if (lastPlayed == date) {
    const guess = JSON.parse(localStorage.getItem("guessed"));
    if (!guess) localStorage.setItem("guessed", JSON.stringify([]));
    await setGuessed(guess);
    const temp = JSON.parse(localStorage.getItem("stat"));
    if (!temp) {
      localStorage.setItem("stat", JSON.stringify(data));
    } else {
      await setData(temp);
    }

    const gc = JSON.parse(localStorage.getItem("gameCompleted"));
    if (gc === true) setGameCompleted(true);
    if (!gc) localStorage.setItem("gameCompleted", false);

    const go = JSON.parse(localStorage.getItem("gameOver"));
    if (go === true) setGameOver(true);
    if (!go) localStorage.setItem("gameOver", false);

    const newData = localStorage.getItem("store");
    if (!newData) return;
    const newStore = JSON.parse(newData);
    setStore(newStore);
  } else {
    localStorage.setItem("guessed", JSON.stringify([]));
    localStorage.removeItem("store");
    localStorage.removeItem("gameCompleted");
    localStorage.removeItem("gameOver");
    localStorage.setItem("lastPlayed", date);
  }

  const total = JSON.parse(localStorage.getItem("totalPlayers"));
  if (!total) {
    localStorage.setItem("totalPlayers", JSON.stringify(0));
  } else {
    setTotalPlayersGuessed(total);
  }

  const shareCount = JSON.parse(localStorage.getItem("shareCount"));
  if (!shareCount) {
    localStorage.setItem("shareCount", JSON.stringify(0));
  } 

  const onePlayer = JSON.parse(localStorage.getItem("onePlayer"));
  if (!onePlayer) {
    localStorage.setItem("onePlayer", JSON.stringify(0));
  }

  const twoPlayer = JSON.parse(localStorage.getItem("twoPlayer"));
  if (!twoPlayer) {
    localStorage.setItem("twoPlayer", JSON.stringify(0));
  } 

  const threePlayer = JSON.parse(localStorage.getItem("threePlayer"));
  if (!threePlayer) {
    localStorage.setItem("threePlayer", JSON.stringify(0));
  } 

}