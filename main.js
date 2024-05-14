const URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=3&api_key=live_8CfJVJI3Xfe7I02waYjCXjfIJTC4orhq028yx7vyxbdC5qRMPrukEV8mlQgIcuYD';
const URL_FAVOURITE = 'https://api.thedogapi.com/v1/favourites?limit=3&api_key=live_8CfJVJI3Xfe7I02waYjCXjfIJTC4orhq028yx7vyxbdC5qRMPrukEV8mlQgIcuYD';

const error = document.querySelector('#error')
const error2 = document.querySelector('#error2')
const button_next = document.querySelector('#siguiente');

async function loadRandomDogs(){
  const res = await fetch(URL_RANDOM);
  const data = await res.json();
  if(res.status != 200){
    error.classList.remove('success');
    error.classList.add('error');
    error.innerHTML = `Error ${res.status}: ${res.statusText}`;
    return;
  }else{
    error.classList.remove('hidden');
    error.classList.remove('error');
    error.classList.add('success');
    error.innerHTML = `Error ${res.status}`;
  }
  const img_1 = document.querySelector('#dog_1');
  img_1.src = data[0].url;
  const img_2 = document.querySelector('#dog_2');
  img_2.src = data[1].url;
  const img_3 = document.querySelector('#dog_3');
  img_3.src = data[2].url;
  console.log('Random:',data);
}

async function favouriteDogs(){
  try{
    const res2 = await fetch(URL_FAVOURITE);
    const data2 = await res2.status;
    if(res2.status !== 200) throw new Error(`${res2.status}: ${res2.statusText}`);
    const data = await res2.json();
    console.log('Favourite:',data);
  }catch(error){
    error2.classList.remove('hidden')
    error2.classList.add('error');
    error2.classList.remove('success');
    console.log(error.message)
    error2.innerHTML = `Error ${error.message}`;
  }
}

button_next.addEventListener('click', () => {loadRandomDogs()});
favouriteDogs();
loadRandomDogs();
