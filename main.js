const URL = 'https://api.thedogapi.com/v1/images/search?limit=3&api_key=live_8CfJVJI3Xfe7I02waYjCXjfIJTC4orhq028yx7vyxbdC5qRMPrukEV8mlQgIcuYD';

const button_next = document.querySelector('#siguiente');

async function reload(){
  const res = await fetch(URL);
  const data = await res.json();
  const img_1 = document.querySelector('#dog_1');
  img_1.src = data[0].url;
  const img_2 = document.querySelector('#dog_2');
  img_2.src = data[1].url;
  const img_3 = document.querySelector('#dog_3');
  img_3.src = data[2].url;
}

button_next.addEventListener('click', () => {reload()});
reload()