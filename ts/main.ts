class MarketGoods
{
    name: string;
    price: number;
    description: string;
    expDate: string;
}
window.onload = function()
{
    let addBtn = <HTMLElement>document.getElementById("submitBtn");
    addBtn.onclick = addProduct;
}

function addProduct()//what does this do?
{
    alert("You submitted this");
    let addThis:MarketGoods = getMarketGoods();
    showGoods(addThis);
    
}

function getMarketGoods():MarketGoods //this gets all the data submitted by user
{
    let data = new MarketGoods();
    data.name = getInputById("name").value;
    data.price = parseFloat(getInputById("price").value);
    data.description = getInputById("description").value;
    data.expDate = getInputById("expDate").value;
    return data;
}

function showGoods(showMe:MarketGoods):void//show me the money
{
    let formOutput = getInputById("formOutput");
    let productName = document.createElement("p");
    productName.innerHTML = `Name: ${showMe.name}`;
    
    let productPrice = document.createElement("p");
    productPrice.innerHTML = `Price: ${showMe.price}`;
    
    let productDescription = document.createElement("p");
    productDescription.innerHTML = `Description: ${showMe.description}`;

    let productExpDate = document.createElement("p");
    productExpDate.innerHTML = `Expiration Date: ${showMe.expDate}`;

    formOutput.appendChild(productName);
    formOutput.appendChild(productPrice);
    formOutput.appendChild(productDescription);
    formOutput.appendChild(productExpDate);


}


var getInputById = function(id:string){
    return (<HTMLInputElement>document.getElementById(id));
}