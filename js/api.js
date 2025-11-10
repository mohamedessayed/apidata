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

    var HTMLApiCollection = ''

    var htmlRow = document.querySelector('.row');

    for (var product of response) {
        HTMLApiCollection += `<div class="col-md-6">
                <div class="d-flex">
                    <div class="w-50">
                        <img src="${product.image}" alt="" class="w-100">
                    </div>
                    <div class="w-50 bg-secondary-subtle p-4">
                        <h2> ${product.title.slice(0,30)}... </h2>
                        <h3 class="text-success"> ${product.price}$ </h3>
                        <p>
                            ${product.description.slice(0,100)}...
                        </p>
                        <div>
                            <button class="btn btn-primary">Add to cart</button>
                            <a href="./product.html?id=${product.id}" class="text-decoration-none text-danger">View Product</a>
                        </div>
                    </div>
                </div>
            </div>`
    }

    htmlRow.innerHTML = HTMLApiCollection
    

    
})(); //self invoke "Call" function





