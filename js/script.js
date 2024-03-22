document.addEventListener("DOMContentLoaded", function () {
  const imageGallery = document.getElementById("imageGallery");
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-button");

  const fetchImagesFromAPI = (query) => {
    const apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=c-KsVSanbgRjla_D_DoySzc6WYtXZJoRMP7SKAkZhhk`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        imageGallery.innerHTML = "";

        data.results.forEach((imageData) => {
          const imageElement = document.createElement("img");
          imageElement.classList.add("image");
          imageElement.src = imageData.urls.regular;

          // Adiciona um evento de clique à imagem
          imageElement.addEventListener("click", function () {
            // Abre uma nova página com a foto e a descrição da imagem
            const newPage = window.open("", "_blank");
            newPage.document.write(`
                        <html>
                        <head>
                            <title>Imagem</title>
                        </head>
                        <body>
                  
                            <div class="conteudo" style="display: flex; align-items: center; font-size: 40px; border-radius: 15px; ">
                                <img class="image-app" src="${
                                  imageData.urls.regular
                                }" width="30%" alt="Imagem">
                                <p class="description">${imageData.description || "MilkShakes"} </p>
                                <p class="description2">${imageData.description || "Milkshakes, a deliciosa e irresistível combinação de cremosidade e sabor, é uma verdadeira indulgência para os amantes de sobremesas. Preparado com uma base de sorvete cremoso, leite fresco e uma variedade de sabores irresistíveis, o milkshake é uma experiência sensorial que agrada a todos os paladares."} </p>
                                <br>
                                <p class="price">${imageData.description || "R$:16,99"} </p>
                                
                            </div>

                    
                           
                            <style>



                            .price {
                                position: relative;
                                margin-top: 40%;

                            }
                           
                            .image-app {
                                border-radius: 10px;
                                padding: 10px;
                            }

                            .description {
                                position: relative;
                                margin-bottom: 40%;
                            }

                            .description2 {
                                width: 40%;
                                font-size: 30px;
                            }

                            .btn {
                                display: flex;

                            }

                            .conteudo {
                                justify-content: center
                                display: flex;
                            }
                        </style>
                    
                        </body>
                        </html>
                    `);
            newPage.document.close();
          });

          const imageContainer = document.createElement("div");
          imageContainer.classList.add("image-container");
          imageContainer.appendChild(imageElement);

          imageGallery.appendChild(imageContainer);
        });
      })
      .catch((error) => {
        console.error("Error fetching images from API:", error);
      });
  };


  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const searchTerm = searchInput.value;
      if (searchTerm) {
        fetchImagesFromAPI(searchTerm);
      }
    }
  });

  // Função para carregar imagens iniciais ao carregar a página
  const loadInitialImages = () => {
    fetchImagesFromAPI("MilkShake");
  };

  loadInitialImages();
});
