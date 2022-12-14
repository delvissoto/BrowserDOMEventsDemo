// Global scope

const myButton = document.querySelector('#math-button');
let counter = 0;
// ES6
myButton.addEventListener('click', function () {
  console.log('I was clicked! ES6 style!');
  myButton.style.backgroundColor = 'red';
  // counter++;
  // counter += 1;
  counter = counter + 1;
  // Declared inside of the event listener
  const myCounter = document.querySelector('#click-count');
  myCounter.textContent = counter;
});

// This next line will cause an error because the variable is 
// not defined in the global scope
// myCounter.innerHTML = counter;

// These are alternative ways to write the same function
function myFunction() {

}

const myEs6Function = () => {

}

myFunction();
myEs6Function();

// ES5 and older
myButton.addEventListener('click', function () {
  console.log('I was clicked! (older function method)');
  myButton.style.backgroundColor = 'red';
});

const userProfileTitle = document.querySelector('#user-profile-title');
userProfileTitle.addEventListener('mouseover', function () {
  userProfileTitle.style.backgroundColor = 'blue';
});

// What happens when there are multiple DOM elements 
// that match your query selector ?
const firstButton = document.querySelector('button');
firstButton.addEventListener('click', function () {
  // The first DOM element that matches the query selector is selected
  console.log('firstButton was clicked!');
});

// Message section
const messageButton = document.querySelector('#message-button');
const messageForm = document.querySelector('#message-form');
// The order in which event listeners are declared does not matter
messageForm.addEventListener('click', function () {
  console.log('messageForm was clicked!');
  // The third argument is a boolean that determines whether the event
  // will be processed in 'Capture' mode. If false, Bubble mode is used
}, true);
messageButton.addEventListener('click', function () {
  console.log('messageButton was clicked!');
}, true);
