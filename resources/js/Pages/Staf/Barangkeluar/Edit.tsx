import Input from "@/Components/Shared/Input";
import LinkButton from "@/Components/Shared/LinkButton";
import { LoadingButton } from "@/Components/Shared/LoadingButton";
import MoneyInput from "@/Components/Shared/MoneyInput";
import NumberInput from "@/Components/Shared/NumberInput";
import SelectSearch from "@/Components/Shared/SelectSearch";
import StafLayout from "@/Layouts/StafLayout";
import { Barangkeluar, OptionSelect, Penjualan } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import React, { useRef } from "react";

type OptionSelectExt = {
    penjualan: Penjualan;
} & OptionSelect;
const Edit = () => {
    type FormValues = {
        penjualan_id: string;
        no_daftar: string;
        jumlah_keluar: string;
        jumlah_muatan: string;
        no_pol: string;
        sopirOpt: OptionSelect | undefined;
        sopir_id: string;
        penjualanOpt: OptionSelectExt | undefined;
        _method: string;
    };

    const {
        barangkeluar,
        penjualanOpts,
        sopirOpt,
        sopirOpts,
        penjualanOpt,
        base_route,
    } = usePage<{
        penjualanOpts: OptionSelectExt[];
        penjualanOpt: OptionSelectExt;
        base_route: string;
        barangkeluar: Barangkeluar;
        sopirOpts: OptionSelect[];
        sopirOpt: OptionSelect;
    }>().props;

    const { data, setData, errors, post, processing } = useForm<FormValues>({
        penjualan_id: barangkeluar.penjualan_id || "",
        no_daftar: barangkeluar.no_daftar || "",
        jumlah_keluar: barangkeluar.jumlah_keluar || "",
        jumlah_muatan: barangkeluar.jumlah_muatan || "",
        no_pol: barangkeluar.no_pol || "",
        penjualanOpt: penjualanOpt || undefined,
        sopirOpt: sopirOpt,
        sopir_id: barangkeluar.sopir_id || "",
        _method: "PUT",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route(base_route + "barangkeluars.update", barangkeluar.id));
    }

    // function restore() {
    //     if (confirm('Are you sure you want to restore this user?')) {
    //         router.put(route('users.restore', user.id));
    //     }
    // }

    const firstInput = useRef<any>(null);
    return (
        <StafLayout>
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-2/3 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                                <h6 className="text-blueGray-500 text-lg font-bold">
                                    Edit Barang Keluar
                                </h6>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleSubmit}>
                                <Input
                                    ref={firstInput}
                                    focused
                                    name="no_pol"
                                    label="NoPol"
                                    errors={errors.no_pol}
                                    value={data.no_pol}
                                    onChange={(e) =>
                                        setData("no_pol", e.target.value)
                                    }
                                />
                                <SelectSearch
                                    name="sopir_id"
                                    options={sopirOpts}
                                    onChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            sopirOpt: e ? e : undefined,
                                            sopir_id: e ? e.value : "",
                                        }))
                                    }
                                    label="Sopir"
                                    value={data.sopirOpt}
                                    errors={errors.sopir_id}
                                />

                                <SelectSearch
                                    name="client_id"
                                    options={penjualanOpts}
                                    onChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            penjualanOpt: e ? e : undefined,
                                            penjualan_id: e ? e.value : "",
                                        }))
                                    }
                                    label="Penjualan"
                                    value={data.penjualanOpt}
                                    errors={errors.penjualan_id}
                                />
                                <Input
                                    disabled
                                    name="client_id"
                                    label="Supplier"
                                    autoComplete="off"
                                    value={
                                        penjualanOpt.penjualan.client
                                            .nama_client
                                    }
                                />
                                <Input
                                    disabled
                                    name="barang_id"
                                    label="Jenis"
                                    autoComplete="off"
                                    value={
                                        penjualanOpt.penjualan.barang
                                            .nama_barang
                                    }
                                />
                                <Input
                                    disabled
                                    name="jenis_muatan"
                                    label="Jenis Muatan"
                                    autoComplete="off"
                                    value={penjualanOpt.penjualan.jenis_muatan}
                                />
                                <NumberInput
                                    name="jumlah_muatan"
                                    label="Jumlah Muatan"
                                    errors={errors.jumlah_muatan}
                                    autoComplete="off"
                                    value={data.jumlah_muatan}
                                    onValueChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            jumlah_muatan: e.value,
                                        }))
                                    }
                                />

                                <Input
                                    disabled
                                    name="jumlah_penjualan"
                                    label="Jumlah Penjualan"
                                    autoComplete="off"
                                    value={
                                        penjualanOpt.penjualan.jumlah_penjualan
                                    }
                                />
                                <NumberInput
                                    name="jumlah_penjualan"
                                    label="Jumlah Terima (Kg)"
                                    errors={errors.jumlah_keluar}
                                    autoComplete="off"
                                    value={data.jumlah_keluar}
                                    onValueChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            jumlah_keluar: e.value,
                                        }))
                                    }
                                />

                                <div className="flex items-center justify-between">
                                    <LinkButton
                                        theme="blueGrey"
                                        href={route(
                                            base_route + "barangkeluars.index"
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
        </StafLayout>
    );
};

export default Edit;
