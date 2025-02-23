import { mediaQueryMatches, queryMatches } from "../components/utils.js";

export function location() {
  const masterplan = document.querySelector(".masterplan");
  let locationBlock = document.querySelector(".location");
  gsap.timeline({
    scrollTrigger: {
      trigger: locationBlock,
      start: "top top",
      end: "top top",
      // markers: true,
      once: true,
      onEnter: () => {
        // lenisScroll.stop();
        locationBlock.classList.add("step-1");
        setTimeout(() => {
          locationBlock.classList.add("step-2");
        }, 500);

        setTimeout(() => {
          document.querySelector(".masterplan__draggable").classList.remove("no-scroll");
          // lenisScroll.start();
        }, 2000);
      },
    },
  });

  let md = document.querySelector(".masterplan__media");

  function calculateNewPos(parentSize, mediaSize, offset) {
    return Math.abs(mediaSize / 2 - parentSize / 2 - mediaSize * offset);
  }

  function calculateAspectRatioDesc(height) {
    return (height * 16) / 9;
  }
  function calculateAspectRatioMob(height) {
    return (height * 9) / 16;
  }

  function handleResize() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    let aspectRatioHeight = Number.parseFloat((screenHeight / screenWidth) * 100).toFixed(3);
    let aspectRatioWidth;

    if (!mediaQueryMatches("(max-width: 575.98px)")) {
      aspectRatioWidth = Number.parseFloat((calculateAspectRatioDesc(screenHeight) / screenWidth) * 100).toFixed(3);
      !(aspectRatioHeight > 100)
        ? masterplan.classList.remove("slightly-move-x")
        : masterplan.classList.add("slightly-move-x");
      !(aspectRatioHeight < 53)
        ? masterplan.classList.remove("slightly-move-y")
        : masterplan.classList.add("slightly-move-y");
    } else {
      aspectRatioWidth = Number.parseFloat((calculateAspectRatioMob(screenHeight) / screenWidth) * 100).toFixed(3);
    }

    document.documentElement.style.setProperty("--aspect-ratio", aspectRatioHeight);
    document.documentElement.style.setProperty("--aspect-ratio-width", aspectRatioWidth);
  }

  handleResize();
  let a = calculateNewPos(md.scrollWidth, window.innerWidth, 0);

  if (queryMatches(1024) && queryMatches(769, "min")) {
    gsap.to(".masterplan__draggable", {
      scrollTo: {
        x: a - 80,
      },
      onComplete: () => {
        document.querySelector(".masterplan__draggable").classList.add("no-scroll");
      },
    });
  } else if (queryMatches(768)) {
    gsap.to(".masterplan__draggable", {
      scrollTo: {
        x: a - 40,
      },
      onComplete: () => {
        document.querySelector(".masterplan__draggable").classList.add("no-scroll");
      },
    });
  }
}
