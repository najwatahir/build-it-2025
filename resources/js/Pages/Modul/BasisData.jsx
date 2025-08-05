import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import AOS from "aos";
import "aos/dist/aos.css";

import UserGuest from "@/Components/Layouts/User/UserGuest";

export default function BasisData() {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        document.documentElement.classList.add("smooth-scroll");
    }, []);

    const footerContent = (
        <div className="flex justify-end gap-4">
            <Button
                label="No"
                icon="pi pi-times"
                onClick={hideModal}
                className="p-button-text"
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                onClick={hideModal}
                autoFocus
            />
        </div>
    );

    return (
        <>
            <Head title="Basis Data" />
            <UserGuest>
                <div className="w-full overflow-hidden">
                    <div className="h-max w-full px-3 md:px-24 flex flex-col justify-center">
                        <div className="flex flex-col justify-between mt-20 mb-20 md:mb-36">
                            <div className="flex flex-col z-20 items-center">
                                <p
                                    className="text-3xl font-extrabold md:text-[36px] leading-[50px] tracking-[0.16em] text-wrap md:text-start text-center bg-gradient-to-r from-purpleStart to-purpleEnd bg-clip-text text-transparent"
                                    data-aos="fade-up"
                                >
                                    BASIS DATA
                                </p>
                                <p
                                    className="text-black font-montserrat text-justify
    mx-4 md:mx-0 my-6 md:my-10
    text-[14px] sm:text-[15px] md:text-[20px]
    w-11/12 md:w-[817px]
    leading-[24px] sm:leading-[28px] md:leading-10
    tracking-normal sm:tracking-wide md:tracking-widest
    text-balance"
                                    data-aos="fade-up"
                                >
                                    Mata kuliah Basis Data merupakan salah satu
                                    mata kuliah penting dalam bidang teknologi
                                    informasi yang membahas tentang konsep,
                                    desain, implementasi, dan manajemen basis
                                    data. Mata kuliah ini juga mencakup
                                    penggunaan SQL (Structured Query Language)
                                    untuk manipulasi data, serta pemahaman
                                    tentang manajemen basis data yang aman dan
                                    andal.
                                </p>

                                <a
                                    href="https://drive.google.com/file/d/10FUcc47TXCOyEKqVsqUgGrdhYU3vHhIv/view?usp=sharing"
                                    target="_blank"
                                    className="mb-12"
                                >
                                    <button
                                        className="relative overflow-hidden py-3 px-6 rounded-[15px] bg-gradient-to-r from-[#201349] to-[#513E99] hover:text-[#FCB215] text-white font-montserrat text-[14px] font-bold leading-none tracking-[1.4px] uppercase transition-all duration-500"
                                        data-aos="fade-up"
                                    >
                                        <span className="z-10 relative">
                                            Lihat Modul{" "}
                                            <span className="text-xl">→</span>
                                        </span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-[#513E99] to-[#201349] opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
                                    </button>
                                </a>
                                <div className="flex flex-col items-center justify-center mt-12 animate-bounce">
                                    <svg
                                        viewBox="0 0 19 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:anim="http://www.w3.org/2000/anim"
                                        anim=""
                                        anim:transform-origin="50% 50%"
                                        anim:duration="1"
                                        anim:ease="ease-in-out"
                                        className="w-[40px] h-[40px] mb-4"
                                    >
                                        <path
                                            id="stat_minus_2"
                                            d="M9.5 19.1667L16.875 11.7917C17.125 11.5417 17.4167 11.4167 17.75 11.4167C18.0833 11.4167 18.375 11.5417 18.625 11.7917C18.875 12.0417 19 12.3333 19 12.6667C19 13 18.875 13.2917 18.625 13.5417L11.25 20.9167C10.7778 21.3889 10.1944 21.625 9.5 21.625C8.80556 21.625 8.22222 21.3889 7.75 20.9167L0.375 13.5417C0.125 13.2917 0 13 0 12.6667C0 12.3333 0.125 12.0417 0.375 11.7917C0.625 11.5417 0.916667 11.4167 1.25 11.4167C1.58333 11.4167 1.875 11.5417 2.125 11.7917L9.5 19.1667ZM9.5 8.625L16.875 1.25C17.125 1 17.4167 0.875 17.75 0.875C18.0833 0.875 18.375 1 18.625 1.25C18.875 1.5 19 1.79167 19 2.125C19 2.45833 18.875 2.75 18.625 3L11.25 10.375C10.7778 10.8472 10.1944 11.0833 9.5 11.0833C8.80556 11.0833 8.22222 10.8472 7.75 10.375L0.375 3C0.125 2.75 0 2.45833 0 2.125C0 1.79167 0.125 1.5 0.375 1.25C0.625 1 0.916667 0.875 1.25 0.875C1.58333 0.875 1.875 1 2.125 1.25L9.5 8.625Z"
                                            fill="#513E99"
                                        ></path>
                                    </svg>
                                    <p className="uppercase font-[Montserrat] font-extrabold text-balance text-transparent bg-gradient-to-r from-[#201349] to-[#513E99] bg-clip-text">
                                        scroll
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[550px] inset-x-0 -z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 1440 862"
                            preserveAspectRatio="xMidYMid slice"
                            fill="none"
                        >
                            <g filter="url(#filter0_i_304_649)">
                                <path
                                    d="M1656.24 301.614C1688.71 323.099 1697.41 366.954 1675.6 399.207L1530.24 614.142C1530.05 614.424 1529.66 614.5 1529.38 614.312C1529.09 614.123 1528.71 614.201 1528.52 614.485L1384.15 830.306C1362.66 862.44 1319.18 871.064 1287.05 849.57L1127.66 742.953C1095.53 721.458 1086.9 677.984 1108.4 645.85L1213.06 489.384C1234.63 457.136 1225.86 413.494 1193.5 392.086L1041.03 291.205C1008.91 269.949 965.642 278.646 944.224 310.665L803.711 520.728C803.642 520.83 803.504 520.857 803.402 520.788C803.301 520.72 803.163 520.747 803.095 520.848L658.491 734.667C636.988 766.462 593.892 775.011 561.881 753.831L218.013 526.317C185.886 505.06 142.622 513.757 121.204 545.776L51.4946 649.989C29.9999 682.122 -13.4744 690.747 -45.608 669.252L-204.996 562.636C-237.13 541.141 -245.754 497.667 -224.259 465.533L-117.642 306.146C-96.1477 274.012 -52.6735 265.388 -20.5399 286.882L44.4935 330.384C76.5117 351.801 119.818 343.324 141.397 311.415L211.171 208.245C232.674 176.45 275.77 167.901 307.781 189.081L470.574 296.791C502.701 318.047 545.965 309.351 567.383 277.332L673.369 118.886C694.864 86.7523 738.339 78.1277 770.472 99.6225L922.167 201.094C954.185 222.511 997.491 214.035 1019.07 182.126L1121.39 30.8282C1142.9 -0.966669 1185.99 -9.51547 1218 11.6641L1656.24 301.614Z"
                                    fill="white"
                                    fillOpacity="0.5"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_i_304_649"
                                    x="-236.084"
                                    y="0.0357513"
                                    width="1923.7"
                                    height="865.358"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                    />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_304_649"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="px-6 md:px-24 mb-36">
                        <div className="flex flex-col justify-center items-center z-10">
                            <h1
                                className="md:text-9xl font-extrabold text-3xl tracking-[0.16em] text-wrap md:text-start text-center bg-gradient-to-r from-purpleStart to-purpleEnd bg-clip-text text-transparent"
                                data-aos="fade-up"
                            >
                                PENGISI MATERI
                            </h1>
                            <div className="divider h-[2px] w-5/6 md:w-[706px] bg-primary mt-6 mb-6"></div>
                            <p
                                className="md:w-full w-5/6 md:text-center text-justify mt-3 md:text-xl text-base  leading-loose tracking-widest font-montserrat"
                                data-aos="fade-left"
                            >
                                Pengisi materi untuk matakuliah Basis Data pada
                                BUILD IT 2025 merupakan ex-asisten dosen pada
                                praktikum Basis Data.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center gap-28 md:gap-x-4 items-center mt-36">
                            <CardPembicara
                                imageSrc="../../../asset/images/modul/Dwiki.png"
                                quotation="Kalian ingin konsul tugas-tugas kuliah dan ketemu kakak-kakak jagoan IT? Silahkan bergabung ke @technologyartisan"
                                userInstagram="https://www.instagram.com/kadek.dwiki_/"
                                name="Dwiki"
                                batch="TI'23"
                            />
                            <CardPembicara
                                imageSrc="../../../asset/images/modul/GungHen.png"
                                quotation="Aku bluetooth? Tch tidak akan."
                                userInstagram="https://www.instagram.com/krishnayana._/"
                                name="Gung Hen"
                                batch="TI'23"
                            />
                            <CardPembicara
                                imageSrc="../../../asset/images/modul/Pyari.png"
                                quotation="Query yang rumit lahir dari pemahaman yang sederhana. Mulailah dari dasar, dan bangun logika satu per satu. Kamu bukan bodoh, kamu hanya belum terbiasa."
                                userInstagram="https://www.instagram.com/pyaripujita/"
                                name="Pyari"
                                batch="TI'23"
                            />
                            <CardPembicara
                                imageSrc="../../../asset/images/modul/SatriaYudha.png"
                                quotation="Yang penting relasi, baik di database maupun kehidupan."
                                userInstagram="https://www.instagram.com/satriayudha03/"
                                name="Satria Yudha"
                                batch="TI'23"
                            />
                        </div>
                    </div>
                </div>
            </UserGuest>
        </>
    );
}

function CardPembicara({ imageSrc, name, batch, quotation, userInstagram }) {
    return (
        <div data-aos="fade-up" className="flex flex-col items-start space-y-3">
            <div className="relative w-[285px] h-[403px] cursor-pointer group overflow-hidden bg-gradient-to-t from-purpleEnd to-white">
                <div className="absolute w-full h-full">
                    <img
                        src={imageSrc}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-indigo-800/0 via-indigo-800 to-indigo-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex flex-col justify-center items-center p-5 space-y-5">
                    <p className="text-sm text-white font-montserrat text-center w-5/6">
                        {quotation}
                    </p>
                    <a
                        href={userInstagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[20px] uppercase font-montserrat text-white underline"
                    >
                        Instagram
                    </a>
                </div>
            </div>
            <div className="text-start">
                <p className="text-[24px] font-montserrat font-medium leading-[24px] text-black">
                    {name}
                </p>
                <p className="text-[20px] font-montserrat font-thin text-gray-700">
                    {batch}
                </p>
            </div>
        </div>
    );
}

export const arrowScroll = (props) => (
    <svg
        height="22"
        width="19"
        fill="none"
        viewBox="0 0 19 22"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.5 19.1667L16.875 11.7917C17.125 11.5417 17.4167 11.4167 17.75 11.4167C18.0833 11.4167 18.375 11.5417 18.625 11.7917C18.875 12.0417 19 12.3333 19 12.6667C19 13 18.875 13.2917 18.625 13.5417L11.25 20.9167C10.7778 21.3889 10.1944 21.625 9.5 21.625C8.80556 21.625 8.22222 21.3889 7.75 20.9167L0.375 13.5417C0.125 13.2917 0 13 0 12.6667C0 12.3333 0.125 12.0417 0.375 11.7917C0.625 11.5417 0.916667 11.4167 1.25 11.4167C1.58333 11.4167 1.875 11.5417 2.125 11.7917L9.5 19.1667ZM9.5 8.625L16.875 1.25C17.125 1 17.4167 0.875 17.75 0.875C18.0833 0.875 18.375 1 18.625 1.25C18.875 1.5 19 1.79167 19 2.125C19 2.45833 18.875 2.75 18.625 3L11.25 10.375C10.7778 10.8472 10.1944 11.0833 9.5 11.0833C8.80556 11.0833 8.22222 10.8472 7.75 10.375L0.375 3C0.125 2.75 0 2.45833 0 2.125C0 1.79167 0.125 1.5 0.375 1.25C0.625 1 0.916667 0.875 1.25 0.875C1.58333 0.875 1.875 1 2.125 1.25L9.5 8.625Z"
            fill="#513E99"
        />
    </svg>
);
