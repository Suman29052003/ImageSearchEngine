let searchInput = document.getElementById('searchinput');
let searchBtn = document.getElementById('searchBtn');
let imageresult = document.querySelector('.imageresult');
let searchForm = document.querySelector('#searchform')
let showMoreBtn = document.getElementById('showmorebtn');
let page = 1;
let accesskey = "H__bTtMw6_kfpvA9HZAI9K0PHjSizELPiP7p8LYcoGM";


async function getImages() {
    let url = "https://api.unsplash.com/search/collections?page=" + page + "&query=" + searchInput.value + "&client_id=" + accesskey;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
}

searchForm.addEventListener('keydown', (e) => {
    e.preventDefault();
    page = 1;
    if (e.key === 'Enter') {
        getImages()
    }
})
