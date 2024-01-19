let searchInput = document.getElementById('searchinput');
let searchBtn = document.getElementById('searchBtn');
let imageresult = document.querySelector('.imageresult');
let searchForm = document.querySelector('#searchform')
let showMoreBtn = document.getElementById('showmorebtn');
let page = 1;
let accesskey = "H__bTtMw6_kfpvA9HZAI9K0PHjSizELPiP7p8LYcoGM";


async function getImages() {
    let url = "https://api.unsplash.com/search/collections?page=" + page + "&query=" + searchInput.value + "&client_id=" + accesskey + "&per_page=12";
    let response = await fetch(url);
    let data = await response.json();
    if (page === 1) {
        imageresult.innerHTML = "";
    }
    let results = data.results;
    results.map((result) => {
        console.log(result)
        const image = document.createElement('img');
        image.src = result.cover_photo.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.cover_photo.links.html;
        imageLink.target = '_blank';
        imageLink.appendChild(image);
        imageresult.appendChild(imageLink)
        showMoreBtn.style.display = "block"
    })
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    getImages()
})

showMoreBtn.addEventListener('click', () => {
    page++;
    getImages()
})
