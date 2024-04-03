export default function generate(PLAYERS) {
    const date = new Date();
    const curDate = date.getDate();
    const curMonth = date.getMonth() + 1;
    const players = [];
    for (let i = 31; i < 39; i += 2) {
        const idx = (curDate * curMonth * 19 * 17 * i) % PLAYERS.length;
        players.push(PLAYERS[idx]);
    }
    return players;
}