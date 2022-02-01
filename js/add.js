async function Post(data){
    console.log("POST FEITO");

    fetch('post.php', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log("response", text);
    }).catch(function (error){
        console.log("error",error);
    })
}

var lastindex;

async function loadJson(){
    const response = await fetch('/shoptacle/pages/clothes.json');
    const data = await response.json();

    lastindex = data[data.length -1];

    console.log("JSON CARREGADO");
    return data;
}


function createProduct(id, name, price, category){
    const obj = {
        id: id,
        name: name.toUpperCase(),
        price: price,
        category: category.toUpperCase()
    }
    return obj;
}

let nameEl, priceEl, categoryEl;
const submit = document.getElementById('submit');
submit.addEventListener('submit', function(event){

    console.log("--------------------------------------------------------------------FORM ENVIADO");

    event.preventDefault();

    nameEl = document.getElementById('name');
    priceEl = document.getElementById('price');
    categoryEl = document.getElementById('category');

    nameEl.value == "" ? nameEl.classList.add('error') : nameEl.classList.remove('error');
    priceEl.value == "" ? priceEl.classList.add('error') : priceEl.classList.remove('error');
    categoryEl.value == "" ? categoryEl.classList.add('error') : categoryEl.classList.remove('error');

    if(nameEl.value != "" && priceEl.value != "" && categoryEl.value != ""){
        const newProduct = createProduct(lastindex, nameEl.value, priceEl.value, categoryEl.value);
        const jsonPromise = loadJson();
        joinJson(jsonPromise, newProduct);
    }
    console.log("FORM INCOMPLETO");
})


async function joinJson(json, product){
    const oldData = await json;
    let newData = oldData;
    newData.push(product);

    console.log("JSON FEITO");

    Post(newData);
}

