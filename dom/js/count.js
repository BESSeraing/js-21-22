let count = 0;
displayCountValue();
let links = document.getElementsByTagName('a');

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', linkClicked);
}

function linkClicked(event) {
    count ++;
    displayCountValue();
}

function displayCountValue() {
    document.getElementById('count').textContent = count;
}
