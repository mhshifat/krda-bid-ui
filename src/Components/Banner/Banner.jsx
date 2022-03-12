import React from "react";
import "./banner.css"
const Banner = () =>{
    return(
        <div className="banner max-w-7xl flex justify-between items-center mt-16 px-2 sm:px-6 lg:px-8 mx-4 md:mx-4 lg:mx-auto">
            <div className="flex-1 flex-col flex lg:flex-row justify-items-center justify-between sm:items-stretch">
                <div className="flex flex-col flex-shrink-0 justify-items-center items-center ">
                    <span className="text-bidder-number">56,789</span>
                    <span className="text-bidder-title"># of Bidders</span>
                </div>
                <div className="flex flex-col flex-shrink-0 justify-items-start items-center">
                    <span className="text-bidder-number">12,56,789</span>
                    <span className="text-bidder-title"># of Bids</span>
                </div>
                <div className="flex flex-col flex-shrink-0 justify-items-start items-center">
                    <span className="Rs-text-bidder-number">Rs. 34,56,789</span>
                    <span className="text-bidder-title">Total rewards</span>
                </div>
            </div>
        </div>
    )
    
}
export default React.memo(Banner);