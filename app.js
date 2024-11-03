const API_KEY = 'AIzaSyBFBbH1SQkSZf1LJzammWAe2karh5mG9rQ';
const BLOG_ID = '2756493429384988662';
let posts = [];
let categories = [];
let selectedCategory = null;
let loading = true;
let error = null;
let pageToken = undefined;
let hasMore = true;

async function fetchBloggerPosts(token, category) {
    try {
        document.getElementById("loading").style.display = "block";
        const url = new URL(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts`);
        url.searchParams.append('key', API_KEY);
        url.searchParams.append('maxResults', '10');
        if (token) url.searchParams.append('pageToken', token);
        if (category) url.searchParams.append('labels', category);

        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al obtener los posts');

        const data = await response.json();
        const newPosts = data.items.map(post => ({
            ...post,
            slug: `${slugify(post.title)}-${post.id}`,
            images: [extractFirstImage(post.content)].filter(Boolean)
        }));

        posts = token ? [...posts, ...newPosts] : newPosts;
        pageToken = data.nextPageToken;
        hasMore = !!data.nextPageToken;
        displayPosts();

        if (!category) {
            categories = [...new Set(newPosts.flatMap(post => post.labels || []))];
            displayCategories();
        }
    } catch (err) {
        error = err.message;
        displayError();
    } finally {
        document.getElementById("loading").style.display = "none";
    }
}

function displayPosts() {
    const postsContainer = document.getElementById('posts');
    
    // Nueva función para limpiar el contenido HTML y obtener solo texto
    function getExcerpt(content, length = 150) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = content;
        const plainText = tempDiv.textContent || tempDiv.innerText || "";
        return plainText.substring(0, length) + "...";
    }

    postsContainer.innerHTML = posts.map(post => `
        <div>
            <h2 class="large-text primary-text center-align">
                <a href="/post.html?slug=${post.slug}">${post.title}</a>
            </h2>
            <div class="left">
                ${post.images[0] ? `<a href="./post.html?slug=${post.slug}"><img  class="circle extra" src="${post.images[0]}" alt="${post.title}" /></a>` : ''}
            </div>
            <div>
                ${getExcerpt(post.content)}
            </div>
            <div class="max">
                <a class="small-round small secondary tiny-padding" href="/post.html?slug=${post.slug}">Leer más <i>arrow_forward</i></a>
            </div>
            <hr class="large">      
        </div>
        <div class="large-space"></div>
    `).join('');
    
    document.getElementById("load-more").style.display = hasMore ? "block" : "none";
}


function displayCategories() {
    document.getElementById('categories').innerHTML = categories.map(category => `
        <button class="transparent" onclick="fetchBloggerPosts(undefined, '${category}')">${category}</button>
    `).join('');
}

function displayError() {
    document.getElementById("error-message").style.display = "block";
    document.querySelector("#error-message .error-text").textContent = error;
}

function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

function extractFirstImage(content) {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
}

function loadMorePosts() {
    if (pageToken) fetchBloggerPosts(pageToken, selectedCategory);
}

document.getElementById("retry-button").addEventListener("click", () => fetchBloggerPosts());
fetchBloggerPosts();
