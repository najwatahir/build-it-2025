import React from "react";

export default function Custom404() {
    return (
        <>
            <div className="bg-white flex flex-col gap-12 justify-center items-center my-16">
                <h1 className="text-center font-[Varsity] uppercase tracking-[0.1em] leading-[0.87em] text-[clamp(72px,20vw,288px)] bg-gradient-to-r from-[#201349] to-[#513E99] bg-clip-text text-transparent shadow-[0_0_40px_rgba(0,0,0,0.1)]">
                    404
                </h1>

                <div className="flex flex-col gap-8 justify-center items-center">
                    <h1 className="text-center font-montserrat uppercase text-[clamp(32px,6vw,64px)] font-bold leading-normal bg-gradient-to-r from-[#201349] to-[#513E99] bg-clip-text text-transparent shadow-[0_0_40px_rgba(0,0,0,0.1)]">
                        Tidak Ditemukan
                    </h1>

                    <h1 className="text-center font-montserrat font-medium text-[clamp(16px,4vw,20px)] leading-normal tracking-[2px] text-black">
                        "Ups! Halaman yang kamu cari entah ke mana."
                    </h1>

                    <div className="mt-5 flex justify-center items-center w-full">
                        <a
                            href="/"
                            rel="noopener noreferrer"
                            className="px-[30px] py-[20px] flex justify-center items-center gap-[10px] rounded-[25px] bg-gradient-to-r from-[#201349] to-[#513E99] shadow-[0_4px_4px_rgba(0,0,0,0.15)] transition-all duration-300 text-white font-montserrat font-bold text-[16px] leading-[30px] tracking-[1.6px] uppercase hover:text-secondary"
                        >
                            Kembali ke homepage
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
