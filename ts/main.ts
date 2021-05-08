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
    let clearThis = <HTMLElement>document.getElementById("clearBtn");
    clearThis.onclick = clearBtn;

}

function addProduct()//this is something that happens when the submit button is pushed
{
    cSpan();

    if (isValid())
    {
        //alert("You submitted this");
        let addThis:MarketGoods = getMarketGoods();
        showGoods(addThis);
    }

    else
    {
        clearSubmition();
    }
}

function clearBtn()//no no, this one clears your "other" cache
{
    cSpan();
    formReset();
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

function clearSubmition()//this clears the form cache so your boss doesn't see what your doing
{
    let formOutput = getInputById("formOutput");
    formOutput.innerText = "";
}

function formReset()
{
    let resetForm = <HTMLFormElement>document.getElementById("formID");
    resetForm.reset();
}

function cSpan()//this is how you know what your tax dollars are doing
{
    let errorName = getInputById("nameSpan");
    errorName.innerText = '*';
    let errorPrice = getInputById("priceSpan");
    errorPrice.innerText = '*';
    let errorDescription = getInputById("descriptionSpan");
    errorDescription.innerText = '*';
    let errorDate = getInputById("expDateSpan");
    errorDate.innerText = '*';
    
}
var getInputById = function(id:string)
{
    return (<HTMLInputElement>document.getElementById(id));
}

function isValid():boolean//this checks to see if you're lying
{
    let valid = true;

    let name = getInputById("name").value;
    if (name == "" || name == null)
    {
        valid = false;
        let errorReport = getInputById("nameSpan");
        errorReport.innerText = 'This is not a name';
    }    
    
    let price = parseFloat(getInputById("price").value);
    if (price == null || isNaN(price))
    {
        valid = false;
        let errorReport = getInputById("priceSpan");
        errorReport.innerText = 'This is not a valid price';
    }

    let description = getInputById("description").value;
    if (description == "" || description == null)
    {
        valid = false;
        let errorReport = getInputById("descriptionSpan");
        errorReport.innerText = 'This is not a description';
    }

    let expDate = getInputById("expDate").value;
    if (expDate == "" || expDate == null)
    {
        valid = false;
        let errorReport = getInputById("expDateSpan");
        errorReport.innerText = 'This is not a date';
    }

    return valid;       
}