var productsRequest = new XMLHttpRequest();

function getProductInfo(e) {
  var products = JSON.parse(e.target.responseText);
  console.log(products);
}

productsRequest.addEventListener("load", getProductInfo);
productsRequest.open("GET", "products.json");
productsRequest.send();

var categoriesRequest = new XMLHttpRequest();

function getProductInfo(e) {
  var categories = JSON.parse(e.target.responseText);
  console.log(categories);
}

categoriesRequest.addEventListener("load", getProductInfo);
categoriesRequest.open("GET", "categories.json");
categoriesRequest.send();
