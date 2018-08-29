var bgIncrementer = 0;
var header = document.querySelector('.header');
var images = ['/images/beach.jpg'];
var cities = [ 
    {city: 'Paris, France',
    info: 'Flight, Hotel, Rental Car packages are available starting at $1600 per person',
    src: '/images/paris.jpg'},
    {city: 'Kauai, Hawaii',
    info: 'Flight, Hotel, Rental Car packages are available starting at $1600 per person',
    src: '/images/kauai.jpg'},
    {city: 'Copenhagen, Denmark',
    info: 'Flight, Hotel, Rental Car packages are available starting at $1600 per person',
    src: '/images/copenhagen.jpg'},
    {city: 'Queenstown, New Zealand',
    info: 'Flight, Hotel, Rental Car packages are available starting at $1600 per person',
    src: '/images/queenstown.jpg'},
    {city: 'Sydney, Australia',
    info: 'Flight, Hotel, Rental Car packages are available starting at $1600 per person',
    src: '/images/sydney.jpg'},
    {city: 'Innsbruck, Austria',
    info: 'Flight, Hotel, Rental Car packages are available starting at $1600 per person',
    src: '/images/innsbruck.jpg'},
    {city: 'Lisbon, Portugal',
    info: 'Flight, Hotel, Rental Car packages are available starting at $1600 per person',
    src: '/images/lisbon.jpg'},
    {city: 'Rome, Italy',
    info: 'Flight, Hotel, Rental Car packages are available starting at $1600 per person',
    src: '/images/rome.jpg'} ]

for (let city of cities) {
    images.push(city.src);
}

setInterval(function() {
    bgIncrementer < images.length - 1 ? bgIncrementer++ : bgIncrementer = 0;
    home_image.style.background = 'url(' + images[bgIncrementer] + ') no-repeat center top';
    home_image.style.backgroundSize = '100%';
}, 10000);

header.addEventListener('click', function() {
    window.location.href = '/';
});
