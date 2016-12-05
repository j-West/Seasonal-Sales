var productsRequest = new XMLHttpRequest();
var wrapperDiv = document.querySelector("#wrapper");
var selectElement;
var optionElement;
var categories;
var products;

//Categories JSON file

var categoriesRequest = new XMLHttpRequest();

function getCategoryInfo(e) {
 categories = JSON.parse(e.target.responseText);
  // console.log(categories);


  selectElement = document.createElement("select");
  selectElement.appendChild(document.createElement("option"));


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
  products = JSON.parse(e.target.responseText);
  // console.log(products);
  // console.log(categories);

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

    var productSection = document.createElement("section");

    productSection.innerHTML += ` <h1>${currentProduct.name}</h1>
                              <p>Department: ${currentProduct.category_id}</p>
                              <p>Price: ${currentProduct.price}</p>
                              <hr>
                            `
    wrapperDiv.appendChild(productSection);

  }

  // Event Listener on select element

  selectElement.addEventListener("change", updatePricesWithDiscount)

}

productsRequest.addEventListener("load", getProductInfo);
productsRequest.open("GET", "products.json");
productsRequest.send();




function updatePricesWithDiscount(e) {

  var discount;
  var discountCategory;
  var newPrice;
  var amountOffPrice;
  var updatedProducts = document.querySelectorAll("section");

  if (e.target.value === "Winter") {
    discount = .1;
    discountCategory = "Apparel"
  } else if (e.target.value === "Autumn") {
      discount = .25;
      discountCategory = "Furniture"
    } else if (e.target.value === "Spring") {
      discount = .15;
      discountCategory = "Household"
      }

  for (var i = 0; i < products.products.length; i++) {
    productArray = products.products[i];
    currentProduct = updatedProducts[i];
    if ( productArray.category_id == discountCategory) {
      amountOffPrice = productArray.price * discount;
      newPrice = productArray.price - amountOffPrice;
      currentProduct.innerHTML = ` <h1>${productArray.name}</h1>
                                       <p>Department: ${productArray.category_id}</p>
                                       <p>Price: ${newPrice.toFixed(2)}</p>
                                       <hr>
                                     `
    } else {
          currentProduct.innerHTML = ` <h1>${productArray.name}</h1>
                                       <p>Department: ${productArray.category_id}</p>
                                       <p>Price: ${productArray.price.toFixed(2)}</p>
                                       <hr>
                                     `
      }
  }
}
