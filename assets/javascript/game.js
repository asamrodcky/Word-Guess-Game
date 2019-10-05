$(document).ready(function(){

    // Create list of words to choose from 
    var words = ["apple","orange","banana","kiwi","grapefruit"];
    
    // Grab a random word from that list
    var chosenWord = words[Math.floor(Math.random()* words.length)];
    //check
    console.log(chosenWord);
    
    // Create a variable w string "_" to be repeated for however many
    // letters the chosenWord has
    var space = "_ ";
    var spaces = space.repeat(chosenWord.length);
    $("#spaces").text(spaces);
    
    var noGuesses = 10;
    var wins = 0;
    var losses = 0;

    // userGuess = user input
    document.onkeyup = function(event) {
    var userGuess = event.key;
    $("#userGuess").text("You guessed: " + userGuess);

    function reset(){
        noGuesses=10;
        chosenWord = words[Math.floor(Math.random()* words.length)];
    };


    // if user input lies in the chosen word do...
        if(chosenWord.indexOf(userGuess) !== -1){
        
            spaces = 

            // Check
            console.log("Y");
            console.log(noGuesses);
        }

        // else if the variable spaces is the same as the chosenWord
        // increase # of wins by 1, reset # of guesses, and reset chosen word
        else if (spaces === chosenWord){
            wins++;
            reset();

            // check
            console.log("# of wins: " + wins);
        }

    // if user input does not lie in the chosen word, decrease
    // number of guess by 1
        else{
            noGuesses --;
            
            // Check
            console.log("N");
            console.log(noGuesses);

            // if number of guesses reaches 0, increase losses by 1,
            // reset number of guesses, and reset chosenWord
            if(noGuesses===0){
                losses++;
                reset();

                // Check
                console.log(chosenWord);
                console.log("No losses: " + losses);
            }
        }

    // Replace all divs with specific text
    $("#noGuesses").text("Number of Guesses Remaining: " + noGuesses)
    $("#noWins").text("Wins: " + wins)
    $("#noLosses").text("Losses: " + losses)
    }

})