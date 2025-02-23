import { queryMatches } from "../components/utils.js";

export function brochure() {

    const Desktop = queryMatches(1100, "min")

    if (Desktop) {

        const itemTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.brochure',
                start: 'top top',
                end: 'bottom top',
                // scrub: true,
                // markers: true,
                once: true,
                onEnter: () => {
                    lenisScroll.stop()
                    setTimeout(() => {
                        document.querySelector('.brochure').classList.add('active');

                    }, 500)
                    setTimeout(() => {
                        document.querySelector('.brochure').classList.add('active2');
                    }, 1500)
                    setTimeout(() => {
                        lenisScroll.start()
                    }, 2000)
                },

            },
        });

    } else {

        const itemTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.brochure',
                start: 'top top',
                end: 'bottom top',
                // scrub: true,
                // markers: true,
                once: true,
                onEnter: () => {
                    // lenisScroll.stop()
                    setTimeout(() => {
                        document.querySelector('.brochure').classList.add('active');
                    }, 500)
                    // setTimeout(() => {
                    //     lenisScroll.start()
                    // }, 2000)
                },

            },
        });

    }

    const itemTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.amenities',
            start: 'top center-=100',
            end: 'bottom top',
            // scrub: true,
            // markers: true,
            once: true,
            onEnter: () => {
                document.querySelector('.amenities__wrap').classList.add('active');
            },

        },
    });




}