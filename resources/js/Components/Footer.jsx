import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { ArrowUp } from "./Icons/LandingPage";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false); // State untuk menampilkan overlay

    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        setScrolling(true);
        setShowOverlay(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        setTimeout(() => {
            setScrolling(false);
            setShowOverlay(false);
        }, 800);
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            <footer className="px-6 py-12 md:px-24 space-y-10 md:space-y-0 text-#808080  flex flex-wrap justify-between">
                <aside className="w-full relative md:w-2/4">
                    <h5
                        className="text-2xl mb-4 font-normal uppercase leading-normal"
                        style={{
                            background:
                                "linear-gradient(90deg, #201349 0%, #513E99 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontFamily: '"Varsity Regular"',
                        }}
                    >
                        HMTI Udayana
                    </h5>

                    <p className="capitalize mt-5 w-auto md:w-[450px] my-4 ">
                        Master the basics, Unlock your IT Superpower
                    </p>
                    <div className="social-media mt-10 flex items-center space-x-3 relative bottom-0">
                        <a
                            className="flex items-center"
                            href="https://www.instagram.com/hmtiudayana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            INSTAGRAM
                        </a>
                        <a
                            className="flex items-center"
                            href="https://www.tiktok.com/@hmtiudayana?_t=8oS3HHpAO92&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TIKTOK
                        </a>
                        <a
                            className="flex items-center"
                            href="https://www.facebook.com/HMTIUdayana/?locale=id_ID"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            FACEBOOK
                        </a>
                        <a
                            className="flex items-center"
                            href="https://www.youtube.com/@hmtiuniversitasudayana2028"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            YOUTUBE
                        </a>
                    </div>
                </aside>
                <nav className="w-full md:w-1/4">
                    <h5 className="font-bold text-2xl mb-4">Quick Links</h5>
                    <div className="quick-links">
                        <a
                            className="group mb-3 flex items-center"
                            href="#About"
                            rel="noopener noreferrer"
                        >
                            About
                        </a>
                        <a
                            className="group mb-3 flex items-center"
                            href="#Timeline"
                            rel="noopener noreferrer"
                        >
                            Timeline
                        </a>
                        <a
                            className="group mb-3 flex items-center"
                            href="#Faq"
                            rel="noopener noreferrer"
                        >
                            FAQ
                        </a>
                        <a
                            className="group mb-3 flex items-center"
                            href="#Merch"
                            rel="noopener noreferrer"
                        >
                            Merchandise
                        </a>
                    </div>
                </nav>
                <nav className="w-full md:w-1/5 items-end">
                    <h5 className="font-bold text-2xl mb-4">Modul Pelatihan</h5>
                    <a
                        className="group mb-3 flex items-center"
                        href="/modul/alprog"
                        rel="noopener noreferrer"
                    >
                        Algoritma dan Pemrograman
                    </a>
                    <a
                        className="group mb-3 flex items-center"
                        href="/modul/basisdata"
                        rel="noopener noreferrer"
                    >
                        Basis Data
                    </a>
                    <a
                        className="group mb-3 flex items-center"
                        href="/modul/jarkom"
                        rel="noopener noreferrer"
                    >
                        Jaringan Komputer
                    </a>
                </nav>
            </footer>
            <footer className="px-6 md:px-24 bg-white text-white">
                <div className="flex justify-between">
                    <p className="text-[#333] my-4  w-fit">
                        Copyright © 2025 All rights reserved.{" "}
                    </p>
                    <Button
                        className={`w-[60px] h-[60px] px-4 my-4  bg-gradient-to-r from-[#201349] to-[#513E99] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] rounded-[15px] scrollToTop hover:mt-2 transition-all duration-300 ${
                            scrolling ? "hide" : "show"
                        }`}
                        onClick={scrollToTop}
                        style={{ display: isVisible ? "block" : "none" }}
                    >
                        <ArrowUp />
                    </Button>
                </div>
            </footer>
        </>
    );
}
