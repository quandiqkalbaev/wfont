import { queryMatches } from "../components/utils.js";

export function intro() {

    const Desktop = queryMatches(900, "min")

    if (!Desktop) {

        const tl = gsap.timeline({});
        let topTitle = document.querySelector('.intro-title-top');
        let botTitle = document.querySelector('.intro-title-bot');

        let bgContainer = document.querySelector('.intro__wrap-bg-container');
        let wrapBg = document.querySelector('.intro__wrap-bg');
        let introTextMob = document.querySelector('.intro-text.mob');
        let contentBtn = document.querySelector('.intro__content-btn');

        tl.to(topTitle, {
            x: 0,
            duration: 0.8,
            delay: 1,
        });

        tl.to(botTitle, {
            x: 0,
            duration: 0.8,
        }, '<');
        let topCenter = ((window.innerWidth - topTitle.clientWidth) - 60) / 2;
        let botCenter = ((window.innerWidth - topTitle.clientWidth) - 60) / 2;

        tl.to(topTitle, {
            y: 0,
            x: topCenter,
            duration: 0.8,
            delay: 0.1,
        });

        tl.to(botTitle, {
            y: 0,
            x: -botCenter,
            duration: 0.8,
        }, '<');


        tl.to(bgContainer, {
            left: 0,
            width: '100%',
        }, '<');
        tl.to(wrapBg, {
            height: '100%',
        }, '<');
        tl.to(introTextMob, {
            opacity: 1,
            delay: 0.4,
        }, '<');
        tl.to(contentBtn, {
            opacity: 1,
        }, '<');


        // console.log(topTitle.clientTop);
        // console.log(topTitle.clientWidth);
        // console.log(topCenter);

    }

    setTimeout(() => {
        document.querySelector('.intro__wrap').classList.add('active')
    }, 1000)

    setTimeout(() => {
        lenisScroll.start()
    }, 2000)

    setTimeout(() => {
        // document.querySelector('.intro__wrap').classList.add('active')
    }, 1000)



}