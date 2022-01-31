/* SEARCH INPUT */
const input = document.getElementById('search-bar');
input.addEventListener('keyup', function(event) {
    if(event.keyCode == 13){
        search();
    }
})
function search(){
    input.value == "" ? input.classList.add('error') : window.location = "/pages/results.html?search="+input.value;
}


/* function newProduct(image, name, price){


} */

async function loadJson(){
    const response = await fetch('json/clothes.json');
    const data = await response.json();

    for(i=0; i<data.length; i++){
        console.log(data[i].name);
    }
}
loadJson();



