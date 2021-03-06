// code.js 
const currentWidth = document.documentElement.clientWidth
const photos = document.querySelector('#photoList');
const searchTerm = "dogs";

if (currentWidth < 400)                         { var sizeCode = "s" }
else if (currentWidth >= 400 && currentWidth < 550) { sizeCode = "t" }
else if (currentWidth >= 550 && currentWidth < 800) { sizeCode = "q" }
else                                                { sizeCode = "m" };

getPictures(searchTerm);

async function getPictures() {
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=04d92623552bfe67ac4103624c4b9d61&tags=Dogfood&per_page=16&page=1&format=json&nojsoncallback=1`);
    const data = await response.json();
    showPhotos(data.photos.photo);
}


const showPhotos = array => {
    array.forEach(photo => {
        const item = document.createElement('li');
        item.innerHTML = `<img src="https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${sizeCode}.jpg" alt="${photo.title}">`;
//        if ( photo.id == 51467498709 || photo.id == 51467712075 || photo.id == 51466763306 ) {
            photos.appendChild(item)        ;
    });
}


