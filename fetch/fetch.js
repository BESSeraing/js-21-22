document.getElementById('refreshButton').addEventListener('click', function() {
    fetchBlogPosts();
});


function fetchBlogPosts() {
    let errorContainer = document.getElementById('errors');
    errorContainer.style.display = "none";
    document.getElementById('result').innerHTML = '';

    let headers = new Headers();
    headers.append('Accept', 'application/json');

    var requestMeta = {headers: headers};

    fetch("https://prof2.bes-webdeveloper-seraing.be/blog/back/api/blog_posts?page=1", requestMeta)
        .then(function(httpResponse) {
            if(httpResponse.status !== 200) {
                throw new Error("request failed");
            } else {
                return httpResponse.json();
            }
        })
        .then(function(responseBody) {
            let progress = document.getElementById("progress");
            if (progress) {
                progress.remove();
            }
            for(blogPost of responseBody) {
                let article = document.createElement('article');
                article.classList.add('list-group-item');
                article.innerHTML = '<h2>' + blogPost.title + '</h2>';
                article.innerHTML += '<p>' + blogPost.body + '</p>';
                document.getElementById('result').appendChild(article);
            }
        })
        .catch(function(err){
            let errorContainer = document.getElementById('errors');
            errorContainer.innerHTML = err.message;
            errorContainer.style.display = "block";
        });

        let beforeResult = document.createElement('h2');
        beforeResult.id = "progress";
        beforeResult.innerHTML = 'Request in progress';
        document.getElementById('result').appendChild(beforeResult);
}

