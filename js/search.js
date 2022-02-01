const inputEl = document.getElementById('search-bar');
inputEl.addEventListener('keyup', function(event) {
    if(event.keyCode == 13){
        search();
    }
})
function search(){
    if(inputEl.value == ""){
        inputEl.classList.add('error');
    } else {
        window.location = "/shoptacle/pages/results.html?search="+inputEl.value;
    }
}