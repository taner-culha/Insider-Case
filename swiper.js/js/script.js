
var swiper = new Swiper(".slide-container", {
  slidesPerView: 5,
  spaceBetween: 20,
  sliderPerGroup: 5,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});


document.addEventListener("DOMContentLoaded", function () {
  var apiUrl = "https://opt-interview-projects.onrender.com/smart-recommender";

  
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          
          var data = JSON.parse(xhr.responseText);

          var dataContainer = document.getElementById("data-container");

          for (var i = 0; i < data.length; i++) {
              var product = data[i];
              var swiperSlide = document.createElement("div");
              swiperSlide.classList.add("swiper-slide");

              var img = document.createElement("img");
              img.src = product.img;
              swiperSlide.appendChild(img);

              var productInfo = document.createElement("div");
              productInfo.classList.add("product-info");
              var name = document.createElement("h3");
              name.textContent = product.name;
              var price = document.createElement("p");
              price.textContent = product.price+ "  TL" ;

              productInfo.appendChild(name);
              productInfo.appendChild(price);
              swiperSlide.appendChild(productInfo);

              dataContainer.appendChild(swiperSlide);
          }
      }
  };
  xhr.send();
});
