"use strict";
exports.id = 260;
exports.ids = [260];
exports.modules = {

/***/ 8366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ loadBackgroudImages)
/* harmony export */ });
function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll("[data-background]");
    if (backgroudImages.length > 0) {
        backgroudImages.forEach((element)=>{
            let image = element.dataset.background;
            element.style.backgroundImage = `url('${image}')`;
        });
    }
}


/***/ }),

/***/ 4576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ parallaxie)
/* harmony export */ });
function parallaxie(selector, speed = 0.8, startPosition) {
    let elementBg = document.querySelector(selector);
    let image = elementBg.getAttribute("data-background");
    if (!image) {
        image = window.getComputedStyle(elementBg).backgroundImage;
    }
    let position = elementBg.getBoundingClientRect().top * speed;
    elementBg.style.backgroundImage = `url("${image}")`;
    elementBg.style.backgroundSize = "cover";
    elementBg.style.backgroundRepeat = "no-repeat";
    elementBg.style.backgroundAttachment = "fixed";
    elementBg.style.backgroundPosition = `center ${startPosition !== undefined ? startPosition : position}px`;
    window.addEventListener("scroll", ()=>{
        position = elementBg.getBoundingClientRect().top * speed;
        elementBg.style.backgroundPosition = `center ${position}px`;
    });
}


/***/ })

};
;