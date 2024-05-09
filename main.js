const URL = 'https://api.thedogapi.com/v1/images/search';

const button = document.querySelector('button');

async function reload(){
  const res = await fetch(URL);
  const data = await res.json();
  const img = document.querySelector('img');
  img.src = data[0].url;
}

button.addEventListener('click', () => {reload()});
reload()