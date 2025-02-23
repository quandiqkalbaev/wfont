import { queryMatches } from "../components/utils.js";
export function popups() {
  let btns = document.querySelectorAll(".popupBtn");
  let popups = document.querySelectorAll(".popup");
  console.log(btns.length);
  console.log(popups.length);
  let popupExit = document.querySelectorAll(".popup__exit");
  const timePopup = document.querySelector(".time-pop");
  btns.forEach((btn, ind) => {
    btn.addEventListener("click", () => {
      popups.forEach((popup) => popup.classList.remove("active"));
      popups[ind].classList.add("active");
      clearTimeout(timeoutId);
      lenisScroll.stop();
    });
  });

  
  popupExit.forEach((exit) => {
    exit.addEventListener("click", () => {
      popups.forEach((e) => {
        e.classList.remove("active");
        lenisScroll.start();
      });
    });
  });

  popups.forEach((popup) => {
    popup.addEventListener("click", (e) => {
      if (e.target.closest(".popup__wrapper")) {
        return;
      }
      popup.classList.remove("active");
      lenisScroll.start();
    });
  });
  const Desktop = queryMatches(768, "min");
  function timepop() {
    const tl = gsap.timeline({});
    const timeImg = document.querySelector(".time-pop-img img");
    const timeWrapp = document.querySelector(".time-pop .popup__wrapper");
    const timeTitle = document.querySelector(".time-pop .popup__title");
    const timeSubTitle = document.querySelector(".time-pop .popup__subtitle");
    const timeForm = document.querySelector(".time-pop .form");
    const popupExit = document.querySelector(".time-pop .popup__exit");
    if (Desktop) {
      // tl.to(timeImg, {
      //   y: 0,
      //   delay: 0.5,
      //   duration: 0.5,
      // });
      // tl.to(timeImg, {
      //   delay: 0.3,
      //   opacity: 0,
      //   duration: 0.2,
      // });
      // tl.to(
      //   timeWrapp,
      //   {
      //     opacity: 1,
      //     duration: 0.2,
      //   },
      //   "<"
      // );
      // tl.to(
      //   timeTitle,
      //   {
      //     opacity: 1,
      //     duration: 0.2,
      //   },
      //   ">1"
      // );
      // tl.to(
      //   timeSubTitle,
      //   {
      //     opacity: 1,
      //     duration: 0.2,
      //   },
      //   "<"
      // );
      // tl.to(
      //   popupExit,
      //   {
      //     opacity: 1,
      //     duration: 0.2,
      //   },
      //   "<"
      // );
      // tl.to(
      //   timeForm,
      //   {
      //     opacity: 1,
      //     duration: 0.2,
      //   },
      //   "<"
      // );
    } else {
      tl.to(timeImg, {
        duration: 0.4,
        opacity: 1,
      });
      tl.to(timeImg, {
        duration: 0.7,
        scale: 0.9,
        y: 0,
      });
      tl.to(
        timeWrapp,
        {
          duration: 0.5,
          opacity: 1,
        },
        "0.3<"
      );
    }
  }

  let timeoutId = setTimeout(() => {
    timePopup.classList.add("active");
    timepop();
    lenisScroll.stop();
  }, 5000);
}
