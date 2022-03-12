
import React from 'react';
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel';
import ImagePlaceholder from "../../Assets/Ellipse1071.png";
import PlayerImage from "../../Assets/image13.png";
import InfoIcon from "../../Assets/info.png"
import Button from "../Buttons/Buttons";
import "./playerSlide.css"
const data = [{ cover: 'https://images2.alphacoders.com/631/thumb-1920-631095.jpg', title: 'Interstaller' },
{ cover: 'https://images4.alphacoders.com/665/thumb-1920-665242.png', title: 'Interstaller' },
{ cover: 'https://images2.alphacoders.com/738/thumb-1920-738176.png', title: 'Interstaller' },
{ cover: 'https://images8.alphacoders.com/100/thumb-1920-1005531.jpg', title: 'Interstaller' },
{ cover: 'https://images2.alphacoders.com/582/thumb-1920-582804.png', title: 'Interstaller' },
{ cover: 'https://images2.alphacoders.com/631/thumb-1920-631095.jpg', title: 'Interstaller' }]

const PlayerSlide = () => {
    const ref = React.useRef(ResponsiveContainer);

    const Card = React.memo(
        function (props) {
            const { data, dataIndex } = props;
            const { cover } = data[dataIndex];
            return (
                <div style={{ width: '100%', height: 350, userSelect: "none" }}>
                    <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} draggable={false}>
                        <div className="player-image">
                            <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                        </div>
                    </div>
                    <div className="player-informations flex flex-col justify-center justify-items-center" style={{ height: '130px', width: '40%', objectFit: 'cover', borderRadius: 10 }}>
                        <div className="info-icon flex justify-end">
                            <img src={InfoIcon} alt="" />
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                <div className="player-bid text-base md:text-xl">80% Bid</div>
                            </div>
                            <div>
                                <Button content={"Bid Now"} />
                            </div>
                        </div>
                    </div>
                    {/* <img
                        style={{ height: '100%', width: '70%', objectFit: 'cover', borderRadius: 10 }}
                        draggable={false}
                        src={cover}
                    /> */}
                </div>
            );
        },
        function (prev, next) {
            return prev.dataIndex === next.dataIndex;
        }
    );
    return (
        <div style={{ width: '100%', position: 'relative' }}>
            <ResponsiveContainer carouselRef={ref} render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 3;
                if (parentWidth <= 1440) currentVisibleSlide = 3;
                else if (parentWidth <= 1080) currentVisibleSlide = 3;
                return (
                    <StackedCarousel
                        ref={carouselRef}
                        data={data}
                        carouselWidth={parentWidth}
                        slideWidth={750}
                        slideComponent={Card}
                        maxVisibleSlide={3}
                        currentVisibleSlide={currentVisibleSlide}
                        useGrabCursor={true}
                    />
                )
            }} />
        </div>
    )
}

export default PlayerSlide;