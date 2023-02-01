import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import ContactBar from "./ContactBar";

//TODO fix round circle for contact buttons

const authorName = "Long Tran";
export default function NavBar(){
    return (
        <div className="h-20 min-w-screen shadow-md bg-white py-1">
            {/* Menu */}
            <div >
                <ul className="flex flex-row items-center justify-center">
                    <li>
                        <a className="flex items-center text-sm py-4 mx-4 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <span>About Me</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center text-sm py-4 mx-4 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center text-sm py-4 mx-4 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <span>Blog</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}