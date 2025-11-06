function seeFood() {
    return new Promise(function (resolve) {
        var myHttp = new XMLHttpRequest();

        myHttp.open('get', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        myHttp.send()

        myHttp.addEventListener('readystatechange', function () {
            if (myHttp.readyState === 4 && myHttp.status === 200) {
                var responseDate = JSON.parse(myHttp.responseText)

                console.log('See food', responseDate);

                resolve() //callback function

            }
        })
    })
}

function beef() {
    return new Promise(function (resolve) {
        var myHttp = new XMLHttpRequest();

        myHttp.open('get', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef');
        myHttp.send()

        myHttp.addEventListener('readystatechange', function () {
            if (myHttp.readyState === 4 && myHttp.status === 200) {
                var responseDate = JSON.parse(myHttp.responseText)

                console.log('Beef', responseDate);

                resolve()
            }
        })
    })
}

function chicken() {

    return new Promise(function (resolve) {
        var myHttp = new XMLHttpRequest();

        myHttp.open('get', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken');
        myHttp.send()

        myHttp.addEventListener('readystatechange', function () {
            if (myHttp.readyState === 4 && myHttp.status === 200) {
                var responseDate = JSON.parse(myHttp.responseText)

                console.log('chicken', responseDate);
                resolve()
            }
        })
    })
}

function end() {
    console.log('end');
}




// seeFood(function(){
//     beef(function(){
//         chicken(end)
//     })
// })


// seeFood()
// .then(beef)
// .then(chicken)
// .then(end)


// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
// .then(function (res) {
//     return res.json();
// })
// .then(function (Data) {
//     console.log(Data);
// })
// .then(function(){
//     fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef')
//     .then(function (res) {
//         return res.json();
//     })
//     .then(function (Data) {
//         console.log(Data);
//     })
// })
// .then(function(){
//     fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken')
//     .then(function (res) {
//         return res.json();
//     })
//     .then(function (Data) {
//         console.log(Data);
//     })
// })
    

(async function(){

    var response = await fetch('https://fakestoreapi.com/products')


    response = await response.json();

    console.log(response);

    var htmlRow = document.querySelector('.row');

    for (var articel of response) {
        
        var itemDiv = document.createElement('div')
        itemDiv.classList.add('item')

        var imageDivParent = document.createElement('div');

        var imageChild = document.createElement('img');

        imageChild.src = articel.image;
        imageChild.alt = articel.title;

        imageDivParent.insertAdjacentElement('afterbegin',imageChild)

        itemDiv.insertAdjacentElement('beforeend',imageDivParent)


        htmlRow.insertAdjacentElement('beforeend',itemDiv)

    }
    

    
})(); //self invoke "Call" function





