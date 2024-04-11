export default function checkPlayersGuessed(store, setTotalPlayersGuessed, setOnePlayer, setTwoPlayer, setThreePlayer) {
    const val = JSON.parse(localStorage.getItem("totalPlayers"));
    let one = JSON.parse(localStorage.getItem("onePlayer"));
    let two = JSON.parse(localStorage.getItem("twoPlayer"));
    let three = JSON.parse(localStorage.getItem("threePlayer"));



    const count = store.players.filter(
      (player) => player.playerName !== ""
    ).length;

    if(count === 1){
        one++
    } else if(count === 2){
        two++
    } else if(count === 3){
        three++
    }



    setTotalPlayersGuessed(count + val);
    localStorage.setItem("totalPlayers", JSON.stringify(count + val));
    localStorage.setItem("onePlayer", JSON.stringify(one));
    localStorage.setItem("twoPlayer", JSON.stringify(two));
    localStorage.setItem("threePlayer", JSON.stringify(three));
    console.log('checkPlayersGuessed');

}