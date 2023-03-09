import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai"
import { Popover, Transition } from '@headlessui/react'
import {BsFillMoonStarsFill, BsSunFill} from 'react-icons/bs'

export default function NavBar({darkModeToggle, darkMode}){
    return (
        <div className="h-20 w-full shadow-md bg-white z-10 dark:bg-gray-700">
            <Popover className="h-full">
                {({open, close}) => (
                    <>
                    {/* Desktop Menu */}
                    <div className="h-full flex justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                            <Link href="/">
                                <h1 className="font-burtons text-gray-800 px-4 2xl:px-16 md:px-12 sm:px-10 dark:text-slate-50">hello world</h1>
                            </Link>
                            {darkMode ? 
                                    <BsSunFill className="cursor-pointer text-2xl text-gray-700
                                        dark:text-gray-50" onClick={darkModeToggle}/>
                                    : <BsFillMoonStarsFill className="cursor-pointer text-2xl text-gray-700
                                                dark:text-gray-50" onClick={darkModeToggle}/>}
                        </div>
                        <ul className="hidden md:flex">
                            <Link href='/'>
                                <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out 
                                        dark:text-gray-50" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    <span>Home</span>
                                </li>
                            </Link>
                            {/* <Link href='/about'>
                                <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out
                                        dark:text-slate-50" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    <span>About Me</span>
                                </li>
                            </Link>
                            <Link href='/projects'>
                                <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out
                                        dark:text-slate-50" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    <span>Projects</span>
                                </li>
                            </Link> */}
                            <Link href='/blog'>
                                <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out
                                        dark:text-slate-50" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                    <span>Blog</span>
                                </li>
                            </Link>
                        </ul>
                        {/* Mobile Menu */}
                        <Popover.Button className="mr-5 md:hidden rounded-none shadow-none border-none whitespace-nowrap dark:text-gray-50">
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
                            <div className="px-4 py-3 shadow-lg bg-white flex flex-col divide-y divide-gray-300 dark:bg-gray-700">
                                <ul>
                                    <Link href='/'>
                                        <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden dark:text-slate-50 text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                                            data-mdb-ripple="true" 
                                            data-mdb-ripple-color="dark"
                                            onClick={close}>
                                            <span>Home</span>
                                        </li>
                                    </Link>
                                    <Link href='/about'>
                                        <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden dark:text-slate-50 text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                                            data-mdb-ripple="true" 
                                            data-mdb-ripple-color="dark"
                                            onClick={close}>
                                            <span>About Me</span>
                                        </li>
                                    </Link>
                                    <Link href='/projects'>
                                        <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden dark:text-slate-50 text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" 
                                            data-mdb-ripple="true" 
                                            data-mdb-ripple-color="dark"
                                            onClick={close}>
                                            <span>Projects</span>
                                        </li>
                                    </Link>
                                    <Link href='/blog'>
                                        <li className="flex items-center text-sm py-4 px-4 mx-2 h-12 overflow-hidden dark:text-slate-50 text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" 
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