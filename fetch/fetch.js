let headers = new Headers();
headers.append('Accept', 'application/json');

var requestMeta = {headers: headers};

document.getElementById('refreshButton').addEventListener('click', function() {
    fetchBlogPosts();
});


function fetchBlogPosts() {
    let errorContainer = document.getElementById('errors');
    errorContainer.style.display = "none";
    document.getElementById('result').innerHTML = '';

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
                article.innerHTML += '<button class="btn btn-primary fetchComment" data-post-id="'+blogPost.id+'">Voir les commentaires</button>';
                document.getElementById('result').appendChild(article);
            }
            let buttons = document.querySelectorAll('.fetchComment');
            for (button of buttons) {
                button.addEventListener('click', function(e){
                    fetchPostComments(e.target.getAttribute('data-post-id'))
                        .then(function(comments){
                            if (comments) {
                                let commentsHtml = document.createElement('ul');
                                commentsHtml.classList.add('list-group');
                                for(comment of comments) {
                                    let li = document.createElement('li');
                                    li.classList.add('list-group-item');
                                    li.innerText = comment.user + ' - ' + comment.content;
                                    commentsHtml.appendChild(li);
                                }
                                e.target.parentElement.append(commentsHtml);
                                e.target.remove();
                            }

                        });
                });
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


function fetchPostComments(postId) {
    return fetch("https://prof2.bes-webdeveloper-seraing.be/blog/back/api/comments?post.id="+postId+"&page=1", requestMeta)
        .then(function(httpResponse) {
            if(httpResponse.status !== 200) {
                throw new Error("request failed");
            } else {
                return httpResponse.json();
            }
        });
}
