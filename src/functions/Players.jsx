import { PLAYERS } from "../assets/players"; 

const date = new Date();
const curDate = date.getDate();

export async function checkLocalStorage(store, setStore, data, setData, setGameCompleted, setGameOver) {
    const fullDate = new Date();
    const date = fullDate.getDate();
    const lastPlayed = localStorage.getItem('lastPlayed');
    
    if(lastPlayed == date){
        console.log('Welcome back');
        const temp = JSON.parse(localStorage.getItem('stat'));
        if(!temp) localStorage.setItem('stat' , JSON.stringify(data));

        const gc = JSON.parse(localStorage.getItem('gameCompleted'));
        if(gc === true) setGameCompleted(true);
        if(!gc) localStorage.setItem('gameCompleted', false)

        const go = JSON.parse(localStorage.getItem('gameOver'));
        if(go === true) setGameOver(true);
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
    const newStat = {...newData};
    if(store.lives <= 0) {
        await setGameOver(true);
        await localStorage.setItem('gameOver', true);
        newStat.totalGames += 1;
    } else if(store.players[0].playerName !== '' && store.players[1].playerName !== '' && store.players[2].playerName !== '' && store.players[3].playerName !== '') {
        await setGameCompleted(true);
        await localStorage.setItem('gameCompleted', true);
        newStat.totalWins += 1;
        newStat.totalGames += 1;
        if(curDate === (newStat.lastPlayed + 1)) {
            newStat.streak += 1;
            newStat.lastPlayed = curDate;
        } else {
            newStat.streak = 1;
            newStat.lastPlayed = curDate;
        }
    }
    await setData(newStat);
    await localStorage.setItem('stat', JSON.stringify(newStat));

}

export function compare(val, hero, store, setStore, data, setData ,gameCompleted, gameOver, setGameOver, setGameCompleted) {
    const check = PLAYERS.find((player) => player.playerName.toLowerCase() === val.playerName.toLowerCase());
    if(!check) return;
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
    
    checkStat(store, data, setData, setGameOver, setGameCompleted);
    localStorage.setItem('store', JSON.stringify(store));
}
