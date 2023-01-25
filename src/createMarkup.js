
function createMarkup(obj) {
  // console.log(obj)
  if (obj.hits.length === 0) {
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  }
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
// function onSearch(query) {
//     const BASE_URL = 'https://pixabay.com/api/';
//     const API_KEY = '33094767-bc88b030fc5c18ef153037b77';
//     let page = 1;
//     return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText)
//             }

//             return resp.json()
//         })
// }




export { createMarkup };