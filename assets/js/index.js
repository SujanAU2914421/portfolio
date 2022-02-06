let log = console.log;

let scrollContainer = document.querySelector(".scrollContainer");
let animateUpward = document.querySelectorAll(".animateUpward");
let onloadAnimation = document.querySelectorAll(".onloadAnimation");
let onloadAnimation2 = document.querySelectorAll(".onloadAnimation2");
let closePopUp = document.querySelector(".closePopUp");
let openPopUp = document.querySelector(".openPopUp");
let hugePopUp = document.querySelector(".hugePopUp");
let videoPlay = document.querySelector(".videoPlay");
let closeVideoPopUp = document.querySelector(".closeVideoPopUp");
let videoPopUp = document.querySelector(".videoPopUp");
let video = document.querySelector(".video");

function scrollHandler(e) {
	animateBox(e);
}

function animateBox(e) {
	if (animateUpward) {
		animateUpward.forEach((elem, ind) => {
			if (elem.getBoundingClientRect().y < screen.availHeight) {
				elem.style.transform = "translateY(0px)";
				elem.style.opacity = "1";
			} else {
				elem.style.transform = "translateY(100px)";
				elem.style.opacity = "0";
			}
		});
	}
}

window.onload = () => {
	scrollContainer.addEventListener("scroll", (e) => {
		scrollHandler(e);
	});
	onloadAnimate();
	closePopUp.addEventListener("click", () => {
		hideShowPopUp(0);
	});
	openPopUp.addEventListener("click", () => {
		hideShowPopUp(1);
	});
	closeVideoPopUp.addEventListener("click", () => {
		hideShowVideoPopUp(0);
	});
	videoPlay.addEventListener("click", () => {
		hideShowVideoPopUp(1);
	});
};

onloadAnimation.forEach((elem, ind) => {
	elem.style.transform = "translateY(50px)";
	elem.style.opacity = "0";
});
onloadAnimation2.forEach((elem, ind) => {
	elem.style.opacity = "0";
});

function onloadAnimate() {
	let delay = 0;
	onloadAnimation.forEach((elem, ind) => {
		elem.style.transitionDelay = `${delay}s`;
		delay += 0.04;
		animationUpward(elem);
	});
	onloadAnimation2.forEach((elem, ind) => {
		elem.style.transitionDelay = `${delay}s`;
		delay += 0.3;
		elem.style.opacity = "1";
	});
}

function animationUpward(elem) {
	elem.style.opacity = "1";
	elem.style.transform = "translateY(0px)";
}

function hideShowPopUp(num) {
	if (num == 1) {
		hugePopUp.classList.remove("hidden");
		setTimeout(() => {
			hugePopUp.style.opacity = "1";
		}, 10);
	} else {
		hugePopUp.style.opacity = "0";
		setTimeout(() => {
			hugePopUp.classList.remove("hidden");
			hugePopUp.classList.add("hidden");
		}, 500);
	}
}

function hideShowVideoPopUp(num) {
	if (num == 1) {
		videoPopUp.classList.remove("hidden");
		setTimeout(() => {
			videoPopUp.style.opacity = "1";
			video.play();
		}, 10);
	} else {
		videoPopUp.style.opacity = "0";
		video.pause();
		setTimeout(() => {
			videoPopUp.classList.remove("hidden");
			videoPopUp.classList.add("hidden");
		}, 500);
	}
}
