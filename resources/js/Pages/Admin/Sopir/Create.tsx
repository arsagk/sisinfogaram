import Input from "@/Components/Shared/Input";
import LinkButton from "@/Components/Shared/LinkButton";
import { LoadingButton } from "@/Components/Shared/LoadingButton";
import SelectSearch from "@/Components/Shared/SelectSearch";
import AdminLayout from "@/Layouts/AdminLayout";
import { OptionSelect } from "@/types";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import React, { useRef } from "react";

const Create = () => {
    type FormValues = {
        nama_sopir: string;
        alamat_sopir: string;
        no_telp: string;
        _method: string;
    };

    const { tipesopirOpts, tipesopirOpt, base_route } = usePage<{
        tipesopirOpts: OptionSelect[];
        tipesopirOpt: OptionSelect;
        base_route: string;
    }>().props;

    const { data, setData, errors, post, processing } = useForm<FormValues>({
        nama_sopir: "",
        alamat_sopir: "",
        no_telp: "",
        _method: "POST",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route(base_route + "sopirs.store"));
    }

    // function restore() {
    //     if (confirm('Are you sure you want to restore this user?')) {
    //         router.put(route('users.restore', user.id));
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
                                    New Sopir
                                </h6>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleSubmit}>
                                <Input
                                    ref={firstInput}
                                    focused
                                    name="nama_sopir"
                                    label="Nama Sopir"
                                    errors={errors.nama_sopir}
                                    value={data.nama_sopir}
                                    onChange={(e) =>
                                        setData("nama_sopir", e.target.value)
                                    }
                                />
                                <Input
                                    name="no_telp"
                                    label="No Telp"
                                    errors={errors.no_telp}
                                    value={data.no_telp}
                                    type="text"
                                    onChange={(e) =>
                                        setData("no_telp", e.target.value)
                                    }
                                />
                                <Input
                                    name="alamat_sopir"
                                    label="Alamat"
                                    errors={errors.alamat_sopir}
                                    value={data.alamat_sopir}
                                    type="text"
                                    onChange={(e) =>
                                        setData("alamat_sopir", e.target.value)
                                    }
                                />

                                <div className="flex items-center justify-between">
                                    <LinkButton
                                        theme="blueGrey"
                                        href={route(
                                            base_route + "sopirs.index"
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

export default Create;
