export async function updateLife(store, setStore) {
    if (store.lives < 1) return console.log("Game Over");
    const newStore = { ...store };
    newStore.lives -= 1;
    await setStore(newStore);
    localStorage.setItem("store", JSON.stringify(newStore));
  }