let container = document.getElementById("news-container");
let inputbox = document.getElementById("searchInput");
let searchbtn = document.getElementById("searchBtn");

searchbtn.addEventListener("click", () => {
    let query = inputbox.value.trim();
    if (query !== "") {
        getNews(query);
    }
});

const getNews = async (query) => {
    const apikey = "047ceb808b1745e5a4d6fcc9e444a241";
    const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${apikey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        container.innerHTML = ""; //  clear old news

        if (!data.articles || data.articles.length === 0) {
            container.innerHTML = "<h3>No news found </h3>";
            return;
        }

        data.articles.forEach(e => {
            container.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${e.urlToImage || 'https://via.placeholder.com/300'}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${e.title}</h5>
                    <p class="card-text">${e.description || "No description available"}</p>
                    <a target="_blank" href="${e.url}" class="btn btn-primary">Read More</a>
                </div>
            </div>`;
        });

    } catch (error) {
        container.innerHTML = "<h3>Error loading news ❌</h3>";
        console.error(error);
    }
};


