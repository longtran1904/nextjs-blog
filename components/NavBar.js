import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai"
import { Popover, Transition } from '@headlessui/react'

const authorName = "Long Tran";
export default function NavBar(){
    return (
        <div className="h-20 w-full shadow-md bg-white 2xl:px-16 z-10">
            <Popover className="h-full">
                {({open, close}) => (
                    <>
                    {/* Desktop Menu */}
                    <div className="relative h-full flex justify-end items-center">
                        <ul className="hidden md:flex">
                            <Link href='/'>
                                <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    <span>Home</span>
                                </li>
                            </Link>
                            <Link href='/about'>
                                <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    <span>About Me</span>
                                </li>
                            </Link>
                            <Link href='/projects'>
                                <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    <span>Projects</span>
                                </li>
                            </Link>
                            <Link href='/blog'>
                                <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    <span>Blog</span>
                                </li>
                            </Link>
                        </ul>
                        <Popover.Button className="md:hidden rounded-none shadow-none mr-5 border-none whitespace-nowrap">
                            <AiOutlineMenu size={35}/>
                        </Popover.Button>
                    </div>
                    
                    <Transition
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel className="absolute min-w-full md:hidden z-10">
                            <div className="px-4 py-3 shadow-lg bg-white flex flex-col divide-y divide-gray-300">
                                <ul>
                                    <Link href='/'>
                                        <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                                            data-mdb-ripple="true" 
                                            data-mdb-ripple-color="dark"
                                            onClick={close}>
                                            <span>Home</span>
                                        </li>
                                    </Link>
                                    <Link href='/about'>
                                        <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                                            data-mdb-ripple="true" 
                                            data-mdb-ripple-color="dark"
                                            onClick={close}>
                                            <span>About Me</span>
                                        </li>
                                    </Link>
                                    <Link href='/projects'>
                                        <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" 
                                            data-mdb-ripple="true" 
                                            data-mdb-ripple-color="dark"
                                            onClick={close}>
                                            <span>Projects</span>
                                        </li>
                                    </Link>
                                    <Link href='/blog'>
                                        <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" 
                                            data-mdb-ripple="true" 
                                            data-mdb-ripple-color="dark"
                                            oncClick={close}>
                                            <span>Blog</span>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </Popover.Panel>
                    </Transition>

                    
                    </>   
                )}
            </Popover>
            
                
        </div>
    )
}