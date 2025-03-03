import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-12  section-title">
          <h2>Il nostro team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="col-md-12  section-title">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {props.data
            ? props.data.map((d, i) => (
                <SwiperSlide key={`${d.name}-${i}`}>
                  <div className="team">
                    <div className="thumbnail">
                      <a href={d.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src={d.img} alt={d.name} className="team-img" />
                      </a>
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : "loading"}
        </Swiper>
        </div>
      </div>
    </div>
  );
};
