var MarketGoods = (function () {
    function MarketGoods() {
    }
    return MarketGoods;
}());
window.onload = function () {
    var addBtn = document.getElementById("submitBtn");
    addBtn.onclick = addProduct;
};
function addProduct() {
    if (isValid()) {
        alert("You submitted this");
        var addThis = getMarketGoods();
        showGoods(addThis);
    }
    else {
        clearSubmition();
    }
}
function getMarketGoods() {
    var data = new MarketGoods();
    data.name = getInputById("name").value;
    data.price = parseFloat(getInputById("price").value);
    data.description = getInputById("description").value;
    data.expDate = getInputById("expDate").value;
    return data;
}
function showGoods(showMe) {
    var formOutput = getInputById("formOutput");
    var productName = document.createElement("p");
    productName.innerHTML = "Name: " + showMe.name;
    var productPrice = document.createElement("p");
    productPrice.innerHTML = "Price: " + showMe.price;
    var productDescription = document.createElement("p");
    productDescription.innerHTML = "Description: " + showMe.description;
    var productExpDate = document.createElement("p");
    productExpDate.innerHTML = "Expiration Date: " + showMe.expDate;
    formOutput.appendChild(productName);
    formOutput.appendChild(productPrice);
    formOutput.appendChild(productDescription);
    formOutput.appendChild(productExpDate);
}
function clearSubmition() {
    var formOutput = getInputById("formOutput");
    formOutput.innerText = "";
}
var getInputById = function (id) {
    return document.getElementById(id);
};
function isValid() {
    var valid = true;
    var name = getInputById("name").value;
    if (name == "" || name == null) {
        valid = false;
        var errorReport = getInputById("nameSpan");
        errorReport.innerText = 'This is not a name';
    }
    var price = parseFloat(getInputById("price").value);
    if (price == null || isNaN(price)) {
        valid = false;
        var errorReport = getInputById("priceSpan");
        errorReport.innerText = 'This is not a valid price';
    }
    var description = getInputById("description").value;
    if (description == "" || description == null) {
        valid = false;
        var errorReport = getInputById("descriptionSpan");
        errorReport.innerText = 'This is not a description';
    }
    var expDate = getInputById("expDate").value;
    if (expDate == "" || expDate == null) {
        valid = false;
        var errorReport = getInputById("expDateSpan");
        errorReport.innerText = 'This is not a date';
    }
    return valid;
}
