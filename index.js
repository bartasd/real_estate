
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function onClick() {
  btn1.style.backgroundColor = 'mediumslateblue';
  btn1.style.color = 'white';
  btn2.style.backgroundColor = 'white';
  btn2.style.color = 'mediumslateblue';
});

btn2.addEventListener('click', function onClick() {
  btn2.style.backgroundColor = 'mediumslateblue';
  btn2.style.color = 'white';
  btn1.style.backgroundColor = 'white';
  btn1.style.color = 'mediumslateblue';
});