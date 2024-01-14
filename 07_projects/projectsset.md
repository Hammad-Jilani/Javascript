# Projects related to DOM

## Project links
[Click here](https://stackbliz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body");

buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id;
    }
  })
})
// Method two
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
for(let i = 0;i<buttons.length;i++){
  buttons[i].addEventListener('click',(e)=>{
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
  })
}
```
## Project 2
```Javascript
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if(height === '' || height <= 0 || isNaN(height)){
    results.innerHTML = "invalid height";
  }
  else if(weight === '' || weight <= 0 || isNaN(weight)){
    results.innerHTML = "invalid weight";
  }
  else{
    const bmi = (weight / ((height*height)/ 10000)).toFixed(2);
    results.innerHTML = `<span> ${bmi} </span>`
  }
})
```

## Project 3
```Javascript
const clock = document.querySelector('#clock');

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```

## Project 4
```Javascript
let random = parseInt(Math.random() *100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validate(guess);
  })
}
function validate(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }
  else if(guess < 1){
    alert('Please enter a valid number');
  }
  else if(guess > 100){
    alert('Please enter a valid number');
  }
  else{
    prevGuess.push(guess);
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`GAME OVER, random number was ${random}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess){
  if(guess === random){
    displayMessage(`You guessed it right`);
    endGame();
  }else if(guess<random){
    displayMessage(`Number is low`);
  }else if(guess>random){
    displayMessage(`Number is high`);
  }
}
function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML +=`${guess} `;
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`;
}
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function newGame(){
  const newButton = document.querySelector('#newGame');
  newButton.addEventListener('click',function(e){
    random = parseInt(Math.random() *100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame = true;
  })
}
function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
```