let images = [{
    img: "images/phon-2.jpg",
    title: "Rostov-on-Don, Admiral",
    nameLink:"Rostov-on-Don"
  }, {
    img: "images/phon-2-slider-1.jpg", 
    title: "Sochi Thieves",
    nameLink:"Sochi Thieves"
  }, {
    img: "images/phon-2-slider-2.jpg",
    title: "Rostov-on-Don Patriotic",
    nameLink:"Rostov-on-Don Patriotic"
  }, 
];


function initSlider() {
    if(!images || !images.length) return; //если images нет или пуст, то выходим из функции

    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderLinks = document.querySelector(".karusel");

    initImages();
    initArrows();
    initDots();
    initLink();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active": ""}" style="background-image: url(${images[index].img});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }
    function initArrows() {
      sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
          let curNumber = +sliderImages.querySelector(".active").dataset.index; //унарный плюс для перевода в число
          let nextNumber;
          if (arrow.classList.contains("left")) {
            nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
          } else {
            nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          }
          moveSlider(nextNumber);
        })
      })
    }
    function initDots() {
      images.forEach((image, index) => {
        let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
      });
      sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
        dot.addEventListener("click", function() {
          moveSlider(this.dataset.index);
          sliderDots.querySelector(".active").classList.remove("active");
          this.classList.add("active");
        })
      })
    }
   
    function initLink() {
      images.forEach((image, index) => {
        let link = `<a class="a-text n${index} ${index ===0? "active" : ""}" data-index="${index}">${image.nameLink}</a>`;
        sliderLinks.innerHTML += link;
      });
      sliderLinks.querySelectorAll(".a-text").forEach(link => {
        link.addEventListener("click", function() {
          moveSlider(this.dataset.index);
          sliderLinks.querySelector(".active").classList.remove("active");
          this.classList.add("active");
        })
      })
    }

    function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");
    }
}
document.addEventListener("DOMContentLoaded", () => {   //можно аргументом после запятой и события написать просто: initSlider
  initSlider()
})
 
