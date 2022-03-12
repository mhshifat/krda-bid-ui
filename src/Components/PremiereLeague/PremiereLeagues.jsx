import "./premiereLeague.css";
import OrangeRoundedButtonMenu from "../Buttons/OrangeRoundedButtonMenu";
import { Fragment } from "react";
import TeamImage1 from "../../Assets/image9.png"
import TeamImage2 from "../../Assets/image10.png"
import TeamImage3 from "../../Assets/image11.png"
import TeamImage4 from "../../Assets/image12.png"
import Fixture from "../../Assets/FixtureBg.png"
const PremiereLeagues = () => {

    return (
        <Fragment>
            <div className="premiere-leagues max-w-7xl flex justify-between my-20 mx-4 md:mx-4 lg:mx-auto">
                <div className="flex-1 flex justify-items-center justify-between sm:items-stretch items-center">
                    <div className="flex flex-col flex-shrink-0 justify-items-center items-center">
                        <span className="premiere-leagues-title text-2xl lg:text-5xl">Premiere Leagues</span>
                        <hr />
                    </div>
                    <div className="flex flex-row flex-shrink-0 justify-items-start space-x-4">
                        <OrangeRoundedButtonMenu title={"All Leagues"} />
                    </div>
                </div>

            </div>
            <div className="live-section max-w-7xl my-20 mx-4 md:mx-4 lg:mx-auto">
                <div className="fixture w-full py-5 px-5" style={{ backgroundImage: `url(${Fixture})` }}>
                    <button className="live-button text-xl"><span className="dot"></span>Live</button>
                    <div className="grid grid-cols-3 gap-6 mx-12">
                        <div className="flex flex-col w-full">
                            <div className="text-center text-black">
                                <div className="table text-center m-auto text-black">
                                    <img src={TeamImage1} alt="" />
                                </div>
                                <span className="text-black team-name text-2xl font-semibold">Manchester City</span>
                            </div>
                            <div className="text-center text-black">
                                <div className="table text-center m-auto text-black">
                                    <img src={TeamImage2} alt="" />
                                </div>
                                <span className="text-black team-name text-2xl font-semibold">Manchester City</span>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col w-full">
                                <div className="text-center text-black">
                                    <div className="table text-center m-auto text-black">
                                        <span>25'</span>
                                        <div className="block">
                                            <span>5</span><span>-</span><span>3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-black">
                                    <div className="table text-center m-auto text-black">
                                        <span>25'</span>
                                        <div className="block">
                                            <span>5</span><span>-</span><span>3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col w-full">
                                <div className="text-center text-black">
                                    <div className="table text-center m-auto text-black">
                                        <img src={TeamImage3} alt="" />
                                    </div>
                                    <span className="text-black team-name text-2xl font-semibold">Manchester City</span>
                                </div>
                                <div className="text-center text-black">
                                    <div className="table text-center m-auto text-black">
                                        <img src={TeamImage4} alt="" />
                                    </div>
                                    <span className="text-black team-name text-2xl font-semibold">Manchester City</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default PremiereLeagues;