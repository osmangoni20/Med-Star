
import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import style from '../../../styles/Sass/Components/Home/banner/_carousel.module.scss';
import { images } from './CrouselData';
const Banner = () => {
  const [currImg, setCurrImg] = useState(0);

  const nextSlide = () => {
    if (currImg !== images.length - 1) {
      setCurrImg(currImg + 1);
    } else if (currImg === images.length - 1) {
      setCurrImg(0);
    }
  };

  const prevSlide = () => {
    if (currImg !== 0) {
      setCurrImg(currImg - 1);
    } else if (currImg === 0) {
      setCurrImg(images.length - 1);
    }
  };

  // setInterval(() => {
  //   nextSlide();
  // }, 5000);
  const moveDot = (index) => {
    setCurrImg(index);
  };
  return (
    <div className={`${style.carousel} transition-all duration-500 ease-in`}>
      <div className={`${style.carousel_inner} `}>
        <div className={`${style.slide} ${style.active_anim} `}>
          <Image src={images[currImg].img} alt={''}/>
        </div>

        <button onClick={nextSlide} className={`${style.btn_slide} ${style.next}`} >
          <IoIosArrowForward />
        </button>

        <button onClick={prevSlide} className={`${style.btn_slide} ${style.prev}`}>
          <IoIosArrowBack />
        </button>

        {/* <div className="center">
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div> */}

        <div className={`${style.container_dots} transition-all duration-500 ease-in`}>
          {Array.from({ length: 4 }).map((item, index) => (
            <div
              key={index}
              onClick={() => moveDot(index)}
              className={currImg === index ? `transition-all duration-500 ease-in  ${style.dot} ${style.active}` : `${style.dot}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
