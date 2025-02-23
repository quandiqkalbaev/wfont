export function btn() {
  let btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    let text = btn.querySelector("p");
    let a = gsap.to(text, {
      x: 20,
      yoyo: true,
      repeat: -1,
      duration: 1.2,
    });

    btn.addEventListener("mouseover", () => {
      a.pause();
      btn.classList.add("active");
    });
    btn.addEventListener("mouseout", () => {
      btn.classList.remove("active");
      a.restart();
    });
  });
}
