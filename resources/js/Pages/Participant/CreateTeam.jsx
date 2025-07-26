import React from "react";
import { Head, useForm, router } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";

export default function CreateTeam({ user }) {
    const { data, setData, post, processing } = useForm({ name: "" });

    const submit = (e) => {
        e.preventDefault();
        post(route("participant.team.store"), {
            onSuccess: () => {
                router.visit(route("participant.team"));
            }
        });
    };

    return (
        <AdminAuthentication user={user} headerTitle="Create Team">
            <Head title="Create Team" />
            <div className="p-6 md:p-10">
                <div className="bg-white shadow rounded-xl p-6 md:p-10">
                    <a
                        href={route("participant.team")}
                        className="text-sm text-purple-800 font-semibold mb-4 block"
                    >
                        ← KEMBALI
                    </a>
                    <h2 className="text-2xl font-bold mb-2">BANGUN TIM</h2>
                    <p className="text-gray-600 mb-6">
                        Buat tim baru untuk mengerjakan tugas kelompok bersama
                        temanmu.
                    </p>

                    <form onSubmit={submit}>
                        <label className="block text-sm font-semibold mb-1">
                            NAMA TIM
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="w-full border rounded-lg p-2 mb-4"
                            name="name"
                        />
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-gradient-to-r from-purple-900 to-purple-600 text-white py-2 rounded-xl text-sm font-semibold"
                        >
                            SELESAI
                        </button>
                    </form>
                </div>
            </div>
        </AdminAuthentication>
    );
}
