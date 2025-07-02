import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './FlipGallery.css';

const images = [
  { title: 'Luna Rodriguez', url: 'https://picsum.photos/id/870/600/1000' },
  { title: 'The Neon Collective', url: 'https://picsum.photos/id/883/600/1000' },
  { title: 'Marcus Chen', url: 'https://picsum.photos/id/478/600/1000' },
  { title: 'Aria Blackwood', url: 'https://picsum.photos/id/903/600/1000' },
  { title: 'Echo Valley', url: 'https://picsum.photos/id/503/600/1000' },
  { title: 'DJ Synthesis', url: 'https://picsum.photos/id/1025/600/1000' },
  { title: 'Velvet Storm', url: 'https://picsum.photos/id/1043/600/1000' },
  { title: 'Phoenix Rising', url: 'https://picsum.photos/id/1062/600/1000' }
];

const FLIP_SPEED = 750;
const flipTiming = { duration: FLIP_SPEED, iterations: 1 };

// flip down
const flipAnimationTop = [
  { transform: 'rotateX(0)' },
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(-90deg)' }
];
const flipAnimationBottom = [
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(0)' }
];

// flip up
const flipAnimationTopReverse = [
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(0)' }
];
const flipAnimationBottomReverse = [
  { transform: 'rotateX(0)' },
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(90deg)' }
];

export default function FlipGallery() {
  const containerRef = useRef(null);
  const uniteRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // initialise first image once
  useEffect(() => {
    if (!containerRef.current) return;
    uniteRef.current = containerRef.current.querySelectorAll('.unite');
    defineFirstImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defineFirstImg = () => {
    uniteRef.current.forEach(setActiveImage);
    setImageTitle();
  };

  const setActiveImage = (el) => {
    el.style.backgroundImage = `url('${images[currentIndex].url}')`;
  };

  const setImageTitle = () => {
    const gallery = containerRef.current;
    if (!gallery) return;
    gallery.setAttribute('data-title', images[currentIndex].title);
    gallery.style.setProperty('--title-y', '0');
    gallery.style.setProperty('--title-opacity', 1);
  };

  const updateGallery = (nextIndex, isReverse = false) => {
    const gallery = containerRef.current;
    if (!gallery) return;

    // determine direction animation arrays
    const topAnim = isReverse ? flipAnimationTopReverse : flipAnimationTop;
    const bottomAnim = isReverse
      ? flipAnimationBottomReverse
      : flipAnimationBottom;

    gallery.querySelector('.overlay-top').animate(topAnim, flipTiming);
    gallery.querySelector('.overlay-bottom').animate(bottomAnim, flipTiming);

    // hide title
    gallery.style.setProperty('--title-y', '-1rem');
    gallery.style.setProperty('--title-opacity', 0);
    gallery.setAttribute('data-title', '');

    // update images with slight delay so animation looks continuous
    uniteRef.current.forEach((el, idx) => {
      const delay =
        (isReverse && (idx !== 1 && idx !== 2)) ||
        (!isReverse && (idx === 1 || idx === 2))
          ? FLIP_SPEED - 200
          : 0;

      setTimeout(() => setActiveImage(el), delay);
    });

    // reveal new title roughly half‑way through animation
    setTimeout(setImageTitle, FLIP_SPEED * 0.5);
  };

  const updateIndex = (increment) => {
    const inc = Number(increment);
    const newIndex = (currentIndex + inc + images.length) % images.length;
    const isReverse = inc < 0;
    setCurrentIndex(newIndex);
    updateGallery(newIndex, isReverse);
  };

  return (
    <div className="flip-gallery-container">
      <div className="flip-gallery-wrapper">
        {/* flip gallery */}
        <div
          id="flip-gallery"
          ref={containerRef}
          className="flip-gallery"
        >
          <div className="top unite"></div>
          <div className="bottom unite"></div>
          <div className="overlay-top unite"></div>
          <div className="overlay-bottom unite"></div>
        </div>

        {/* navigation */}
        <div className="flip-gallery-nav">
          <button
            type="button"
            onClick={() => updateIndex(-1)}
            title="Previous Artist"
            className="nav-btn"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => updateIndex(1)}
            title="Next Artist"
            className="nav-btn"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
