var div = document.getElementById('cars-img');
var rent = document.getElementById('car-rent');
var make = document.getElementById('car-make');
var model = document.getElementById('car-model');
var year = document.getElementById('car-year');
var transmission = document.getElementById('car-transmission');
var door = document.getElementById('car-doors');

function carDetails(img, rentPrice, makes, models, years, transmissions, doors) {
    div.innerHTML = `<img src="${img}" alt="Cars">`
    rent.innerHTML = rentPrice
    make.innerHTML = makes
    model.innerHTML = models
    year.innerHTML = years
    transmission.innerHTML = transmissions
    door.innerHTML = doors
}
