var productsRequest = new XMLHttpRequest();
var productDiv = document.createElement("div");
var wrapperDiv = document.querySelector("#wrapper");

function getProductInfo(e) {
  var products = JSON.parse(e.target.responseText);
  console.log(products);

for (var i = 0; i < products.products.length; i++) {
  currentProduct = products.products[i];
  productDiv.innerHTML += ` <h1>${currentProduct.name}</h1>
                            <p>Department: </p>
                            <p>Price: ${currentProduct.price}</p>
                          `
  wrapperDiv.appendChild(productDiv);

}
  console.log(productDiv);

}

productsRequest.addEventListener("load", getProductInfo);
productsRequest.open("GET", "products.json");
productsRequest.send();



//Categories JSON file

var categoriesRequest = new XMLHttpRequest();

function getCategoryInfo(e) {
 var categories = JSON.parse(e.target.responseText);
  console.log(categories);
}

categoriesRequest.addEventListener("load", getCategoryInfo);
categoriesRequest.open("GET", "categories.json");
categoriesRequest.send();
