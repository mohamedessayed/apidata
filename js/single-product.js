var id = window.location.search.slice(4)
fetch(`https://fakestoreapi.com/products/${id}`)
  .then(function(response){
    return response.json()
  })
  .then(function(product){
    var htmlRow = document.querySelector('.row')

    htmlRow.innerHTML = `<div class="d-flex">
                    <div class="w-50">
                        <img src="${product.image}" alt="" class="w-100">
                    </div>
                    <div class="w-50 bg-secondary-subtle p-4">
                        <h2> ${product.title} </h2>
                        <h3 class="text-success"> ${product.price}$ </h3>
                        <p>
                            ${product.description}
                        </p>
                        <div>
                            <button class="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>`

  })