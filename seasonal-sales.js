var productsRequest = new XMLHttpRequest();
var productDiv = document.createElement("div");
var wrapperDiv = document.querySelector("#wrapper");
var selectElement;
var optionElement;


//Categories JSON file

var categoriesRequest = new XMLHttpRequest();

function getCategoryInfo(e) {
 var categories = JSON.parse(e.target.responseText);
  console.log(categories);

  selectElement = document.createElement("select");


  for (var i = 0; i < categories.categories.length; i++) {
    currentCaretogry = categories.categories[i];
    optionElement = document.createElement("option");
    optionElement.innerHTML = currentCaretogry.season_discount;
    selectElement.appendChild(optionElement);
  }
wrapperDiv.appendChild(selectElement);
}

categoriesRequest.addEventListener("load", getCategoryInfo);
categoriesRequest.open("GET", "categories.json");
categoriesRequest.send();


// Products JSON file

function getProductInfo(e) {
  var products = JSON.parse(e.target.responseText);
  console.log(products);



for (var i = 0; i < products.products.length; i++) {
  currentProduct = products.products[i];
  switch (currentProduct.category_id) {
    case 1:
      currentProduct.category_id = "Apparel"
      break;
    case 2:
      currentProduct.category_id = "Furniture"
      break;
    case 3:
      currentProduct.category_id = "Household"
      break;
  }
  productDiv.innerHTML += ` <h1>${currentProduct.name}</h1>
                            <p>Department: ${currentProduct.category_id}</p>
                            <p>Price: ${currentProduct.price}</p>
                            <hr>
                          `
  wrapperDiv.appendChild(productDiv);

  }
}

productsRequest.addEventListener("load", getProductInfo);
productsRequest.open("GET", "products.json");
productsRequest.send();
