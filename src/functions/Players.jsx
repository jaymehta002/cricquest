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
        await setData(temp);

        const gc = JSON.parse(localStorage.getItem('gameCompleted'));
        if(gc === true) setGameCompleted(true);
        if(!gc) localStorage.setItem('gameCompleted', false)

        const go = JSON.parse(localStorage.getItem('gameOver'));
        if(go === true) setGameOver(true);
        if(!go) localStorage.setItem('gameOver', false)

        const newData = localStorage.getItem('store');
        if(!newData) return;
        const newStore = JSON.parse(newData);
        setStore(newStore);
    } else {
        localStorage.removeItem('store')
        localStorage.removeItem('gameCompleted');
        localStorage.removeItem('gameOver');
        localStorage.setItem('lastPlayed', date);
    }
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
    const count = store.players.filter((player) => player.playerName !== '').length;
    newStat.playerGuessed = count;
    console.log(count);
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

export async function compare(val, hero, store, setStore, data, setData ,gameCompleted, gameOver, setGameOver, setGameCompleted) {
    const check = PLAYERS.find((player) => player.playerName.toLowerCase() === val.playerName.toLowerCase());
    
    if(!check) return;
    let flag = false;
    for(let i=0; i<4; i++){
        if(hero[i].team.toLowerCase() === check.team.toLowerCase()) {
            updateStorePlayer(i, check, 'team', store, setStore);
        }
        if(hero[i].age === check.age) {
            setTimeout(() => {
                updateStorePlayer(i, check, 'age', store, setStore);
            }, 500)
        }
        if(hero[i].nation.toLowerCase() === check.nation.toLowerCase()) {
            setTimeout(() => {
                updateStorePlayer(i, check, 'nation', store, setStore);
            }, 1000)
        }
        if(hero[i].playerName.toLowerCase() === check.playerName.toLowerCase()) {
            flag = true;
            setTimeout(() => {
                updateStorePlayer(i, check, 'playerName', store, setStore);
            }, 1500);
            
        }
    }
    
    if(flag) {
        flag = false;
    } else {
        setTimeout(() => {
            updateLife(store, setStore);
        }, 1600);
    }
    
    setTimeout(() => {
        checkStat(store, data, setData, setGameOver, setGameCompleted);
    }, 1700)
    localStorage.setItem('store', JSON.stringify(store));
}
