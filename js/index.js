console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked
*/
const firstInput = document.querySelector('[data-js="first-input"]');
const clickButton = document.querySelector('[data-js="button-uppercase"]');

clickButton.addEventListener("click", () => {
  const inputValue = firstInput.value;
  console.log(inputValue);
  let upperValue = inputValue.toUpperCase();
  console.log(upperValue);
  firstInput.value = upperValue;
});
/*  
Hint: Access the value by using `.value` on the input element

*/
