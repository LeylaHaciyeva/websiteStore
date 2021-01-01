// --------------------------------MONEY----------------------------------------------------------

let moneyLink = document.querySelector(".money-link");
let moneyUl = document.querySelector(".money-ul");
let moneyLinkClick = 0;
let moneyCounter = 1;
moneyLink.addEventListener("click", function () {
  for (let i = 0; i < moneyCounter; i++) {
    if (moneyLinkClick % 2 == 0) {
      moneyUl.style.display = "block";
    } else {
      moneyUl.style.display = "none";
    }
    moneyLinkClick++;
  }
});

// --------------------------------LANGUAGE---------------------------------------------------------

let langLink = document.querySelector(".lang-link");
let langUl = document.querySelector(".lang-ul");
let langLinkClick = 0;
let langCounter = 1;
langLink.addEventListener("click", function () {
  for (let i = 0; i < langCounter; i++) {
    if (langLinkClick % 2 == 0) {
      langUl.style.display = "block";
    } else {
      langUl.style.display = "none";
    }
    langLinkClick++;
  }
});

//-------------------------------RESPONSIVE-MENU-CLICK-----------------------------------------
let mobileCol = document.querySelector(".mobile-col");
let mobileMenu = document.querySelector(".mobile-menu");
let menuIcon = document.querySelector(".menu-icon");
menuClick = 0;
menuCounter = 1;
menuIcon.addEventListener("click", function () {
  for (let i = 0; i < menuCounter; i++) {
    if (menuClick % 2 == 0) {
      mobileMenu.style.display = "grid";
    } else {
      mobileMenu.style.display = "none";
    }
    menuClick++;
  }
});

//-----------------------------------SLIDER ---------------------------------------------------
let slider = document.querySelector(".slider");
let leftButton = document.querySelector(".left-button");
let rightButton = document.querySelector(".right-button");
let sliderItem = document.querySelectorAll(".slider-item");
let sliderText = document.querySelectorAll(".slider-text");
counter = 0;
size = 1270;
rightButton.addEventListener("click", function () {
  if (counter >= 3) {
    counter = -1;
  }
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});

leftButton.addEventListener("click", function () {
  if (counter <= 0) {
    counter = 4;
  }
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});

function sliderFunction() {
  if (counter >= 3) {
    counter = -1;
  }
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
  timer = setTimeout(sliderFunction, 3000);
}
sliderFunction();

// ---------------------------STORE SLIDER-------------

let leftDirection = document.querySelector(".left-direction");
let rightDirection = document.querySelector(".right-direction");
let storeSlider = document.querySelector(".store-slider");
let storeSliderStage = document.querySelectorAll(".store-slider-stage");
storeCounter = 0;
storeSize = 163;
rightDirection.addEventListener("click", function () {
  if (storeCounter >= 4) {
    storeCounter = -1;
  }
  storeCounter++;
  storeSlider.style.transform =
    "translateX(" + -storeSize * storeCounter + "px)";
});

leftDirection.addEventListener("click", function () {
  if (storeCounter <= 0) {
    storeCounter = 5;
  }
  storeCounter--;
  storeSlider.style.transform =
    "translateX(" + -storeSize * storeCounter + "px)";
});

// ---------------------------------PRODUCT SLIDER-------------------------------
let clothingSliders = document.querySelector(".clothing-sliders");
let clothingSlider = document.querySelectorAll(".clothing-slider");
let electronicSliders = document.querySelector(".electronic-sliders");
let shoesSliders = document.querySelector(".shoes-sliders");
let productLeft = document.querySelector(".product-left");
let productRight = document.querySelector(".product-right");
productCounter = 0;
productSize = clothingSlider[1].clientWidth +10;
productRight.addEventListener("click", function () {
  if (productCounter <= 2) {
    productCounter++;
    clothingSliders.style.transform =
      "translateX(" + -productSize * productCounter + "px)";
    electronicSliders.style.transform =
      "translateX(" + -productSize * productCounter + "px)";
    shoesSliders.style.transform =
      "translateX(" + -productSize * productCounter + "px)";
  }
  if (productCounter >= 3) {
    productCounter = -1;
  }
});

productLeft.addEventListener("click", function () {
  if (productCounter <= 0) {
    productCounter = 4;
  }
  productCounter--;
  clothingSliders.style.transform =
    "translateX(" + -productSize * productCounter + "px)";
  electronicSliders.style.transform =
    "translateX(" + -productSize * productCounter + "px)";
  shoesSliders.style.transform =
    "translateX(" + -productSize * productCounter + "px)";
});

//--------------------------------------SLIDER DIRECTION--------------------------
let electronicLink = document.querySelector(".electronic-link");
let clothingLink = document.querySelector(".clothing-link");
let shoesLink = document.querySelector(".shoes-link");

electronicLink.addEventListener("click", function () {
  clothingSliders.style.display = "none";
  shoesSliders.style.display = "none";
  electronicSliders.style.display = "flex";
});

shoesLink.addEventListener("click", function () {
  clothingSliders.style.display = "none";
  shoesSliders.style.display = "flex";
  electronicSliders.style.display = "none";
});

clothingLink.addEventListener("click", function () {
  clothingSliders.style.display = "flex";
  shoesSliders.style.display = "none";
  electronicSliders.style.display = "none";
});

//----------------------------------COUNTDOWN-----------------------------

let counterDates = setInterval(function () {
  let now = new Date().getTime();
  let countDownDate = new Date("May 5, 2021 15:37:25").getTime();
  let distance = countDownDate - now;

  let days = document.querySelector(".days");
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");

  let dys = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mnts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let scnds = Math.floor((distance % (1000 * 60)) / 1000);

  days.innerHTML=dys+" Days"
  hours.innerHTML=hrs+" Hrs"
  minutes.innerHTML=mnts+" Mins"
  seconds.innerHTML=scnds+" Secs"
},1000);



function initMap() {
  const uluru = { lat: 40.500, lng: 49.50 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

