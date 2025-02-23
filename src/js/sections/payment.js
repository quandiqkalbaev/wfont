import { queryMatches } from "../components/utils.js";

export function payment() {
  const paymentBlock = document.querySelector(".payment");
  const num1 = document.querySelector(".payment__num-1");
  const num2 = document.querySelector(".payment__num-2");

  const num1End = num1.getAttribute("data-end") || "0";
  const num2End = num2.getAttribute("data-end") || "0";


  const odometer1 = new Odometer({ el: num1});
  const odometer2 = new Odometer({ el: num2 });

  const activateOdometers = () => {
    num1.innerHTML = num1End;
    num2.innerHTML = num2End;
  };

  const onScrollEnter = () => {
    setTimeout(activateOdometers, queryMatches(768) ? 1500 : 0);
    setTimeout(() => {
      paymentBlock?.classList.add("active");
    }, 1000);
  };
  if (queryMatches(768)) {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".payment",
        start: "top top",
        end: "top top",
        once: true,
        onEnter: onScrollEnter,
      },
    });
  } else {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".payment__num",
        start: "center bottom",
        end: "top bottom",
        once: true,
        onEnter: onScrollEnter,
      },
    });
  }
}
