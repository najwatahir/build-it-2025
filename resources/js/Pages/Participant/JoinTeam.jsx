import React from "react";
import { Head, useForm, router } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";

export default function JoinTeam({ user }) {
    const { data, setData, post, processing, errors } = useForm({
        code: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("participant.team.join"), {
            onSuccess: () => {
                router.visit(route("participant.team"));
            },
        });
    };

    return (
        <AdminAuthentication user={user} headerTitle="Join Team">
            <div className="p-6 md:p-10">
                <div className="bg-white shadow rounded-xl p-6 md:p-10">
                    <a
                        href={route("participant.team")}
                        className="text-sm text-primaryDark font-semibold mb-4 block"
                    >
                        ← KEMBALI
                    </a>
                    <h2 className="text-2xl font-bold mb-2">BANGUN TIM</h2>
                    <p className="text-gray-600 mb-6">
                        Buat tim baru untuk mengerjakan tugas kelompok bersama
                        temanmu.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <label className="block text-sm font-semibold mb-1">
                            Token TIM
                        </label>
                        <input
                            type="text"
                            value={data.code}
                            onChange={(e) => setData("code", e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg mb-4"
                        />
                        {errors.code && (
                            <p className="text-red-600 text-sm mb-2">
                                {errors.code}
                            </p>
                        )}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-gradient-to-r from-[#201349] to-[#513E99] hover:text-[#FCB215] text-white font-montserrat py-2 rounded-[10px] text-sm font-semibold"
                        >
                            SELESAI
                        </button>
                    </form>
                </div>
            </div>
        </AdminAuthentication>
    );
}
