import Input from "@/Components/Shared/Input";
import LinkButton from "@/Components/Shared/LinkButton";
import { LoadingButton } from "@/Components/Shared/LoadingButton";
import MoneyInput from "@/Components/Shared/MoneyInput";
import SelectSearch from "@/Components/Shared/SelectSearch";
import AdminLayout from "@/Layouts/AdminLayout";
import { Barang, OptionSelect } from "@/types";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useRef } from "react";

const Edit = () => {
    type FormValues = {
        nama_barang: string;
        harga_beli: string;
        harga_jual: string;
        kode_barang: string;
        satuanOpt: OptionSelect | undefined;
        satuan: string;
        stok_barang: string;
        _method: string;
    };

    const { satuanOpts, satuanOpt, base_route, barang } = usePage<{
        barang: Barang;
        satuanOpts: OptionSelect[];
        satuanOpt: OptionSelect;
        base_route: string;
    }>().props;

    const { data, setData, errors, post, processing } = useForm<FormValues>({
        nama_barang: barang.nama_barang || "",
        harga_beli: barang.harga_beli || "0",
        harga_jual: barang.harga_jual || "0",
        stok_barang: barang.stok_barang || "0",
        kode_barang: barang.kode_barang || "",
        satuanOpt: satuanOpt,
        satuan: barang.satuan || satuanOpt.value,
        _method: "PUT",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route(base_route + "barangs.update", barang.id));
    }

    // function restore() {
    //     if (confirm('Are you sure you want to restore this user?')) {
    //         router.put(route('barangs.restore', user.id));
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
                                    Edit Barang
                                </h6>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleSubmit}>
                                <Input
                                    ref={firstInput}
                                    focused
                                    name="nama_barang"
                                    label="Nama Barang"
                                    errors={errors.nama_barang}
                                    value={data.nama_barang}
                                    onChange={(e) =>
                                        setData("nama_barang", e.target.value)
                                    }
                                />
                                <Input
                                    name="kode_barang"
                                    label="Kode Barang"
                                    errors={errors.kode_barang}
                                    value={data.kode_barang}
                                    onChange={(e) =>
                                        setData("kode_barang", e.target.value)
                                    }
                                />
                                <SelectSearch
                                    name="satuan"
                                    options={satuanOpts}
                                    onChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            satuanOpt: e ? e : undefined,
                                            satuan: e ? e.value : "",
                                        }))
                                    }
                                    label="Satuan"
                                    value={data.satuanOpt}
                                    errors={errors.satuan}
                                />
                                <MoneyInput
                                    name="harga_beli"
                                    label="Harga Beli/Kg"
                                    errors={errors.harga_beli}
                                    autoComplete="off"
                                    value={data.harga_beli}
                                    onValueChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            harga_beli: e.value,
                                        }))
                                    }
                                />
                                <MoneyInput
                                    name="harga_jual"
                                    label="Harga Jual/Kg"
                                    errors={errors.harga_jual}
                                    autoComplete="off"
                                    value={data.harga_jual}
                                    onValueChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            harga_jual: e.value,
                                        }))
                                    }
                                />

                                <div className="flex items-center justify-between">
                                    <LinkButton
                                        theme="blueGrey"
                                        href={route(
                                            base_route + "barangs.index"
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
