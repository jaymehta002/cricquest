import { PLAYERS } from "../assets/players"; 

export function checkLocalStorage(store, setStore) {
    const fullDate = new Date();
    const date = fullDate.getDate();
    const lastPlayed = localStorage.getItem('lastPlayed');
    if(lastPlayed == date){
        console.log('Welcome back');
    } else {
        console.log('Welcome');
        localStorage.setItem('lastPlayed', date);
    }
    const data = localStorage.getItem('store');
    if(!data) return;
    const newStore = JSON.parse(data);
    setStore(newStore);

}

export async function updateLife(store, setStore) {
    if(store.lives <= 0) return console.log('Game Over');
    const newStore = {...store};
    newStore.lives -= 1;
    await setStore(newStore);
    await localStorage.setItem('store', JSON.stringify(newStore));
}

export async function incrementLife (store, setStore) {
    const newStore = {...store};
    newStore.lives += 1;
    setStore(newStore);
    await localStorage.setItem('store', JSON.stringify(newStore));
}


export function updateStorePlayer(i, check, key, store, setStore) {
    const newStore = {...store};
    newStore.players[i][key] = check[key];
    setStore(newStore);
    localStorage.setItem('store', JSON.stringify(store));
}

export async function checkStat(store, data, setData) {
    const newDate = new Date();
    const date = newDate.getDate();
    const newData = {...data};
    newData.curDate = date;

    if(data.lastPlayed === (data.curDate)){
        newData.streak += 1;
        console.log('streak'); 
    }

    if(store.players.every((player) => player.playerName !== '')){
        newData.gameCompleted = true;
        newData.totalGames += 1;
        newData.totalWins += 1;
        newData.lastPlayed = date;
    } else if(store.lives <= 1){
        newData.gameOver = true;
        newData.totalGames += 1;
    }
    await setData(newData);
    await localStorage.setItem('data', JSON.stringify(newData));
}

export function compare(val, hero, store, setStore, data, setData) {
    const check = PLAYERS.find((player) => player.playerName.toLowerCase() === val.playerName.toLowerCase());
    if(!check) return;
    checkStat(store, data, setData);
    let flag = false;
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
            flag = true;
            updateStorePlayer(i, check, 'playerName', store, setStore);
        }
    }
    if(flag) {
        // incrementLife(store, setStore);
        flag = false;
    } else {
        updateLife(store, setStore);
    }

    localStorage.setItem('store', JSON.stringify(store));
}
