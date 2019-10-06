$(document).ready(function(){

    // Create list of words to choose from 
    var words = ["regifter","yadayadayada","pretzels","newman",
    "jerry","kramer","elaine","george"];
    
    // Grab a random word from that list
    var chosenWord = words[Math.floor(Math.random()* words.length)];
    //check
    console.log(chosenWord);
    
    // Create a variable w string "_" to be repeated for however many
    // letters the chosenWord has
    // var space = "_";
    var spaces = new Array(chosenWord.length).fill("_");
    $("#spaces").text(spaces.join(" "));
    
    var noGuesses = 6;
    var wins = 0;
    var losses = 0;
    var userGuess
    var lettersPressed = []
    var gameFinished = false

    // Reset function resets number of guesses and the chosenWord
    function reset(){
        noGuesses=6;
        chosenWord = words[Math.floor(Math.random()* words.length)];
        spaces = new Array(chosenWord.length).fill("_");
        $("#spaces").text(spaces.join(" "));
        gameFinished = false
        lettersPressed = []
        console.log(chosenWord)
    };
    
    $(".reset").click(function(){
        reset();
    })

    // userGuess = user input

    document.onkeyup = function(event) {
    
    if(gameFinished === true){
        reset();
    }

    userGuess = event.key;
    $("#userGuess").text("You guessed: " + userGuess);

    console.log(spaces.join(""))

    if(lettersPressed.indexOf(userGuess)!== -1){
        alert("You've already guessed that letter!")
    }
    else{
        lettersPressed.push(userGuess)
    }

    // if user input lies in the chosen word do...
        if(chosenWord.indexOf(userGuess) !== -1){
            
            for(var i = 0; i < chosenWord.length; i++){

                if(chosenWord[i]===userGuess){
                    spaces[i] = userGuess;
                }

                $("#spaces").text(spaces.join(" "));
            }

            // else if the variable spaces is the same as the chosenWord
            // increase # of wins by 1, reset # of guesses, and reset chosen word
            if(spaces.join("") == chosenWord){
                wins++;
                alert("YOU WON!")
                gameFinished = true;

            }

            // Check
            console.log("Y");
            console.log(noGuesses);
        }
        else if(event.keyCode===13){
            reset();
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
                alert("You lost! :(")
                reset();

                // Check
                console.log(chosenWord);
                console.log("No losses: " + losses);
            }
        }

    // Replace all divs with specific text
    $("#noGuesses").text("Number of Guesses Remaining: " + noGuesses)
    $("#score").text(wins + "-" +losses)
    }

})