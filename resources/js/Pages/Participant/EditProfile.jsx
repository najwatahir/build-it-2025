import React, { useState } from "react";
import { Head, useForm, usePage, Link } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";

export default function EditProfile() {
    const { user } = usePage().props;

    const { data, setData, put, errors } = useForm({
        name: user.name,
        nim: user.nim,
        email: user.email,
        whatsapp: user.whatsapp_id,
        line: user.line_id,
    });

    function handleUpdate(e) {
        e.preventDefault();
        put(route("participant.updateprofile"));
    }

    function checkInput() {
        return (
            data.name === user.name &&
            data.nim === user.nim &&
            data.email === user.email &&
            data.whatsapp === user.whatsapp_id &&
            data.line === user.line_id
        );
    }

    return (
        <AdminAuthentication user={user} headerTitle="Edit Profile">
            <Head title="Edit Profile Information" />
            <div className="md:p-6 max-w-6xl mx-auto space-y-10 font-montserrat mb-6 md:mb-0">
                <form
                    onSubmit={handleUpdate}
                    className="max-w-6xl mx-auto bg-white shadow-md rounded-[30px] p-6 space-y-10 border border-gray-200 font-montserrat"
                >
                    <div className="flex items-center gap-3">
                        <Link
                            href={route("participant.profile")}
                            className="text-primary text-sm font-semibold flex items-center gap-2"
                        >
                            <p className="pi pi-arrow-left text-primary p-2 rounded-full"></p>
                            KEMBALI
                        </Link>
                    </div>

                    {/* Profil Peserta */}
                    <div className="md:p-6 max-w-6xl mx-auto space-y-10 font-montserrat">
                        <h2 className="text-xl font-semibold text-gray-900">
                            PROFIL PESERTA
                        </h2>
                        <div className="mt-6 space-y-6">
                            {/* Nama */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold text-gray-800 text-[13px] uppercase"
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    maxLength={120}
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-1 text-gray-800 text-[13px] bg-gray-50 ${
                                        errors.name
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-primary"
                                    }`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* NIM */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="nim"
                                    className="text-sm font-semibold text-gray-800 text-[13px]"
                                >
                                    NIM
                                </label>
                                <input
                                    type="number"
                                    id="nim"
                                    name="nim"
                                    maxLength={10}
                                    value={data.nim}
                                    onChange={(e) =>
                                        setData("nim", e.target.value)
                                    }
                                    className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-1 text-gray-800 text-[13px] bg-gray-50 ${
                                        errors.nim
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-primary"
                                    }`}
                                />
                                {errors.nim && (
                                    <p className="text-red-500 text-sm">
                                        {errors.nim}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                            KONTAK
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {/* Email */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-800 text-[13px] uppercase"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-1 text-gray-800 text-[13px] bg-gray-50 ${
                                        errors.email
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-primary"
                                    }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Whatsapp */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="whatsapp"
                                    className="text-sm font-semibold text-gray-800 text-[13px] uppercase"
                                >
                                    Whatsapp
                                </label>
                                <input
                                    type="number"
                                    id="whatsapp"
                                    name="whatsapp"
                                    value={data.whatsapp}
                                    onChange={(e) =>
                                        setData("whatsapp", e.target.value)
                                    }
                                    className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-1 text-gray-800 text-[13px] bg-gray-50 ${
                                        errors.whatsapp
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-primary"
                                    }`}
                                />
                                {errors.whatsapp && (
                                    <p className="text-red-500 text-sm">
                                        {errors.whatsapp}
                                    </p>
                                )}
                            </div>

                            {/* Line ID */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="line"
                                    className="text-sm font-semibold text-gray-800 text-[13px] uppercase"
                                >
                                    ID Line
                                </label>
                                <input
                                    type="text"
                                    id="line"
                                    name="line"
                                    value={data.line}
                                    onChange={(e) =>
                                        setData("line", e.target.value)
                                    }
                                    className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-1 text-gray-800 text-[13px] bg-gray-50 ${
                                        errors.line
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-primary"
                                    }`}
                                />
                                {errors.line && (
                                    <p className="text-red-500 text-sm">
                                        {errors.line}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Tombol Simpan */}
                    <div>
                        <button
                            type="submit"
                            disabled={checkInput()}
                            className="w-full inline-block px-6 py-3 uppercase bg-gradient-to-r from-[#201349] to-[#513E99] hover:text-[#FCB215] text-white rounded-xl text-sm font-semibold shadow-md transition-all duration-300"
                        >
                            SIMPAN
                        </button>
                    </div>
                </form>
            </div>
        </AdminAuthentication>
    );
}
