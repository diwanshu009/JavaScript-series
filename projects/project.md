# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html) 

# Solution code

## project1 solution
``` javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
```

## project2 solution
``` javascript
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  if(height<0 || isNaN(height) || height===' '){
    result.innerHTML = `Please enter valid height`
  }else if(weight<0|| isNaN(weight)|| weight===' '){
    result.innerHTML = `Please enter valid weight`
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    result.innerHTML = `<span> ${bmi} </span>`
  }
});
```