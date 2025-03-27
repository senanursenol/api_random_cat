
// Sayfa yüklendiğinde bir kedi getir
fetchCat();
async function fetchCat() {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/breeds", {
            headers: {
                "x-api-key": "https://catfact.ninja/"
            }
        });
        const data = await response.json();

        // Rastgele bir kedi seç
        const randomIndex = Math.floor(Math.random() * data.length);
        const cat = data[randomIndex];

        document.getElementById("cat-img").src = `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`;
        document.getElementById("cat-name").textContent = cat.name;
        document.getElementById("cat-lifespan").textContent = cat.life_span;
        document.getElementById("cat-description").textContent = cat.description;
    } catch (error) {
        console.error("API çağrısı başarısız:", error);
    }
}
