import React from "react";
import { Toast } from "primereact/toast";
import { useEffect, useRef } from "react";
import { Head, useForm, router, Link, usePage } from "@inertiajs/react";
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

    const { flash } = usePage().props;
    const toast = useRef(null);

    useEffect(() => {
        if (flash?.success) {
            toast.current.show({
                severity: "success",
                summary: "Berhasil",
                detail: flash.success,
                life: 3000,
            });
        }
        if (flash?.error) {
            toast.current.show({
                severity: "error",
                summary: "Gagal",
                detail: flash.error,
                life: 3000,
            });
        }
    }, [flash]);

    return (
        <AdminAuthentication user={user} headerTitle="Join Team">
            <Toast ref={toast}/>
            <div className="p-6 font-montserrat">
                <div className="bg-white shadow rounded-[30px] p-8">
                    <Link
                        href={route("participant.team")}
                        className="text-primary text-sm font-semibold flex items-center gap-2 mb-6"
                    >
                        <p className="pi pi-arrow-left text-primary p-2 rounded-full"></p>
                        KEMBALI
                    </Link>
                    <h2 className="text-2xl font-bold mb-2">GABUNG TIM</h2>
                    <p className="text-gray-600 mb-6">
                        Gabung ke dalam tim untuk mengerjakan tugas kelompok bersama
                        temanmu. Jika tim sudah terdiri dari 3 orang, kamu tidak dapat bergabung.
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
