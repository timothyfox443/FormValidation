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
    alert("You submitted this");
    var addThis = getMarketGoods();
    showGoods(addThis);
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
var getInputById = function (id) {
    return document.getElementById(id);
};
