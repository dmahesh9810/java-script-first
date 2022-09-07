const btn1 = document.querySelector('.btn1');
// const model = ;
// const close = document.querySelector('.close');

btn1.addEventListener('click', function () {
  document.querySelector('.model').classList.remove('hidden');
  document.getElementById('overlay').style.display = 'block';
});
document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.model').classList.add('hidden');

  document.getElementById('overlay').style.display = 'none';Project1/script.js
});

document.addEventListener('keydown', function cans(e) {
  if (e.key == 'Escape') {
    document.querySelector('.model').classList.add('hidden');

    document.getElementById('overlay').style.display = 'none';
  }
});
