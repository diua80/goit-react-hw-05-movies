import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastId } from '../../api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCast = async () => {
      const cast = await getMovieCastId(movieId);
      setCast(cast.cast);
    };
    fetchMovieCast();
  }, [movieId]);
  console.log(cast);
  return (
    <div className={css.cart}>
      {cast.length === 0 && <p className={css.movies_cast_name}>Any cast available!</p>}
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
      {cast.map(({ original_name, profile_path, id, character }) => {
        return (
          <SwiperSlide key={id} className={css.movies_cast_item}>
            <div className={css.wrap}>
              <img
                className={css.movies_cast_img}
                src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                alt="{original_name}"
                width="200"
              />
              <h4 className={css.movies_cast_name}>{original_name}</h4>
              <p className={css.movies_cast_name}>Character: {character}</p>
            </div>
          </SwiperSlide>
        );
      })}
        </Swiper>
    </div>
  );
};
export default Cast;
