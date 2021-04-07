'use strict';

//Pre-initializes a variable for userName
let userName;

//Collects and welcomes user to site with a stored variable for the user's name
while (userName === null || userName === undefined) {
  userName = prompt(`What's your name?`);
}

//Welcome message
alert(`Welcome to my site, ${userName}!`);

//Function for later use, if they don't want to play the game
function theySaidNo() {
  alert(`Sorry to hear that, maybe next time...`);
}

//This variable will be the counter for how many questions they got correct
let rightAnswerCount = 0;

//Initializing a variable (which will be a boolean if true will start the game)
let playGame;

//Initializes a variable for the number guessing game
let numberGuessGameAns;

//Initializes a variable that will be used for calculations later
let i = false;

//Initializes a variable for if they will play the number game
let numGamePlayer

//Initializes a variable for the attempts allowed in the number game
let j = 4;

//Initializes a variable for the random number in the number game
let randomNumber;

//Initialized all variables for all the questions
let userGameAnswerA;
let userGameAnswerALC;

let userGameAnswerB;
let userGameAnswerBLC;

let userGameAnswerC;
let userGameAnswerCLC;

let userGameAnswerD;
let userGameAnswerDLC;

let userGameAnswerE;
let userGameAnswerELC;

let numberGameAnswer;

//Sets array for final question
let favCompany = [`microsoft`, `intel`, `nvidia`];

//Starts a while loop to ensure appropriate user input before moving on
while (i === false) {
  let gameUser = prompt(`Would you like to play a guessing game to learn about me? Please answer with 'yes' or 'no'`);

  //Initializes an identical variable as user input that is lowercase
  let gameUserLowercase = gameUser.toLowerCase();

  //This switch will test gameUser variable input to see if they want to play the game. Will loop back if they say anything other than acceptable answers
  switch (gameUserLowercase) {
    case 'yes':
      playGame = true;
      i = true;
      break;
    case 'y':
      playGame = true;
      i = true
      break;
    case 'no':
      theySaidNo();
      playGame = false;
      i = true;
      break;
    case 'n':
      theySaidNo();
      playGame = false;
      i = true;
      break;
    default:
      alert(`Sorry, I didn't understand '${gameUser}'... Please try again`);
      i = false;
  }
}

//Takes the playGame variable, which has been updated to true or false within the previous switch to test whether to start the game or not
if (playGame === true) {
  userGameAnswerA = prompt(`What is my first name?`);
  userGameAnswerALC = userGameAnswerA.toLowerCase();

  //Logged first question to the console
  console.log(`Asked what my first name is.`);

  //if/else statements checks for correct answer
  if (userGameAnswerALC == 'keian') {
    alert(`Perfect! 1 for 1!`);
    rightAnswerCount++;
  } else {
    alert(`Close one, but the correct answer was: 'Keian'`);
  }

  //This question prompts the user asking if I prefer dogs to cats
  userGameAnswerB = prompt(`Do I prefer dogs or cats?`);

  //Logged second question to the console
  console.log(`Asked if I prefer cats to dogs.`);

  //Changes variable to lowercase
  userGameAnswerBLC = userGameAnswerB.toLowerCase();

  //if/else statements checks for correct answer
  if (userGameAnswerBLC === `cats`) {
    alert(`Dang... You're correct! Scottish folds are my favorite breed.`);
    rightAnswerCount++;
  } else {
    alert(`Although I do love dogs, cats are much cuter in my opinion!`);
  }

  //sets the variable i equal to 3 (the attempts allowed for this question)
  i = 3;

  //Loop reasks question if answer is wrong and decreases attempts by 1 each wrong answer
  while (i > 0) {

    //Prompts user with question about where I've been
    userGameAnswerC = prompt(`Where have I been outside of the United States? I'll give you ${i} guess(es) for this question.`);

    //Logged third question to the console
    console.log(`Asked where I've been.`);

    //Changes variable to lowercase
    userGameAnswerCLC = userGameAnswerC.toLowerCase();

    //if/else statements checks for correct answer
    if (userGameAnswerCLC === 'canada' || userGameAnswerCLC === 'new zealand' || userGameAnswerCLC === 'peru' || userGameAnswerCLC === 'australia') {
      alert(`You're on a roll! Peru, Australia, Canada, and New Zealand are all beautiful for different reasons.`);
      rightAnswerCount++;
      break;
    } else {
      alert(`Incorrect!`);

      //Subtracts one from the variable i to indicate one less guess
      i--;
    }
  }

  //Variable i should only ever equal 0 here if the user answered wrong each time, and it gives them the answer and moves on
  if (i === 0) {
    alert(`Unfortunately, the correct answer was any of the following: 'Australia', 'New Zealand', 'Peru', or 'Canada'.`);
  }

  //Prompted with a question asking whats my favorite color
  userGameAnswerD = prompt(`What's my favorite color?`);

  //Logged fourth question to the console
  console.log(`Asked favorite color.`);

  //Changes variable to lowercase
  userGameAnswerDLC = userGameAnswerD.toLowerCase();

  //if/else statements checks for correct answer
  if (userGameAnswerDLC === 'purple') {
    alert(`Purple is warm and inviting I don't know why but its beautiful!`);
    rightAnswerCount++;
  } else {
    alert(`Good try, but purple is my favorite color.`);
  }

  //Final question in the game asking my favorite food
  userGameAnswerE = prompt(`Whats my favorite food? Hint: It's either Enchiladas, Pop Rocks, or Cotton Candy.`);

  //Logged fifth question to the console
  console.log(`Asked what my favorite food is.`);

  //Changes variable to lowercase
  userGameAnswerELC = userGameAnswerE.toLowerCase();

  //if/else statements checks for correct answer
  if (userGameAnswerELC === 'pop rocks') {
    alert(`Heck yeah, I love pop rocks!`);
    rightAnswerCount++;
  } else {
    alert(`Sure, ${userGameAnswerELC} is good, but ${userGameAnswerELC} doesn't pop in your mouth like delicious pop rocks do...`);
  }
}

i = false;
while (i === false) {

  //Prompts the user if they want to play a number guessing game
  numberGuessGameAns = prompt(`Would you like to play a number guessing game? Please enter 'yes' or 'no'`);

  //Sets users input to lowercase and stores in different variable
  let numberGuessGameAnsLC = numberGuessGameAns.toLowerCase();

  //Switch will return a value to tell the program to initiate the number game or not
  switch (numberGuessGameAnsLC) {
    case 'yes':
      numGamePlayer = true;
      i = true;
      break;
    case 'y':
      numGamePlayer = true;
      i = true;
      break;
    case 'no':
      theySaidNo();
      numGamePlayer = false;
      i = true;
      break;
    case 'n':
      theySaidNo();
      numGamePlayer = false;
      i = true;
      break;
    default:
      alert(`Sorry, I didn't understand ${numberGuessGameAns}`);
  }
}

//Tests the variable numGamePlayer, if true will execute the following number game
if (numGamePlayer === true) {

  //Sets a random number to the variable randomNumber between 0 and 100
  randomNumber = Math.floor(Math.random() * 101);

  //While loop keeps the game in play till/if they get the correct answer within the number of guesses

  while (j > 0) {
    numberGameAnswer = parseInt(prompt(`Guess the random number between 0 and 100. You have ${j} attempt(s) remaining.`));
    if (numberGameAnswer === randomNumber) {
      alert(`Good job, you got it!`);
      break;
    } else if (numberGameAnswer > randomNumber) {
      alert(`Too high!`);
      j--;
    } else if (numberGameAnswer < randomNumber) {
      alert(`Too low!`);
      j--;
    }
  }

  //Tells the user the correct answer if they exhaust all their guesses
  if (j === 0) {
    alert(`Better luck next time, ${userName}, the correct answer was ${randomNumber}.`);
  }
}

//Sets the variable j to 6 (the attempts allowed for this question)
j = 6;

//Sets a flag to check if true condition is met
let flagVar = false;

//Checks if they wanted to play the about-me game from a previous question and executes the final question if it evaluates to true
if (playGame === true) {
  alert(`Welcome to the final and bonus question for the About-Me quiz`);

  while (j > 0 && flagVar === false) {

    let favCompanyGuess = prompt(`What is Keian's favorite tech company? You have ${j} attempts remaining.`);
    let favCompanyGuessLC = favCompanyGuess.toLowerCase();

    //Logged last question to the console
    console.log(`Asked what my favorite tech companies are.`);

    //Checks user's answer and compares to the array housing my favorite tech companies
    if (favCompanyGuessLC === favCompany[0] || favCompanyGuessLC === favCompany[1] || favCompanyGuessLC === favCompany[2]) {
      alert(`You got it right! ${favCompanyGuess} is one of my favorite tech companies.`);
      rightAnswerCount++;
      flagVar = true;
      break;
    } else {
      alert(`${favCompanyGuess} is not one of them, but I will look into it...`);
      j--;
    }

    //If the user exhausts all their guesses it tells them the correct answer here
    if (j === 0) {
      alert(`Unfortunately, that was not correct. I was looking for ${favCompany[0]}, ${favCompany[1]}, or ${favCompany[2]}`)
    }
  }
}

//Message to thank the user for playing the game and inform them of their correct answer count
//This one will relay to the user if they only wanted to play the about me game but NOT the number guessing game
if (playGame === true && numGamePlayer === false) {
  alert(`Thanks for playing my game ${userName}, you got ${rightAnswerCount}/6 questions correct. I hope you learned something new about me!`);

  //This one will relay to the user if they did NOT want to play the about me game but DID want to play the number guessing game
} else if (playGame === false && numGamePlayer === true) {
  alert(`Thanks for playing my number guessing game ${userName}, you got the answer right!`);

  //This one will replay to the user if they wanted to play both my about me game AND my number guessing game
} else if (playGame === true && numGamePlayer === true) {

  //checks if their final answer in the number guessing game was correct or not, if it was it adds one value to the variable containing the right answer count
  if (numberGameAnswer === randomNumber) {
    rightAnswerCount++
  }
  alert(`Thanks for playing my games ${userName}, you got ${rightAnswerCount}/7 questions correct. I hope you learned something new about me!`)
}
