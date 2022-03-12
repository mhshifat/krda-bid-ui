import Logo from "../../Assets/Logo.png"
import React from "react";
import WhiteMenu from "../WhiteMenu/WhiteMenu";
import Button from "../Buttons/Buttons";
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Disclosure } from '@headlessui/react'
import { Link, useLocation } from "react-router-dom";

export const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'LEADERBOARD', href: '/leaderboard' },
]

const Header = ({ setSideBarOpen }) => {
    const location = useLocation();
    const navSideBarOpen = () => {
        setSideBarOpen(true)
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <header className="text-white bg-green absolute font-primary w-full z-30 font-AvenirLTStd mb-20">
            <Disclosure as="nav" className="navbar hidden lg:block py-4 px-4">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-between">
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
                                            className="hidden lg:block"
                                            src={Logo}
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            <div className="flex space-x-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className={classNames(
                                                            location.pathname === item.href ? 'bg-gray-900 text-white relative before:content-[""] before:absolute before:top-full before:left-0 before:h-1 before:w-full before:rounded-full before:bg-[#FDBC19]' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex space-x-4 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <button
                                            type="button"
                                            className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6 text-[#FDBC19]" aria-hidden="true" />
                                        </button>
                                        <Button content={"Connect Wallet"} />
                                        <WhiteMenu content={"Options"} />
                                    </div>
                                </div>
                                {/*  */}
                            </div>
                        </div>
                        
                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:hidden flex justify-between items-center">
                <a
                    className="flex title-font font-bold items-center text-heading tracking-tight cursor-pointer"
                    href="/"
                >
                    <div
                        style={{
                            overflow: "hidden",
                            boxSizing: "border-box",
                            display: "inline-block",
                            position: "relative",
                            width: "100px",
                            height: "100px",
                        }}
                    >
                        <img
                            alt=""
                            src={`${Logo}`}
                            decoding="async"
                            className="object-center"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                            }}
                            srcSet={`${Logo} 1x, ${Logo} 2x`}
                        />
                    </div>
                </a>
                <div className="flex items-center">
                    <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white ring-[#FDBC19] ring-2 focus:ring-2 focus:ring-offset-gray-800 focus:ring-[#FDBC19] mr-5"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6 text-[#FDBC19]" aria-hidden="true" />
                    </button>
                    <button
                        onClick={navSideBarOpen}
                        className="p-2 sm:p-3 border rounded-full border-white
                    cursor-pointer text-[#FDBC19]"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 1024 1024"
                            className="h-4 w-4 sm:h-5 sm:w-5 text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
                        </svg>
                    </button>
                </div>
                
            </div>
        </header>
    )
}
export default Header