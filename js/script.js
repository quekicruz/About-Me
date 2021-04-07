'use strict';

let userName = prompt(`What's your name?`);
alert(`Welcome to my site, ${userName}!`);

function theySaidNo() {
  alert(`Sorry to hear that, maybe next time...`);
}

let playGame;

let i = false;

while (i === false) {
  let gameUser = prompt(`Would you like to play a guessing game to learn about me? Please answer with 'yes' or 'no'`);
  let gameUserLowercase = gameUser.toLowerCase();
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
      alert(`Sorry, I didn't quite understand that answer... Please try again`);
      i = false;
  }
}

if (playGame == true) {
  let userGameAnswer = prompt(`What is my first name?`)
  let usergameAnswerLC = userGameAnswer.toLowerCase();
  if (usergameAnswerLC == 'keian') {
    alert(`Perfect! 1 for 1!`);
  } else {
    alert(`Close one, but the correct answer was: 'Keian'`)
  }

  userGameAnswer = prompt(`Do I prefer dogs or cats?`)
  usergameAnswerLC = userGameAnswer.toLowerCase();
  if (usergameAnswerLC == 'cats') {
    alert(`Dang... You're correct! Scottish folds are my favorite breed.`)
  } else {
    alert(`Although I do love dogs, cats are much cuter in my opinion!`)
  }

  let i = 3;
  while (i > 0) {
    userGameAnswer = prompt(`Where have I been outside of the United States? I'll give you ${i} guess(es) for this question.`)
    usergameAnswerLC = userGameAnswer.toLowerCase();
    if (usergameAnswerLC == 'canada' || usergameAnswerLC == 'new zealand' || usergameAnswerLC == 'peru' || usergameAnswerLC == 'australia') {
      alert(`You're on a roll! Peru, Australia, and New Zealand are all beautiful for different reasons.`)
      break;
    } else {
      alert(`Incorrect, try again!`)
      i = i - 1;
    }
  }
  if (i == 0) {
    alert(`Unfortunately, the correct answer was any of the following: 'Australia', 'New Zealand', 'Peru', or 'Canada'.`)
  }

  userGameAnswer = prompt(`What's my favorite color?`)
  usergameAnswerLC = userGameAnswer.toLowerCase();
  if (usergameAnswerLC == 'purple') {
    alert(`Purple is warm and inviting I don't know why but its beautiful!`)
  } else {
    alert(`Good try, but purple is my favorite color.`)
  }

  userGameAnswer = prompt(`Whats my favorite food? Hint: It's either Enchiladas, Pop Rocks, or Cotton Candy.`)
  usergameAnswerLC = userGameAnswer.toLowerCase();
  if (usergameAnswerLC == 'pop rocks') {
    alert(`Heck yeah! I love pop rocks!`)
  } else {
    alert(`Sure, ${usergameAnswerLC} is good, but ${usergameAnswerLC} doesn't pop in your mouth like delicious pop rocks do...`)
  }
  alert(`Thanks for playing, I hope you learned something new about me!`)
}
