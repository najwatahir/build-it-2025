import React, { useState, useRef} from "react";
import { Head,usePage, useForm } from "@inertiajs/react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { Toast } from 'primereact/toast';

export default function Submission({ team }) {
   const {user} = usePage().props;
   const isLeader = user?.id && team?.leader_id && user.id === team.leader_id;

   const {data, setData, processing, put, errors, transform} = useForm(
      {
         alprog: user.tugas_alprog,
         jarkom: user.tugas_jarkom,
         basis: user.tugas_basis,
         submission_link: team?.submission_link ?? ''
      }
   );

   const toast = useRef(null);

   function submitAlprog(e){
      e.preventDefault();

      put(route('participant.submitalprog'), {
         onSuccess: () => {
            toast.current.show({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil mengirimkan penugasan Algoritma dan Pemrograman', life: 3000 })
         }, 
         onError: (error) => {
            toast.current.show({ severity: 'error', summary: 'Gagal', detail: 'Gagal mengirimkan penugasan Algoritma dan Pemrograman', life: 3000 })
         }  
      })
   }

   function submitBasis(e){
      e.preventDefault();

      put(route('participant.submitbasis'), {
         onSuccess: () => {
            toast.current.show({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil mengirimkan penugasan Basis Data', life: 3000 })
         }, 
         onError: (error) => {
            toast.current.show({ severity: 'error', summary: 'Gagal', detail: 'Gagal mengirimkan penugasan Basis Data', life: 3000 })
         }  
      })
   }

   function submitJarkom(e){
      e.preventDefault();

      put(route('participant.submitjarkom'), {
         onSuccess: () => {
            toast.current.show({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil mengirimkan penugasan Jaringan Komputer dan Komunikasi', life: 3000 })
         }, 
         onError: (error) => {
            toast.current.show({ severity: 'error', summary: 'Gagal', detail: 'Gagal mengirimkan penugasan Jaringan Komputer dan Komunikasi', life: 3000 })
         }  
      })
   }

   function submitProposal(e){
      e.preventDefault();

      put(route('participant.submitproposal'), {
         onSuccess: () => {
            toast.current.show({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil mengirimkan Proposal', life: 3000 })
         }, 
         onError: (error) => {
            toast.current.show({ severity: 'error', summary: 'Gagal', detail: 'Gagal mengirimkan Proposal', life: 3000 })
         }  
      })
   }

   function checkInput(matkul){
      if (data[matkul] === user['tugas_' + matkul]) {
         return true;
      } else {
         return false
      }
   }

   const submissionClose = () => {
      const currentDate = new Date();
      const closingDate = new Date("2025-09-18T00:00:00");

      return (currentDate > closingDate) ?  true :  false;
   }

   return (
       <AdminAuthentication user={user} headerTitle="Pengumpulan Tugas Peserta">
           <Head title="Participant Submission" />
           <Toast ref={toast} />
           {submissionClose() && (
               <>
                   {user.status === "Terverifikasi" && (
                       <div className="flex flex-col justify-center items-center space-y-10 min-h-screen font-montserrat">
                           <h1 className="font-bold text-red-500 text-4xl">
                               Kamu tidak dapat mengumpulkan tugas
                           </h1>
                           <span>
                               <i className="pi pi-times-circle text-[14rem] text-red-500"></i>
                           </span>
                           <div className="flex flex-col justify-center items-center text-red-500 font-semibold">
                               <h2>Pengumpulan tugas sudah ditutup</h2>
                               <h2>Semoga kamu lulus BUILD IT 2025</h2>
                           </div>
                       </div>
                   )}
               </>
           )}

           {!submissionClose() && (
               <>
                   {(user.status === "Belum Terverifikasi" ||
                       user.status === "Ditolak") && (
                       <div className="flex flex-col justify-center items-center space-y-10 min-h-screen font-montserrat">
                           <h1 className="font-bold text-red-500 text-xl">
                               Halaman pengumpulan tugas tersedia jika status
                               peserta sudah terverifikasi
                           </h1>
                           <span>
                               <i className="pi pi-exclamation-circle text-[10rem] text-red-500"></i>
                           </span>
                       </div>
                   )}

                   {user.status === "Terverifikasi" && (
                       <div className="md:p-6 pb-6 font-montserrat">
                           <div className="bg-white shadow rounded-xl p-8 border border-[#CCCCCC]">
                               <p className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-2">
                                   Pengumpulan Tugas
                               </p>
                               <p className="text-gray-600 mb-6 text-sm">
                                   Unggah link tugasmu di sini. Pastikan sudah
                                   dibagikan dengan akses publik.
                               </p>
                               <form
                                   onSubmit={submitAlprog}
                                   className="flex flex-col gap-2 w-full"
                               >
                                   <h3 className="text-xl text-black font-semibold uppercase">
                                       Algoritma dan Pemrograman
                                   </h3>
                                   <label
                                       htmlFor="alprog"
                                       className="text-gray-600 text-sm"
                                   >
                                       Kumpulkan Link Reporistory Github kamu di
                                       sini
                                   </label>
                                   <div className="space-y-4 md:space-x-4">
                                       <input
                                           type="text"
                                           name="alprog"
                                           id="alprog"
                                           value={data.alprog}
                                           onChange={(e) =>
                                               setData("alprog", e.target.value)
                                           }
                                           className={`bg-white w-full md:w-7/12 border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${
                                               errors.alprog
                                                   ? "border-red-500 focus:border-red-500"
                                                   : "border-[#CCCC] focus:border-primary"
                                           }`}
                                       />
                                       <button
                                           type="submit"
                                           disabled={checkInput("alprog")}
                                           className="py-4 px-4 bg-gradient-to-r from-[#201349] to-[#513E99] hover:bg-secondary font-bold text-white rounded-2xl transition-all duration-300 text-center disabled:bg-red-500/80"
                                       >
                                           <img
                                               src="/asset/images/edit_square.png"
                                               alt=""
                                               className="w-[15px] mx-auto"
                                           />
                                       </button>
                                   </div>
                                   <small className="text-red-500">
                                       {errors.alprog}
                                   </small>
                               </form>
                               <form
                                   onSubmit={submitBasis}
                                   className="flex flex-col gap-2 w-full"
                               >
                                   <h3 className="text-xl text-black font-semibold uppercase">
                                       Basis Data
                                   </h3>
                                   <label
                                       htmlFor="alprog"
                                       className="text-gray-600 text-sm"
                                   >
                                       Kumpulkan Link Google Drive kamu di sini
                                   </label>
                                   <div className="space-y-4 md:space-x-4">
                                       <input
                                           type="text"
                                           name="basis"
                                           id="basis"
                                           value={data.basis}
                                           onChange={(e) =>
                                               setData("basis", e.target.value)
                                           }
                                           className={`bg-white w-full md:w-7/12 border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${
                                               errors.basis
                                                   ? "border-red-500 focus:border-red-500"
                                                   : "border-[#CCCC] focus:border-primary"
                                           }`}
                                       />
                                       <button
                                           disabled={checkInput("basis")}
                                           type="submit"
                                           className="py-4 px-4 bg-gradient-to-r from-[#201349] to-[#513E99] hover:bg-secondary font-bold text-white rounded-2xl transition-all duration-300 text-center disabled:bg-red-500/80"
                                       >
                                           <img
                                               src="/asset/images/edit_square.png"
                                               alt=""
                                               className="w-[15px] mx-auto"
                                           />
                                       </button>
                                   </div>
                                   <small className="text-red-500">
                                       {errors.basis}
                                   </small>
                               </form>
                               <form
                                   onSubmit={submitJarkom}
                                   className="flex flex-col gap-2 w-full"
                               >
                                   <h3 className="text-xl text-black font-semibold uppercase">
                                       Jaringan Komputer dan Komunikasi
                                   </h3>
                                   <label
                                       htmlFor="alprog"
                                       className="text-gray-600 text-sm"
                                   >
                                       Kumpulkan Link Google Drive kamu di sini
                                   </label>
                                   <div className="space-y-4 md:space-x-4">
                                       <input
                                           type="text"
                                           name="jarkom"
                                           id="jarkom"
                                           value={data.jarkom}
                                           onChange={(e) =>
                                               setData("jarkom", e.target.value)
                                           }
                                           className={`bg-white w-full md:w-7/12 border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${
                                               errors.jarkom
                                                   ? "border-red-500 focus:ring-red-500"
                                                   : "border-[#CCCC] focus:border-primary"
                                           }`}
                                       />
                                       <button
                                           disabled={checkInput("jarkom")}
                                           type="submit"
                                           className="py-4 px-4 bg-gradient-to-r from-[#201349] to-[#513E99] hover:bg-secondary font-bold text-white rounded-2xl transition-all duration-300 text-center disabled:bg-red-500/80"
                                       >
                                           <img
                                               src="/asset/images/edit_square.png"
                                               alt=""
                                               className="w-[15px] mx-auto"
                                           />
                                       </button>
                                   </div>
                                   <small className="text-red-500">
                                       {errors.jarkom}
                                   </small>
                               </form>
                               {isLeader && (
                                   <form
                                       onSubmit={submitProposal}
                                       className="flex flex-col gap-2 w-full font-montserrat"
                                   >
                                       <h3 className="text-xl text-black font-semibold uppercase">
                                           Pengumpulan Proposal GEMASTIK
                                       </h3>
                                       <label
                                           htmlFor="alprog"
                                           className="text-gray-600 text-sm"
                                       >
                                           Kumpulkan Link Google Drive tim kamu
                                           di sini (hanya ketua tim yang dapat
                                           mengirim)
                                       </label>
                                       <div className="space-y-4 md:space-x-4 font-montserrat">
                                           <input
                                               type="text"
                                               name="submission_link"
                                               id="submission_link"
                                               value={data.submission_link}
                                               onChange={(e) =>
                                                   setData(
                                                       "submission_link",
                                                       e.target.value
                                                   )
                                               }
                                               className={`bg-white w-full md:w-7/12 border-2 rounded-lg focus:outline-none focus:ring-1  text-primary p-2 ${
                                                   errors.submission_link
                                                       ? "border-red-500 focus:ring-red-500"
                                                       : "border-[#CCCC] focus:border-primary"
                                               }`}
                                           />
                                           <button
                                               disabled={checkInput(
                                                   "submission_link"
                                               )}
                                               type="submit"
                                               className="py-4 px-4 bg-gradient-to-r from-[#201349] to-[#513E99] hover:bg-secondary font-bold text-white rounded-2xl transition-all duration-300 text-center disabled:bg-red-500/80"
                                           >
                                               <img
                                                   src="/asset/images/edit_square.png"
                                                   alt=""
                                                   className="w-[15px] mx-auto"
                                               />
                                           </button>
                                       </div>
                                       <small className="text-red-500">
                                           {errors.submission_link}
                                       </small>
                                   </form>
                               )}
                           </div>
                       </div>
                   )}
               </>
           )}
       </AdminAuthentication>
   );
}