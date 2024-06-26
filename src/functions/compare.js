import { checkStat } from "./checkStat";
import { updateLife } from "./updateLife";
import { updateStorePlayer } from "./updateStorePlayer";


export async function compare(
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
    PLAYERS,
    totalPlayersGuessed,
    setTotalPlayersGuessed,
  ) {
    const check = PLAYERS.find(
      (player) => player.playerName.toLowerCase() === val.playerName.toLowerCase()
    );
  
    if (!check) return;
    let flag = false;
    for (let i = 0; i < 4; i++) {
      if (hero[i].team.toLowerCase() === check.team.toLowerCase()) {
        updateStorePlayer(i, check, "team", store, setStore);
      }
      if (hero[i].age === check.age) {
        setTimeout(() => {
          updateStorePlayer(i, check, "age", store, setStore);
        }, 500);
      }
      if (hero[i].nation.toLowerCase() === check.nation.toLowerCase()) {
        setTimeout(() => {
          updateStorePlayer(i, check, "nation", store, setStore);
        }, 1000);
      }
      if (hero[i].playerName.toLowerCase() === check.playerName.toLowerCase()) {
        flag = true;
        setTimeout(() => {
          updateStorePlayer(i, check, "playerName", store, setStore);
        }, 1500);
      }
    }
  
    if (flag) {
      flag = false;
    } else {
      setTimeout(() => {
        updateLife(store, setStore, setTotalPlayersGuessed);
      }, 1600);
    }
  
    setTimeout(() => {
      checkStat(store, setData, setGameOver, setGameCompleted, setTotalPlayersGuessed);
    }, 1700);



    localStorage.setItem("store", JSON.stringify(store));
  }