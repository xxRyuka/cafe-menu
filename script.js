console.log("")



window.addEventListener('load', () => {
    // 5 saniyelik gecikme
    setTimeout(() => {
        const loading = document.getElementById('loading');
        const content = document.getElementById('content');

        // Yükleme sayfasını gizle ve içerikleri göster
        loading.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // 5000 milisaniye = 5 saniye
});

// Sayfayı yeniler
location.reload(True);


//

