import { PLAYERS } from "../assets/players"; 

const date = new Date();
const curDate = date.getDate();

export function generatePlayers(){
    const players = [];

    for(let i=31; i<35; i+=2){
        const idx1 = ((((curDate)*11)*17*i))%PLAYERS.length;
        const idx2 = ((((curDate)*23)*29*i))%PLAYERS.length;
        const a1 = PLAYERS[idx1];
        const a2 = PLAYERS[idx2];
        players.push(a1);
        players.push(a2);
    }
    return players;

}


export async function checkLocalStorage(store, setStore, data, setData, setGameCompleted, setGameOver, setGuessed) {
    const fullDate = new Date();
    const date = fullDate.getDate();
    const lastPlayed = localStorage.getItem('lastPlayed');
    if(lastPlayed == date){
        const guess = JSON.parse(localStorage.getItem('guessed'));
        if(!guess) localStorage.setItem('guessed', JSON.stringify([]));
        await setGuessed(guess);
        const temp = JSON.parse(localStorage.getItem('stat'));
        console.log(temp);
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
        localStorage.setItem('guessed', JSON.stringify([]));
        localStorage.removeItem('store')
        localStorage.removeItem('gameCompleted');
        localStorage.removeItem('gameOver');
        localStorage.setItem('lastPlayed', date);
    }
}

export async function updateLife(store, setStore) {
    if(store.lives < 1) return console.log('Game Over');
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

export async function checkStat(store, setData, setGameOver, setGameCompleted) {
    const newData = JSON.parse(localStorage.getItem('stat'));
    const newStat = {...newData};
    const count = store.players.filter((player) => player.playerName !== '').length;
    newStat.playerGuessed = count;
    if(store.lives < 1) {
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
    console.log(newStat);
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
        checkStat(store, setData, setGameOver, setGameCompleted);
    }, 1700)
    localStorage.setItem('store', JSON.stringify(store));
}
