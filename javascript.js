$(document).ready(function(){

// Create list of words to choose from 
var words = ["apple","orange","banana","kiwi","grapefruit"]

// Grab a random word from that list
var chosenWord = words[Math.floor(Math.random()* words.length)]
//check
console.log(chosenWord)

// Create a variable w string "_" to be repeated for however many
// letters the chosenWord has
var space = "_ "
var spaces = space.repeat(chosenWord.length)
$("#spaces").text(spaces)

})

