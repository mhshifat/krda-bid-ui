import "./topPlayers.css";
import OrangeRoundedButtonMenu from "../Buttons/OrangeRoundedButtonMenu";
import { Fragment } from "react";
import ImagePlaceholder from "../../Assets/Ellipse1071.png";
import PlayerImage from "../../Assets/image13.png";
import InfoIcon from "../../Assets/info.png"
import Button from "../Buttons/Buttons";
import CaretDown from "../../Assets/caret-down (1).png";

const TopPlayers = () =>{

    return(
        <Fragment>
            <div className="top-players max-w-7xl flex justify-between my-20 mx-4 md:mx-4 lg:mx-auto" id="top-players">
                <div className="flex-1 flex justify-items-center justify-between sm:items-stretch items-center">
                    <div className="flex flex-col flex-shrink-0 justify-items-center items-center">
                        <span className="top-players-title text-2xl lg:text-5xl">Top Players</span>
                        <hr />
                    </div>
                    <div className="flex flex-row flex-shrink-0 justify-items-start space-x-1 md:space-x-4">
                        <OrangeRoundedButtonMenu title={"This Week"} />
                        <OrangeRoundedButtonMenu title={"All Leagues"} />
                    </div>
                </div>
            </div>
            <div className="player-section max-w-7xl my-20 mx-4 md:mx-4 lg:mx-auto bg-gradient-to-r from-[#474747]/[.35] to-[#474747]/[.35] sm:bg-transparent">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 mx-12">
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
                                    <Button content={"Bid Now"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none appearance-none"
                                            placeholder="Enter Amount"
                                        />
                                        <div className="caret absolute appearance-none inset-y-0 right-0 flex items-center">
                                            <select
                                                id="currency"
                                                name="currency"
                                                className="h-full py-0 text-xs rounded-md pr-5 outline-none appearance-none"
                                            >
                                                <option>KRIDA</option>
                                                <option>USDT</option>
                                                <option>USDC</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                                                <img src={CaretDown} alt="" className="w-[22px] h-[22px]" />
                                            </div>
                                        </div>
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
                                    <Button content={"Bid Now"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Enter Amount"
                                        />
                                        <div className="caret absolute appearance-none inset-y-0 right-0 flex items-center">
                                            <select
                                                id="currency"
                                                name="currency"
                                                className="h-full py-0 text-xs rounded-md pr-5 outline-none appearance-none"
                                            >
                                                <option>KRIDA</option>
                                                <option>USDT</option>
                                                <option>USDC</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                                                <img src={CaretDown} alt="" className="w-[22px] h-[22px]" />
                                            </div>
                                        </div>
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
                                    <Button content={"Bid Now"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Enter Amount"
                                        />
                                        <div className="caret absolute appearance-none inset-y-0 right-0 flex items-center">
                                            <select
                                                id="currency"
                                                name="currency"
                                                className="h-full py-0 text-xs rounded-md pr-5 outline-none appearance-none"
                                            >
                                                <option>KRIDA</option>
                                                <option>USDT</option>
                                                <option>USDC</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                                                <img src={CaretDown} alt="" className="w-[22px] h-[22px]" />
                                            </div>
                                        </div>
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
                                    <Button content={"Bid Now"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Enter Amount"
                                        />
                                        <div className="caret absolute appearance-none inset-y-0 right-0 flex items-center">
                                            <select
                                                id="currency"
                                                name="currency"
                                                className="h-full py-0 text-xs rounded-md pr-5 outline-none appearance-none"
                                            >
                                                <option>KRIDA</option>
                                                <option>USDT</option>
                                                <option>USDC</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                                                <img src={CaretDown} alt="" className="w-[22px] h-[22px]" />
                                            </div>
                                        </div>
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
                                    <Button content={"Bid Now"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Enter Amount"
                                        />
                                        <div className="caret absolute appearance-none inset-y-0 right-0 flex items-center">
                                            <select
                                                id="currency"
                                                name="currency"
                                                className="h-full py-0 text-xs rounded-md pr-5 outline-none appearance-none"
                                            >
                                                <option>KRIDA</option>
                                                <option>USDT</option>
                                                <option>USDC</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                                                <img src={CaretDown} alt="" className="w-[22px] h-[22px]" />
                                            </div>
                                        </div>
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
                                    <Button content={"Bid Now"} />
                                </div>
                            </div>
                            <div className="bid-amount">
                                <div>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                            placeholder="Enter Amount"
                                        />
                                        <div className="caret absolute appearance-none inset-y-0 right-0 flex items-center">
                                            <select
                                                id="currency"
                                                name="currency"
                                                className="h-full py-0 text-xs rounded-md pr-5 outline-none appearance-none"
                                            >
                                                <option>KRIDA</option>
                                                <option>USDT</option>
                                                <option>USDC</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
                                                <img src={CaretDown} alt="" className="w-[22px] h-[22px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="py-4 flex justify-center">
                    <div>
                        <Button content={"Explore All"} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default TopPlayers;