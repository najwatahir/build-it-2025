import React, { useRef, useState } from "react";
import AdminAuthentication from "@/Components/Layouts/AdminAuthentication";
import { Head, usePage } from "@inertiajs/react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button } from "primereact/button";
import { FilterMatchMode } from "primereact/api";

export default function Twibbons() {
    const { user, twibbons } = usePage().props;

    const dt = useRef(null);
    const toast = useRef(null);

    const [dataTwibbons, setDataTwibbons] = useState(twibbons);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const rowNumberTemplate = (rowData, column) => column.rowIndex + 1;

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const exportExcel = () => {
        import("xlsx").then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(dataTwibbons);
            const workbook = {
                Sheets: { data: worksheet },
                SheetNames: ["data"],
            };
            const excelBuffer = xlsx.write(workbook, {
                bookType: "xlsx",
                type: "array",
            });
            saveAsExcelFile(excelBuffer, "Twibbon_Peserta_Build_IT_2025");
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
                    placeholder="Cari peserta..."
                />
            </IconField>
            <div className="flex gap-2">
                <Button
                    type="button"
                    icon="pi pi-file"
                    rounded
                    onClick={() => exportCSV(false)}
                    tooltip="Export CSV"
                />
                <Button
                    type="button"
                    icon="pi pi-file-excel"
                    rounded
                    severity="success"
                    onClick={exportExcel}
                    tooltip="Export Excel"
                />
            </div>
        </div>
    );

    return (
        <AdminAuthentication user={user} headerTitle="Daftar Twibbon Peserta">
            <Head title="Twibbons" />
            <Toast ref={toast} />

            <div className="card p-6 bg-white shadow border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Daftar Twibbon</h2>
                    <span className="text-sm text-gray-500">
                        {twibbons.length} peserta
                    </span>
                </div>

                <DataTable
                    ref={dt}
                    value={dataTwibbons}
                    header={header}
                    filters={filters}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[10, 25, 50]}
                    emptyMessage="Tidak ada data twibbon ditemukan."
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
                        field="nim"
                        header="NIM"
                        sortable
                        style={{ minWidth: "10rem" }}
                    />
                    <Column
                        field="name"
                        header="Nama"
                        sortable
                        style={{ minWidth: "12rem" }}
                    />
                    <Column
                        field="twibbon"
                        header="Link Twibbon"
                        body={(rowData) =>
                            rowData.twibbon ? (
                                <a
                                    href={rowData.twibbon}
                                    className="text-blue-600 hover:underline break-words"
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
