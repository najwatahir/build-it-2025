import React, { useEffect, useRef } from "react";
import { Head,usePage } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function Dashboard() {
   const {user, akt21, akt22, akt23, akt24, akt25, kelompok1, kelompok2, kelompok3, kelompok4, teams} = usePage().props;
   const title = 'Dashboard ' + (user.roles[0].name === 'admin' ? 'Admin' :  'Peserta');

   const msgsVerif = useRef(null);
   const msgsProgress = useRef(null);

   const messagesTemplates = {
       success:
           "Kamu telah berhasil menyelesaikan dan mengumpulkan tugas pada sesi pelatihan ",
       warn: "Kamu belum menyelesaikan dan mengumpulkan tugas pada sesi pelatihan ",
       successVerif:
           "Kamu telah terverifikasi sebagai peserta Build IT 2025 dan saat ini tergabung dalam Kelompok " +
           user.kelompok,
       warnVerif: "Kamu belum terverifikasi sebagai anggota Build IT 2025",
       rejectedVerif:
           "Pendaftaran kamu sebagai peserta Build IT 2025 DITOLAK. Jangan khawatir, kamu akan dihubungi lebih lanjut oleh pihak panitia",
   };

   const messages = {
      verif : {
         'msgSeverity' : user.status === 'Terverifikasi' ? 'success' : user.status === "Ditolak" ? 'error' : 'warn',
         'msgSummary' : 'Status Peserta',
         'msgDetail' : (user.status === 'Terverifikasi' ? messagesTemplates.successVerif : user.status === "Ditolak" ? messagesTemplates.rejectedVerif : messagesTemplates.warnVerif)
      },
      jarkom : {
         'msgSeverity' : user.tugas_jarkom ? 'success' : 'error',
         'msgSummary' : 'Pelatihan Jaringan Komputer',
         'msgDetail' : (user.tugas_jarkom ? messagesTemplates.success : messagesTemplates.warn) + 'Jaringan Komputer'
      },
      alprog : {
         'msgSeverity' : user.tugas_alprog ? 'success' : 'error',
         'msgSummary' : 'Pelatihan Algoritma dan Pemrograman',
         'msgDetail' : (user.tugas_alprog ? messagesTemplates.success : messagesTemplates.warn) + 'Algoritma dan Pemrograman'
      },
      basisdata : {
         'msgSeverity' : user.tugas_basis ? 'success' : 'error',
         'msgSummary' : 'Pelatihan Basis Data',
         'msgDetail' : (user.tugas_basis ? messagesTemplates.success : messagesTemplates.warn) + 'Konsep Basis Data'
      },
   } 

   useMountEffect(() => {
       if (msgsVerif.current && msgsProgress.current) {
           msgsVerif.current.clear();
           msgsProgress.current.clear();

           // Tampilkan pesan verifikasi
           msgsVerif.current.show([
               {
                   sticky: true,
                   severity: messages.verif.msgSeverity,
                   summary: messages.verif.msgSummary,
                   detail: messages.verif.msgDetail,
                   closable: false,
               },
           ]);

           // Kalau sudah terverifikasi, tampilkan juga progress tugas
           if (user.status === "Terverifikasi") {
               msgsProgress.current.show([
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
               ]);
           }
       }
   });


   return (
       <AdminAuthentication user={user} headerTitle={title}>
           <Head title="Dashboard" />
           <div className="p-6 font-montserrat">
               {/* dashboard admin */}
               {user.roles[0].name == "admin" && (
                   <>
                       <h1 className="text-3xl text-gray-800 mb-8">
                           Hai, {user.name} !!
                       </h1>
                       <p className="text-3xl text-primary font-bold mb-4">
                           Angkatan
                       </p>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {/* card */}
                           <div className="bg-white shadow-md border-[#CCCCCC] rounded-lg p-6">
                               <div className="flex gap-6 h-full">
                                   <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                                       <i className="pi pi-users text-9xl text-primary"></i>
                                   </div>
                                   <div class="w-1/2">
                                       <p className="text-xl text-primary font-bold">
                                           Jumlah Angkatan 2021
                                       </p>
                                       <p className="text-6xl text-gray-800 font-bold">
                                           {akt21}
                                       </p>
                                   </div>
                               </div>
                           </div>
                           {/* card */}
                           <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                               <div className="flex gap-6 h-full">
                                   <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                                       <i className="pi pi-users text-9xl text-primary"></i>
                                   </div>
                                   <div class="w-1/2">
                                       <p className="text-xl text-primary font-bold">
                                           Jumlah Angkatan 2022
                                       </p>
                                       <p className="text-6xl text-gray-800 font-bold">
                                           {akt22}
                                       </p>
                                   </div>
                               </div>
                           </div>
                           {/* card */}
                           <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                               <div className="flex gap-6 h-full">
                                   <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                                       <i className="pi pi-users text-9xl text-primary"></i>
                                   </div>
                                   <div class="w-1/2">
                                       <p className="text-xl text-primary font-bold">
                                           Jumlah Angkatan 2023
                                       </p>
                                       <p className="text-6xl text-gray-800 font-bold">
                                           {akt23}
                                       </p>
                                   </div>
                               </div>
                           </div>
                           {/* card */}
                           <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                               <div className="flex gap-6 h-full">
                                   <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                                       <i className="pi pi-users text-9xl text-primary"></i>
                                   </div>
                                   <div class="w-1/2">
                                       <p className="text-xl text-primary font-bold">
                                           Jumlah Angkatan 2024
                                       </p>
                                       <p className="text-6xl text-gray-800 font-bold">
                                           {akt24}
                                       </p>
                                   </div>
                               </div>
                           </div>
                           {/* card */}
                           <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                               <div className="flex gap-6 h-full">
                                   <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                                       <i className="pi pi-users text-9xl text-primary"></i>
                                   </div>
                                   <div class="w-1/2">
                                       <p className="text-xl text-primary font-bold">
                                           Jumlah Angkatan 2025
                                       </p>
                                       <p className="text-6xl text-gray-800 font-bold">
                                           {akt25}
                                       </p>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <p className="text-3xl text-primary font-bold pt-6 mb-4">
                           Kelompok
                       </p>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {/* card */}
                           <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                               <div className="flex gap-6 h-full">
                                   <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                                       <i className="pi pi-users text-9xl text-primary"></i>
                                   </div>
                                   <div class="w-1/2">
                                       <p className="text-xl text-primary font-bold">
                                           Kelompok 1
                                       </p>
                                       <p className="text-6xl text-gray-800 font-bold">
                                           {kelompok1}
                                       </p>
                                   </div>
                               </div>
                           </div>
                           {/* card */}
                           <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                               <div className="flex gap-6 h-full">
                                   <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                                       <i className="pi pi-users text-9xl text-primary"></i>
                                   </div>
                                   <div class="w-1/2">
                                       <p className="text-xl text-primary font-bold">
                                           Kelompok 2
                                       </p>
                                       <p className="text-6xl text-gray-800 font-bold">
                                           {kelompok2}
                                       </p>
                                   </div>
                               </div>
                           </div>
                           {/* card */}
                           <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                               <div className="flex gap-6 h-full">
                                   <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                                       <i className="pi pi-users text-9xl text-primary"></i>
                                   </div>
                                   <div class="w-1/2">
                                       <p className="text-xl text-primary font-bold">
                                           Kelompok 3
                                       </p>
                                       <p className="text-6xl text-gray-800 font-bold">
                                           {kelompok3}
                                       </p>
                                   </div>
                               </div>
                           </div>
                           {/* card */}
                           <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                               <div className="flex gap-6 h-full">
                                   <div class="row-span-2 bg-primer text-center h-full w-1/2 flex items-center justify-center rounded-md">
                                       <i className="pi pi-users text-9xl text-primary"></i>
                                   </div>
                                   <div class="w-1/2">
                                       <p className="text-xl text-primary font-bold">
                                           Kelompok 4
                                       </p>
                                       <p className="text-6xl text-gray-800 font-bold">
                                           {kelompok4}
                                       </p>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <p className="text-3xl text-primary font-bold pt-6 mb-4">
                           Tim Peserta
                       </p>
                       <div className="overflow-x-auto bg-white shadow-md border border-gray-200 rounded-lg p-6">
                           <table className="min-w-full text-left text-sm text-gray-600">
                               <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                   <tr>
                                       <th className="px-6 py-3">Nama Tim</th>
                                       <th className="px-6 py-3">Ketua</th>
                                       <th className="px-6 py-3">
                                           ID Line
                                       </th>
                                   </tr>
                               </thead>
                               <tbody>
                                   {teams.map((team) => (
                                       <tr key={team.id} className="border-b">
                                           <td className="px-6 py-4">
                                               {team.name}
                                           </td>
                                           <td className="px-6 py-4">
                                               {team.leader?.name ?? "-"}
                                           </td>
                                           <td className="px-6 py-4">
                                               {team.leader?.id_line ?? "-"}
                                           </td>
                                       </tr>
                                   ))}
                               </tbody>
                           </table>
                       </div>
                   </>
               )}

               {/* dashboard participant */}
               {user.roles[0].name == "participant" && (
                   <div className="w-full flex justify-center items-center font-montserrat">
                       <div className="bg-white w-full p-6 md:p-10 rounded-xl shadow border border-gray-200">
                           <div className="mb-8">
                               <h2 className="text-2xl font-bold text-gray-800 mb-1">
                                   Haii, {user.name}!!
                               </h2>
                               <p className="text-sm text-gray-500">
                                   Pantau semua progres tugas, cek pengumuman,
                                   dan tetap terhubung dengan info penting!
                               </p>
                           </div>

                           <div className="space-y-6">
                               <div>
                                   <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                       INFORMASI
                                   </h3>
                                   <div className="flex flex-col">
                                       <Messages
                                           ref={msgsVerif}
                                           className="custom-messages font-montserrat"
                                       />
                                   </div>
                               </div>

                               <div>
                                   <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                       PROGRES
                                   </h3>
                                   <div className="flex flex-col font-montserrat">
                                       <Messages
                                           ref={msgsProgress}
                                           className="custom-messages"
                                       />
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               )}
           </div>
       </AdminAuthentication>
   );
}