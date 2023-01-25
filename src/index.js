import { createMarkup } from "./createMarkup.js";
// import Notiflix from 'notiflix';

const loadMore = document.querySelector('.load-more')
const list = document.querySelector('.gallery');
const input = document.querySelector('[name="searchQuery"]');
const submitForm = document.querySelector('.search-form');
submitForm.addEventListener('submit', onLoad);
loadMore.addEventListener('click', onClick)
let page = 1;


function onLoad(eve) {
  event.preventDefault();
  page = 1
  loadMore.hidden = true
  const query = input.value;
  list.innerHTML = "";
  onSearch(query).then((resp) => {
    // console.log(resp)
    list.innerHTML = createMarkup(resp)
    loadMore.hidden = false
    // console.log(resp)
  }
  ).catch(err => console.log("ERROR", err))
};


function onSearch(query, page = 1) {
    const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '33094767-bc88b030fc5c18ef153037b77';
  
    console.log("1", query)
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }

            return resp.json()
        })
}

function onClick() {
  page += 1;
  onSearch(input.value, page).then(data => list.insertAdjacentHTML("beforeend", createMarkup(data)))
  // console.log(page)
  // console.log(query)
};
// list.insertAdjacentHTML("beforeend", createMarkup(data))
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




