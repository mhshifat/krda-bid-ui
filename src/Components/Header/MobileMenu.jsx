import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/Logo.png"
import { navigation } from "./Header";
import "./header.css"
import WhiteMenu from "../WhiteMenu/WhiteMenu";
import OrangeRoundedButtonMenu from "../Buttons/OrangeRoundedButtonMenu";
const MobileMenu = ({ setSideBarOpen }) => {
    const location = useLocation();
    const navSideBarClose = () => {
        setSideBarOpen(false);
    };

    return (
        <nav className="absolute mobile-nav top-0 left-0 w-screen transform overflow-y-auto h-screen z-400 transition ease-in-out duration-short bg-white font-AvenirLTStd bg-[#191919]">
            <div className="flex flex-col sm:flex-row sm:justify-around">
                <div className="w-full">
                    <div className="flex items-center justify-between mt-10 px-8">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                style={{
                                    width: "78.48px",
                                    height: "72px"
                                }}
                                className="block lg:hidden"
                                src={Logo}
                                alt="Workflow"
                            />
                            <img
                                style={{
                                    width: "78.48px",
                                    height: "72px"
                                }}
                                className="hidden lg:block h-8 w-auto"
                                src={Logo}
                                alt="Workflow"
                            />
                        </div>                        <div role="button" onClick={navSideBarClose}>
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                className="h-7 w-7 cursor-pointer"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <nav className="mt-10">
                        {navigation.map(nav => (
                          <Link
                              onClick={navSideBarClose}
                                className={`mobile-menu-link text-xl flex items-center mt-2 py-4 px-8 border-white hover:border-orange transform duration-short ease-in ${location.pathname.includes(nav.href) ? "text-[#FDBC19]" : ""}`}
                              role="button"
                              to={nav.href}
                          >
                              <span className="text-base font-normal capitalize">
                                  {nav.name}
                              </span>
                          </Link>
                        ))}
                        <div className="px-8 flex flex-col space-y-3 mt-2">
                            <WhiteMenu content={"help"} display={"block"} />
                            <OrangeRoundedButtonMenu title={"Dashboard"} display={"block"}/>
                            <button
                                type="button"
                                className="navbar-button block w-full justify-center py-1 px-3 border border-transparent shadow-sm text-sm font-medium rounded-lg text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Connect Wallet
                            </button>                       
                        </div>
                    </nav>
                </div>
            </div>
        </nav>
    )
}
export default MobileMenu;