var bgIncrementer = 0;
var header = document.querySelector('.header');
var close = document.querySelector('.close');
var modal_img = document.querySelector('.modal_img');
var city = document.querySelector('.city');
var info = document.querySelector('.info');
var inquire = document.querySelector('.inquire');
var home_image = document.querySelector('#homeimage');
var modal = document.querySelector('#modal');
var paris = document.querySelector('#paris');
var kauai = document.querySelector('#kauai');
var copenhagen = document.querySelector('#copenhagen');
var queenstown = document.querySelector('#queenstown');
var sydney = document.querySelector('#sydney');
var innsbruck = document.querySelector('#innsbruck');
var lisbon = document.querySelector('#lisbon');
var rome = document.querySelector('#rome');
var insertCityInForm = '';
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

close.addEventListener('click', function() {
    modal.style.display = 'none';
});

paris.addEventListener('click', function() {
    modal.style.display = 'block';
    modal_img.src = cities[0].src;
    city.innerHTML = cities[0].city;
    info.innerHTML = cities[0].info;
});

kauai.addEventListener('click', function() {
    modal.style.display = 'block';
    modal_img.src = cities[1].src;
    city.innerHTML = cities[1].city;
    info.innerHTML = cities[1].info;
});

copenhagen.addEventListener('click', function() {
    modal.style.display = 'block';
    modal_img.src = cities[2].src;
    city.innerHTML = cities[2].city;
    info.innerHTML = cities[2].info;
});

queenstown.addEventListener('click', function() {
    modal.style.display = 'block';
    modal_img.src = cities[3].src;
    city.innerHTML = cities[3].city;
    info.innerHTML = cities[3].info;
});

sydney.addEventListener('click', function() {
    modal.style.display = 'block';
    modal_img.src = cities[4].src;
    city.innerHTML = cities[4].city;
    info.innerHTML = cities[4].info;
});

innsbruck.addEventListener('click', function() {
    modal.style.display = 'block';
    modal_img.src = cities[5].src;
    city.innerHTML = cities[5].city;
    info.innerHTML = cities[5].info;
});

lisbon.addEventListener('click', function() {
    modal.style.display = 'block';
    modal_img.src = cities[6].src;
    city.innerHTML = cities[6].city;
    info.innerHTML = cities[6].info;
});

rome.addEventListener('click', function() {
    modal.style.display = 'block';
    modal_img.src = cities[7].src;
    city.innerHTML = cities[7].city;
    info.innerHTML = cities[7].info;
});

inquire.addEventListener('click', function() {
    insertCityInForm = city.innerHTML;
    localStorage.setItem('destination', insertCityInForm);
    window.location = '/contact';
});


function load() {
    // insertCityInForm = localStorage.getItem('destination');
    document.querySelector('#cityInfo').value = 'insertCityInForm';
    console.log('asdf');
}

document.addEventListener('onload', function() {
    load();
    console.log('fuck')
});

window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
  });
