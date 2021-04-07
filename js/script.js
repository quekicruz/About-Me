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

//Initializing a variable (which will be a boolean if true will start the game)
let playGame;

//Initializes a variable that will be used for calculations later
let i = false;

//Starts a while loop to ensure appropriate user input to move on
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
      alert(`Sorry, I didn't quite understand '${gameUserLowercase}'... Please try again`);
      i = false;
  }
}

//Takes the playGame variable, which has been updated to true or false within the previous switch to test whether to start the game or not
if (playGame === true) {
  let userGameAnswer = prompt(`What is my first name?`)
  let usergameAnswerLC = userGameAnswer.toLowerCase();

  //if/else statements checks for correct answer
  if (usergameAnswerLC == 'keian') {
    alert(`Perfect! 1 for 1!`);
  } else {
    alert(`Close one, but the correct answer was: 'Keian'`)
  }

  //This question prompts the user asking if I prefer dogs to cats
  userGameAnswer = prompt(`Do I prefer dogs or cats?`)

  //Changes variable to lowercase
  usergameAnswerLC = userGameAnswer.toLowerCase();

  //if/else statements checks for correct answer
  if (usergameAnswerLC == 'cats') {
    alert(`Dang... You're correct! Scottish folds are my favorite breed.`)
  } else {
    alert(`Although I do love dogs, cats are much cuter in my opinion!`)
  }

  //sets the variable i equal to 3 (the attempts allowed for this question)
  i = 3;

  //Loop reasks question if answer is wrong and decreases attempts by 1 each wrong answer
  while (i > 0) {

    //Prompts user with question about where I've been
    userGameAnswer = prompt(`Where have I been outside of the United States? I'll give you ${i} guess(es) for this question.`)

    //Changes variable to lowercase
    usergameAnswerLC = userGameAnswer.toLowerCase();

    //if/else statements checks for correct answer
    if (usergameAnswerLC === 'canada' || usergameAnswerLC === 'new zealand' || usergameAnswerLC === 'peru' || usergameAnswerLC === 'australia') {
      alert(`You're on a roll! Peru, Australia, Canada, and New Zealand are all beautiful for different reasons.`)
      break;
    } else {
      alert(`Incorrect!`)

      //Subtracts one from the variable i to indicate one less guess
      i--;
    }
  }

  //Variable i should only ever equal 0 here if the user answered wrong each time, and it gives them the answer and moves on
  if (i === 0) {
    alert(`Unfortunately, the correct answer was any of the following: 'Australia', 'New Zealand', 'Peru', or 'Canada'.`)
  }

  //Prompted with a question asking whats my favorite color
  userGameAnswer = prompt(`What's my favorite color?`)

  //Changes variable to lowercase
  usergameAnswerLC = userGameAnswer.toLowerCase();

  //if/else statements checks for correct answer
  if (usergameAnswerLC === 'purple') {
    alert(`Purple is warm and inviting I don't know why but its beautiful!`)
  } else {
    alert(`Good try, but purple is my favorite color.`)
  }

  //Final question in the game asking my favorite food
  userGameAnswer = prompt(`Whats my favorite food? Hint: It's either Enchiladas, Pop Rocks, or Cotton Candy.`)

  //Changes variable to lowercase
  usergameAnswerLC = userGameAnswer.toLowerCase();

  //if/else statements checks for correct answer
  if (usergameAnswerLC === 'pop rocks') {
    alert(`Heck yeah, I love pop rocks!`)
  } else {
    alert(`Sure, ${usergameAnswerLC} is good, but ${usergameAnswerLC} doesn't pop in your mouth like delicious pop rocks do...`)
  }

  //Gives user a friendly leaving message
  alert(`Thanks for playing, I hope you learned something new about me!`)
}
