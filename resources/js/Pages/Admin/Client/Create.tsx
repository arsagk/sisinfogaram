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
        nama_client: string;
        alamat_client: string;
        no_telp: string;
        tipeclientOpt: OptionSelect | undefined;
        tipe_client: string;
        active: boolean;
        _method: string;
    };

    const { tipeclientOpts, tipeclientOpt, base_route } = usePage<{
        tipeclientOpts: OptionSelect[];
        tipeclientOpt: OptionSelect;
        base_route: string;
    }>().props;

    const { data, setData, errors, post, processing } = useForm<FormValues>({
        nama_client: "",
        alamat_client: "",
        no_telp: "",
        tipeclientOpt: tipeclientOpt,
        tipe_client: tipeclientOpt.value,
        active: true,
        _method: "POST",
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route(base_route + "clients.store"));
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
                                    New Client
                                </h6>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleSubmit}>
                                <Input
                                    ref={firstInput}
                                    focused
                                    name="nama_client"
                                    label="Nama Client"
                                    errors={errors.nama_client}
                                    value={data.nama_client}
                                    onChange={(e) =>
                                        setData("nama_client", e.target.value)
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
                                    name="alamat_client"
                                    label="Alamat"
                                    errors={errors.alamat_client}
                                    value={data.alamat_client}
                                    type="text"
                                    onChange={(e) =>
                                        setData("alamat_client", e.target.value)
                                    }
                                />
                                <SelectSearch
                                    name="tipe_client"
                                    options={tipeclientOpts}
                                    onChange={(e) =>
                                        setData((prev) => ({
                                            ...prev,
                                            tipeclientOpt: e ? e : undefined,
                                            tipe_client: e ? e.value : "",
                                        }))
                                    }
                                    label="Tipe Client"
                                    value={data.tipeclientOpt}
                                    errors={errors.tipe_client}
                                />
                                <div className="mb-4">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            id="customCheckLogin"
                                            type="checkbox"
                                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            checked={data.active}
                                            onChange={(e) =>
                                                setData(
                                                    "active",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                            Active
                                        </span>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <LinkButton
                                        theme="blueGrey"
                                        href={route(
                                            base_route + "clients.index"
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
