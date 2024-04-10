export function updateStorePlayer(i, check, key, store, setStore) {
    const newStore = { ...store };
    newStore.players[i][key] = check[key];
    setStore(newStore);
    localStorage.setItem("store", JSON.stringify(store));
  }