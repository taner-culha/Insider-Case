document.addEventListener("DOMContentLoaded", function () {
    var apiUrl = "https://opt-interview-projects.onrender.com/smart-recommender";

    function createProductElement(product) {
        var productItem = document.createElement("div");
        productItem.classList.add("product-item");

        var productLink = document.createElement("a");
        productLink.href = product.url;
        productLink.target = "_blank";

        var productImage = document.createElement("img");
        productImage.src = product.img;
        productImage.alt = product.name;
        productLink.appendChild(productImage);

        var productName = document.createElement("h3");
        productName.textContent = product.name;
        productLink.appendChild(productName);

        var productPrice = document.createElement("p");
        productPrice.textContent = product.price + "    TL" ;
        productLink.appendChild(productPrice);

        productItem.appendChild(productLink);

        return productItem;
    }

    var recommenderCarousel = document.querySelector(".footer-content");
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((product) => {
                recommenderCarousel.appendChild(createProductElement(product));
            });

            var prevArrow = document.querySelector(".prev-arrow");
            var nextArrow = document.querySelector(".next-arrow");
            var currentPosition = 0;

            prevArrow.addEventListener("click", function () {
                if (currentPosition > 0) {
                    currentPosition -= 1;
                    updateCarouselPosition();
                }
            });

            nextArrow.addEventListener("click", function () {
                if (currentPosition < data.length - 5) {
                    currentPosition += 1;
                    updateCarouselPosition();
                }
            });

            function updateCarouselPosition() {
                var position = -(currentPosition * 20);
                recommenderCarousel.style.transform = `translateX(${position}%)`;
            }
        })
        .catch((error) => console.log(error));
});