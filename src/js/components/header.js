import { queryMatches } from "../components/utils.js";

export function header() {
    const header = document.querySelector('header')
    const bg = document.querySelector('.header')
  const burgerIcon = document.querySelector(".burger-icon");
  burgerIcon.addEventListener("click", () => {
    header.classList.toggle("active");
    

    window.document.querySelector('body').classList.toggle('check')
    if (document.body.classList.contains('check')) {
      lenisScroll.stop();
    } else {
      lenisScroll.start();
    }
  });
  

  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".floorplan",
  //     start: "center-=450 center",
  //     end: "bottom top",
  //     onEnter: () => {
  //       bg.classList.add('activeBG')
  //     },
  //     onLeaveBack: () => {
  //       bg.classList.remove('activeBG')
  //     },
  //     onEnterBack: () => {
  //       bg.classList.add('activeBG')
  //     },
  //     onLeave:() => {
  //       bg.classList.remove('activeBG')

  //     }
  //   },
  // });

  const links = document.querySelectorAll('.header__list-item')
    links.forEach((e => {
        e.addEventListener('click',s => {
          // console.log(e);
            let target = e.getAttribute('data-anchor')
            gsap.to(window, { duration: 1, scrollTo: target });
          header.classList.remove("active");
          document.querySelector('body').classList.remove('check')
          lenisScroll.start();
        })
        
    }))



   
    
    if (queryMatches(769, "min")) {
      let lastScrollTop = 0;
    
      window.addEventListener('scroll', function() {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
        if (currentScrollTop > 100) {
          if (currentScrollTop > lastScrollTop) {
            bg.style.transform = 'translateY(-110%)';
          } else {
            bg.style.transform = 'translateY(0)';
          }
        } else {
          bg.style.transform = 'translateY(0)';
        }
      
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
      });
    }

}
