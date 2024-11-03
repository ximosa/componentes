const API_KEY = 'AIzaSyBFBbH1SQkSZf1LJzammWAe2karh5mG9rQ';
const BLOG_ID = '2756493429384988662';

async function fetchPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    const postId = slug.match(/(\d+)$/)?.[1];

    if (!postId) {
        document.getElementById("app").innerHTML = "<p>Error: ID de post inválido</p>";
        return;
    }

    try {
        const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}?key=${API_KEY}`);
        if (!response.ok) throw new Error('Error al obtener el post');

        const post = await response.json();
        displayPost(post);
    } catch (error) {
        document.getElementById("app").innerHTML = `<p>Error: ${error.message}</p>`;
    } finally {
        document.getElementById("loading").style.display = "none";
    }
}

function displayPost(post) {
    document.getElementById("post").innerHTML = `
        <h1 class="large-text primary-text center-align">${post.title}</h1>
        <div class="row middle-align "><span>${new Date(post.published).toLocaleDateString()}</span></div>
        <div class="responsive">${post.content}</div>
    `;
    document.getElementById("post").style.display = "block";
}

fetchPost();
