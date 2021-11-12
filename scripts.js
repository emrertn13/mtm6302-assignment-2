// What Have I Done & Resources
    // For this project I have used our class recordings and exercises + IMDAC portal for answers and how to.
    // addEventListener that I use :
    //     click image - image popout
    //     dblclick - image goes back normal (also can hover out)
    //     mouseover image - changes the image src 
    //     mouseout image - turns image src normal
    //     mouseover button - changes button background & text color
    //     mouseout button - turns button styles back to normal
    //     click button - console log 
    // Images are from: https://pixabay.com/
    // Css reset no additional css or javascript libraries
    // layout is responsive for every display size 
    // Completes assignment 


// Data 
const $carGallery = document.getElementById('car-gallery')

const carOne = {
    id: 'redFerrari',
    name: 'f40-ferrari-inspect',
    carName: 'Red Ferrari F40',
    image: 'images/red-ferrari-snow.jpg',
    description: 'Small Toy Model Ferrari F40 - Red',
    price: '$29.99'
}
const carTwo = {
    id: 'grayMclaren',
    name: '600tl-mclaren-inspect',
    carName: 'Gray McLaren 600LT',
    image: 'images/gray-mclaren.jpg',
    description: 'Small Toy Model McLaren 600LT - Gray',
    price: '$29.99'
}
const carThree = {
    id: 'racePorche935',
    name: 'race-porche-inspect',
    carName: 'White Porche 935 Race Car',
    image: 'images/white-race-car.jpg',
    description: 'Small Toy Model Porche 935 Race Car - White',
    price: '$29.99'
}
const carFour = {
    id: 'gtrBlack',
    name: 'gtr-nissan-inspect',
    carName: 'Black Nissan GTR R35',
    image: 'images/black-gtr-snow.jpg',
    description: 'Small Toy Model Nissan GTR R35 - Black',
    price: '$25.00'
}
const carFive = {
    id: 'whiteMercedes',
    name: 'amg-mercedes-inspect',
    carName: 'White Mercedes SL65 AMG',
    image: 'images/white-mercedes.jpg',
    description: 'Small Toy Model Vintage HotRod - Purple',
    price: '$20.00'
}
const carSix = {
    id: 'redMustang',
    name: '2010-mustang-inspect',
    carName: 'Red Ford Mustang 2010',
    image: 'images/red-ford-mustang.jpg',
    description: 'Small Toy Model 2010 Ford Mustang - Red',
    price: '$15.00'
}
const carSeven = {
    id: 'whiteFiat500',
    name: '500-fiat-inspect',
    carName: 'White Fiat 500',
    image: 'images/white-fiat-500.jpg',
    description: 'Small Toy Model Fiat 500 - White',
    price: '$10.00'
}
const carEight = {
    id: 'miniCooper',
    name: 'mini-cooper-inspect',
    carName: 'Red 2-door Mini Cooper',
    image: 'images/red-minicooper-snow.jpg',
    description: 'Small Toy Model 2-door Mini Cooper - Red',
    price: '$15.00'
}
const carNine = {
    id: 'yellowBug',
    name: 'taxi-beetle-inspect',
    carName: 'Yellow Taxi Bug',
    image: 'images/yellow-bug-taxi.jpg',
    description: 'Small Toy Model Volkswagen Beetle - Taxi',
    price: '$10.00'
}
const carTen = {
    id: 'policeVan',
    name: 'police-minivan-inspect',
    carName: 'Volkswagen Police Minivan',
    image: 'images/police-minivan.jpg',
    description: 'Small Toy Model Volkswagen Minivan - Police',
    price: '$10.00'
}
const carTenOne = {
    id: 'redVwMinivan',
    name: 'vw-minivan-inspect',
    carName: 'Red Volkswagen Minivan',
    image: 'images/red-minivan-wv.jpg',
    description: 'Small Toy Model Vintage Volkswagen Minivan - Red',
    price: '$8.00'
}
const carTenTwo = {
    id: 'goldenMinivan',
    name: 'hotwheels-minivan-inspect',
    carName: 'Golden Hotwheels Minivan',
    image: 'images/golden-minivan.jpg',
    description: 'Small Toy Model Hotwheels Minivan - Golden',
    price: '$29.99'
}
const carTenThree = {
    id: 'whiteJeep',
    name: '4x4-jeep-inspect',
    carName: 'White 4X4 Off-Road Jeep',
    image: 'images/white-jeep-wood.jpg',
    description: 'Small Toy Model 4X4 Off-Road Jeep - White',
    price: '$12.00'
}
const carTenFour = {
    id: 'grayFordTruck',
    name: 'f150-ford-inspect',
    carName: 'Gray Ford F-150 Truck',
    image: 'images/gray-ford-truck.jpg',
    description: 'Small Toy Model Ford F-150 Truck - Gray',
    price: '$10.00'
}
const carTenFive = {
    id: 'orangeJeep',
    name: 'renegade-jeep-inspect',
    carName: 'Orange Jeep Renegade',
    image: 'images/orange-jeep-back.jpg',
    description: 'Small Toy Model Jeep Renegade - Orange',
    price: '$10.00'
}

const listOfCars = [carOne, carTwo, carThree, carFour, carFive, carSix, carSeven, carEight, carNine, carTen, carTenOne, carTenTwo, carTenThree, carTenFour, carTenFive]
const carsDisplayed = 15 

// Code 
function setCars(carsArray, numberOfCars) {
    let carGalleryHTML = ''

    for (let i = 0; i < numberOfCars; i++) {
        const carSructure = `
            <div id="${carsArray[i].id}" class="carsDiv">
                <img src="${carsArray[i].image}" class="carsImg interact">
                <div class="container">
                    <h2>${carsArray[i].carName}</h2>
                    <p>${carsArray[i].description}</p>
                    <p>${carsArray[i].price}</p>
                    <button class="button" name="${carsArray[i].name}">Inspect Model Car</button>
                </div>
            </div>
        `
        carGalleryHTML += carSructure
    }

    $carGallery.innerHTML += carGalleryHTML
}

// Run 
setCars(listOfCars, carsDisplayed)

const $images = document.querySelectorAll('img')
const $buttons = document.querySelectorAll('button')

for (let $image of $images) {
    $image.addEventListener('click', function() {
        $image.setAttribute('style', 'width: 80%; position: fixed; left: 10rem; top: 3rem; border: 5px solid black')
    })
    $image.addEventListener('dblclick', function() {
        $image.setAttribute('style', 'width: 100%')
    })
    $image.addEventListener('mouseover', function() {
        $image.setAttribute('style', 'content:url("images/sold-out.jpg")')
    })
    $image.addEventListener('mouseout', function() {
        $image.setAttribute('style', 'content:src("${carsArray[i].image}")')
    })
}

for (let $button of $buttons) {
    $button.addEventListener('mouseover', function() {
        $button.setAttribute('style', 'background-color: black; color: white')
    })
    $button.addEventListener('mouseout', function() {
        $button.setAttribute('style', 'background-color: white; color: black')
    })
    $button.addEventListener('click', function() {
        console.log('Website Under Construction')
    })
}