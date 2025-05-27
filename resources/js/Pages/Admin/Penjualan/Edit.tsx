import Input from "@/Components/Shared/Input";
import LinkButton from "@/Components/Shared/LinkButton";
import { LoadingButton } from "@/Components/Shared/LoadingButton";
import MoneyInput from "@/Components/Shared/MoneyInput";
import SelectSearch from "@/Components/Shared/SelectSearch";
import AdminLayout from "@/Layouts/AdminLayout";
import { Barang, OptionSelect, Penjualan } from "@/types";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useRef } from "react";

const Edit = () => {
    type FormValues = {
        client_id: string;
        barang_id: string;
        kode_penjualan: string;
        harga_perkg: string;
        ongkos_perkg: string;
        jumlah_penjualan: string;
        jenismuatanOpt: OptionSelect | undefined;
        barangOpt: OptionSelect | undefined;
        clientOpt: OptionSelect | undefined;
        jenis_muatan: string;
        lunas: boolean;
        _method: string;
    };

    const {
        penjualan,
        jenismuatanOpts,
        jenismuatanOpt,
        clientOpts,
        barangOpts,
        clientOpt,
        barangOpt,
        base_route,
    } = usePage<{
        penjualan: Penjualan;
        jenismuatanOpts: OptionSelect[];
        jenismuatanOpt: OptionSelect;
        clientOpts: OptionSelect[];
        clientOpt: OptionSelect;
        barangOpts: OptionSelect[];
        barangOpt: OptionSelect;
        base_route: string;
    }>().props;

    const { data, setData, errors, post, processing } = useForm<FormValues>({
        client_id: penjualan.client_id || "",
        barang_id: penjualan.barang_id || "",
        kode_penjualan: penjualan.kode_penjualan || "",
        harga_perkg: penjualan.harga_perkg || "0",
        ongkos_perkg: penjualan.ongkos_perkg || "0",
        jumlah_penjualan: penjualan.jumlah_penjualan || "0",
        barangOpt: barangOpt,
        clientOpt: clientOpt,
        jenismuatanOpt: jenismuatanOpt,
        jenis_muatan: penjualan.jenis_muatan || jenismuatanOpt.value,
        lunas: penjualan.lunas || true,
        _method: "PUT",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route(base_route + "penjualans.update", penjualan.id));
    }

    // function restore() {
    //     if (confirm('Are you sure you want to restore this user?')) {
    //         router.put(route('penjualans.restore', user.id));
    //     }
    // }

    const firstInput = useRef<any>(null);

    return (
        <AdminLayout>
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-2/3 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                                <h6 className="text-blueGray-500 text-lg font-bold">
                                    Edit Penjualan
                                </h6>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleSubmit}>
                                <SelectSearch
                                    name="client_id"
                                    options={clientOpts}
                                    onChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            clientOpt: e ? e : undefined,
                                            client_id: e ? e.value : "",
                                        }))
                                    }
                                    label="Pembeli"
                                    value={data.clientOpt}
                                    errors={errors.client_id}
                                />
                                <SelectSearch
                                    name="barang_id"
                                    options={barangOpts}
                                    onChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            barangOpt: e ? e : undefined,
                                            barang_id: e ? e.value : "",
                                        }))
                                    }
                                    label="Jenis"
                                    value={data.barangOpt}
                                    errors={errors.barang_id}
                                />

                                <MoneyInput
                                    name="jumlah_penjualan"
                                    label="Jumlah (Kg)"
                                    errors={errors.jumlah_penjualan}
                                    autoComplete="off"
                                    value={data.jumlah_penjualan}
                                    onValueChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            jumlah_penjualan: e.value,
                                        }))
                                    }
                                />
                                <MoneyInput
                                    name="harga_perkg"
                                    label="Harga/Kg"
                                    errors={errors.harga_perkg}
                                    autoComplete="off"
                                    value={data.harga_perkg}
                                    onValueChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            harga_perkg: e.value,
                                        }))
                                    }
                                />
                                <MoneyInput
                                    name="ongkos_perkg"
                                    label="Ongkos/Kg"
                                    errors={errors.ongkos_perkg}
                                    autoComplete="off"
                                    value={data.ongkos_perkg}
                                    onValueChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            ongkos_perkg: e.value,
                                        }))
                                    }
                                />

                                <SelectSearch
                                    name="jenis_muatan"
                                    options={jenismuatanOpts}
                                    onChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            jenismuatanOpt: e ? e : undefined,
                                            jenis_muatan: e ? e.value : "",
                                        }))
                                    }
                                    label="Satuan"
                                    value={data.jenismuatanOpt}
                                    errors={errors.jenis_muatan}
                                />
                                {/* <div className="mb-4">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            id="customCheckLogin"
                                            type="checkbox"
                                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            checked={data.lunas}
                                            onChange={(e) =>
                                                setData(
                                                    "lunas",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                            Active
                                        </span>
                                    </label>
                                </div> */}
                                <div className="flex items-center justify-between">
                                    <LinkButton
                                        theme="blueGrey"
                                        href={route(
                                            base_route + "penjualans.index"
                                        )}
                                    >
                                        <span>Kembali</span>
                                    </LinkButton>
                                    <LoadingButton
                                        theme="black"
                                        loading={processing}
                                        type="submit"
                                    >
                                        <span>Simpan</span>
                                    </LoadingButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Edit;
