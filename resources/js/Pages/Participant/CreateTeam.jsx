import React from "react";
import { Head, useForm, router, Link } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { Toast } from "primereact/toast";

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
            <div className="p-6">
                <div className="bg-white shadow rounded-xl p-8">
                    <Link
                        href={route("participant.team")}
                        className="text-primary text-sm font-semibold flex items-center gap-2 mb-6"
                    >
                        <p className="pi pi-arrow-left text-primary p-2 rounded-full"></p>
                        KEMBALI
                    </Link>
                    <h2 className="text-2xl font-bold mb-2">BANGUN TIM</h2>
                    <p className="text-gray-600 mb-6">
                        Buat tim baru untuk mengerjakan tugas kelompok bersama
                        temanmu. Jika kamu pembuat tim, maka otomatis kamu menjadi ketua tim!
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
