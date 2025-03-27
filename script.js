async function fetchCat() {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/breeds", {
            headers: {
                "x-api-key": "live_SckLEO7AUy7D8haD44F69VnXdw2E619ruvX6edvaDhPkP4q47NQbTdmqNkKvwMPw"
            }
        });

        if (!response.ok) {
            throw new Error(`API hatası: ${response.status}`);
        }

        const data = await response.json();

        if (!data.length) {
            throw new Error("API'den boş yanıt alındı.");
        }

        // Rastgele bir kedi seç
        const randomIndex = Math.floor(Math.random() * data.length);
        const cat = data[randomIndex];

        // Resim ID kontrolü
        const imageUrl = cat.reference_image_id
            ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
            : "https://via.placeholder.com/300?text=No+Image"; // Varsayılan resim

        document.getElementById("cat-img").src = imageUrl;
        document.getElementById("cat-name").textContent = cat.name || "Bilinmeyen Irk";
        document.getElementById("cat-lifespan").textContent = cat.life_span || "Bilinmiyor";
        document.getElementById("cat-description").textContent = cat.description || "Açıklama mevcut değil.";
    } catch (error) {
        console.error("API çağrısı başarısız:", error);
        document.getElementById("cat-description").textContent = "Kedi bilgileri yüklenemedi.";
    }
}

