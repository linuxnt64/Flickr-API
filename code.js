// code.js 

const photos = document.querySelector('#photoList');
const searchTerm = "dogfood";

// photos.innerHTML = '';

getPictures(searchTerm);

async function getPictures() {
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=04d92623552bfe67ac4103624c4b9d61&tags=Dogfood&per_page=4&page=1&format=json&nojsoncallback=1`);
    const data = await response.json();
    console.log(data);
    //console.log(response);
    showPhotos(data.photos.photo);
}



const showPhotos = array => {
    console.log(array);
    array.forEach(photo => {
        const item = document.createElement('li');
        item.innerHTML = `<img src="https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_s.jpg" alt="${photo.title}">`;
        photos.appendChild(item);
    });
}


