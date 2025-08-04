import { React, useRef } from "react";
import { Head, usePage, Link, router } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { Toast } from "primereact/toast";

export default function Team() {
    const { user, team } = usePage().props;

    const toast = useRef(null);

    return (
        <AdminAuthentication user={user} headerTitle="Tim">
            <Head title="Tim" />
            <div className="md:p-6">
                <div className="bg-white shadow rounded-[30px] p-8 border border-[#CCCCCC]">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                        {team ? (
                            <div className="text-center md:text-left">
                                <p className="text-xl md:text-2xl font-bold tracking-widest uppercase">
                                    Tim {team.name}
                                </p>
                                {/* <div className="cursor-pointer text-primaryDark hover:text-secondary mt-2">
                                    <p
                                        className="cursor-pointer font-montserrat"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                team.code
                                            );
                                            toast.current.show({
                                                severity: "success",
                                                summary: "Token disalin",
                                                detail: "Token berhasil disalin ke clipboard! Bagikan ke teman yang ingin kamu ajak bergabung ke dalam tim!",
                                                life: 3000,
                                            });
                                        }}
                                    >
                                        {team.code}{" "}
                                        <pi className="pi pi-copy"></pi>
                                    </p>
                                </div> */}
                            </div>
                        ) : (
                            <h1 className="text-xl md:text-2xl font-bold tracking-widest text-center md:text-left">
                                TIM
                            </h1>
                        )}

                        {team ? (
                            <div className="flex flex-col md:flex-row gap-2 items-center">
                                <button
                                    className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-[#201349] to-[#513E99] hover:text-[#FCB215] text-white rounded-xl text-sm font-semibold shadow-md"
                                    onClick={() => {
                                        if (
                                            confirm(
                                                "Yakin ingin keluar dari tim?"
                                            )
                                        ) {
                                            router.post(
                                                route("participant.team.leave")
                                            );
                                        }
                                    }}
                                >
                                    KELUAR
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:flex gap-2">
                                <Link href={route("participant.team.create")}>
                                    <button className="w-full px-4 py-2 border rounded-[10px] border-primaryDark text-sm font-semibold text-primaryDark hover:text-[#FCB215] hover:border-[#FCB215]">
                                        BANGUN TIM +
                                    </button>
                                </Link>
                                <Link href={route("participant.team.joinView")}>
                                    <button className="w-full px-4 py-2 bg-gradient-to-r from-[#201349] to-[#513E99] hover:text-[#FCB215] text-white rounded-xl text-sm font-semibold shadow-md">
                                        GABUNG
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="text-sm tracking-widest text-gray-600 rounded-xl">
                        {team ? (
                            <div className="overflow-x-auto w-full">
                                <table className="min-w-full bg-white text-sm mt-6 text-left">
                                    <thead>
                                        <tr className="border-b uppercase">
                                            <th className="p-3 font-semibold whitespace-nowrap">
                                                NAMA
                                            </th>
                                            <th className="p-3 font-semibold whitespace-nowrap">
                                                NIM
                                            </th>
                                            <th className="p-3 font-semibold whitespace-nowrap">
                                                ID LINE
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {team.members.map((member, index) => (
                                            <tr
                                                key={index}
                                                className="border-b hover:bg-gray-50"
                                            >
                                                <td className="p-3">
                                                    {member.name || "-"}
                                                </td>
                                                <td className="p-3">
                                                    {member.nim || "-"}
                                                </td>
                                                <td className="p-3">
                                                    {member.line_id || "-"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center bg-[#FAFAFA] w-full py-12 rounded-xl">
                                <p className="text-center">
                                    BELUM TERGABUNG DALAM TIM
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                {team ? (
                    <div className="mt-6 bg-white shadow rounded-[30px] p-8 border border-[#CCCCCC] font-montserrat">
                        <h2 className="text-lg md:text-xl font-bold tracking-widest uppercase mb-4">
                            Detail Tim
                        </h2>

                        <div className="mb-2">
                            <p className="text-sm font-bold text-primaryDark uppercase mb-2">
                                Token Tim
                            </p>
                            <p className="text-xs text-gray-500">
                                Bagikan token ini ke anggota timmu agar mereka
                                bisa bergabung.
                            </p>
                        </div>

                        <div
                            onClick={() => {
                                navigator.clipboard.writeText(team.code);
                                toast.current.show({
                                    severity: "success",
                                    summary: "Token disalin",
                                    detail: "Token berhasil disalin ke clipboard!",
                                    life: 3000,
                                });
                            }}
                            className="flex items-center bg-[#E5DFFB] hover:bg-[#d5cef0] cursor-pointer rounded-xl px-4 py-3 mt-4"
                        >
                            <i className="pi pi-copy text-[#201349] mr-2"></i>
                            <div className="h-[20px] w-[1px] bg-primary mr-2"></div>
                            <span className="font-semibold tracking-widest text-[#201349]">
                                {team.code}
                            </span>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
            <Toast ref={toast} />
        </AdminAuthentication>
    );
}
