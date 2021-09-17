'use strict';

const randomText = document.querySelector('.randomText');
const textarea = document.querySelector('.textarea');
const startButton = document.querySelector('.btn');
const randomTextButton = document.querySelector('.btn1');

const time = document.querySelector('.time');
const mainDiv = document.querySelector('.main_div');

let changeText = false;

// Time
let timer = 60;
time.textContent = '';

const randomTextarray = [
  "If you want to make your wife or girlfriend feel appreciated, then giving her a thoughtful reminder of your feelings is a great place to start. But great romantic sayings are more than just a string of clichés put together—they're a sincere expression of your affection! Whether you're celebrating a particular occasion or simply reminding her that she's special, these romantic love messages for her are sure to bring a smile to her face!",
  "Want to let your boyfriend know that he's on your mind first thing in the morning? Wish you could give your husband a little midday pick-me-up? Luckily, technology has made this not just possible, but easy! Sending a romantic sms is a great way to make your man feel good anytime, anywhere. Whether you're saying  in words or emojis, these romantic text messages will help you put a smile on his face.",
  'The short story is a crafted form in its own right. Short stories make use of plot, resonance, and other dynamic components as in a novel, but typically to a lesser degree. While the short story is largely distinct from the novel or novella/short novel, authors generally draw from a common pool of literary techniques.',
  'In the latter half of the 19th century, the growth of print magazines and journals created a strong demand for short fiction of between 3,000 and 15,000 words.',
  'There is a large selection of short moral stories for kids online. They range from the classics like The Boy Who Cried Wolf, to somber ones talking about greed. To help you out, we’ve gathered a selection of the most 20 popular stories.',
  'Once, there was a boy who became bored when he watched over the village sheep grazing on the hillside. To entertain himself, he sang out, “Wolf! Wolf! The wolf is chasing the sheep!',
  'Later, the shepherd boy cried out once again, “Wolf! Wolf! The wolf is chasing the sheep!” To his amusement, he looked on as the villagers came running up the hill to scare the wolf away.',
];

let resultArry = [];

let randomtextArrayValues;

// Get Random Array
let randomNumber;
const writeText = function () {
  randomNumber = Math.floor(Math.random() * randomTextarray.length);
  randomText.textContent = randomTextarray[randomNumber];
  randomText.style.display = 'block';
  mainDiv.style.height = '400px';
};

// To be contenue--------------------
const yourResult = function () {
  randomtextArrayValues = randomTextarray[randomNumber].split(' ');
  const textareaValue = textarea.value;
  const textareaValueSplite = textareaValue.split(' ');

  randomtextArrayValues.forEach((el1) =>
    textareaValueSplite.forEach((el2) => {
      if (el1 == el2) {
        resultArry.push(el1);
      }
    })
  );

  return resultArry;
};

const startTimerFuntion = function () {
  // Start Timer
  const counterTimer = setInterval(() => {
    if (timer > 0) {
      timer--;
      time.textContent = timer;
      if (timer < 10) {
        time.style.color = 'red';
      }
      if (timer == 0) {
        time.style.color = 'green';
      }
    } else {
      time.textContent = 'Timer Over';
    }
  }, 1000);

  if (timer == 0) {
    clearInterval(counterTimer);
  }
};

// Count Time
let startTime, endTime;
const changeButtonTextOne = function () {
  changeText = true;
  startButton.textContent = 'Done';
  startTime = new Date();
};

const changeButtonTextTwo = function () {
  changeText = false;
  startButton.textContent = 'Start';
  endTime = new Date();
  textarea.value = '';
};

const counteTimer = function () {
  const TotalTimeUse = Math.floor((endTime - startTime) / 1000);
  const showResultLast = `${(
    (resultArry.length / randomtextArrayValues.length) *
    100
  ).toFixed(2)} % `;

  randomText.textContent = `Time: ${TotalTimeUse} s, Right: ${showResultLast}`;
};

// Start Typing
const startgame = function () {
  textarea.focus();
  if (!changeText) {
    changeButtonTextOne();
  } else {
    yourResult();
    changeButtonTextTwo();
    counteTimer();
  }
  if (startButton.textContent == 'Done') {
    timer = 60;
    startTimerFuntion();
  } else {
    timer = 0;
  }
};

// Button Funtions
randomTextButton.addEventListener('click', writeText);
startButton.addEventListener('click', startgame);
