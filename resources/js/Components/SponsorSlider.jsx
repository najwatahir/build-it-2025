"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const sponsors = [
    "/asset/images/sponsor1.png",
    "/asset/images/sponsor5.png",
    "/asset/images/sponsor3.jpg",
    "/asset/images/sponsor4.jpg",
    "/asset/images/sponsor6.jpg",
];

const SponsorSlider = () => {
    return (
        <div className="w-full mt-12 px-4 sm:px-0">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={24}
                slidesPerView={2}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                autoplay={{
                    delay: 800,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={800}
            >
                {sponsors.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="p-3"
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                        >
                            <div className="bg-white rounded-xl shadow-lg h-[100px] sm:h-[120px] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <img
                                    src={src}
                                    alt={`Sponsor ${i + 1}`}
                                    className="max-h-[60px] sm:max-h-[70px] object-contain"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SponsorSlider;
