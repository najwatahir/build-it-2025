import React, { useRef, useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { InputText } from "primereact/inputtext";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { useMountEffect } from "primereact/hooks";
import { Toast } from "primereact/toast";
import { Messages } from "primereact/messages";

export default function Twibbon({ user }) {
    const { data, setData, put, processing, errors } = useForm({
        twibbon: user.twibbon || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (twibbonClose()) {
            toast.current.show({
                severity: "error",
                summary: "Peringatan",
                detail: "Maaf, pengumpulan twibbon telah ditutup.",
                life: 3000,
            });
            return;
        }
        put(route("participant.submittwibbon"), {
            onSuccess: () => {
                toast.current.show({
                    severity: "success",
                    summary: "Berhasil",
                    detail: "Link twibbon berhasil disimpan!",
                    life: 3000,
                });
            },
            onError: () => {
                toast.current.show({
                    severity: "error",
                    summary: "Gagal",
                    detail: "Gagal menyimpan link twibbon.",
                    life: 3000,
                });
            },
        });
    };

    const twibbonClose = () => {
        const closingDate = new Date("2025-09-19T23:59:59");
        const currentDate = new Date();

        if (currentDate <= closingDate) {
            return false;
        } else {
            return true;
        }
    };

    const toast = useRef(null);


    const msgs = useRef(null);
    useMountEffect(() => {
        if (twibbonClose()) {
            if (msgs.current) {
                msgs.current.clear();
                msgs.current.show({
                    id: "1",
                    sticky: true,
                    severity: "error",
                    icon: "pi",
                    summary: "Maaf, pengumpulan twibbon telah ditutup.",
                    detail: "",
                    closable: false,
                });
            }
        }
    });

    return (
        <>
            <Toast ref={toast} />
            <AdminAuthentication user={user} headerTitle="Verifikasi">
                <div className="md:p-6 pb-6 font-montserrat">
                    <div className="bg-white shadow rounded-[30px] p-8 border border-[#CCCCCC]">
                        {(user.status === "Belum Terverifikasi" ||
                            user.status === "Ditolak") && (
                            <div className="flex flex-col justify-center items-center space-y-10 min-h-screen font-montserrat">
                                <h1 className="font-bold text-red-500 text-xl">
                                    Halaman twibbon akan tersedia jika status
                                    peserta sudah terverifikasi
                                </h1>
                                <span>
                                    <i className="pi pi-exclamation-circle text-[10rem] text-red-500"></i>
                                </span>
                            </div>
                        )}

                        {user.status === "Terverifikasi" && (
                            <>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2 uppercase">
                                    Twibbon
                                </h2>
                                <Messages ref={msgs} />
                                <p className="text-[#999999] mb-6">
                                    Terima kasih telah ikut meramaikan acara
                                    ini! Yuk, lengkapi partisipasimu dengan
                                    mengunduh twibbon resmi dan mengunggah bukti
                                    postingan Instagram kamu. Pengumpulan
                                    terakhir pada{" "}
                                    <span className="font-bold">
                                        19 September 2025 pukul 23.59
                                    </span>
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold mb-2">
                                        1. Unduh Twibbon
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Klik tombol di bawah untuk mengunduh
                                        desain Twibbon yang sudah disiapkan.
                                    </p>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://drive.google.com/drive/folders/114NM4n85MF7Lpkg0cWLlL7q55VNnfGOR"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="w-full md:w-auto px-4 py-4 uppercase bg-gradient-to-r from-[#201349] to-[#513E99] hover:text-[#FCB215] text-white rounded-xl text-sm font-semibold shadow-md">
                                                Twibbon
                                            </button>
                                        </a>
                                        <a
                                            href="https://docs.google.com/document/d/1DLw0aaQN1i2h5iDHaEwVng_GvTI01Honj9QhoMucBBc/edit?usp=sharing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="w-full md:w-auto px-4 py-4 uppercase bg-gradient-to-r from-[#201349] to-[#513E99] hover:text-[#FCB215] text-white rounded-xl text-sm font-semibold shadow-md">
                                                Caption
                                            </button>
                                        </a>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold mb-2">
                                        2. Unggah Twibbon
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Jangan lupa posting Twibbon kamu di
                                        Instagram! Sertakan caption yang sudah
                                        disediakan.
                                    </p>

                                    <form
                                        onSubmit={handleSubmit}
                                        className="relative md:flex space-y-4 md:space-x-4 md:space-y-0"
                                    >
                                        <InputText
                                            id="twibbon"
                                            name="twibbon"
                                            type="url"
                                            placeholder="Masukkan link postingan Instagram kamu"
                                            className="w-full md:w-7/12 pr-14 py-2 text-sm border border-gray-300 rounded-lg font-montserrat"
                                            value={data.twibbon}
                                            onChange={(e) =>
                                                setData(
                                                    "twibbon",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="py-4 pr-[14px] pl-4 bg-gradient-to-r from-[#201349] to-[#513E99] hover:bg-secondary font-bold text-white rounded-2xl transition-all duration-300 text-center"
                                            disabled={processing}
                                        >
                                            <img
                                                src="/asset/images/check.svg"
                                                alt=""
                                                className="w-[24px]"
                                            />
                                        </button>
                                    </form>
                                    {errors.twibbon && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.twibbon}
                                        </p>
                                    )}
                                </div>

                                <div className="text-gray-600 text-sm mt-8">
                                    <h4 className="font-bold mb-1 uppercase">
                                        Catatan
                                    </h4>
                                    <ul className="list-disc ml-5 space-y-1">
                                        <li>
                                            Pastikan akun Instagram kamu tidak
                                            private setidaknya selama periode
                                            acara.
                                        </li>
                                        <li>
                                            Jika ada kendala upload, hubungi
                                            panitia via{" "}
                                            <a
                                                href="https://wa.me/+62895386344682"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 underline"
                                            >
                                                WhatsApp
                                            </a>
                                            .
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </AdminAuthentication>
        </>
    );
}
