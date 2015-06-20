var noSwitchWins = 0;
noSwitchLose = 0;
switchWins = 0;
switchLose = 0;
newGuess = 0;

function montyHall(numGames) {

    gameShowAns = Math.floor((Math.random() * 3) + 1);
    contestGuess = Math.floor((Math.random() * 3) + 1);
    var switchGuess = function() {
        newGuess = Math.floor((Math.random() * 3) + 1);
        if (newGuess == contestGuess) {
            newGuess = Math.floor((Math.random() * 3) + 1);
        }
    };

    if ((0 < numGames) && (numGames % 2 == 0)) {
        numGames--;
        if (contestGuess == gameShowAns) {
            noSwitchWins++;
        } else
            noSwitchLose++;
    } else if (0 < numGames) {
        numGames--;
        if (contestGuess == gameShowAns) {
            switchWins++;
        } else

            switchGuess();
        if (newGuess == gameShowAns) {
            switchWins++;
        } else
            switchLose++;
        console.log(switchWins, " switch wins");
        console.log(noSwitchWins, " noSwitchWins");
    }
    if (numGames == 1) {
        return 1;
    }
    return montyHall(numGames)
}

montyHall(100);
