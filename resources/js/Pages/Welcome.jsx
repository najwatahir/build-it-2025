import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
//import DisableInspect from "@/Utils/disableInspect";
import { Dialog } from "primereact/dialog";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import {
    IconFaq,
    IconContactCard,
    IconContactBanner,
} from "../Components/Icons/LandingPage";
import { KotakModulSecondary } from "@/Components/Icons/modul";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./Loading";

import UserGuest from "@/Components/Layouts/User/UserGuest";

export default function Welcome() {
    const [modalVisible, setModalVisible] = useState(false);
    // accordion faq
    const [openIndex, setOpenIndex] = useState(null);
    // usestate change merch
    const [imageSrc, setImageSrc] = useState(
        "asset/images/landing-page/merch-black.png"
    );
    // usestate modal pop up
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [shirtColor, setShirtColor] = useState("black");

    const [visible, setVisible] = useState(false);

    // modal untuk pendaftaran ditutup
    const [isModalClOpen, setIsModalClOpen] = useState(false);

    const handleRegisterClick = (e) => {
        e.preventDefault();

        const closingDate = new Date("2024-08-25");
        const currentDate = new Date();

        if (currentDate > closingDate) {
            setIsModalClOpen(true);
        } else {
            window.location.href = "/register";
        }
    };

    const isModalClHide = () => {
        setIsModalClOpen(false);
    };

    const [batchInfo, setBatchInfo] = useState({
        batchName: "Pre-Order",
        batchDate: "14 Agustus 2024 - 28 Agustus 2024",
    });

    useEffect(() => {
        const currentDate = new Date();
        const batch1End = new Date("2024-08-28");
        const batch2Start = new Date("2024-09-01");
        const batch2End = new Date("2024-09-15");

        if (currentDate >= batch2Start && currentDate <= batch2End) {
            setBatchInfo({
                batchName: "Extended Pre-Order",
                batchDate: "1 September 2024 - 15 September 2024",
            });
        }
    }, []);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    // modal pop up merch
    useEffect(() => {
        setIsPopupOpen(true);

        const timer = setTimeout(() => {
            setIsPopupOpen(false);
        }, 10000);
    }, []);

    // useEffect(() => {
    //     const cleanup = DisableInspect();
    //     return () => cleanup();
    // }, []);

    useEffect(() => {
        document.documentElement.classList.add("smooth-scroll");
    }, []);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const timelineEvents = [
        {
            title: "Open Registration",
            date: "Batch I : 14 Agustus - 20 Agustus 2025 Batch II : 22 Agustus - 5 September 2025",
            location: "https://buildit.hmtiudayana.id/",
            side: "left",
        },
        {
            title: "Pembukaan dan Pelatihan Jaringan Komputer & Komunikasi",
            date: "20 September 2025",
            location: "Gedung TI, Fakultas Teknik, Jimbaran",
            side: "right",
        },
        {
            title: "Pelatihan Algoritma & Pemrograman",
            date: "27 September 2025",
            location: "Gedung TI, Fakultas Teknik, Jimbaran",
            side: "left",
        },
        {
            title: "Pelatihan Basis Data",
            date: "27 September 2025",
            location: "Gedung TI, Fakultas Teknik, Jimbaran",
            side: "right",
        },
        {
            title: "Deadline Pengumpulan Tugas",
            date: "11 Oktober 2025",
            location: "Online",
            side: "left",
        },
        {
            title: "Sosialisasi Penjurusan & Lomba-lomba",
            date: "4 Oktober 2025",
            location: "Aula Swastika, Fakultas Teknik, Jimbaran",
            side: "right",
        },
    ];

    return (
        <>
            <Head title="Landing Page" />
            {/* <Loading/> */}
            <UserGuest>
                <div className="w-full overflow-hidden">
                    {/* Hero Section*/}
                    <div className="mt-16 relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
                        <div className="absolute top-16 inset-x-0 -z-10">
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

                        <div className="flex flex-col items-center text-center space-y-2 z-10">
                            <h1
                                className="uppercase font-[Montserrat] font-extrabold text-balance text-transparent bg-gradient-to-r from-[#201349] to-[#513E99] bg-clip-text
                 [text-shadow:0_0_40px_rgba(0,0,0,0.1)]"
                                style={{
                                    fontSize: "clamp(3rem, 12vw, 14rem)",
                                    lineHeight: "1.1",
                                }}
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                BUILD IT
                            </h1>

                            <h2
                                className="uppercase font-[Montserrat] font-extrabold text-balance text-transparent bg-gradient-to-r from-[#201349] to-[#513E99] bg-clip-text
                 [text-shadow:0_0_40px_rgba(0,0,0,0.1)] mt-1 sm:mt-2"
                                style={{
                                    fontSize: "clamp(2.5rem, 10vw, 10rem)",
                                    lineHeight: "1.1",
                                }}
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                2025
                            </h2>

                            <div
                                className=" mt-8 sm:mt-12 lg:mt-16 text-[#4D4D4D] font-[Montserrat] font-semibold uppercase tracking-[2px] max-w-screen-md text-center"
                                style={{
                                    fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
                                }}
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <p>Master the basics</p>
                                <p>Unlock your IT Superpower</p>
                            </div>

                            <div className="h-14 sm:h-16"></div>

                            <div
                                className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <button
                                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#201349] to-[#513E99] shadow-md
               text-white font-[Montserrat] text-sm sm:text-base font-bold leading-[30px]
               tracking-[1.6px] uppercase flex items-center gap-2 hover:brightness-110 transition-all duration-200 hover:text-secondary"
                                >
                                    Daftar Sekarang
                                    <span className="text-xl">→</span>
                                </button>

                                <button
                                    className="px-6 py-3 rounded-full border-2 border-[#201349] text-[#201349]
               font-[Montserrat] text-sm sm:text-base font-bold leading-[30px]
               tracking-[1.6px] uppercase flex items-center gap-2 hover:bg-[#f4f4f4] transition-all duration-200"
                                >
                                    How to Join
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sponsor*/}
                    <div
                        className="mt-80 sm:mt-92 lg:mt-100 text-center"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <h3
                            className="font-[Montserrat] font-bold text-transparent bg-gradient-to-r from-[#201349] to-[#513E99] bg-clip-text
               tracking-[2px]"
                            style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}
                        >
                            OUR SPONSOR
                        </h3>
                    </div>
                    <div className="relative w-full px-0 mt-4 overflow-hidden">
                        <div
                            className="relative w-full max-w-7xl mx-auto h-[180px] sm:h-[200px] flex items-center justify-center rounded-2xl shadow-md"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, #ffffff 25%, #ffffff 75%, rgba(255,255,255,0) 100%)",
                            }}
                        >
                            <div className="absolute left-0 top-0 h-full w-20 blur-xl bg-white/50 pointer-events-none" />
                            <div className="absolute right-0 top-0 h-full w-20 blur-xl bg-white/50 pointer-events-none" />
                            <div
                                className="w-full max-w-[403px] aspect-[403/86] bg-cover bg-center bg-no-repeat bg-blend-multiply flex-shrink-0"
                                data-aos="fade-up"
                                data-aos-delay="900"
                                style={{
                                    backgroundImage:
                                        "url('../asset/images/sponsor.png')",
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* 3 Card event  */}
                    <div
                        className="mt-16 px-4 sm:px-8 max-w-7xl mx-auto relative"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        {/* Background Layer 1 */}
                        <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[1850px] h-[1700px] rounded-t-[750px] bg-[rgba(255,255,255,0.10)] shadow-[0_-30px_250px_0px_rgba(81,62,153,0.10)] z-0"></div>

                        {/* Background Layer 2 */}
                        <div className="absolute  -top-[30px] left-1/2 -translate-x-1/2 w-[1682px] h-[1059px] rounded-t-[650px] bg-white border-[5px] border-white shadow-[0_-20px_250px_0px_rgba(81,62,153,0.10)] z-10"></div>

                        {/* Card Grid */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-30">
                            {/* Card 1 */}
                            <div className="bg-white w-full max-w-[400px] h-[208px] mx-auto border border-[rgba(81,62,153,0.2)] shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-3xl p-6 flex flex-col justify-center">
                                <h4 className="pl-8 font-bold text-lg text-[#201349] mb-2">
                                    3 Pelatihan tatap muka
                                </h4>
                                <p className="pl-8 text-sm text-gray-600 text-balance">
                                    Membantu mahasiswa baru memahami mata kuliah
                                    dasar seperti Algoritma & Pemrograman, Basis
                                    Data, dan Jaringan Komputer & Komunikasi.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white w-full max-w-[400px] h-[208px] mx-auto border border-[rgba(81,62,153,0.2)] shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-3xl p-6 flex flex-col justify-center">
                                <h4 className="pl-8 font-bold text-lg text-[#201349] mb-2">
                                    Sosialisasi Lomba & penjurusan
                                </h4>
                                <p className="pl-8 text-sm text-gray-600 text-balance">
                                    Sosialisasi ini akan dipandu oleh dosen dan
                                    mahasiswa Teknologi Informasi.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white w-full max-w-[400px] h-[208px] mx-auto border border-[rgba(81,62,153,0.2)] shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-3xl p-6 flex flex-col justify-center">
                                <h4 className="pl-8 font-bold text-lg text-[#201349] mb-2">
                                    Sharing Session Hacktiv8
                                </h4>
                                <p className="pl-8 text-sm text-gray-600 text-balance">
                                    Akan ada sharing session bersama Hacktiv8
                                    yang merupakan pelatihan coding bootcamp
                                    terbaik di Indonesia.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*about section dan card matkul dasar*/}
                    <div
                        id="About"
                        className="relative mt-20 w-full max-w-[1440px] 
             h-auto py-20 sm:py-28 md:py-36 
             mx-auto 
             rounded-t-[150px] sm:rounded-t-[250px] md:rounded-t-[300px] lg:rounded-t-[350px] 
             bg-white 
             shadow-[0_-60px_90px_rgba(81,62,153,0.10)] 
             flex flex-col items-center gap-8"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <h2
                            className="text-[32px] font-bold tracking-[0.2em] text-transparent 
               bg-clip-text bg-gradient-to-r from-[#201349] to-[#513E99] 
               font-[Montserrat] text-center"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            TENTANG BUILD IT
                        </h2>

                        <img
                            src="../asset/images/Logo.png"
                            alt="Logo Build IT"
                            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[269px] aspect-[269/337] object-contain"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        />
                        <p
                            className="max-w-[938px] text-[#4D4D4D] text-justify 
             font-[Montserrat] text-[20px] font-normal
             leading-[34px] px-6"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <span className="block">
                                <strong>
                                    Basic Understanding in Learning and
                                    Developing Information Technology
                                </strong>{" "}
                                atau yang disingkat “BUILD IT” merupakan
                                kegiatan yang bertujuan mewadahi mahasiswa untuk
                                menerima pemahaman lebih tentang materi dasar
                                perkuliahan di luar kegiatan belajar mengajar
                                serta mempersiapkan diri untuk mengikuti
                                perlombaan di bidang Teknologi Informasi melalui
                                Sosialisasi Lomba & Penjurusan.
                            </span>
                        </p>
                        <div className="mt-40 w-full flex flex-col items-center gap-12 px-4">
                            {/* Judul */}
                            <h3
                                className="text-center text-[24px] sm:text-[28px] md:text-[32px] font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#201349] to-[#513E99] font-[Montserrat]"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                MATA KULIAH DASAR
                            </h3>

                            {/* Grid Card */}
                            <div
                                className="w-full px-12 sm:px-14 md:px-16"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {/* Card 1 */}
                                    <div
                                        className="w-full max-w-[400px] h-[505px] px-6 py-8 flex flex-col justify-between items-center rounded-[10px] border border-[rgba(81,62,153,0.2)] bg-white mx-auto"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <h4 className="text-center text-xl font-bold text-[#201349] mb-4 font-[Montserrat]">
                                            Algoritma & Pemrograman
                                        </h4>
                                        <img
                                            src="../asset/images/alprog.png"
                                            alt="Algoritma"
                                            className="w-40 h-40 object-contain mb-4"
                                        />
                                        <p className="text-center text-sm text-[#4D4D4D] font-medium font-[Montserrat] mb-4">
                                            Pemahaman logika pemrograman dasar
                                            dan struktur algoritma untuk
                                            membangun solusi perangkat lunak.
                                        </p>
                                        <button
                                            className="flex items-center justify-center px-[30px] py-[10px] rounded-[15px] 
             bg-gradient-to-r from-[#201349] to-[#513E99] 
             shadow-[0_4px_4px_rgba(0,0,0,0.15)] 
             text-white font-[Montserrat] text-[14px] font-semibold 
             leading-[30px] tracking-[0.1em] uppercase w-full hover:text-secondary transition-all duration-300"
                                        >
                                            Lebih Lanjut{" "}
                                            <span className="pl-16 text-xl">
                                                →
                                            </span>
                                        </button>
                                    </div>
                                    {/* Card 2 */}
                                    <div
                                        className="w-full max-w-[400px] h-[505px] px-6 py-8 flex flex-col justify-between items-center rounded-[10px] border border-[rgba(81,62,153,0.2)] bg-white mx-auto"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <h4 className="text-center text-xl font-bold text-[#201349] mb-4 font-[Montserrat]">
                                            Basis Data
                                        </h4>
                                        <img
                                            src="../asset/images/basisdata.png"
                                            alt="Algoritma"
                                            className="w-40 h-40 object-contain mb-4"
                                        />
                                        <p className="text-center text-sm text-[#4D4D4D] font-medium font-[Montserrat] mb-4">
                                            Pemahaman logika pemrograman dasar
                                            dan struktur algoritma untuk
                                            membangun solusi perangkat lunak.
                                        </p>
                                        <button
                                            className="flex items-center justify-center px-[30px] py-[10px] rounded-[15px] 
             bg-gradient-to-r from-[#201349] to-[#513E99] 
             shadow-[0_4px_4px_rgba(0,0,0,0.15)] 
             text-white font-[Montserrat] text-[14px] font-semibold 
             leading-[30px] tracking-[0.1em] uppercase w-full  hover:text-secondary transition-all duration-300"
                                        >
                                            Lebih Lanjut
                                            <span className="pl-16 text-xl">
                                                →
                                            </span>
                                        </button>
                                    </div>
                                    {/* Card 3 */}
                                    <div
                                        className="w-full max-w-[400px] h-[505px] px-6 py-8 flex flex-col justify-between items-center rounded-[10px] border border-[rgba(81,62,153,0.2)] bg-white mx-auto"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <h4 className="text-center text-xl font-bold text-[#201349] mb-4 font-[Montserrat]">
                                            Jaringan Komputer
                                        </h4>
                                        <img
                                            src="../asset/images/jarkom.png"
                                            alt="Algoritma"
                                            className="w-40 h-40 object-contain mb-4"
                                        />
                                        <p className="text-center text-sm text-[#4D4D4D] font-medium font-[Montserrat] mb-4">
                                            Pemahaman logika pemrograman dasar
                                            dan struktur algoritma untuk
                                            membangun solusi perangkat lunak.
                                        </p>
                                        <button
                                            className="flex items-center justify-center px-[30px] py-[10px] rounded-[15px] 
             bg-gradient-to-r from-[#201349] to-[#513E99] 
             shadow-[0_4px_4px_rgba(0,0,0,0.15)] 
             text-white font-[Montserrat] text-[14px] font-semibold 
             leading-[30px] tracking-[0.1em] uppercase w-full  hover:text-secondary transition-all duration-300"
                                        >
                                            Lebih Lanjut{" "}
                                            <span className="pl-16 text-xl">
                                                →
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Build IT */}
                    <div
                        id="timeline"
                        className="relative mt-40 w-full max-w-[1440px] mx-auto rounded-[150px] border-t border-[#513E98]/50 bg-[linear-gradient(180deg,_#FAFAFA_50%,_#FFF_100%)] flex flex-col items-center py-24 px-4 sm:px-8 md:px-16 overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {/* Background */}
                        <div className="absolute inset-0 z-0 rotate-[3.779deg]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 947"
                                preserveAspectRatio="xMidYMid slice"
                                fill="none"
                                className="w-full h-full"
                            >
                                <g filter="url(#filter0_i_304_732)">
                                    <path
                                        d="M1583.69 301.652C1616.16 323.137 1624.86 366.992 1603.04 399.245L1457.69 614.179C1457.5 614.461 1457.11 614.537 1456.83 614.349C1456.54 614.16 1456.16 614.237 1455.97 614.522L1311.6 830.344C1290.11 862.477 1246.63 871.102 1214.5 849.607L1055.11 742.991C1022.98 721.496 1014.35 678.022 1035.85 645.888L1140.51 489.421C1162.08 457.173 1153.31 413.532 1120.95 392.123L968.482 291.242C936.355 269.985 893.091 278.682 871.673 310.701L731.164 520.757C731.096 520.859 730.958 520.886 730.856 520.818C730.755 520.75 730.617 520.777 730.549 520.878L704.169 559.884C689.407 581.712 695.215 611.382 717.117 626.033L765.73 658.552C797.864 680.047 806.488 723.521 784.994 755.654L678.376 915.042C656.882 947.175 613.407 955.8 581.274 934.305L404.509 816.065C381.973 800.99 375.924 770.5 390.999 747.963C406.127 725.345 399.975 694.738 377.281 679.723L311.94 636.491C279.813 615.235 236.549 623.932 215.131 655.951L208.938 665.21C187.444 697.344 143.969 705.968 111.836 684.474L-47.5521 577.857C-79.6859 556.363 -88.3104 512.888 -66.8156 480.755L73.4644 271.043C76.3675 266.703 82.2393 265.538 86.5794 268.441C90.9038 271.334 96.7529 270.189 99.6675 265.879L138.625 208.275C160.128 176.48 203.224 167.932 235.235 189.111L398.028 296.821C430.155 318.077 473.418 309.381 494.837 277.362L600.823 118.916C622.318 86.7824 665.792 78.1578 697.926 99.6524L849.622 201.124C881.64 222.541 924.946 214.064 946.526 182.155L1048.84 30.8658C1070.35 -0.928945 1113.44 -9.47765 1145.45 11.7019L1583.69 301.652Z"
                                        fill="#513E98"
                                        fillOpacity="0.02"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_i_304_732"
                                        x="-78.64"
                                        y="0.0734863"
                                        width="1693.71"
                                        height="950.056"
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
                                            result="effect1_innerShadow_304_732"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div
                            className="mb-16 text-center max-w-3xl mx-auto px-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#201349] to-[#513E99] font-[Montserrat] uppercase mb-4">
                                TIMELINE
                            </h3>
                            <p className="text-[#808080] text-center font-[Montserrat] text-sm sm:text-base font-medium tracking-[0.1em]">
                                Catat tanggalnya dan pastikan Anda tidak
                                melewatkan momen di BUILD-IT
                            </p>
                        </div>
                        {/* Konten timeline  */}
                        <div className="relative z-10 w-full flex justify-center px-4 sm:px-6 md:px-8">
                            <div className="relative flex flex-col justify-between w-full max-w-6xl py-24 space-y-20">
                                {/* Garis Vertical */}
                                <div className="absolute top-0 left-6 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-4 border-[#513E99]/30 z-0"></div>
                                {timelineEvents.map((event, index) => (
                                    <div
                                        key={index}
                                        className={`relative w-full flex ${
                                            event.side === "left"
                                                ? "justify-start md:pr-12"
                                                : "justify-end md:pl-12"
                                        }`}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="absolute top-2 left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                                            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#513E99] rounded-full border-4 border-white shadow-md transition-transform duration-300 hover:scale-110"></div>
                                        </div>

                                        {/* Card */}
                                        <div
                                            className="w-full sm:w-[85%] md:max-w-[340px] inline-flex flex-col justify-center items-start gap-4 
            px-6 py-5 border border-[rgba(81,62,153,0.2)] rounded-2xl bg-white shadow-md hover:shadow-lg 
            transition-all duration-300 ease-in-out"
                                        >
                                            <h4 className="w-full text-center text-black font-[Montserrat] text-base font-semibold">
                                                {event.title}
                                            </h4>

                                            <p className="text-[#808080] text-sm font-medium font-[Montserrat]">
                                                {event.date}
                                            </p>

                                            <div className="flex items-center gap-2 text-[#808080] font-[Montserrat] text-sm font-semibold">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-4 h-4"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#808080"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z" />
                                                    <circle
                                                        cx="12"
                                                        cy="10"
                                                        r="3"
                                                    />
                                                </svg>
                                                {event.location}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Faq */}
                    <div className="w-full flex justify-center">
                        <div
                            className="w-full max-w-[1440px] min-h-[700px] sm:min-h-[900px] md:min-h-[1100px] lg:min-h-[1300px] xl:min-h-[1503px]
  flex-shrink-0 rounded-t-[80px] sm:rounded-t-[100px] lg:rounded-t-[120px] rounded-b-[80px] sm:rounded-b-[100px] lg:rounded-b-[120px]
  bg-gradient-to-r from-[rgba(32,19,73,0.05)] to-[rgba(81,62,153,0.05)]
  shadow-[0_0_40px_0_rgba(0,0,0,0.05)] flex justify-center px-4 sm:px-6"
                        >
                            <div
                                className="px-6 md:px-24 md:mt-36 mt-20 w-full"
                                id="Faq"
                            >
                                <div className="flex flex-col justify-center items-center mb-2">
                                    <h1
                                        className="w-[918px] text-center font-montserrat text-[48px] font-bold leading-none tracking-[4.8px] uppercase bg-gradient-to-r from-[#201349] to-[#513E99] bg-clip-text text-transparent"
                                        data-aos="fade-left"
                                    >
                                        FAQ
                                    </h1>

                                    <p
                                        className="mt-8 w-full max-w-[618px] text-center text-[#808080] font-[Montserrat] text-[16px] font-medium leading-normal tracking-[1.6px]"
                                        data-aos="fade-right"
                                    >
                                        Pertanyaan umum yang sering ditanyakan
                                        terkait BUILD IT 2025
                                    </p>
                                </div>
                                <div className="mt-24 flex justify-center">
                                    <div
                                        className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center gap-6"
                                        data-aos="fade-right"
                                    >
                                        <AccordionLanding
                                            heading="Apakah kegiatan ini berbayar?"
                                            description="Tidak, ini merupakan kegiatan yang diselanggarakan oleh Himpunan Mahasiswa Teknologi Informasi Universitas Udayana untuk memberikan pengetahuan dasar mengenai berbagai hal yang diperlukan sebagai mahasiswa TI."
                                            isOpen={openIndex === 0}
                                            onClick={() =>
                                                handleAccordionClick(0)
                                            }
                                        />
                                        <AccordionLanding
                                            heading="Apakah kegiatan ini wajib dihadiri?"
                                            description="Ya, kegiatan ini wajib dihadiri oleh mahasiswa baru teknologi informasi angkatan 2024. Untuk mahasiswa lama yang belum mengikuti pada tahun lalu wajib hadir di pembukaan dan sharing session"
                                            isOpen={openIndex === 1}
                                            onClick={() =>
                                                handleAccordionClick(1)
                                            }
                                        />
                                        <AccordionLanding
                                            heading="Apa yang akan dilakukan mahasiswa selama pelatihan BUILD IT 2025?"
                                            description="Selama Pelatihan BUILD-TI 2025, mahasiswa akan dibimbing dalam memahami mata kuliah dasar di perkuliahan seperti alprog, basis data, dan jaringan komputer"
                                            isOpen={openIndex === 2}
                                            onClick={() =>
                                                handleAccordionClick(2)
                                            }
                                        />
                                        <AccordionLanding
                                            heading="Apa yang mahasiswa perlu persiapkan sebelum pelatihan BUILD IT 2025?"
                                            description="Adapun beberapa hal yang perlu mahasiswa siapkan sebelum mengikuti pelatihan ini adalah memahami modul yang diberikan karena akan ada quiz dan tugas mandiri serta melakukan instalasi tools yang diperlukan yang akan digunakan dalam pelatihan."
                                            isOpen={openIndex === 3}
                                            onClick={() =>
                                                handleAccordionClick(3)
                                            }
                                        />
                                    </div>
                                </div>
                                {/* Kontak kami */}
                                <div
                                    id="Contact"
                                    className="mt-32 mb-16 flex flex-col items-center justify-center px-4 text-center"
                                >
                                    <h2
                                        className="font-montserrat text-[48px] font-bold leading-none tracking-[4.8px] uppercase 
               bg-gradient-to-r from-[#201349] to-[#513E99] bg-clip-text text-transparent"
                                        data-aos="fade-up"
                                    >
                                        CONTACT PERSON
                                    </h2>

                                    <p
                                        className="mt-8 max-w-[640px] text-[#808080] text-[16px] font-medium leading-normal tracking-[1.6px] font-montserrat"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        Jika Anda memiliki pertanyaan lebih
                                        lanjut, <br />
                                        jangan ragu untuk menghubungi narahubung
                                        yang tertera di bawah ini.
                                    </p>
                                    <div
                                        className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center w-full"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        {/* Card 1 */}
                                        <div className="w-[300px] h-[184px] min-w-[300px] bg-white border border-[rgba(81,62,153,0.2)] shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-3xl flex flex-col justify-center items-center px-4 py-6">
                                            <h3 className="text-[#201349] font-montserrat text-[16px] font-bold uppercase w-[200px] truncate text-center">
                                                Najwa Tahir
                                            </h3>
                                            <p className="text-[#808080] font-montserrat text-[14px] font-normal mt-2">
                                                <a
                                                    href="https://wa.me/+62895386344682"
                                                    target="_blank"
                                                >
                                                    WA: 0895-3863-44682
                                                </a>
                                            </p>
                                            <p className="text-[#808080] font-montserrat text-[14px] font-normal mt-1">
                                                LINE: najwatahir8
                                            </p>
                                        </div>

                                        {/* Card 2 */}
                                        <div className="w-[300px] h-[184px] min-w-[300px] bg-white border border-[rgba(81,62,153,0.2)] shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-3xl flex flex-col justify-center items-center px-4 py-6">
                                            <h3 className="text-[#201349] font-montserrat text-[16px] font-bold uppercase w-[200px] truncate text-center">
                                                Tri Darma
                                            </h3>
                                            <p className="text-[#808080] font-montserrat text-[14px] font-normal mt-2">
                                                <a
                                                    href="https://wa.me/+6281333486847"
                                                    target="_blank"
                                                >
                                                    WA: 0813-3348-6847
                                                </a>
                                            </p>
                                            <p className="text-[#808080] font-montserrat text-[14px] font-normal mt-1">
                                                LINE: tri.dharma.
                                            </p>
                                        </div>

                                        {/* Card 3 */}
                                        <div className="w-[300px] h-[184px] min-w-[300px] bg-white border border-[rgba(81,62,153,0.2)] shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-3xl flex flex-col justify-center items-center px-4 py-6">
                                            <h3 className="text-[#201349] font-montserrat text-[16px] font-bold uppercase w-[200px] truncate text-center">
                                                Adel
                                            </h3>
                                            <p className="text-[#808080] font-montserrat text-[14px] font-normal mt-2">
                                                <a href="https://wa.me/+6283147664176">
                                                    WA: 0831-4766-4176
                                                </a>
                                            </p>
                                            <p className="text-[#808080] font-montserrat text-[14px] font-normal mt-1">
                                                LINE: adeliawirasantii
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Merchandise */}
                    <div className="px-6 md:px-24 md:mt-36 mt-20 mb-20">
                        <div
                            className="flex flex-col justify-center items-center md:mb-10 mb-5"
                            id="Merch"
                        >
                            <h1
                                className="text-center font-montserrat font-bold tracking-[2px] leading-snug
             text-[28px] sm:text-[36px] md:text-[48px]
             bg-gradient-to-r from-[#201349] to-[#513E99] bg-clip-text text-transparent"
                                data-aos="fade-right"
                            >
                                MERCHANDISE
                            </h1>

                            <p
                                className="mt-8 w-full text-center font-montserrat text-[16px] font-medium leading-normal tracking-[1.6px] text-black"
                                data-aos="fade-left"
                            >
                                Rayakan semangat inovasi dengan T-shirt edisi
                                terbatas BUILD IT 2025
                            </p>
                        </div>

                        <div className="flex justify-center items-center min-h-screen px-6 py-10 sm:px-8">
                            <div
                                className=" relative flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 p-6 sm:p-8 min-h-screen w-full max-w-[95%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] rounded-[15px] border border-[#CCC] shadow-md transition-all duration-300"
                                data-aos="fade-up"
                                style={{
                                    background:
                                        "linear-gradient(270deg, #F2F2F2 0%, rgba(255, 255, 255, 0.00) 49.04%, #F2F2F2 100%)",
                                }}
                            >
                                {/* Warna Palet */}
                                <div className="absolute top-4 left-4 flex gap-3 sm:gap-2 flex-col sm:flex-row">
                                    <button
                                        onClick={() => setShirtColor("black")}
                                        className="w-12 aspect-square rounded-[10px] border-2 hover:border-[#513E99] bg-black hover:scale-105 transition-transform"
                                    />
                                    <button
                                        onClick={() => setShirtColor("white")}
                                        className="w-12 aspect-square rounded-[10px] border-2 hover:border-[#808080] bg-white hover:scale-105 transition-transform"
                                    />
                                </div>

                                {/* Ikon Jam */}
                                <div
                                    className="absolute top-4 right-4 flex items-center gap-2 text-[#201349] 
            font-['Montserrat'] text-sm sm:text-base font-bold uppercase tracking-wider leading-[30px]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 sm:w-5 sm:h-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            fill="#201349"
                                            d="M12 22c-2.77 0-5.117-.967-7.05-2.9C3.017 17.167 2.05 14.82 2.05 12.05S3.017 6.933 4.95 5 9.23 2.05 12 2.05s5.117.967 7.05 2.9c1.933 1.933 2.9 4.28 2.9 7.05s-.967 5.117-2.9 7.05C17.117 21.033 14.77 22 12 22Zm-.75-5.25h1.5v-5.1h-3v1.5h1.5v3.6Z"
                                        />
                                    </svg>
                                    <span className="text-sm sm:text-base">
                                        9 - 28 AUG 2024
                                    </span>
                                </div>

                                {/* Gambar Kaos */}
                                <img
                                    src={
                                        shirtColor === "black"
                                            ? "../asset/images/landing-page/merch-black.png"
                                            : "../asset/images/landing-page/merch-white.png"
                                    }
                                    alt="Gambar Kaos"
                                    className=" w-auto max-w-full h-auto sm:max-w-[500px]  md:max-w-[600px] lg:max-w-[650px] object-contain mx-auto"
                                />

                                {/* Tombol Order */}
                                <button
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 sm:px-6 sm:py-5 rounded-[15px] 
            bg-gradient-to-r from-[#201349] to-[#513E99] 
            text-white font-bold uppercase tracking-[1.6px] text-base sm:text-lg leading-[30px]
            font-['Montserrat'] transition-all hover:brightness-110 hover:scale-[1.02] hover:shadow-lg duration-200 ease-in-out hover:text-secondary"
                                >
                                    <span>Order Now</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 sm:w-6 sm:h-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M7 22C6.45 22 5.97917 21.8042 5.5875 21.4125C5.19583 21.0208 5 20.55 5 20C5 19.45 5.19583 18.9792 5.5875 18.5875C5.97917 18.1958 6.45 18 7 18C7.55 18 8.02083 18.1958 8.4125 18.5875C8.80417 18.9792 9 19.45 9 20C9 20.55 8.80417 21.0208 8.4125 21.4125C8.02083 21.8042 7.55 22 7 22ZM17 22C16.45 22 15.9792 21.8042 15.5875 21.4125C15.1958 21.0208 15 20.55 15 20C15 19.45 15.1958 18.9792 15.5875 18.5875C15.9792 18.1958 16.45 18 17 18C17.55 18 18.0208 18.1958 18.4125 18.5875C18.8042 18.9792 19 19.45 19 20C19 20.55 18.8042 21.0208 18.4125 21.4125C18.0208 21.8042 17.55 22 17 22ZM6.15 6L8.55 11H15.55L18.3 6H6.15ZM5.2 4H19.95C20.3333 4 20.625 4.17083 20.825 4.5125C21.025 4.85417 21.0333 5.2 20.85 5.55L17.3 11.95C17.1167 12.2833 16.8708 12.5417 16.5625 12.725C16.2542 12.9083 15.9167 13 15.55 13H8.1L7 15H18C18.2833 15 18.5208 15.0958 18.7125 15.2875C18.9042 15.4792 19 15.7167 19 16C19 16.2833 18.9042 16.5208 18.7125 16.7125C18.5208 16.9042 18.2833 17 18 17H7C6.25 17 5.68333 16.6708 5.3 16.0125C4.91667 15.3542 4.9 14.7 5.25 14.05L6.6 11.6L3 4H2C1.71667 4 1.47917 3.90417 1.2875 3.7125C1.09583 3.52083 1 3.28333 1 3C1 2.71667 1.09583 2.47917 1.2875 2.2875C1.47917 2.09583 1.71667 2 2 2H3.625C3.80833 2 3.98333 2.05 4.15 2.15C4.31667 2.25 4.44167 2.39167 4.525 2.575L5.2 4Z"
                                            fill="white"
                                            className="hover:fill-secondary"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </UserGuest>
        </>
    );
}

const AccordionLanding = ({ heading, description, isOpen, onClick }) => {
    return (
        <div className="w-full md:w-[636px] border border-primary rounded-[10px] m-2 p-2 shadow-lg">
            <button
                className="w-full px-4 py-2 text-left focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                onClick={onClick}
            >
                <div className="flex items-center justify-between">
                    <span className="text-[15px] md:text-lg font-semibold text-gray-900">
                        {heading}
                    </span>
                    {/* icon arrow */}
                    <svg
                        className={`w-6 h-6 transition-transform transform ${
                            isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="px-4 py-2 text-gray-700">{description}</div>
            )}
        </div>
    );
};

const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 right-0 font-bold transform -translate-y-1/2 z-10 cursor-pointer bg-secondary text-white p-2 rounded-full"
            onClick={onClick}
        >
            &gt;
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 left-0 font-bold transform -translate-y-1/2 z-10 cursor-pointer bg-secondary text-white p-2 rounded-full"
            onClick={onClick}
        >
            &lt;
        </div>
    );
};

const MerchPopup = ({ isOpen, onClose }) => {
    const images = [
        "asset/images/landing-page/merch-black.png",
        "asset/images/landing-page/merch-white.png",
    ];

    if (!isOpen) return null;

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="fixed inset-0 bg-none md:bg-gray-800 bg-opacity-20 md:bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-gray-300 md:bg-white rounded-[10px] p-8 h-max w-11/12 md:w-2/5">
                <div className="flex justify-between">
                    <h2 className="text-md md:text-xl font-bold mb-4">
                        Merchandise BUILD IT 2024
                    </h2>
                    <button
                        className="text-gray-500 rounded hover:text-gray-900"
                        onClick={onClose}
                    >
                        <i
                            className="pi pi-times"
                            style={{ fontSize: "1.5rem" }}
                        ></i>
                    </button>
                </div>
                <div className="relative">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt={`Merchandise ${index + 1}`}
                                    className="w-full h-auto md:h-[350px] mb-4 animate-bounce-merch"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <p className="text-gray-700 mb-4 text-center">
                    T-shirt BUILD IT 2024. Dapatkan baju limited edition ini
                    dengan bahan yang adem dan desain yang kece.
                </p>
                <div className="flex justify-between">
                    <p className="text-lg font-bold mb-4">Rp 100.000</p>
                    <a
                        href="https://bit.ly/POMerchandiseBuildIT2024"
                        target="_blank"
                    >
                        <div className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary cursor-pointer">
                            Order Now
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
