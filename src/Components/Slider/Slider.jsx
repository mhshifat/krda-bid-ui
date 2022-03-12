import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css"
import React, { Fragment } from "react";
import CaretDown from "../../Assets/caret-down.png";


const Slider = () =>{
    return (
        <Fragment>
            <Swiper
                // install Swiper modules
                modules={[Pagination, Autoplay]}
                autoplay
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="mt-20"
            >
                <SwiperSlide>
                    <div className="bg-transparent">
                        <div className="max-w-7xl mx-auto py-12 px-4">
                            <h2 className="text-5xl text-center font-bold text-gray-900 sm:text-5xl">
                                <span className="block text-white mb-5 text-3xl md:text-4xl">Get 10X Rewards</span>
                                <span className="block text-white text-3xl md:text-4xl">By Staking!</span>
                            </h2>
                            <p className="text-center text-gray-500 my-5">
                                <span className="block text-md text-[#f8f8f8]">
                                    30% of Kridaks staked rewards for 6 Months!
                                </span>
                            </p>
                            <div className="my-5 flex mx-auto justify-center">
                                <div className="ml-3 inline-flex rounded-md shadow">
                                    <a
                                        href="#"
                                        className="banner-button inline-flex items-center justify-center bg-white px-5 py-1 border border-transparent text-base font-medium text-[#000] bg-[#fff]"
                                    >
                                        Bid Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-transparent">
                        <div className="max-w-7xl mx-auto py-12 px-4">
                            <h2 className="text-5xl text-center font-bold text-gray-900 sm:text-5xl">
                                <span className="block text-white mb-5 text-3xl md:text-4xl">Predict 3 Players & Increase</span>
                                <span className="block text-white text-3xl md:text-4xl">Your Chance To Win!</span>
                            </h2>
                            <p className="text-center text-gray-500 my-5">
                                <span className="block text-md text-[#f8f8f8]">
                                    Bid top players and win more!
                                </span>
                            </p>
                            <div className="my-5 flex mx-auto justify-center">
                                <div className="ml-3 inline-flex rounded-md shadow">
                                    <a
                                        href="#"
                                        className="banner-button inline-flex items-center justify-center bg-white px-5 py-1 border border-transparent text-base font-medium text-[#000] bg-[#fff]"
                                    >
                                        Top Players
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-transparent">
                        <div className="max-w-7xl mx-auto py-12 px-4">
                            <h2 className="text-5xl text-center font-bold text-gray-900 sm:text-5xl">
                                <span className="block text-white mb-5 text-3xl md:text-4xl">Win 10000 $KRIDA</span>
                                <span className="block text-white text-3xl md:text-4xl">Every Week!</span>
                            </h2>
                            <p className="text-center text-gray-500 my-5">
                                <span className="block text-md text-[#f8f8f8]">
                                    Bids closing soon!
                                </span>
                            </p>
                            <div className="my-5 flex mx-auto justify-center">
                                <div className="ml-3 inline-flex rounded-md shadow">
                                    <a
                                        href="#"
                                        className="banner-button inline-flex items-center justify-center bg-white px-5 py-1 border border-transparent text-base font-medium text-[#000] bg-[#fff]"
                                    >
                                        Bid Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="mr-auto text-center flex flex-col justify-center items-center">
                <span>Scroll Down</span>
                <a href="#top-players">
                    <img src={CaretDown} alt="" />
                </a>
            </div>
        </Fragment>
    )
}

export default React.memo(Slider)