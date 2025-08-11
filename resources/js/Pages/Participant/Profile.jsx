import React, { useState, useRef, useEffect } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { Toast } from "primereact/toast";

export default function Profile() {
    const { user, flash } = usePage().props;
    const [data] = useState({
        nim: user.nim,
        name: user.name,
        email: user.email,
        line: user.line_id,
        whatsapp: user.whatsapp_id,
        angkatan: "20" + user.nim.substring(0, 2),
        kelompok: user.kelompok,
    });

    const toast = useRef(null);
    useEffect(() => {
        if (flash) {
            toast.current.show({
                severity: "success",
                summary: "Berhasil",
                detail: flash,
            });
        }
    }, [flash]);

    return (
        <AdminAuthentication user={user}>
            <Head title="Profil Peserta" />
            <Toast ref={toast} />
            <div className="md:p-6 max-w-6xl mx-auto space-y-10 font-montserrat mb-6 md:mb-0">
                <div className="bg-white p-6 md:p-10 rounded-[30px] shadow border border-[#CCCCCC] space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            PROFIL PESERTA
                        </h2>
                        <p className="text-sm text-gray-500">
                            Lihat dan sunting data dirimu yang terdaftar sebagai
                            peserta.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Nama Lengkap
                            </label>
                            <p className="p-3 text-[12px] bg-gray-100 rounded-lg text-gray-800">
                                {data.name}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    NIM
                                </label>
                                <p className="p-3 text-[12px] bg-gray-100 rounded-lg text-gray-800">
                                    {data.nim}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Angkatan
                                </label>
                                <p className="p-3 text-[12px] bg-gray-100 rounded-lg text-gray-800">
                                    {data.angkatan}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Kelompok
                                </label>
                                <p className="p-3 text-[12px] bg-gray-100 rounded-lg text-gray-800">
                                    {data.kelompok ?? "-"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-md font-semibold text-gray-800">
                            KONTAK
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <p className="p-3 text-[12px] bg-gray-100 rounded-lg text-gray-800">
                                    {data.email}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Whatsapp
                                </label>
                                <p className="p-3 text-[12px] bg-gray-100 rounded-lg text-gray-800">
                                    {data.whatsapp}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    ID Line
                                </label>
                                <p className="p-3 text-[12px] bg-gray-100 rounded-lg text-gray-800">
                                    {data.line}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link
                            href={route("participant.editprofile")}
                            className="inline-block px-6 py-3 uppercase bg-gradient-to-r from-[#201349] to-[#513E99] hover:text-[#FCB215] text-white rounded-xl text-sm font-semibold shadow-md transition-all duration-300"
                        >
                            Edit Profil
                        </Link>
                    </div>
                </div>

                {/* GRUP LINE */}
                <div className="bg-white p-6 md:p-10 rounded-[30px] shadow border border-[#CCCCCC] space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            GRUP LINE
                        </h2>
                        <p className="text-sm text-gray-500">
                            Gabung ke grup besar untuk info umum dan grup
                            kelompok untuk diskusi tugas bersama kelompokmu.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Grup Besar */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Grup Besar
                            </label>
                            {data.kelompok >= 1 && data.kelompok <= 4 ? (
                                <a
                                    href="https://line.me/R/ti/g/ukT9xDEADS"
                                    target="_blank"
                                    className="flex items-center text-[12px] gap-2 px-4 py-3 bg-purple-100 text-purple-800 rounded-lg"
                                >
                                    🔗 https://line.me/R/ti/g/ukT9xDEADS
                                </a>
                            ) : (
                                <p className="px-4 py-3 bg-gray-100 text-[12px] text-gray-500 rounded-lg">
                                    Anda belum terverifikasi
                                </p>
                            )}
                        </div>

                        {/* Grup Kelompok */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Grup Kelompok
                            </label>
                            {Number(data.kelompok) === 1 ? (
                                <a
                                    href="https://line.me/R/ti/g/jLZWqpV4yX"
                                    target="_blank"
                                    className="flex items-center gap-2 text-[12px] px-4 py-3 bg-purple-100 text-purple-800 rounded-lg"
                                >
                                    🔗 https://line.me/R/ti/g/jLZWqpV4yX
                                </a>
                            ) : Number(data.kelompok) === 2 ? (
                                <a
                                    href="https://line.me/R/ti/g/3w2qM8pQ8k"
                                    target="_blank"
                                    className="flex items-center gap-2 text-[12px] px-4 py-3 bg-purple-100 text-purple-800 rounded-lg"
                                >
                                    🔗 https://line.me/R/ti/g/3w2qM8pQ8k
                                </a>
                            ) : Number(data.kelompok) === 3 ? (
                                <a
                                    href="https://line.me/R/ti/g/-Dxb3zkbnd"
                                    target="_blank"
                                    className="flex items-center gap-2 text-[12px] px-4 py-3 bg-purple-100 text-purple-800 rounded-lg"
                                >
                                    🔗 https://line.me/R/ti/g/-Dxb3zkbnd
                                </a>
                            ) : Number(data.kelompok) === 4 ? (
                                <a
                                    href="https://line.me/R/ti/g/UbrAHF6gpt"
                                    target="_blank"
                                    className="flex items-center gap-2 text-[12px] px-4 py-3 bg-purple-100 text-purple-800 rounded-lg"
                                >
                                    🔗 https://line.me/R/ti/g/UbrAHF6gpt
                                </a>
                            ) : (
                                <p className="px-4 py-3 bg-gray-100 text-[12px] text-gray-500 rounded-lg">
                                    Anda belum tergabung dalam grup
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AdminAuthentication>
    );
}
