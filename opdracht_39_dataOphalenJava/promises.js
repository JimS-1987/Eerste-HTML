const posts = [

    { title: 'Post One', body: 'This is post one' },
    { title: 'Post two', body: 'this is post two' }
];
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;

    }, 1000);
}

function createPost(post) {
    return new Promise ((resolve ,reject))
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}
