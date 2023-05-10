function tournamentWinner(competitions, results) {
    // Write your code here.
    //add 3 points to winners
    let theWinner = competitions[0][0];
    const winners = {[theWinner]:0};
    for (let i = 0; i < results.length; i++) {
        const [homeTeam, awayTeam] = competitions[i]
        const winner = results[i] == 1? homeTeam : awayTeam;
        if(winners[winner]){
            winners[winner] += 3;
        }else{
            winners[winner] = 3;
        }
        if(winners[winner] > winners[theWinner]){
            theWinner = winner;
        }
    }
    console.log(winners)
    console.log(winners[theWinner])
    return theWinner;
}

console.log(tournamentWinner([['html', 'C#'], ['C#', 'Python'], ['Python', 'html']], [0,0,1]));