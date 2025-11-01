import React, { useState, useRef } from "react";
import { Head, usePage, useForm } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { Toast } from "primereact/toast";
import ButtonViewCertificate from "@/Components/ButtonSertificate";

export default function Graduation() {
    const { user } = usePage().props;

    const { data, setData, processing, put, errors, transform } = useForm({
        name: user.name,
        nim: user.nim,
        kelulusan: user.kelulusan,
        alasan_tidak_lulus: user.alasan_tidak_lulus,
        nilai_alprog: user.nilai_alprog,
        nilai_jarkom: user.nilai_jarkom,
        nilai_basdat: user.nilai_basdat,
        nilai_gemastik: user.nilai_gemastik,
        nilai_kehadiran: user.nilai_kehadiran,
        nilai_akhir: user.nilai_akhir
    });

    const toast = useRef(null);

    return (
        <AdminAuthentication user={user} headerTitle="Hasil Kelulusan Peserta">
            <Head title="Graduation Information" />
            <Toast ref={toast} />
            {data.kelulusan === "Belum Lulus" && (
                <div className="md:p-6 pb-6 font-montserrat">
                    <div className="bg-white shadow rounded-[30px] p-8 border border-[#CCCCCC]">
                        <p className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-2">
                            Informasi Kelulusan
                        </p>
                        <div className="flex flex-col justify-center items-center md:space-y-10 md:min-h-screen mb-4">
                            <h1 className="font-bold text-orange-500 text-4xl">
                                Belum Terdapat Informasi Kelulusan
                            </h1>
                            <span>
                                <i className="pi pi-exclamation-circle text-[14rem] text-orange-500"></i>
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {data.kelulusan === "Lulus" && (
                <div className="md:p-6 pb-6 font-montserrat">
                    <div className="bg-white shadow rounded-xl p-8 border border-[#CCCCCC]">
                        <p className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-2">
                            Informasi Kelulusan
                        </p>
                        <div className="flex flex-col justify-center items-center space-y-10 md:min-h-screen">
                            <h1 className="font-bold text-primary md:text-4xl space-y-2">
                                Selamat Anda Telah Lulus BUILD IT 2025!
                            </h1>
                            <span>
                                <i className="pi pi-star md:text-[14rem] text-[8rem] text-primary"></i>
                            </span>
                            <div className="flex flex-col justify-center items-center text-primary font-semibold">
                                <h2>NIM : {data.nim}</h2>
                                <h2>Nama : {data.name}</h2>
                            </div>

                            {/* <ButtonViewCertificate
                                userName={data.name}
                                status={data.kelulusan === "Lulus"}
                            /> */}
                            {/* tabel nilai */}
                            <div className="block w-full md:overflow-x-hidden overflow-x-auto rounded-lg shadow-md">
                                <table className="w-full text-sm text-left rtl:text-right text-primary">
                                    <thead className="text-xs uppercase bg-primary text-white">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 min-w-[150px]"
                                            >
                                                Nilai Tugas Alprog
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 min-w-[150px]"
                                            >
                                                Nilai Tugas Jarkom
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 min-w-[150px]"
                                            >
                                                Nilai Tugas Basis Data
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 min-w-[150px]"
                                            >
                                                Nilai Tugas GEMASTIK
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 min-w-[150px]"
                                            >
                                                Nilai Kehadiran
                                            </th>
                                            <th
                                                scope="col"
                                                className-="px-6 py-3 min-w-[150px]"
                                            >
                                                Nilai Akhir
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-4">
                                                {data.nilai_alprog}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.nilai_jarkom}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.nilai_basdat}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.nilai_gemastik}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.nilai_kehadiran}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.nilai_akhir}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {data.kelulusan === "Tidak Lulus" && (
                <div className="md:p-6 pb-6 font-montserrat">
                    <div className="bg-white shadow rounded-xl p-8 border border-[#CCCCCC]">
                        <p className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-2">
                            Informasi Kelulusan
                        </p>
                        <div className="flex flex-col justify-center items-center space-y-10 md:min-h-screen">
                            <h1 className="font-bold text-red-500 md:text-4xl  tracking">
                                Maaf Anda Tidak Lulus BUILD IT 2025
                            </h1>
                            <span>
                                <i className="pi pi-times-circle md:text-[14rem] text-[7rem] text-red-500"></i>
                            </span>
                            <div className="font-bold text-red-500 md:text-4xl  flex">
                                {data.alasan_tidak_lulus}
                            </div>

                            <div className="block w-full md:overflow-x-hidden overflow-x-auto rounded-lg shadow-md">
                                <table className="w-full text-sm text-left rtl:text-right text-primary">
                                    <thead className="text-xs uppercase bg-primary text-white">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 min-w-[150px]"
                                            >
                                                Nilai Tugas Alprog
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 min-w-[150px]"
                                            >
                                                Nilai Tugas Jarkom
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 min-w-[150px]"
                                            >
                                                Nilai Tugas Basis Data
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 min-w-[150px]"
                                            >
                                                Nilai Tugas GEMASTIK
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 min-w-[150px]"
                                            >
                                                Nilai Kehadiran
                                            </th>
                                            <th
                                                scope="col"
                                                className-="px-6 py-3 min-w-[150px]"
                                            >
                                                Nilai Akhir
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-4">
                                                {data.nilai_alprog}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.nilai_jarkom}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.nilai_basdat}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.nilai_gemastik}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.nilai_kehadiran}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.nilai_akhir}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex flex-col justify-center items-center text-red-500 font-semibold text-center">
                                <h2>Semangat mengikuti BUILD IT 2026</h2>
                                <h2>
                                    Sampai Jumpa Tahun Depan. Teruslah belajar!
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AdminAuthentication>
    );
}
