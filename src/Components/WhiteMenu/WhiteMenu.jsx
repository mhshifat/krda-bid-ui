import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const WhiteMenu = ({content,display}) =>{
    return(
        <Menu as="div" className={`relative ${display?display:"inline-block"} text-left`}>
            <div>
                <Menu.Button className="flex justify-center w-full rounded-lg shadow-sm px-1 py-1 bg-transparent text-xs md:text-sm text-white font-medium border-2 border-[#d88124] hover:bg-gray-50 hover:text-black focus:outline-none white-menu-border">
                    {content}
                    <ChevronDownIcon className="-mr-1 ml-0 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="transparent-menu-button origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none bg-light text-[rgb(71,71,71)] z-50 w-56">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'text-gray-900' : ' text-gray-700',
                                        'block px-4 py-2 text-sm hover:bg-gradient-to-r from-[#FDBC19]/[1] to-[#d88124]/[1] hover:text-[#fff]'
                                    )}
                                >
                                    Account settings
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm hover:bg-gradient-to-r from-[#FDBC19]/[1] to-[#d88124]/[1] hover:text-[#fff]'
                                    )}
                                >
                                    Support
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm hover:bg-gradient-to-r from-[#FDBC19]/[1] to-[#d88124]/[1] hover:text-[#fff]'
                                    )}
                                >
                                    License
                                </a>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900 all-menu-item' : 'text-gray-700',
                                            'block px-4 py-2 text-sm hover:bg-gradient-to-r from-[#FDBC19]/[1] to-[#d88124]/[1] hover:text-[#fff]'
                                        )}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
export default WhiteMenu;