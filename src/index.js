import { onSearch } from "./fetchCountries.js";
// import Notiflix from 'notiflix';


const list = document.querySelector('.gallery');
const input = document.querySelector('[name="searchQuery"]');
const submitBtn = document.querySelector('.js-form-btn');
submitBtn.addEventListener('click', onLoad);


function onLoad(eve) {
    event.preventDefault();
const query = input.value
    
    onSearch(query).then(resp => list.innerHTML = createMarkup(resp)).catch(err => console.log("ERROR", err))
};




function createMarkup(obj) {
    console.log(obj.hits)
  const oblect = obj.hits;
  return oblect.map(({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads
  }) =>

    `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</div>
        `
  ).join('');

}
    
function onImg() {
  console.log('eImaglargeURL')
}

// function createMarkupCountry(arr) {
    // return arr.map(({
    //         name: {
    //             official
    //         },
    //         flags: {
    //             svg
    //         },
    //     capital,
    //     population,
    //     languages
    // }) =>
        
//         `
//         <img src="${svg}" width="50" alt="flag">
//         <h1>${official}</h1>
//         <p>Capital: ${capital}</p>
//         <p>Population: ${population}</p>
//                 <p>Languages: ${Object.values(languages)}</p>
//         `
//     ).join('')
// }




