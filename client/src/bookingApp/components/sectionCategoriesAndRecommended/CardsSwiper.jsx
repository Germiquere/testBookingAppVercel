// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
    IoIosArrowDropleft,
    IoIosArrowDropright,
    IoIosArrowBack,
    IoIosArrowForward,
} from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { SkeletonCardsSweiper } from "./SkeletonCardsSweiper";
import { useCategoriesContext } from "../../../context/CategoriesContext";
export default () => {
    const { loading: loadingCategories, categoriesData } =
        useCategoriesContext();
    return (
        <Swiper
            className="relative max-w-[200px] sm:max-w-full md:py-10 "
            modules={[Navigation, Pagination]}
            // esto es para poder ponerle una clase a cualquier elemnto y que tenga la funcionalidad de siguiente y previo
            navigation={{
                nextEl: ".next-slide",
                prevEl: ".prev-slide",
            }}
            // es para que sea infinito
            // loop
            // es para que aparezcan las pelotitas de la paginacion
            pagination={{
                // para que pueda  clickear en las pelotitas
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 80,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
        >
            {loadingCategories
                ? [1, 2, 3, 4, 5].map((item) => (
                      <SwiperSlide key={item}>
                          <SkeletonCardsSweiper />
                      </SwiperSlide>
                  ))
                : categoriesData.map((item) => (
                      <SwiperSlide key={item.categoriaId}>
                          <div className="cursor-pointer rounded-2xl group h-[300px] md:h-[330px] relative overflow-hidden ">
                              <Link to={item.nombre.toLowerCase()}>
                                  <img
                                      src={item.imagen.url}
                                      alt="Imagende un gato"
                                      className="  h-full object-cover  w-full "
                                  />
                                  <div className="h-full w-full bg-black absolute top-0 opacity-0  group-hover:opacity-40 ease-in-out duration-500 "></div>
                                  <div className="absolute bottom-5 left-5 bg-white px-2 rounded-full flex justify-center items-center text-grayTertiary   ease-in-out duration-200">
                                      <h3 className="text-lg font-medium">
                                          {item.nombre}
                                      </h3>
                                  </div>
                              </Link>
                          </div>
                      </SwiperSlide>
                  ))}
            {/* TITULO NO OLVIDARSE DE PONER EL TITULO TAMBIEN EN EL CATEGORIESANDRECOMMENDED */}
            <h2 className="absolute md:flex hidden top-0 left-0 text-lg sm:text-2xl font-semibold pb-2">
                Categorias
            </h2>
            <div className="md:flex md:gap-1 absolute hidden top-0 right-0">
                <IoIosArrowBack
                    className={` prev-slide cursor-pointer text-neutral-800 hover:text-primary2  left-2 text-3xl hover:bg-tertiary rounded-full p-1  ease-in-out duration-200 hidden sm:block ${
                        !loadingCategories ? "" : "opacity-0"
                    }`}
                />
                <IoIosArrowForward
                    className={` next-slide cursor-pointer text-neutral-800 hover:text-primary hover:bg-tertiary rounded-full p-1 z-10 text-3xl  ease-in-out duration-200 hidden sm:block ${
                        !loadingCategories ? "" : "opacity-0"
                    }`}
                />
            </div>
        </Swiper>
    );
};
