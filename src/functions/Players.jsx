import { PLAYERS } from "../assets/players"; 

export async function checkLocalStorage(store, setStore, data, setData, setGameCompleted, setGameOver) {
    const fullDate = new Date();
    const date = fullDate.getDate();
    const lastPlayed = localStorage.getItem('lastPlayed');
    
    if(lastPlayed == date){
        console.log('Welcome back');
        const temp = JSON.parse(localStorage.getItem('stat'));
        if(!temp) localStorage.setItem('stat', JSON.stringify(data));

        const gc = localStorage.getItem('gameCompleted');
        if(!gc) localStorage.setItem('gameCompleted', false)

        const go = localStorage.getItem('gameOver'); 
        if(!go) localStorage.setItem('gameOver', false)
    } else {
        localStorage.removeItem('store')
        localStorage.removeItem('gameCompleted');
        localStorage.removeItem('gameOver');
        localStorage.setItem('lastPlayed', date);
    }
    
    const newData = localStorage.getItem('store');
    if(!newData) return;
    const newStore = JSON.parse(newData);
    setStore(newStore);
}

export async function updateLife(store, setStore) {
    if(store.lives <= 0) return console.log('Game Over');
    const newStore = {...store};
    newStore.lives -= 1;
    await setStore(newStore);
    localStorage.setItem('store', JSON.stringify(newStore));
}


export function updateStorePlayer(i, check, key, store, setStore) {
    const newStore = {...store};
    newStore.players[i][key] = check[key];
    setStore(newStore);
    localStorage.setItem('store', JSON.stringify(store));
}

export async function checkStat(store, data, setData, setGameOver, setGameCompleted) {
    const newData = JSON.parse(localStorage.getItem('stat'));
    if(!newData) return;
    const newStat = {...newData};
    if(store.lives <= 0) {
        newStat.totalGames += 1;
        setGameOver(true);
        localStorage.setItem('gameOver', 'true');
        return;
    }
    console.log(store.players.every((player) => player.playerName !== ''))
    if(store.players.every((player) => player.playerName !== '')) {
        console.log('Game Completed');
        newStat.totalWins += 1;
        newStat.totalGames += 1;
        setGameCompleted(true);
        localStorage.setItem('gameCompleted', 'true');
        return;
    }
    setData(newStat);
    localStorage.setItem('stat', JSON.stringify(newStat));
}

export function compare(val, hero, store, setStore, data, setData ,gameCompleted, gameOver, setGameOver, setGameCompleted) {
    const check = PLAYERS.find((player) => player.playerName.toLowerCase() === val.playerName.toLowerCase());
    if(!check) return;
    checkStat(store, data, setData, setGameOver, setGameCompleted);
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
