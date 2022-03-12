import PlayerSlide from "../../Components/PlayerSlide/PlayerSlide";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./startBidding.css"
import Rewards from "../../Assets/rewards.png";
import InfoIcon from "../../Assets/info.png"
import Button from "../../Components/Buttons/Buttons";
import CaretDown from "../../Assets/caret-down (1).png";
const StartBidding = () => {
    return (
        <div className="bg-transparent mt-20 mx-4 md:mx-4 lg:mx-auto">
            <div className="max-w-7xl mx-auto py-12 px-4">
                <h2 className="text-5xl text-center font-bold text-gray-900 sm:text-5xl">
                    <span className="block text-white mb-5 text-3xl md:text-4xl">Start Bidding And Earning</span>
                </h2>
                <p className="text-center text-gray-500 my-5">
                    <span className="block text-md text-[#9699a0]">
                        Just follow the steps given below and start winning!
                    </span>
                </p>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 items-center">

                    <div className="flex flex-col w-full">
                        <div className="">
                            <h1>1. Player Name</h1>
                            <span className="text-xl text-gray-light">Lorem Ipsum Dolor Sit Amet Consectur</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full col-span-2">
                        <PlayerSlide />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 items-center">
                    <div className="player-informations flex flex-col justify-center w-full justify-items-center col-span-1">
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
                                        type="text"
                                        name="price"
                                        id="price"
                                        className="amount-input block w-full pr-12 text-2xl rounded-md focus:outline-none"
                                        placeholder="Enter Amount"
                                    />
                                    <div className="absolute appearance-none inset-y-0 right-0 flex items-center">
                                        <select
                                            id="currency"
                                            name="currency"
                                            className="h-full py-0 pl-5 pr-8 text-sm rounded-md outline-none appearance-none"
                                        >
                                            <option></option>
                                            <option>USD</option>
                                            <option>CAD</option>
                                            <option>EUR</option>
                                        </select>
                                        <div className="caret pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <img src={CaretDown} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 table m-auto">
                        <h1>2. Enter Bid</h1>
                        <span className="text-xl text-gray-light">Lorem Ipsum Dolor Sit Amet Consectur</span>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 items-center">

                    <div className="flex flex-col w-full">
                        <div className="">
                            <h1>3. Earn Rewards</h1>
                            <span className="text-xl text-gray-light">Lorem Ipsum Dolor Sit Amet Consectur</span>
                        </div>
                    </div>
                    <div className="table m-auto col-span-2">
                        <img src={Rewards} alt="" className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StartBidding;