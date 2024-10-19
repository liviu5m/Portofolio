"use client";

import React from "react";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperComponent = ({ project }: { project: string }) => {
  let nr;
  switch (project) {
    case "selfmastery":
      nr = 19;
      break;
    case "timevo":
      nr = 21;
      break;
    default:
      nr = 0;
  }
  const arr = Array.from({ length: nr }, (_, i) => i + 1);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-[80%] max-sm:w-full max-sm:h-fit h-[800px]"
      loop={true}
      modules={[Pagination, Navigation]}
    >
      {arr.map((el,id) => {
        return (
          <SwiperSlide key={id}>
            <img
              src={`/images/work/${project}/img-${el}.png`}
              className="object-cover"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
