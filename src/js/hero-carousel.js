/**
 * Rotating official app icons inside the hero phone mockup.
 */
export function initPhoneCarousel(root = document.querySelector('[data-phone-carousel]')) {
  if (!root) return;

  const slides = [...root.querySelectorAll('.phone-carousel__slide')];
  const dots = [...document.querySelectorAll('[data-carousel-dot]')];
  if (slides.length <= 1) return;

  let index = slides.findIndex(slide => slide.classList.contains('is-active'));
  if (index < 0) index = 0;

  let timer = null;

  const setSlide = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
  };

  const next = () => setSlide(index + 1);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      setSlide(i);
      restart();
    });
  });

  const restart = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(next, 3200);
  };

  restart();

  root.closest('.phone-mockup')?.addEventListener('mouseenter', () => {
    if (timer) clearInterval(timer);
  });

  root.closest('.phone-mockup')?.addEventListener('mouseleave', restart);
}
