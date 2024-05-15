const URL = 'https://api.thedogapi.com/v1/';
const RANDOM = 'images/search';
const LIMIT_RANDOM = '?limit=3&'
const KEY = 'api_key=live_8CfJVJI3Xfe7I02waYjCXjfIJTC4orhq028yx7vyxbdC5qRMPrukEV8mlQgIcuYD';
const URL_RANDOM = URL + RANDOM + LIMIT_RANDOM + KEY;
const URL_FAVOURITE = URL + 'favourites?' + KEY;

const error = document.querySelector('#error')
const error2 = document.querySelector('#error2')
const button_next = document.querySelector('#siguiente');
const datas = [];

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
  datas.push(data[0].id);
  datas.push(data[1].id);
  datas.push(data[2].id);
}

async function favouriteDogs(){
  try{
    const res2 = await fetch(URL_FAVOURITE);
    const data2 = await res2.json();
    if(res2.status !== 200) throw new Error(`${res2.status}: ${res2.statusText}`);
    console.log('Favourite:',data2);
  }catch(error){
    error2.classList.remove('hidden')
    error2.classList.add('error');
    error2.classList.remove('success');
    console.log(error.message)
    error2.innerHTML = `Error ${error.message}`;
  }
}

async function favouriteDogsSave(id){
  const res = await fetch(URL_FAVOURITE,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: id
    }),
  });
  const data = await res.json();

  console.log('Save');

  if(res.status !== 200){
    error.classList.remove('success');
    error.classList.add('error');
    error.innerHTML = `Error ${res.status} : ${data}`;
    return;
  }else{
    error.classList.remove('hidden');
    error.classList.remove('error');
    error.classList.add('success');
    error.innerHTML = `succes: ${res.status}`;
  }
  console.log(data)
  console.log(res.status)
}

button_next.addEventListener('click', () => {
  for(let i = 0; i <= datas.length + 1;  i++){
    datas.pop();
  }
  loadRandomDogs();
});

loadRandomDogs();
favouriteDogs();

