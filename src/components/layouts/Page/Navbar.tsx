import { useState } from "react";
import { Link } from "react-router-dom";

import webLogo from "../../../assets/img/logo.jpg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header>
            <div className="fixed top-0 left-0 right-0 bg-slate-900/90 border-b-[1px] border-slate-50/10 backdrop-blur-sm z-50">
                <div className="max-w-6xl m-auto z-1000">
                    <div className="container-inner h-14 flex items-center px-4">
                        <div className="logo-col">
                            <Link to="/" className="group flex items-center">
                                <img src={webLogo} alt="logo" className="w-auto h-10 rounded-full" />
                            </Link>
                        </div>
                        <div className="menu-col ml-auto flex items-center">
                            <div className="desk-menu hidden md:block items-center">
                                <ul className="flex items-center">
                                    <li className="ml-8">
                                        <Link
                                            to="/projects"
                                            className="group text-sm text-gray-200 hover:text-sky-300 flex items-center transition-all duration-200 font-semibold"
                                        >
                                            Projects
                                        </Link>
                                    </li>
                                    <li className="ml-8">
                                        <Link
                                            to="/contact"
                                            className="group text-sm text-gray-200 hover:text-sky-300 flex items-center transition-all duration-200 font-semibold"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="block md:hidden">
                                <div
                                    className="h-8 w-8 ml-2 -mr-2 flex items-center justify-center group cursor-pointer"
                                    onClick={toggleMenu}
                                >
                                    {!isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="white"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="white"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18 18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="px-4">
                        <ul>
                            <li className="border-t border-t-slate-800">
                                <Link
                                    to="/projects"
                                    className="block py-3 text-sm text-gray-200 font-semibold"
                                    onClick={closeMenu}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="border-t border-t-slate-800">
                                <Link
                                    to="/contact"
                                    className="block py-3 text-sm text-gray-200 font-semibold"
                                    onClick={closeMenu}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
