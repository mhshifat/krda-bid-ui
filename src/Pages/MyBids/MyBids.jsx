import "./myBids.css";
import OrangeRoundedButtonMenu from "../../Components/Buttons/OrangeRoundedButtonMenu";
import { Fragment } from "react";
import ImagePlaceholder from "../../Assets/Ellipse1071.png";
import PlayerImage from "../../Assets/image13.png";
import InfoIcon from "../../Assets/info.png"
import Button from "../../Components/Buttons/Buttons";
import CaretDown from "../../Assets/caret-down (1).png";
import WhiteMenu from "../../Components/WhiteMenu/WhiteMenu";
const MyBids = () => {

    return (
        <Fragment>
            <div className="max-w-7xl mx-auto px-4 mt-20 pt-12">
                <h2 className="text-5xl text-center font-bold text-gray-900 sm:text-5xl">
                    <span className="block text-white mb-5 text-3xl md:text-4xl">Welcome, User!</span>
                </h2>
            </div>
            <div className="top-players max-w-7xl flex justify-between mx-4 md:mx-4 lg:mx-auto mb-20">
                <div className="flex-1 flex justify-items-center justify-between sm:items-stretch items-center mt-20">
                    <div className="flex flex-col flex-shrink-0 justify-items-center items-center">
                        <span className="top-players-title text-base lg:text-4xl">My Bids</span>
                        <hr />
                    </div>
                    <div className="flex flex-row flex-shrink-0 justify-items-start space-x-1 md:space-x-4">
                        <div className="flex">
                            <span className="inline-flex items-center px-2 md:px-3 rounded-l-md border-2 border-r-0 h-[30px] text-gray-light text-sm">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>                            </span>
                            <input
                                type="text"
                                name="company-website"
                                id="company-website"
                                className="searchPlayers-input bg-transparent focus:border-gray-light border-2 h-[30px] border-gray-light border-l-0 block w-[70px] md:w-full rounded-none rounded-r-md sm:text-sm text-light md:pb-1"
                                placeholder="Player"
                            />
                        </div>
                        <OrangeRoundedButtonMenu title={"Filters"} />
                        <WhiteMenu content={"Sort By: Bid%"} />

                    </div>
                </div>
            </div>
            <div className="bid-section max-w-7xl my-20 mx-4 md:mx-4 lg:mx-auto">
                <div>
                    <span className="text-gray">6th - 12th February</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl my-20 mx-4 md:mx-4 lg:mx-auto">
                <div>
                    <span className="text-gray">6th - 12th February</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="image-placeholder" style={{ backgroundImage: `url(${ImagePlaceholder})` }} >
                            <div className="player-image">
                                <img src={PlayerImage} alt="" style={{ marginTop: "30px" }} />
                            </div>
                        </div>
                        <div className="player-information flex flex-col justify-center w-full justify-items-center">
                            <div className="info-icon flex justify-end">
                                <img src={InfoIcon} alt="" />
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <div className="player-name text-xl md:text-3xl">C. Ronaldo</div>
                                    <div className="player-bid text-base md:text-xl">80% Bid</div>
                                </div>
                                <div>
                                    <Button content={"Bid More"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Bid Amount:500"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default MyBids;