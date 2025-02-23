export function developer() {
    const developer = document.querySelector('.developer')
    
    gsap.timeline({
        scrollTrigger: {
          trigger: ".developer",
          start: "top center",
          end: "bottom top",
          once: true,
          onEnter: () => {
            developer.classList.add('active')
          }
        },
      });
}