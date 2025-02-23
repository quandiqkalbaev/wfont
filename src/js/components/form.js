export function form() {
    let times = document.querySelectorAll('.form-times');
    let icons = document.querySelectorAll('.form-icons');
    let inputs = document.querySelectorAll('.form__input');
    inputs.forEach((el, i) => {
      el.addEventListener('focus', () => {
        times.forEach((time) => time.classList.add('hidden'));
        icons.forEach((icon) => icon.classList.remove('hidden'));
        icons[i]?.classList.add('hidden');
        times[i]?.classList.remove('hidden');
        // console.log('focus');
        
      });
      times[i]?.addEventListener('click', () => {
        el.value = '';
        times[i]?.classList.add('hidden');
        icons[i]?.classList.remove('hidden');
        // console.log('click');
      });
    });
  
    document.body.addEventListener('click', (event) => {
      if (!event.target.matches('form input')) {
        times.forEach((time) => time.classList.add('hidden'));
        icons.forEach((icon) => icon.classList.remove('hidden'));
      }
    });

    const links = document.querySelectorAll('.footer__list-item')
    links.forEach((e => {
        e.addEventListener('click',s => {
          // console.log(e);
            let target = e.getAttribute('data-anchor')
            gsap.to(window, { duration: 1, scrollTo: target });
        })
    }))
    
  }