
import Notiflix from 'notiflix';
import { hits } from "./index.js";
import { loadMore } from "./index.js";

function createMarkup(response) {
  console.log("obja", response.data.totalHits)
//   if (obj.data.totalHits === 0) {
//     Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
//     };
    if (response.data.totalHits <= hits) {
        loadMore.hidden = true;
  Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
    };
  const oblect = response.data.hits;
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


export { createMarkup };