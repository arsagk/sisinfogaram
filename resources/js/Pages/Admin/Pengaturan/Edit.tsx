import Input from "@/Components/Shared/Input";
import LinkButton from "@/Components/Shared/LinkButton";
import { LoadingButton } from "@/Components/Shared/LoadingButton";
import MoneyInput from "@/Components/Shared/MoneyInput";
import SelectSearch from "@/Components/Shared/SelectSearch";
import AdminLayout from "@/Layouts/AdminLayout";
import { Pengaturan, OptionSelect } from "@/types";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import React, { BaseSyntheticEvent, useRef } from "react";

const Edit = () => {
    type FormValues = {
        nama_perusahaan: string;
        alamat_perusahaan: string;
        telp_perusahaan: string;
        email_perusahaan: string;
        kode_pos: string;
        map_url: string;
        image_kop: string;
        ximage_kop: string;
        _method: string;
    };

    const { pengaturan, base_route } = usePage<{
        pengaturan: Pengaturan;
        base_route: string;
    }>().props;

    const { data, setData, errors, post, processing, progress } =
        useForm<FormValues>({
            nama_perusahaan: pengaturan.nama_perusahaan || "",
            alamat_perusahaan: pengaturan.alamat_perusahaan || "",
            telp_perusahaan: pengaturan.telp_perusahaan || "",
            email_perusahaan: pengaturan.email_perusahaan || "",
            kode_pos: pengaturan.kode_pos || "",
            map_url: pengaturan.map_url || "",
            image_kop: "",
            ximage_kop: pengaturan.image_kop || "",
            _method: "PUT",
        });

    function handleSubmit(e: any) {
        e.preventDefault();
        post(route(base_route + "pengaturans.update", pengaturan.id));
    }

    // function restore() {
    //     if (confirm('Are you sure you want to restore this user?')) {
    //         router.put(route('pengaturans.restore', user.id));
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
                                    Pengaturan Sistem
                                </h6>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleSubmit}>
                                <Input
                                    ref={firstInput}
                                    focused
                                    name="nama_perusahaan"
                                    label="Nama Perusahaan"
                                    errors={errors.nama_perusahaan}
                                    value={data.nama_perusahaan}
                                    onChange={(e) =>
                                        setData(
                                            "nama_perusahaan",
                                            e.target.value
                                        )
                                    }
                                />
                                <Input
                                    name="alamat_perusahaan"
                                    label="Alamat Perusahaan"
                                    errors={errors.alamat_perusahaan}
                                    value={data.alamat_perusahaan}
                                    onChange={(e) =>
                                        setData(
                                            "alamat_perusahaan",
                                            e.target.value
                                        )
                                    }
                                />
                                <Input
                                    name="telp_perusahaan"
                                    label="Telp"
                                    errors={errors.telp_perusahaan}
                                    value={data.telp_perusahaan}
                                    onChange={(e) =>
                                        setData(
                                            "telp_perusahaan",
                                            e.target.value
                                        )
                                    }
                                />
                                <Input
                                    name="email_perusahaan"
                                    label="Email"
                                    errors={errors.email_perusahaan}
                                    value={data.email_perusahaan}
                                    onChange={(e) =>
                                        setData(
                                            "email_perusahaan",
                                            e.target.value
                                        )
                                    }
                                />
                                <Input
                                    name="kode_pos"
                                    label="Kode Pos"
                                    errors={errors.kode_pos}
                                    value={data.kode_pos}
                                    onChange={(e) =>
                                        setData("kode_pos", e.target.value)
                                    }
                                />
                                <Input
                                    name="map_url"
                                    label="Google Map"
                                    errors={errors.map_url}
                                    value={data.map_url}
                                    onChange={(e) =>
                                        setData("map_url", e.target.value)
                                    }
                                />
                                <Input
                                    type="file"
                                    name="image_kop"
                                    label="Logo Perusahaan"
                                    errors={errors.image_kop}
                                    onChange={(e: BaseSyntheticEvent) =>
                                        setData("image_kop", e.target.files[0])
                                    }
                                />
                                {progress && (
                                    <progress
                                        value={progress.percentage}
                                        max="100"
                                    >
                                        {progress.percentage}%
                                    </progress>
                                )}
                                {data.ximage_kop ? (
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-6/12 sm:w-4/12 px-4">
                                            <img
                                                src={
                                                    "/storage/" +
                                                    data.ximage_kop
                                                }
                                                alt="..."
                                                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                                            />
                                        </div>
                                    </div>
                                ) : null}
                                <div className="flex items-center justify-between">
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
