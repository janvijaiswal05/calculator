

let input = document.querySelector('#calc--input');
let calcSum = '';

const buttonClick = function (a) {
  calcSum += a;
  input.textContent = calcSum;
};

document.querySelector('#equal').addEventListener('click', function () {
  try {
    let num = eval(calcSum);
    if (String(num) === 'Infinity') {
      input.textContent = 'Cannot divide by zero';
      calcSum = '';
    } else {
      input.textContent = num;
      calcSum = num;
    }
  } catch (err) {
    input.textContent = 'Error';
  }
});

document.querySelector('#clear').addEventListener('click', function () {
  calcSum = '';
  input.textContent = 0;
});
