import React, { useRef } from "react";
import { Head, usePage } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { useMountEffect } from "primereact/hooks";
import { Messages } from "primereact/messages";

export default function Dashboard() {
    const {
        user,
        akt21,
        akt22,
        akt23,
        akt24,
        akt25,
        kelompok1,
        kelompok2,
        kelompok3,
        kelompok4,
        teams,
        user_team
    } = usePage().props;

    const title = `Dashboard ${
        user.roles[0].name === "admin" ? "Admin" : "Peserta"
    }`;
    const msgsVerif = useRef(null);
    const msgsProgress = useRef(null);

    const messagesTemplates = {
        success:
            "Kamu telah berhasil menyelesaikan dan mengumpulkan tugas pada sesi pelatihan ",
        warn: "Kamu belum menyelesaikan dan mengumpulkan tugas pada sesi pelatihan ",
        successVerif: `Kamu telah terverifikasi sebagai peserta Build IT 2025 dan saat ini tergabung dalam Kelompok ${user.kelompok}`,
        warnVerif: "Kamu belum terverifikasi sebagai anggota Build IT 2025",
        rejectedVerif:
            "Pendaftaran kamu sebagai peserta Build IT 2025 DITOLAK. Jangan khawatir, kamu akan dihubungi lebih lanjut oleh pihak panitia",
        successTwibbon: "Kamu telah mengumpulkan bukti upload twibbon",
        warnTwibbon: "Kamu belum mengumpulkan bukti upload twibbon",
        successTeam: "Kamu telah tergabung dalam tim",
        warnTeam:
            "Kamu belum tergabung dalam tim. Segera buat tim atau bergabung dengan tim untuk penugasan GEMASTIK",
    };

    const messages = {
        verif: {
            msgSeverity:
                user.status === "Terverifikasi"
                    ? "success"
                    : user.status === "Ditolak"
                    ? "error"
                    : "warn",
            msgSummary: "Status Peserta",
            msgDetail:
                user.status === "Terverifikasi"
                    ? messagesTemplates.successVerif
                    : user.status === "Ditolak"
                    ? messagesTemplates.rejectedVerif
                    : messagesTemplates.warnVerif,
        },
        alprog: {
            msgSeverity: user.tugas_alprog ? "success" : "error",
            msgSummary: "Pelatihan Algoritma dan Pemrograman",
            msgDetail:
                (user.tugas_alprog
                    ? messagesTemplates.success
                    : messagesTemplates.warn) + "Algoritma dan Pemrograman",
        },
        basisdata: {
            msgSeverity: user.tugas_basis ? "success" : "error",
            msgSummary: "Pelatihan Basis Data",
            msgDetail:
                (user.tugas_basis
                    ? messagesTemplates.success
                    : messagesTemplates.warn) + "Basis Data",
        },
        jarkom: {
            msgSeverity: user.tugas_jarkom ? "success" : "error",
            msgSummary: "Pelatihan Jaringan Komputer",
            msgDetail:
                (user.tugas_jarkom
                    ? messagesTemplates.success
                    : messagesTemplates.warn) + "Jaringan Komputer",
        },
        twibbon: {
            msgSeverity: user.twibbon ? "success" : "error",
            msgSummary: "Twibbon",
            msgDetail: user.twibbon
                ? messagesTemplates.successTwibbon
                : messagesTemplates.warnTwibbon,
        },
        team: {
            msgSeverity: user_team ? "success" : "error",
            msgSummary: "Tim",
            msgDetail: user_team
                ? `Kamu telah tergabung dalam tim "${user_team.name}"`
                : messagesTemplates.warnTeam,
        },
    };

    useMountEffect(() => {
        msgsVerif.current?.clear();
        msgsProgress.current?.clear();

        msgsVerif.current?.show([
            {
                sticky: true,
                severity: messages.verif.msgSeverity,
                summary: messages.verif.msgSummary,
                detail: messages.verif.msgDetail,
                closable: false,
            },
        ]);

        if (user.status === "Terverifikasi") {
            msgsProgress.current?.show([
                {
                    sticky: true,
                    severity: messages.alprog.msgSeverity,
                    summary: messages.alprog.msgSummary,
                    detail: messages.alprog.msgDetail,
                    closable: false,
                },
                {
                    sticky: true,
                    severity: messages.basisdata.msgSeverity,
                    summary: messages.basisdata.msgSummary,
                    detail: messages.basisdata.msgDetail,
                    closable: false,
                },
                {
                    sticky: true,
                    severity: messages.jarkom.msgSeverity,
                    summary: messages.jarkom.msgSummary,
                    detail: messages.jarkom.msgDetail,
                    closable: false,
                },
                {
                    sticky: true,
                    severity: messages.twibbon.msgSeverity,
                    summary: messages.twibbon.msgSummary,
                    detail: messages.twibbon.msgDetail,
                    closable: false,
                },
                {
                    sticky: true,
                    severity: messages.team.msgSeverity,
                    summary: messages.team.msgSummary,
                    detail: messages.team.msgDetail,
                    closable: false,
                },
            ]);
        }
    });

    const renderCard = (title, count) => (
        <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
            <div className="flex gap-6 h-full">
                <div className="bg-primer text-center w-1/2 flex items-center justify-center rounded-md">
                    <i className="pi pi-users text-9xl text-primary" />
                </div>
                <div className="w-1/2">
                    <p className="text-xl text-primary font-bold">{title}</p>
                    <p className="text-6xl text-gray-800 font-bold">{count}</p>
                </div>
            </div>
        </div>
    );

    return (
        <AdminAuthentication user={user} headerTitle={title}>
            <Head title="Dashboard" />
            <div className="md:p-6 pb-6 font-montserrat">
                <div className="bg-white shadow rounded-[30px] p-8 border border-[#CCCCCC]">
                    {/* ADMIN */}
                    {user.roles[0].name === "admin" && (
                        <>
                            <h1 className="text-3xl text-gray-800 mb-8">
                                Hai, {user.name} !!
                            </h1>

                            <section className="mb-10">
                                <h2 className="text-md font-semibold text-gray-700 mb-4">
                                    ANGKATAN
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {renderBox("2021", akt21)}
                                    {renderBox("2022", akt22)}
                                    {renderBox("2023", akt23)}
                                    {renderBox("2024", akt24)}
                                    {renderBox("2025", akt25)}
                                </div>
                            </section>

                            {/* KELOMPOK */}
                            <section className="mb-10">
                                <h2 className="text-md font-semibold text-gray-700 mb-4">
                                    KELOMPOK
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {renderBox("1", kelompok1)}
                                    {renderBox("2", kelompok2)}
                                    {renderBox("3", kelompok3)}
                                    {renderBox("4", kelompok4)}
                                </div>
                            </section>

                            {/* TABEL TIM */}
                            <section>
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-md font-semibold text-gray-700">
                                        TIM
                                    </h2>
                                    <a
                                        href="/teams"
                                        className="text-sm text-primary hover:underline"
                                    >
                                        Lihat Semua
                                    </a>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm text-gray-800">
                                        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                                            <tr>
                                                <th className="px-6 py-3 text-left">
                                                    Nama
                                                </th>
                                                <th className="px-6 py-3 text-left">
                                                    Ketua
                                                </th>
                                                <th className="px-6 py-3 text-left">
                                                    ID Line
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {teams.map((team) => (
                                                <tr
                                                    key={team.id}
                                                    className="border-b hover:bg-gray-50"
                                                >
                                                    <td className="px-6 py-4">
                                                        {team.name}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {team.leader?.name ??
                                                            "-"}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {team.leader?.line_id ??
                                                            "-"}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </>
                    )}

                    {/* PARTICIPANT */}
                    {user.roles[0].name === "participant" && (
                        <div className="w-full flex justify-center items-center font-montserrat">
                            <div className="">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                                        Haii, {user.name}!!
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        Pantau semua progres tugas, cek
                                        pengumuman, dan tetap terhubung dengan
                                        info penting!
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            INFORMASI
                                        </h3>
                                        <Messages
                                            ref={msgsVerif}
                                            className="custom-messages font-montserrat"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            PROGRES
                                        </h3>
                                        <Messages
                                            ref={msgsProgress}
                                            className="custom-messages font-montserrat"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AdminAuthentication>
    );
}

const renderBox = (title, count) => (
    <div className="bg-white border border-gray-200 rounded-lg text-center px-4 py-6 shadow-sm">
        <p className="text-2xl font-bold text-primary">{title}</p>
        <p className="text-sm text-gray-600">{count} Peserta</p>
    </div>
);
