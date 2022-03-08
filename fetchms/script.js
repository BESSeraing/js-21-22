document.getElementById('form').addEventListener('submit', formSubmitted);

function formSubmitted(e) {
    e.preventDefault();

    let url = document.getElementById('url').value;
    let requestInstant = getMili();
    fetch(url, {mode: 'no-cors' })
        .then(function (res) {
            console.log("response received");
            let responseInstant = getMili();
            const p = document.createElement('p');
            p.innerText = 'La réponse de ' + url + ' a mis '+ (responseInstant - requestInstant) + ' ms à arriver';
            document.body.appendChild(p);
        })
        .catch(function(error) {
            const p = document.createElement('p');
            p.innerText = 'La requête vers ' + url + ' n\a pas pu aboutir';
            p.style.color = "red";
            document.body.appendChild(p);
        });
    console.log("waiting response");

}

function getMili() {
    const date = new Date();
    return date.getTime();
}
