/*
document.addEventListener("DOMContentLoaded", function () {
	new Splide(".splide", {
		type: "loop",
		perPage: 3,
		autoplay: true,
		interval: 3000,
		arrows: false,
		pauseOnHover: false,
	}).mount();
});
*/

document.addEventListener("DOMContentLoaded", function () {
	new Splide("#splide1", {}).mount();
	new Splide("#splide2", {}).mount();
});
