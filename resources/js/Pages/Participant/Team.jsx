import React from "react";
import { Head, usePage } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";

export default function Team() {
    const { user, team } = usePage().props;

    return (
        <AdminAuthentication user={user} headerTitle="Tim">
            <Head title="Tim" />
            <div className="p-6 md:p-10">
                <div className="bg-white shadow rounded-xl p-6 md:p-10  md:h-96">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-xl md:text-2xl font-bold tracking-widest">
                            TIM
                        </h1>

                        {!team && (
                            <div className="flex gap-2">
                                    <button className="px-4 py-2 border rounded-[10px] border-primaryDark text-sm font-semibold text-primaryDark hover:text-[#FCB215] hover:border-[#FCB215]">
                                        BANGUN TIM +
                                    </button>
                                <button className="px-4 py-2 bg-gradient-to-r from-[#201349] to-[#513E99] hover:text-[#FCB215] text-white rounded-xl text-sm font-semibold shadow-md">
                                    GABUNG
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center items-center h-64 text-sm tracking-widest text-gray-600 uppercase bg-[#FAFAFA] rounded-xl">
                        {team ? (
                            <div className="flex flex-col items-center justify-center gap-4">
                                <p className="text-lg font-semibold">
                                    Nama Tim: {team.name}
                                </p>
                                <button
                                    onClick={handleCopyToken}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Salin Token
                                </button>
                            </div>
                        ) : (
                            <p className="text-center">
                                BELUM TERGABUNG DALAM TIM
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </AdminAuthentication>
    );
}
