import { createMarkup } from "./createMarkup.js";
import Notiflix from 'notiflix';
import axios from "axios";

const loadMore = document.querySelector('.load-more')
const list = document.querySelector('.gallery');
const input = document.querySelector('[name="searchQuery"]');
const submitForm = document.querySelector('.search-form');
submitForm.addEventListener('submit', onLoad);
loadMore.addEventListener('click', onClick)
let page = 1;
let hits = 40;

function onLoad(eve) {
  event.preventDefault();
  page = 1
  loadMore.hidden = true
  const query = input.value;
  list.innerHTML = "";
  onSearch(query)
  //   .then((data) => {
  //   console.log("then", data)
  //   if (data.totalHits === 0) {
  //     Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  //   }
  //   list.innerHTML = createMarkup(data.hits)
  //   loadMore.hidden = false;
  //   console.log(data);
    
  // }
  // ).catch(err => console.log("ERROR", err))
};




// Want to use async/await? Add the `async` keyword to your outer function/method.
async function onSearch(query, page = 1) {
  try {
    const API_KEY = '33094767-bc88b030fc5c18ef153037b77';
    const BASE_URL = 'https://pixabay.com/api/';
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
    console.log("response", response.data);
    if (response.data.totalHits === 0) {
     return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    }
    // list.innerHTML = createMarkup(response)
list.insertAdjacentHTML("beforeend", createMarkup(response));
    loadMore.hidden = false;
  } catch (error) {
    console.error(error);
  }
}

async function onClick(response) {
  page += 1;
  hits += 40;
  console.log('hits', hits)
  console.log("page", page)
  console.log("dat", response.data)
 await onSearch(input.value, page)
    console.log("dat", response)
    list.insertAdjacentHTML("beforeend", createMarkup(response));
// if (response.data.totalHits <= hits) {
//   loadMore.hidden = true;
//   Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
//     }
 
};


// console.log("hits", hits)
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



// function onSearch(query, page = 1) {
//     const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '33094767-bc88b030fc5c18ef153037b77';
  
//     console.log("1", query)
//     return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText)
//             }

//             return resp.json()
//         })
// }

