'use client';

import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';
import Image from 'next/image';
import { KeenSliderPlugin, useKeenSlider } from 'keen-slider/react';
import { cn } from '@/lib/utils';

export type CarouselProps = {
  images: React.ComponentProps<typeof Image>[];
  dots?: boolean;
  loop?: boolean;
};

const ResizePlugin: KeenSliderPlugin = (slider) => {
  const observer = new ResizeObserver(() => {
    console.log(slider.size);

    if (slider.size >= 1024) {
      slider.update({
        ...slider.options,
        slides: {
          perView: 3,
          spacing: 10,
        },
      });
    } else if (slider.size > 768 && slider.size < 1024) {
      slider.update({
        ...slider.options,
        slides: {
          perView: 2,
          spacing: 10,
        },
      });
    } else if (slider.size > 640) {
      slider.update({
        ...slider.options,
        slides: {
          perView: 2,
          spacing: 10,
        },
      });
    } else if (slider.size <= 640 && slider.size > 425) {
      slider.update({
        ...slider.options,
        slides: {
          perView: 2,
          spacing: 10,
        },
      });
    } else {
      slider.update({
        ...slider.options,
        slides: {
          perView: 1,
          spacing: 10,
        },
      });
    }
  });

  slider.on('created', () => {
    observer.observe(slider.container);
  });
  slider.on('destroyed', () => {
    observer.unobserve(slider.container);
  });
};

const AutoSlidePlugin: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2000);
  }

  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
};

export const Carousel: React.FC<CarouselProps> = ({ images, dots, loop }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop,
      initial: 0,
      created() {
        setIsReady(true);
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      rtl: false,
      slides: {
        perView: 3,
        spacing: 10,
      },
      mode: 'snap',
    },
    [AutoSlidePlugin, ResizePlugin]
  );

  return (
    <>
      <div className="relative overflow-hidden rounded-md">
        <div ref={sliderRef} className={cn('keen-slider h-[50vh]', !isReady && 'hidden')}>
          {images.map((image, index) => (
            <ImageSlide key={index} image={image} />
          ))}
        </div>
        {isReady && instanceRef.current && (
          <div className="hidden sm:inline-block ">
            <Arrow
              left
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              disabled={!loop && currentSlide === 0}
            />

            <Arrow
              onClick={(e) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              disabled={!loop && currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </div>
        )}
      </div>
      {dots && isReady && instanceRef.current && (
        <div className="dots">
          {Array.from(Array(instanceRef.current.track.details.slides.length).keys()).map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={cn('dot', 'bg-gray-500/60', currentSlide === idx && 'bg-white')}
            ></button>
          ))}
        </div>
      )}
    </>
  );
};

export type ImageSlideProps = { image: React.ComponentProps<typeof Image> };

export const ImageSlide: React.FC<ImageSlideProps> = ({ image }) => {
  return (
    <div className="keen-slider__slide flex">
      <Image className={'max-h-[50svh] w-full object-cover'} {...image} alt={image.alt} />
    </div>
  );
};

export type ArrowProps = {
  disabled?: boolean;
  left?: boolean;
  onClick: React.MouseEventHandler<SVGSVGElement>;
};

export const Arrow: React.FC<ArrowProps> = ({ disabled, left, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={cn('arrow', left ? 'arrow--left' : 'arrow--right', disabled && ' arrow--disabled')}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
      {!left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
};
