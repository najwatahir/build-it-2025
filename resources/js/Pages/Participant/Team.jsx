import React from "react";
import { Head, usePage, Link, router } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";

export default function Team() {
    const { user, team } = usePage().props;

    return (
        <AdminAuthentication user={user} headerTitle="Tim">
            <Head title="Tim" />
            <div className="md:p-6">
                <div className="bg-white shadow rounded-xl p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                        {team ? (
                            <div className="text-center md:text-left">
                                <p className="text-xl md:text-2xl font-bold tracking-widest uppercase">
                                    Tim {team.name}
                                </p>
                            </div>
                        ) : (
                            <h1 className="text-xl md:text-2xl font-bold tracking-widest text-center md:text-left">
                                TIM
                            </h1>
                        )}

                        {team ? (
                            <div className="flex flex-col md:flex-row gap-2 items-center">
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            team.code
                                        );
                                        alert("Token berhasil disalin!");
                                    }}
                                    className="w-full md:w-auto px-4 py-2 border rounded-[10px] border-primaryDark text-sm font-semibold text-primaryDark hover:text-[#FCB215] hover:border-[#FCB215]"
                                >
                                    {team.code}
                                </button>
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
            </div>
        </AdminAuthentication>
    );
}
