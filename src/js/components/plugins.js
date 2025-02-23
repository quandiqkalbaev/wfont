import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
import Swiper from "swiper";
import { Autoplay, Navigation, EffectFade } from "swiper/modules"

export function plugins() {
    window.gsap = gsap;
    window.ScrollTrigger = ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    window.ScrollToPlugin = ScrollToPlugin;
    window.Swiper = Swiper
    window.Navigation = Navigation
    window.Autoplay = Autoplay
}
