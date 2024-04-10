export default function checkPlayersGuessed(store, setTotalPlayersGuessed, setOnePlayer, setTwoPlayer, setThreePlayer) {
    const val = JSON.parse(localStorage.getItem("totalPlayers"));
    // const one = JSON.parse(localStorage.getItem("onePlayer"));
    // const two = JSON.parse(localStorage.getItem("twoPlayer"));
    // const three = JSON.parse(localStorage.getItem("threePlayer"));

    const count = store.players.filter(
      (player) => player.playerName !== ""
    ).length;

    // if(count === 1){
    //     setOnePlayer(one + 1);
    //     localStorage.setItem("onePlayer", JSON.stringify(one + 1));
    // } else if(count === 2){
    //     setTwoPlayer(two + 1);
    //     localStorage.setItem("twoPlayer", JSON.stringify(two + 1));
    // } else if(count === 3){
    //     setThreePlayer(three + 1);
    //     localStorage.setItem("threePlayer", JSON.stringify(three + 1));
    // }

    setTotalPlayersGuessed(count + val);
    localStorage.setItem("totalPlayers", JSON.stringify(count + val));
    console.log('checkPlayersGuessed');
}