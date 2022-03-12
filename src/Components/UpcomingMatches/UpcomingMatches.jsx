import "./upcomingMatches.css";
import { Fragment } from "react";
import TeamImage1 from "../../Assets/image9.png"
import TeamImage2 from "../../Assets/image10.png"
import TeamImage3 from "../../Assets/image11.png"
import TeamImage4 from "../../Assets/image12.png"
const UpcomingMatches = () => {

    return (
        <Fragment>
            <div className="player-section max-w-7xl my-20 mx-4 md:mx-4 lg:mx-auto pt-3">
                <div className="flex justify-center">
                    <span className="upcoming-title flex flex-inline px-12 mt-12 divide-x">
                        <span className="text-xl md:text-3xl inline-block hover:bg-[#474747]/[.63] hover:text-[#fff] cursor-pointer pr-[.5rem]">Upcoming</span>
                        <span className="text-xl md:text-3xl inline-block hover:bg-[#474747]/[.63] cursor-pointer pl-[.5rem]">Results</span>
                    </span>
                </div>
                <div className="fixture w-full py-5 px-5">
                    <div className="gap-6">
                        <div className="w-full bg-[#474747]/[.20] hover:bg-[#474747]/[.60] py-2">
                            <div className="text-right">
                                <span className="date text-base md:text-2xl mr-2">Premiere League</span>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="text-center text-black">
                                    <div className="table text-center m-auto text-black">
                                        <img src={TeamImage1} alt="" />
                                    </div>
                                    <span className="team-name text-base md:text-2xl font-semibold">Manchester United</span>
                                </div>
                                <div className="text-center block m-auto">
                                    <div className="table text-center m-auto text-black">
                                        <span className="text-base date">Feb 20, 2022</span>
                                        <div className="block">
                                            <span className="text-xl text-[#fdbc19]">06:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-black">
                                    <div className="table text-center m-auto text-black">
                                        <img src={TeamImage2} alt="" />
                                    </div>
                                    <span className="team-name text-base md:text-2xl font-semibold">Manchester Barcelona</span>
                                </div>
                            </div>
                        </div>
                        <hr className="divider my-2" />
                        <div className="w-full bg-[#474747]/[.20] hover:bg-[#474747]/[.60] py-2">
                            <div className="text-right">
                                <span className="date text-base md:text-2xl mr-2">Premiere League</span>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="text-center text-black">
                                    <div className="table text-center m-auto text-black">
                                        <img src={TeamImage3} alt="" />
                                    </div>
                                    <span className="team-name text-base md:text-2xl font-semibold">Manchester City</span>
                                </div>
                                <div className="text-center block m-auto">
                                    <div className="table text-center m-auto text-black">
                                        <span className="text-base date">Feb 20, 2022</span>
                                        <div className="block">
                                            <span className="text-xl text-[#fdbc19]">06:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-black">
                                    <div className="table text-center m-auto text-black">
                                        <img src={TeamImage4} alt="" />
                                    </div>
                                    <span className="team-name text-base md:text-2xl font-semibold">Manchester City</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default UpcomingMatches;