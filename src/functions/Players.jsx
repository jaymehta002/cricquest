import { PLAYERS } from "../assets/players"; 

export function checkLocalStorage() {
    const fullDate = new Date();
    const date = fullDate.getDate();
    const lastPlayed = localStorage.getItem('lastPlayed');
    if(lastPlayed == date){
        console.log('Welcome back');
    } else {
        console.log('Welcome');
        localStorage.setItem('lastPlayed', date);
    }
}

export function updateStorePlayer(i, check, key, store, setStore) {
    const newStore = {...store};
    newStore.players[i][key] = check[key];
    setStore(newStore);
}

export function compare(val, hero, store, setStore) {
    const check = PLAYERS.find((player) => player.playerName.toLowerCase() === val.playerName.toLowerCase());
    if(!check) return;

    for(let i=0; i<4; i++){
        if(hero[i].team.toLowerCase() === check.team.toLowerCase()) {
            updateStorePlayer(i, check, 'team', store, setStore);
        }
        if(hero[i].age === check.age) {
            updateStorePlayer(i, check, 'age', store, setStore);
        }
        if(hero[i].nation.toLowerCase() === check.nation.toLowerCase()) {
            updateStorePlayer(i, check, 'nation', store, setStore);
        }
        if(hero[i].playerName.toLowerCase() === check.playerName.toLowerCase()) {
            updateStorePlayer(i, check, 'playerName', store, setStore);
        }
        localStorage.setItem('store', JSON.stringify(store));
    }
}
