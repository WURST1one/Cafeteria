document.addEventListener('DOMContentLoaded', function () {
    const imageGallery = document.getElementById('imageGallery');

    // Substitua 'YOUR_ACCESS_KEY' pela sua chave de acesso do Unsplash
    const apiUrl = 'https://api.unsplash.com/search/photos?page=1&query=food&client_id=c-KsVSanbgRjla_D_DoySzc6WYtXZJoRMP7SKAkZhhk';

    const fetchImagesFromAPI = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                data.results.forEach((imageData) => {
                    const imageElement = document.createElement('img');
                    imageElement.classList.add('image');
                    imageElement.src = imageData.urls.regular;
                    imageGallery.appendChild(imageElement);
                });
            })
            .catch((error) => {
                console.error('Erro na solicitação à API:', error);
            });
    }

    // Chame a função para buscar imagens da sua API do Unsplash
    fetchImagesFromAPI();
});
