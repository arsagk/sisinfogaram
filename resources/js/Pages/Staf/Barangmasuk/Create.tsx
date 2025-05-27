import Input from "@/Components/Shared/Input";
import LinkButton from "@/Components/Shared/LinkButton";
import { LoadingButton } from "@/Components/Shared/LoadingButton";
import MoneyInput from "@/Components/Shared/MoneyInput";
import NumberInput from "@/Components/Shared/NumberInput";
import SelectSearch from "@/Components/Shared/SelectSearch";
import StafLayout from "@/Layouts/StafLayout";
import { OptionSelect, Pembelian } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import React, { useRef } from "react";

type OptionSelectExt = {
    pembelian: Pembelian;
} & OptionSelect;
const Create = () => {
    type FormValues = {
        pembelian_id: string;
        no_daftar: string;
        jumlah_terima: string;
        jumlah_muatan: string;
        jumlah_pembelian: string;
        pembelianOpt: OptionSelectExt | undefined;
        no_pol: string;
        _method: string;
    };

    const { pembelianOpts, pembelianOpt, base_route } = usePage<{
        pembelianOpts: OptionSelectExt[];
        pembelianOpt: OptionSelectExt;
        base_route: string;
    }>().props;

    const { data, setData, errors, post, processing } = useForm<FormValues>({
        pembelian_id: "",
        no_daftar: "",
        jumlah_terima: "",
        jumlah_pembelian: "",
        jumlah_muatan: "",
        pembelianOpt: undefined,
        no_pol: "",
        _method: "POST",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route(base_route + "barangmasuks.store"));
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
                                    New Barang Masuk
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
                                    name="pembelian_id"
                                    options={pembelianOpts}
                                    onChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            pembelianOpt: e ? e : undefined,
                                            pembelian_id: e ? e.value : "",
                                            jumlah_pembelian: e
                                                ? e.pembelian.jumlah_pembelian
                                                : "0",
                                        }))
                                    }
                                    label="Data Pembelian"
                                    value={data.pembelianOpt}
                                    errors={errors.pembelian_id}
                                />
                                <Input
                                    disabled
                                    name="client_id"
                                    label="Supplier"
                                    autoComplete="off"
                                    value={
                                        data.pembelianOpt
                                            ? data.pembelianOpt.pembelian.client
                                                  .nama_client
                                            : ""
                                    }
                                />
                                <Input
                                    disabled
                                    name="barang_id"
                                    label="Jenis"
                                    autoComplete="off"
                                    value={
                                        data.pembelianOpt
                                            ? data.pembelianOpt.pembelian.barang
                                                  .nama_barang
                                            : ""
                                    }
                                />
                                <Input
                                    disabled
                                    name="jenis_muatan"
                                    label="Jenis Muatan"
                                    autoComplete="off"
                                    value={
                                        data.pembelianOpt
                                            ? data.pembelianOpt.pembelian
                                                  .jenis_muatan
                                            : ""
                                    }
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
                                    name="jumlah_pembelian"
                                    label="Jumlah Pembelian"
                                    autoComplete="off"
                                    value={
                                        data.pembelianOpt
                                            ? data.pembelianOpt.pembelian
                                                  .jumlah_pembelian
                                            : ""
                                    }
                                />
                                <NumberInput
                                    name="jumlah_pembelian"
                                    label="Jumlah Terima (Kg)"
                                    errors={errors.jumlah_terima}
                                    autoComplete="off"
                                    value={data.jumlah_terima}
                                    onValueChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            jumlah_terima: e.value,
                                        }))
                                    }
                                />

                                <div className="flex items-center justify-between">
                                    <LinkButton
                                        theme="blueGrey"
                                        href={route(
                                            base_route + "barangmasuks.index"
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

export default Create;
