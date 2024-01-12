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