async function loadJson(){
    const response = await fetch('json/clothes.json');
    const data = await response.json();
    
    for(i=0; i< data.length; i++){
        var newCard = document.createElement('div');
        newCard.classList.add("product");
        newCard.innerHTML = '<h3>'+  data[i].id + ' - ' + data[i].name.toLowerCase() + '</h3>'
                            + '<p>' + data[i].price +'</p>'
                            + '<p class="category">' + data[i].category.toLowerCase() +'</p>';
        document.getElementById('products-container').appendChild(newCard);
    }
}
loadJson();



