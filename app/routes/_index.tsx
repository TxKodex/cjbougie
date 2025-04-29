import type { MetaFunction } from "@remix-run/node";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const meta: MetaFunction = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" },
];

export default function Index() {
  return (
    <div className="index">
      <div className="index__carousel">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="index__carousel__swiper"
        >
          <SwiperSlide>
            <img
              src="/carousel/slide1.webp"
              alt="Slide 1"
              className="index__carousel__swiper__img"
            />
            <h2 className="index__carousel__swiper__title">La Bougie Astrale</h2>
            <p className="index__carousel__swiper__subtitle">
              La bougie qui vous fait voyager dans le temps.
            </p>
            <button className="index__carousel__swiper__button">
              Découvrir
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/carousel/slide2.webp"
              alt="Slide 2"
              className="index__carousel__swiper__img"
            />
            <h2 className="index__carousel__swiper__title">La Bougie pour la fête des mère</h2>
            <p className="index__carousel__swiper__subtitle">
              La bougie qui rend heureuse.
            </p>
            <button className="index__carousel__swiper__button">
              Découvrir
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/carousel/slide3.webp"
              alt="Slide 3"
              className="index__carousel__swiper__img"
            />
            <h2 className="index__carousel__swiper__title">La Bougie Bijou</h2>
            <p className="index__carousel__swiper__subtitle">
              La bougie qui vous fait briller.
            </p>
            <button className="index__carousel__swiper__button">
              Découvrir
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="index__bestsellers">
        <h2 className="index__bestsellers__title">Vos coups de coeur</h2>
        <div className="index__bestsellers__boxes">
          <div className="index__bestsellers__box">
            <img
              src="/photos/bougie.webp"
              alt="Bougie seule"
              className="index__bestsellers__img"
              width="350"
            />
            <div className="index__bestsellers__nameAndPrice">
              <p className="index__bestsellers__name">Bougie 1</p>
              <p className="index__bestsellers__price">19.99 €</p>
            </div>
          </div>
          <div className="index__bestsellers__box">
            <img
              src="/photos/bougie.webp"
              alt="Bougie seule"
              className="index__bestsellers__img"
              width="350"
            />
            <div className="index__bestsellers__nameAndPrice">
              <p className="index__bestsellers__name">Bougie 2</p>
              <p className="index__bestsellers__price">dès 29.99 €</p>
            </div>
          </div>
          <div className="index__bestsellers__box">
            <img
              src="/photos/bougie.webp"
              alt="Bougie seule"
              className="index__bestsellers__img"
              width="350"
            />
            <div className="index__bestsellers__nameAndPrice">
              <p className="index__bestsellers__name">Bougie 3</p>
              <p className="index__bestsellers__price">39.99 €</p>
            </div>
          </div>
          <div className="index__bestsellers__box">
            <img
              src="/photos/bougie.webp"
              alt="Bougie seule"
              className="index__bestsellers__img"
              width="350"
            />
            <div className="index__bestsellers__nameAndPrice">
              <p className="index__bestsellers__name">Bougie 4</p>
              <p className="index__bestsellers__price">19.99 €</p>
            </div>
          </div>
        </div>
      </div>
      <div className="index__products">
        <div className="index__products__boxes">
          <div className="index__products__box">
            <img
              src="/photos/indexProduct1.webp"
              alt="Best product"
              className="index__products__img"
            />
            <p className="index__products__title">Les bougies avec bijou</p>
            <p className="index__products__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              obcaecati id. Blanditiis, aut autem? Recusandae, sunt, inventore
              corrupti repudiandae eos tempore voluptatem libero perferendis
              incidunt odio asperiores fugit? Ad, facere.
            </p>
          </div>
          <div className="index__products__box">
            <img
              src="/photos/indexProduct2.webp"
              alt="Best product"
              className="index__products__img"
            />
            <p className="index__products__title">Les bougies parfumées</p>
            <p className="index__products__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              obcaecati id. Blanditiis, aut autem? Recusandae, sunt, inventore
              corrupti repudiandae eos tempore voluptatem libero perferendis
              incidunt odio asperiores fugit? Ad, facere.
            </p>
          </div>
          <div className="index__products__box">
            <img
              src="/photos/indexProduct3.webp"
              alt="Best product"
              className="index__products__img"
            />
            <p className="index__products__title">Les brumes parfumées</p>
            <p className="index__products__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              obcaecati id. Blanditiis, aut autem? Recusandae, sunt, inventore
              corrupti repudiandae eos tempore voluptatem libero perferendis
              incidunt odio asperiores fugit? Ad, facere.
            </p>
          </div>
          <div className="index__products__box">
            <img
              src="/photos/indexProduct4.webp"
              alt="Best product"
              className="index__products__img"
            />
            <p className="index__products__title">Les Bâtonnets parfumés</p>
            <p className="index__products__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              obcaecati id. Blanditiis, aut autem? Recusandae, sunt, inventore
              corrupti repudiandae eos tempore voluptatem libero perferendis
              incidunt odio asperiores fugit? Ad, facere.
            </p>
          </div>
        </div>
      </div>
      <div className="index__story">
        <h2 className="index__story__title">
          Notre promesse : créer la surprise.
        </h2>
        <p className="index__story__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed nisi
          at placeat in, assumenda qui. Quidem, consectetur molestiae quae fugit
          voluptatibus officiis voluptas ullam itaque mollitia impedit
          dignissimos? Commodi! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Voluptatum ea repellat nobis recusandae minus quis,
          ipsum deserunt nihil autem numquam perspiciatis quam dolor quaerat!
          Accusantium voluptatibus laudantium maiores natus rerum.
        </p>
      </div>
    </div>
  );
}
