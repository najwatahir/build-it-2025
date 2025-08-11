import { useState, useEffect, useRef } from "react";
import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "./AplicationLogo";
import { IconUser } from "./Icons/LandingPage";

export default function Navbar() {
    const { auth } = usePage().props;
    const [show, setIsShow] = useState(false);
    const [showNav, setIsShowNav] = useState(false);
    const [scrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);

    function showDropDown() {
        setIsShow(!show);
    }

    function showNavbar() {
        setIsShowNav(!showNav);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            setIsScrolled(scroll > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleDropdownItemClick = () => {
        setIsShow(false);
    };

    return (
        <nav
            className={`bg-white w-full flex justify-between items-center px-6 lg:px-24 py-4 sticky z-50 top-0 ${
                scrolled ? "shadow" : "shadow-lg"
            }`}
        >
            <span>
                <ApplicationLogo />
            </span>
            <ul
                className={` ${
                    !showNav ? "hidden" : "flex"
                } flex-col justify-center lg:w-full md:w-max-content rounded bg-white top-20 left-12 right-12 border border-gray-300 py-6 px-4 lg:px-12 space-y-3 absolute shadow text-#000 z-10 lg:flex lg:relative lg:flex-row lg:items-center lg:top-0 lg:space-y-0 lg:space-x-6 lg:left-0 lg:right-0 lg:py-0 lg:border-none lg:shadow-none`}
            >
                <li className="hover:text-primary font-montserrat font-semibold hover:bg-gray-200 rounded-[10px] w-full md:w-max p-2">
                    <Link href={route("Welcome")}>Home</Link>
                </li>
                <li className="hover:text-primary font-montserrat font-semibold hover:bg-gray-200 rounded-[10px] w-full md:w-max p-2">
                    <a href="/#About">About</a>
                </li>
                <li className="space-x-1 relative" ref={dropdownRef}>
                    <div
                        className="flex font-montserrat font-semibold flex-row gap-1 cursor-pointer transition-all duration-300 hover:text-primary hover:bg-gray-200 rounded-[10px] w-full md:w-max p-3"
                        onClick={showDropDown}
                    >
                        <p>Modul</p>
                        <i
                            className={`pi ${
                                !show ? "pi-angle-down" : "pi-angle-up"
                            } mt-1`}
                        ></i>
                    </div>
                    <ul className="font-montserrat font-semibold">
                        <li
                            className={`lg:absolute bg-white mt-3 p-2 min-w-full md:w-max shadow-none lg:shadow-lg border-none lg:border-[1px] hover:text-primary border-gray-200 rounded flex-col space-y-2 transition-all duration-300 ${
                                !show ? "hidden" : "flex"
                            }`}
                        >
                            <Link
                                href={route("Modul.Alprog")}
                                className="hover:text-primary hover:bg-gray-200 rounded-[10px] w-full p-1.5"
                                onClick={handleDropdownItemClick}
                            >
                                Algoritma & Pemrograman
                            </Link>
                            <Link
                                href={route("Modul.BasisData")}
                                className="hover:text-primary hover:bg-gray-200 rounded-[10px] w-full p-1.5"
                                onClick={handleDropdownItemClick}
                            >
                                Basis Data
                            </Link>
                            <Link
                                href={route("Modul.Jarkom")}
                                className="hover:text-primary hover:bg-gray-200 rounded-[10px] w-full p-1.5"
                                onClick={handleDropdownItemClick}
                            >
                                Jaringan Komputer
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="hover:text-primary font-montserrat font-semibold hover:bg-gray-200 rounded-[10px] w-full md:w-max p-2">
                    <a href="/#Faq">FAQ</a>
                </li>
                <li className="hover:text-primary font-montserrat font-semibold hover:bg-gray-200 rounded-[10px] w-full md:w-max p-2">
                    <a href="/#Contact">Contact</a>
                </li>
                <li className="hover:text-primary font-montserrat font-semibold hover:bg-gray-200 rounded-[10px] w-full md:w-max p-2">
                    <a href="/#Merch">Merchandise</a>
                </li>
                <li>
                    {!auth.user ? (
                        <Link
                            href="/login"
                            rel="noopener noreferrer"
                            className="w-fit lg:h-[52px] block lg:hidden py-3 px-6 rounded-[15px] bg-gradient-to-r from-[#201349] to-[#513E99] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] hover:bg-secondary font-bold text-white font  transition-all duration-300 font-montserrat font-semibold text-[14px] leading-none tracking-[1.4px] uppercase"
                        >
                            Login
                        </Link>
                    ) : (
                        <Link
                            href={route("dashboard")}
                            className="flex justify-start items-center gap-3 px-2 py-2 lg:hidden block"
                        >
                            <IconUser />
                        </Link>
                    )}
                </li>
            </ul>
            <div className="btn-cta">
                {!auth.user ? (
                    <Link
                        href={route("login")}
                        rel="noopener noreferrer"
                        className="hidden lg:block py-3 px-6 rounded-[15px] bg-gradient-to-r from-[#201349] to-[#513E99] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] hover:text-secondary text-white font-montserrat font-semibold text-[14px] font-bold leading-none tracking-[1.4px] uppercase  transition-all duration-300"
                    >
                        Login
                    </Link>
                ) : (
                    <Link href={route("dashboard")} className="hidden lg:block">
                        <IconUser />
                    </Link>
                )}
                <button onClick={showNavbar} className="lg:hidden">
                    {!showNav ? (
                        <i className="pi pi-align-justify"></i>
                    ) : (
                        <i className="pi pi-times"></i>
                    )}
                </button>
            </div>
        </nav>
    );
}
