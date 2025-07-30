import React, { useState, useRef } from "react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { Head, usePage } from "@inertiajs/react";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function Teams() {
    const { user, teams } = usePage().props;
    const [dataTeams, setDataTeams] = useState(teams);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const dt = useRef(null);
    const toast = useRef(null);

    const rowNumberTemplate = (rowData, column) => column.rowIndex + 1;

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const exportExcel = () => {
        import("xlsx").then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(dataTeams);
            const workbook = {
                Sheets: { data: worksheet },
                SheetNames: ["data"],
            };
            const excelBuffer = xlsx.write(workbook, {
                bookType: "xlsx",
                type: "array",
            });
            saveAsExcelFile(excelBuffer, "Daftar_Tim_Build_IT_2025");
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import("file-saver").then((module) => {
            if (module && module.default) {
                const EXCEL_TYPE =
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
                const EXCEL_EXTENSION = ".xlsx";
                const data = new Blob([buffer], { type: EXCEL_TYPE });
                module.default.saveAs(
                    data,
                    fileName +
                        "_export_" +
                        new Date().toLocaleDateString() +
                        EXCEL_EXTENSION
                );
            }
        });
    };

    const header = (
        <div className="flex justify-between mb-4">
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText
                    onInput={(e) =>
                        setFilters({
                            global: {
                                value: e.target.value,
                                matchMode: FilterMatchMode.CONTAINS,
                            },
                        })
                    }
                    placeholder="Cari Tim..."
                />
            </IconField>
            <div className="flex gap-2">
                <Button
                    type="button"
                    icon="pi pi-file"
                    rounded
                    onClick={() => exportCSV(false)}
                    tooltip="CSV"
                />
                <Button
                    type="button"
                    icon="pi pi-file-excel"
                    rounded
                    severity="success"
                    onClick={exportExcel}
                    tooltip="Excel"
                />
            </div>
        </div>
    );

    return (
        <AdminAuthentication user={user} headerTitle="Daftar Tim Peserta">
            <Head title="Teams" />
            <Toast ref={toast} />

            <div className="card p-6 bg-white shadow border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Daftar Tim</h2>
                    <span className="text-sm text-gray-500">
                        {teams.length} tim
                    </span>
                </div>

                <DataTable
                    ref={dt}
                    value={dataTeams}
                    header={header}
                    filters={filters}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[10, 25, 50]}
                    emptyMessage="Tidak ada tim ditemukan."
                    dataKey="id"
                    className="font-montserrat"
                    showGridlines
                    tableStyle={{ minWidth: "50rem" }}
                >
                    <Column
                        header="#"
                        body={rowNumberTemplate}
                        style={{ width: "50px" }}
                    />
                    <Column
                        field="name"
                        header="Nama Tim"
                        sortable
                        style={{ minWidth: "12rem" }}
                    />
                    <Column
                        header="Ketua Tim"
                        body={(rowData) => rowData.leader?.name || "-"}
                        style={{ minWidth: "12rem" }}
                    />
                    <Column
                        header="ID Line Ketua"
                        body={(rowData) => rowData.leader?.line_id || "-"}
                        style={{ minWidth: "12rem" }}
                    />
                    <Column
                        field="submission_link"
                        header="Proposal"
                        body={(rowData) =>
                            rowData.submission_link ? (
                                <a
                                    href={rowData.submission_link}
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Lihat
                                </a>
                            ) : (
                                "-"
                            )
                        }
                        style={{ minWidth: "12rem" }}
                    />
                </DataTable>
            </div>
        </AdminAuthentication>
    );
}
