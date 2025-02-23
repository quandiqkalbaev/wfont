import { Fancybox } from "@fancyapps/ui";
import { queryMatches } from "../components/utils.js";

export function floorplan() {
  let fpImages = document.querySelectorAll(".floorplan__img img");
  Fancybox.defaults.Hash = false;
  Fancybox.bind("[data-fancybox]", {
    Thumbs: {
      type: "classic",
    },
    on: {
      done: () => {
        lenisScroll.stop();
      },
      close: () => {
        lenisScroll.start();
      },
    },

    Carousel: {
      Navigation: false,
    },
  });

  document.querySelectorAll(".floorplan__zoom").forEach((zoomBtn, index) => {
    zoomBtn.addEventListener("click", (e) => {
      fpImages[index].click();
    });
  });

  if (queryMatches(1025, "min")) {
    let swiper = new Swiper(".floorplan__swiper", {
      effect: "coverflow",
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 50,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      coverflowEffect: {
        rotate: -20,
        depth: 150,
        stretch: 0,
        modifier: 1,
        slideShadows: true,
      },
    });
  } else {
    let slides = document.querySelectorAll(".floorplan__slide");
    slides.forEach((slide, i) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
          // markers: true,
          onEnter: () => {
            slide.classList.add("swiper-slide-active");
          },
          onLeave: () => {
            if (i != slides.length - 1) {
              slide.classList.remove("swiper-slide-active");
            }
          },
          onEnterBack: () => {
            slide.classList.add("swiper-slide-active");
          },
          onLeaveBack: () => {
            slide.classList.remove("swiper-slide-active");
          },
        },
      });
      tl.to(slide, {
        rotateX: 0,
      });
    });
  }
}
