const URL = 'https://api.thedogapi.com/v1/images/search';

fetch(URL)
  .then(response => response.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
  })
  .catch(error => console.error(error));