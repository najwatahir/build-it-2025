import React, { useState } from "react";
import { useForm, router } from "@inertiajs/react";

export default function JoinTeam() {
    const { data, setData, post, processing, errors } = useForm({
        code: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("participant.team.join"), {
            onSuccess: () => {
                router.visit(route("participant.team"));
            }
        });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-pink-100 to-white">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
                <a
                    href={route("participant.team")}
                    className="text-sm text-purple-700 mb-4 inline-block"
                >
                    &larr; Kembali
                </a>
                <h1 className="text-2xl font-bold mb-2">Gabung Tim</h1>
                <p className="text-gray-600 text-sm mb-6">
                    Masukkan kode tim yang dibagikan temanmu untuk bergabung.
                </p>
                <form onSubmit={handleSubmit}>
                    <label className="block text-sm font-medium mb-1">
                        Token Tim
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
                        className="w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md"
                        disabled={processing}
                    >
                        Selesai
                    </button>
                </form>
            </div>
        </div>
    );
}
