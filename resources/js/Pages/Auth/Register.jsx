import { Head, useForm, Link } from "@inertiajs/react";
import React, { useState, useEffect, useRef } from "react";
import {
    KotakModulPrimary,
    KotakModulPx102,
    KotakModulSecondary,
    KotakModulPx41,
} from "../../Components/Icons/modul";
import { ViewPassword, HidePassword } from "@/Components/Icons/login";
import UserGuest from "@/Components/Layouts/User/UserGuest";
import { Toast } from "primereact/toast";
import { useMountEffect } from "primereact/hooks";
import { Messages } from "primereact/messages";

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        nim: "",
        name: "",
        email: "",
        line: "",
        whatsapp: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const registerClose = () => {
        const closingDate1 = new Date("2025-08-20");
        const openDate2 = new Date ("2025-08-22");
        const closingDate2 = new Date ("2025-09-05")
        const currentDate = new Date();

        if (currentDate <= closingDate1) {
            return false;
        } else if (currentDate >= openDate2 && currentDate <= closingDate2) {
            return false;
        } else {
            return true;
        }
    };

    const toast = useRef(null);
    const submit = (e) => {
        e.preventDefault();

        if (registerClose()) {
            toast.current.show({
                severity: "error",
                summary: "Peringatan",
                detail: "Maaf, pendaftaran Build-IT 2025 telah ditutup",
                life: 3000,
            });
            return;
        }

        if (
            !data.nim ||
            !data.name ||
            !data.email ||
            !data.line ||
            !data.whatsapp ||
            !data.password ||
            !data.password_confirmation
        ) {
            toast.current.show({
                severity: "error",
                summary: "Peringatan",
                detail: "Semua field wajib diisi",
                life: 3000,
            });
            return;
        }

        const formatEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!formatEmail.test(data.email)) {
            toast.current.show({
                severity: "error",
                summary: "Format Email Salah",
                detail: "Mohon masukkan email yang valid",
                life: 3000,
            });
            return;
        }

        post(route("register.store"), {
            onSuccess: () => {
                toast.current.show({
                    severity: "success",
                    summary: "Berhasil",
                    detail: "Berhasil melakukan pendaftaran",
                    life: 3000,
                });
            },
            onError: (error) => {
                toast.current.show({
                    severity: "error",
                    summary: "Gagal melakukan pendaftaran",
                    detail: "Periksa kembali formulir pendaftaran",
                    life: 3000,
                });
            },
        });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(true);
        setTimeout(() => {
            setPasswordVisible(false);
        }, 1000);
    };

    const togglePasswordConfirmVisibility = () => {
        setPasswordConfirmVisible(true);
        setTimeout(() => {
            setPasswordConfirmVisible(false);
        }, 1000);
    };

    // alert message if register date is over
    const msgs = useRef(null);
    useMountEffect(() => {
        if (registerClose()) {
            if (msgs.current) {
                msgs.current.clear();
                msgs.current.show({
                    id: "1",
                    sticky: true,
                    severity: "error",
                    icon: "pi",
                    summary: "Maaf, pendaftaran Build-IT 2025 telah ditutup",
                    detail: "",
                    closable: false,
                });
            }
        }
    });

    return (
        <>
            <Head title="Pendaftaran" />
            <UserGuest>
                <Toast ref={toast} />
                <div className="relative w-full h-[1500px] overflow-hidden">
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

                    <div className="h-max w-full px-6 md:px-24">
                        <div className="flex flex-col justify-between mt-20 mb-36">
                            <div className="flex flex-col z-20">
                                <div className="flex justify-center">
                                    <div className="flex flex-col space-y-4 p-10 rounded-xl h-full items-center bg-white border border-primary/50 shadow-lg z-10 w-full md:w-max">
                                        <h1
                                            className="w-full text-center pt-3 mt-2"
                                            style={{
                                                color: "#513E99",
                                                fontFamily: "Montserrat",
                                                fontSize: "20px",
                                                fontStyle: "normal",
                                                fontWeight: 700,
                                                lineHeight: "30px",
                                                letterSpacing: "2px",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            Pendaftaran BUILD IT
                                        </h1>
                                        <div className="flex justify-center w-full">
                                            <img
                                                src="asset/images/Logo.png"
                                                alt="Logo BUILD IT 2025"
                                                className="flex justify-center"
                                                width={158}
                                                height={166}
                                            />
                                        </div>

                                        <form
                                            onSubmit={submit}
                                            className="space-y-5 w-full"
                                        >
                                            <div className="flex flex-col gap-2 w-full">
                                                <Messages ref={msgs} />
                                                <label
                                                    htmlFor="nim"
                                                    className="text-black font-semibold text-[14px] leading-[30px] tracking-[1.4px] uppercase font-montserrat"
                                                >
                                                    NIM
                                                </label>
                                                <input
                                                    type="number"
                                                    name="nim"
                                                    id="nim"
                                                    maxLength={10}
                                                    value={data.nim}
                                                    onChange={(e) =>
                                                        setData(
                                                            "nim",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`border-2 rounded-lg focus:outline-none focus:ring-1 text-black p-2 ${
                                                        errors.nim
                                                            ? "border-red-500 focus:ring-red-500"
                                                            : "border-primary focus:ring-primary"
                                                    }`}
                                                    autoFocus
                                                />
                                                <small className="text-red-500">
                                                    {errors.nim}
                                                </small>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <label
                                                    htmlFor="name"
                                                    className="text-black font-semibold text-[14px] leading-[30px] tracking-[1.4px] uppercase font-montserrat"
                                                >
                                                    Nama
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    maxLength={120}
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${
                                                        errors.name
                                                            ? "border-red-500 focus:ring-red-500"
                                                            : "border-primary focus:ring-primary"
                                                    }`}
                                                    autoFocus
                                                />
                                                <small className="text-red-500">
                                                    {errors.name}
                                                </small>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <label
                                                    htmlFor="email"
                                                    className="text-black font-semibold text-[14px] leading-[30px] tracking-[1.4px] uppercase font-montserrat"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    name="email"
                                                    id="email"
                                                    maxLength={120}
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${
                                                        errors.email
                                                            ? "border-red-500 focus:ring-red-500"
                                                            : "border-primary focus:ring-primary"
                                                    }`}
                                                    autoFocus
                                                />
                                                <small className="text-red-500">
                                                    {errors.email}
                                                </small>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <label
                                                    htmlFor="line"
                                                    className="text-black font-semibold text-[14px] leading-[30px] tracking-[1.4px] uppercase font-montserrat"
                                                >
                                                    ID Line
                                                </label>
                                                <input
                                                    type="text"
                                                    name="line"
                                                    id="line"
                                                    maxLength={120}
                                                    value={data.line}
                                                    onChange={(e) =>
                                                        setData(
                                                            "line",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${
                                                        errors.line
                                                            ? "border-red-500 focus:ring-red-500"
                                                            : "border-primary focus:ring-primary"
                                                    }`}
                                                    autoFocus
                                                />
                                                <small className="text-red-500">
                                                    {errors.line}
                                                </small>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <label
                                                    htmlFor="whatsapp"
                                                    className="text-black font-semibold text-[14px] leading-[30px] tracking-[1.4px] uppercase font-montserrat"
                                                >
                                                    Whatsapp
                                                </label>
                                                <input
                                                    type="number"
                                                    name="whatsapp"
                                                    id="whatsapp"
                                                    maxLength={120}
                                                    onChange={(e) =>
                                                        setData(
                                                            "whatsapp",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${
                                                        errors.whatsapp
                                                            ? "border-red-500 focus:ring-red-500"
                                                            : "border-primary focus:ring-primary"
                                                    }`}
                                                    autoFocus
                                                />
                                                <small className="text-red-500">
                                                    {errors.whatsapp}
                                                </small>
                                            </div>

                                            <div className="flex flex-col gap-2 w-full">
                                                <label
                                                    htmlFor="password"
                                                    className="text-black font-semibold text-[14px] leading-[30px] tracking-[1.4px] uppercase font-montserrat"
                                                >
                                                    Password
                                                </label>
                                                <div className="flex relative items-center w-full">
                                                    <input
                                                        type={
                                                            passwordVisible
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        name="password"
                                                        id="password"
                                                        onChange={(e) =>
                                                            setData(
                                                                "password",
                                                                e.target.value
                                                            )
                                                        }
                                                        className={`w-full border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${
                                                            errors.password
                                                                ? "border-red-500 focus:ring-red-500"
                                                                : "border-primary focus:ring-primary"
                                                        }`}
                                                        autoFocus
                                                    />
                                                    <button
                                                        type="button"
                                                        className="absolute w-10 h-10 right-1"
                                                        onClick={
                                                            togglePasswordVisibility
                                                        }
                                                    >
                                                        {passwordVisible ? (
                                                            <ViewPassword />
                                                        ) : (
                                                            <HidePassword />
                                                        )}
                                                    </button>
                                                </div>
                                                <small className="text-red-500">
                                                    {errors.password}
                                                </small>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full">
                                                <label
                                                    htmlFor="password_confirmation"
                                                    className="text-black font-semibold text-[14px] leading-[30px] tracking-[1.4px] uppercase font-montserrat"
                                                >
                                                    Konfirmasi Password
                                                </label>

                                                <div className="flex relative items-center w-full">
                                                    <input
                                                        type={
                                                            passwordConfirmVisible
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        name="password_confirmation"
                                                        id="password_confirmation"
                                                        onChange={(e) =>
                                                            setData(
                                                                "password_confirmation",
                                                                e.target.value
                                                            )
                                                        }
                                                        className={`w-full border-2 rounded-lg focus:outline-none focus:ring-1  text-black p-2 ${
                                                            errors.password_confirmation
                                                                ? "border-red-500 focus:ring-red-500"
                                                                : "border-primary focus:ring-primary"
                                                        }`}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="absolute w-10 h-10 right-1"
                                                        onClick={
                                                            togglePasswordConfirmVisibility
                                                        }
                                                    >
                                                        {passwordConfirmVisible ? (
                                                            <ViewPassword />
                                                        ) : (
                                                            <HidePassword />
                                                        )}
                                                    </button>
                                                </div>
                                                <small className="text-red-500">
                                                    {
                                                        errors.password_confirmation
                                                    }
                                                </small>
                                            </div>

                                            <div className="btn-cta mt-5 flex justify-center items-center w-full">
                                                <button
                                                    type="submit"
                                                    className="flex justify-center items-center self-stretch px-5 py-3 w-[470px]
             rounded-[12px] bg-gradient-to-r from-[#201349] to-[#513E99] shadow-md 
             text-white font-semibold uppercase tracking-[1.5px] text-[16px] leading-[24px] 
             font-[Montserrat] hover:text-yellow-400 transition-all duration-300 text-center"
                                                >
                                                    Daftar
                                                </button>
                                            </div>
                                        </form>
                                        <p className=" text-[#808080] font-semibold text-[14px] leading-[30px] tracking-[1.6px] uppercase font-montserrat mt-8">
                                            Sudah punya akun?
                                            <Link
                                                href={route("login")}
                                                className="text-[#513E99] font-semibold ml-1 hover:text-secondary"
                                            >
                                                LOGIN
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                {/* <div className="absolute top-[400px] left-[80px] animate-bounce-custom">
                                    <KotakModulPx102 />
                                </div>
                                <div className="absolute top-[700px] left-[80px] md:left-[400px] animate-bounce-custom">
                                    <KotakModulPx41 />
                                </div> */}
                            </div>
                            {/* <div className="absolute right-0 animate-bounce-custom">
                                <KotakModulPrimary />
                            </div>
                            <div className="absolute right-[200px] top-[280px] animate-bounce-custom">
                                <KotakModulSecondary />
                            </div> */}
                        </div>
                    </div>
                </div>
            </UserGuest>
        </>
    );
}
