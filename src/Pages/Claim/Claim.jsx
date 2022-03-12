import "./claim.css"
import Button from "../../Components/Buttons/Buttons"
const Claim = () =>{
    return(
        <div className="bg-transparent mt-20">
            <div className="max-w-7xl mx-auto py-12 px-4">
                <h2 className="text-5xl text-center font-bold text-gray-900 sm:text-5xl">
                    <span className="block text-white mb-5 text-3xl md:text-4xl">Claim Your Rewards</span>
                </h2>
                <p className="text-center text-gray-500 my-5">
                    <span className="block text-md text-[#9699a0]">
                        Choose from below options to claim.
                    </span>
                </p>
                <div className="mx-auto claim-amount max-w-md">
                    <div className="flex rounded-full shadow justify-between items-center mx-4 py-2">
                        <div className="border-2 rounded-full w-10 h-10 flex justify-center items-center border-claim text-[#000]">
                            <span className="text-base">10X</span>
                        </div>
                        <div className="border-2 rounded-full w-10 h-10 flex justify-center items-center border-claim text-[#000]">
                            <span className="text-base">10X</span>
                        </div>
                        <div className="border-2 rounded-full w-10 h-10 flex justify-center items-center border-claim text-[#000]">
                            <span className="text-base">10X</span>
                        </div>
                        <div className="border-2 rounded-full w-10 h-10 flex justify-center items-center border-claim text-[#000]">
                            <span className="text-base">10X</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-center font-bold text-gray-900 my-5 block">
                        <span className="text-white text-3xl md:text-3xl amount table m-auto">Amount: <span className="number">1000</span></span>
                    </span>
                </div>
                <div className="my-5 flex mx-auto justify-center">
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <Button content={"Claim now"}></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Claim