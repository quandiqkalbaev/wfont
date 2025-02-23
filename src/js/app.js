if (history.scrollRestoration == "auto") {
  history.scrollRestoration = "manual";
}
window.addEventListener("onbeforeunload", function () {
  window.scrollTo(0, 0);
  gsap.to(window, { duration: 0, scrollTo: 0 });
});
window.addEventListener("unload", function () {
  window.scrollTo(0, 0);
  gsap.to(window, { duration: 0, scrollTo: 0 });
});
import Swiper from "swiper";
import { plugins } from "./components/plugins.js";
import { lenis } from "./components/lenis.js";
import { intro } from "./sections/intro.js";
import { about } from "./sections/about.js";
import { brochure } from "./sections/brochure.js";
import { validationPhoneInput } from "./components/validation-phone-input.js";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { floorplan } from "./sections/floorplan.js";
import { btn } from "./components/btn.js";
import { location } from "./sections/location.js";
import { developer } from "./sections/developer.js";
import { header } from "./components/header.js";
import { form } from "./components/form.js";
import { payment } from "./sections/payment.js";
import { popups } from "./components/popups.js";



plugins();
lenis();
lenisScroll.stop();

window.addEventListener("DOMContentLoaded", () => {
  (async function loading() {
    const mediaElements = gsap.utils.toArray("[data-img]");
    const totalMedia = mediaElements.length;
    let loadedMedia = 0;
    const preloader = document.querySelector(".preloader");
    const preloaderImgWhite = document.querySelector(".preloader-log-white");
    // const radius = circle.getAttribute("r");
    // const circumference = 2 * Math.PI * radius;
    // circle.style.strokeDasharray = `${circumference} ${circumference}`;
    function setProgress(percent) {
      preloaderImgWhite.style.clipPath = `inset(0% ${100-percent}% 0% 0%)`;
    }
    async function mediaLoaded(e) {
      loadedMedia++;
      const percent = Math.floor((loadedMedia / totalMedia) * 100);
      setProgress(percent);
      preloader.classList.add("active");

      if (loadedMedia === totalMedia) {
        setTimeout(() => {
          preloader.classList.add("hidden");
        }, 700);
        Swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);
        btn();
        header();
        popups();
        validationPhoneInput();
        intro();
        about();
        brochure();
        floorplan();
        location();
        payment();
        developer();
        form();
      }
    }

    mediaElements.forEach((media) => {
      const dataSrc = media.getAttribute("data-img");
      if (dataSrc) {
        media.onerror = () => {
          console.log(`Ошибка загрузки для ${dataSrc}`);
          mediaLoaded();
        };
        media.setAttribute("src", dataSrc);
        media.onload = mediaLoaded;
      }
    });
  })();
});
