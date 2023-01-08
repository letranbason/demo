

var postApi ="http://localhost:3000/post";
//stream

function start() {
    getPosts(renderListPosts);
    getPosts(renderDetalPosts);
}

start();

//Functions

function getPosts(callback) {
    fetch(postApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function renderListPosts(posts) {
    var listPostBlock = document.querySelector('#list-post');
    var htmls = posts.map(function(post){
        return `
            <li>
                <h4>${post.title}</h4>
            </li>
        `;
    });
    listPostBlock.innerHTML = htmls.join('');
}

function renderDetalPosts(posts) {
    var detalPostBlock = document.querySelector('#detal-post');
    var htmls = posts.map(function(post){
        return `
            <li>
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            </li>
        `;
    });
    detalPostBlock.innerHTML = htmls.join('');
}