const input = document.getElementById('search-bar');
input.addEventListener('keyup', function(event) {
    if(event.keyCode == 13){
        search();
    }
})
function search(){
    if(input.value == ""){
        input.classList.add('error');
    } else {
        window.location = "/pages/results.html?search="+input.value;
    }
}

const url = new URLSearchParams(window.location.search);
const searchUrl = url.get('search');

const main = document.getElementsByTagName('main');
main[0].innerHTML = "Results for: " + searchUrl;
