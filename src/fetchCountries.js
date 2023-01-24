

function onSearch(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '33094767-bc88b030fc5c18ef153037b77';
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }

            return resp.json()
        })
}







export { onSearch };