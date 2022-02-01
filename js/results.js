/* PEGA A INFORMAÇÃO DA ULR E COLOCA NO HTML */
const url = new URLSearchParams(window.location.search);
const searchUrl = url.get('search');
const search_text = document.getElementById('search-text');
search_text.textContent = searchUrl;

/* PEGA AS INFORMAÇÕES DO .JSON E COMPARA COM A PESQUISA, SE FOR TRUE COLOCA COMO RESULTADO */
async function loadJson(){
    /* PEGA AS INFORMAÇÕES DO .JSON */
    const response = await fetch('/shoptacle/pages/clothes.json');
    const data = await response.json();
    
    var found = false;
    const search = searchUrl.toUpperCase();
    for(i=0; i< data.length; i++){
        /* COMPARA COM A PESQUISA */
        console.log(data[i].name + " includes " + search + "? \n" + data[i].name.includes(search));
        if(data[i].name.includes(search) || data[i].category.includes(search)){
            /* CRIA UM DIV PRO PRODUTO E ADICIONA À PÁGINA */
            var newCard = document.createElement('div');
            newCard.classList.add("product");
            newCard.innerHTML = '<h3>'+  data[i].id + ' - ' + data[i].name.toLowerCase() + '</h3>'
            + '<p>' + data[i].price +'</p>'
            + '<p class="category">' + data[i].category.toLowerCase() +'</p>';
            document.getElementById('results').appendChild(newCard);
            found = true;
        }
    }
    if(!found){
        const notFound = document.createTextNode('No results found');
        document.getElementById('results').appendChild(notFound);
    }
}
loadJson();