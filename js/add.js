var lastindex;
async function loadJson(){
    const response = await fetch('/shoptacle/json/clothes.json');
    const data = await response.json();
    lastindex = data[data.length -1];
}
loadJson();

function createProduct(id, name, price, category){
    const obj = {
        id: id,
        name: name,
        price: price,
        category: category
    }
    return obj;
}

let nameEl, priceEl, categoryEl;
const submit = document.getElementById('submit');
submit.addEventListener('submit', function(event){
    event.preventDefault();

    nameEl = document.getElementById('name');
    priceEl = document.getElementById('price');
    categoryEl = document.getElementById('category');

    nameEl.value == "" ? nameEl.classList.add('error') : nameEl.classList.remove('error');
    priceEl.value == "" ? priceEl.classList.add('error') : priceEl.classList.remove('error');
    categoryEl.value == "" ? categoryEl.classList.add('error') : categoryEl.classList.remove('error');

    if(nameEl.value != "" && priceEl.value != "" && categoryEl.value != ""){
        const newProduct = createProduct(lastindex, nameEl.value, priceEl.value, categoryEl.value);
        Post(newProduct);
    }
})

async function Post(data){
    fetch('post.php', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error){
        console.log(error);
    })
}