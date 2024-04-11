
import checkPlayersGuessed from "./checkPlayersGuessed";

export async function updateLife(store, setStore, setTotalPlayersGuessed) {
    if (store.lives < 1) {
      await checkPlayersGuessed(store, setTotalPlayersGuessed);
    }
    const newStore = { ...store };
    newStore.lives -= 1;
    await setStore(newStore);
    localStorage.setItem("store", JSON.stringify(newStore));
  }