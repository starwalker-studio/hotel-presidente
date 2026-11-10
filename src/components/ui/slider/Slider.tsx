import { useCallback, useEffect, useRef, useState } from "react";
import style from "./Slider.module.scss";
import type { SliderProps } from "./ts/slider-props";

export const Slider = ({
  slides,
  interval = 6000,
  autoPlay = true,
}: SliderProps) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = slides.length;

  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + total) % total),
    [total],
  );

  useEffect(() => {
    if (!autoPlay || paused || total < 2) return;
    const timer = setTimeout(next, interval);
    return () => clearTimeout(timer);
  }, [current, paused, autoPlay, interval, next, total]);

  if (total === 0) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        next();
      } else {
        prev();
      }
    }
    touchStartX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <section
      className={style.slider}
      aria-roledescription="carousel"
      aria-label="Galería del hotel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
    >
      <div className={style.track} aria-live={paused ? "polite" : "off"}>
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`${style.slide} ${i === current ? style.active : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${total}`}
            aria-hidden={i !== current}
          >
            <img src={s.img} alt="" />
            <div className={style.overlay}>
              <div className={style.caption}>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            className={`${style.arrow} ${style.arrow_prev}`}
            onClick={prev}
            aria-label="Slide anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className={`${style.arrow} ${style.arrow_next}`}
            onClick={next}
            aria-label="Slide siguiente"
          >
            ›
          </button>

          <div className={style.dots}>
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={`${style.dot} ${i === current ? style.dot_active : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Ir al slide ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
