import Logo from "../../Assets/Logo.png"
import { MailIcon, PhoneIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
const Footer = () => {
    return(
        <Fragment>
            <div className="max-w-7xl my-20 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-0 md:gap-10">
                    <div className="flex flex-col w-full col-span-3 pr-10">
                        <div className="game-stat flex flex-row w-full justify-between px-2 mb-3">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="block lg:hidden h-8 w-auto"
                                    src={Logo}
                                    alt="Workflow"
                                />
                                <img
                                    className="hidden lg:block h-8 w-auto"
                                    src={Logo}
                                    alt="Workflow"
                                />
                            </div>
                        </div>
                        <div className="game-stat flex flex-row w-full justify-between px-2 mb-3">
                            <span className="text-left text-base text-[#8393af]">
                                We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, Ut enim ad minim veniam, quis nostrud equip
                            </span>
                        </div>
                        <div className="flex flex-row w-full items-center mb-5">
                            <div className="h-10 w-10 bg-[#fff]/[.20] rounded-full flex items-center justify-center mr-2">
                                <MailIcon
                                    className="h-6 w-6 text-center m-0"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-[#8393af]">Phone</span>
                                <span className="text-xl">+8801795355849</span>
                            </div>
                        </div>
                        <div className="flex flex-row w-full items-center mb-5">
                            <div className="h-10 w-10 bg-[#fff]/[.20] rounded-full flex items-center justify-center mr-2">
                                <PhoneIcon
                                    className="h-6 w-6 text-center m-0 block"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-[#8393af]">Phone</span>
                                <span className="text-xl">+8801795355849</span>
                            </div>
                        </div>
                        <div className="flex flex-row w-full items-center mb-5">
                            <div className="h-10 w-10 bg-[#fff]/[.20] rounded-full flex items-center justify-center mr-2">
                                <LocationMarkerIcon
                                    className="h-6 w-6 text-center m-0"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-[#8393af]">Phone</span>
                                <span className="text-xl">+8801795355849</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full col-span-4 pl-0 md:pl-10">
                        <div className="w-full px-2 mb-3">
                            <div className="grid grid-cols-3">
                                <span className="text-2xl text-left">About</span>
                                <span className="text-2xl">Support</span>
                                <span className="text-2xl">FAQ</span>
                            </div>
                        </div>
                        <div className="w-full px-2 mb-3 text-base text-[#B5BCCC]">
                            <div className="grid grid-cols-3">
                                <span className="text-base text-left">Blog</span>
                                <span className="text-base text-[#B5BCCC]">
                                    Online Chat
                                </span>
                                <span className="text-base">Manage Deliveries</span>
                            </div>
                        </div>
                        <div className="w-full px-2 mb-3 text-base text-[#B5BCCC]">
                            <div className="grid grid-cols-3">
                                <span className="text-base text-left">Careers</span>
                                <span className="text-base text-[#B5BCCC]">Whatsapp</span>
                                <span className="text-base">Orders</span>
                            </div>
                        </div>
                        <div className="w-full px-2 mb-3 text-base text-[#B5BCCC]">
                            <div className="grid grid-cols-3">
                                <span className="text-base text-left">Jobs</span>
                                <span className="text-base text-[#B5BCCC]">Telegrams</span>
                                <span className="text-base">Payments</span>
                            </div>
                        </div>
                        <div className="w-full px-2 mb-3 text-base text-[#B5BCCC]">
                            <div className="grid grid-cols-3">
                                <span className="text-base text-left">In Press</span>
                                <span className="text-base text-[#B5BCCC]">Ticketing</span>
                                <span className="text-base">Refunds</span>
                            </div>
                        </div>
                        <div className="w-full px-2 mb-3 text-base text-[#B5BCCC]">
                            <div className="grid grid-cols-3">
                                <span className="text-base text-left">Gallery</span>
                                <span className="text-base text-[#B5BCCC]">
                                    Call Center
                                </span>
                                <span className="text-base ">Privacy Policy</span>
                            </div>
                        </div>
                        <div className="px-2 mb-3 text-base text-[#B5BCCC]">
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                                <div className="flex flex-row gap-5 justify-start">
                                    <div className="flex flex-row items-center">
                                        <div className="h-10 w-10 bg-[#fff]/[.20] rounded-full flex items-center justify-center mr-2">
                                            <PhoneIcon
                                                className="h-6 w-6 text-center m-0 block"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>{" "}
                                    <div className="flex flex-row items-center">
                                        <div className="h-10 w-10 bg-[#fff]/[.20] rounded-full flex items-center justify-center mr-2">
                                            <PhoneIcon
                                                className="h-6 w-6 text-center m-0 block"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>{" "}
                                    <div className="flex flex-row items-center">
                                        <div className="h-10 w-10 bg-[#fff]/[.20] rounded-full flex items-center justify-center mr-2">
                                            <PhoneIcon
                                                className="h-6 w-6 text-center m-0 block"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>{" "}
                                </div>
                                <span className="text-base mt-3 md:mt-0">
                                    © 2012-2022, All Rights Reserved
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4"></div>
            </div>
        </Fragment>
    )
}
export default React.memo(Footer);