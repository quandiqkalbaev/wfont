import { queryMatches } from "../components/utils.js";
export function about() {

    const Desktop = queryMatches(900, "min")

    if (Desktop) {

    //     const itemTl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.about',
    //             start: 'top top',
    //             end: 'center top',
    //             scrub: true,
    //             // markers: true,
    //             pin: true,
    //             onEnter: () => {
    //                 document.querySelector('.about__cont-img-wrap').classList.add('active');
    //             },
    //         },
    //     });

    //     // itemTl.to('.about__cont-img-wrap', {
    //     //     scale: 1,
    //     // })

    // } else {

    //     const itemTl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.about',
    //             start: 'top+=120 center',
    //             end: 'center+=50 center',
    //             scrub: true,
    //             // markers: true,
    //             onEnter: () => {
    //                 document.querySelector('.about__cont-img-wrap').classList.add('active');
    //             },
    //         },
    //     });

        // itemTl.to('.about__cont-img-wrap', {
        //     scale: 1,
        // })
        // itemTl.to('.about__cont-img-wrap-mob-bg', {
        //     opacity: 1,
        // }, '<')

    }



}
