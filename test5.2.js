let colors = ["lightblue", "lightgreen", "lightcoral"];
let idx = 0;

let myButtonElement = document.getElementById('myButton');

myButtonElement.addEventListener('click', function() {
  document.body.style.backgroundColor = colors[idx];
  idx = (idx + 1) % colors.length;
});
