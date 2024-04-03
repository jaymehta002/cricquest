
const curDate = new Date().getDate();

export async function checkStat(store, setData, setGameOver, setGameCompleted) {
    const newData = JSON.parse(localStorage.getItem("stat"));
    const newStat = { ...newData };
    const count = store.players.filter(
      (player) => player.playerName !== ""
    ).length;
    newStat.playerGuessed = count;
    const val = JSON.parse(localStorage.getItem("store"));
    if (val.lives < 1) {
      await setGameOver(true);
      await localStorage.setItem("gameOver", true);
      newStat.totalGames += 1;
    } else if (
      store.players[0].playerName !== "" &&
      store.players[1].playerName !== "" &&
      store.players[2].playerName !== "" &&
      store.players[3].playerName !== ""
    ) {
      await setGameCompleted(true);
      await localStorage.setItem("gameCompleted", true);
      newStat.totalWins += 1;
      newStat.totalGames += 1;
      if (curDate === newStat.lastPlayed + 1) {
        newStat.streak += 1;
        newStat.lastPlayed = curDate;
      } else {
        newStat.streak = 1;
        newStat.lastPlayed = curDate;
      }
    }
    await setData(newStat);
    await localStorage.setItem("stat", JSON.stringify(newStat));
  }