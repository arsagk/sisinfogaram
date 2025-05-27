import SelectSearch from "@/Components/Shared/SelectSearch";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Barang, OptionSelect } from "@/types";
import { usePrevious } from "react-use";
import { pickBy } from "lodash";
import ModalCetakLaporan from "@/Components/Modals/ModalCetakLaporan";
import StafLayout from "@/Layouts/StafLayout";

interface Bukubesar {
    nourut: string;
    tanggal: string;
    nama_akun: string;
    uraian: string;
    debet: string;
    kredit: string;
    saldo: string;
}
type Props = {
    barangs: {
        data: Barang[] | undefined;
        next_page_url: string;
        prev_page_url: string;
    };
    media: string;
};

const LapBarang = ({
    barangs: { data, next_page_url, prev_page_url },
    media,
}: Props) => {
    const [values, setValues] = useState({
        media,
    });
    const prevValues = usePrevious(values);
    const [showModalLaporan, setShowModalLaporan] = useState<boolean>(false);
    const [url, setUrl] = useState<any>();
    useEffect(() => {
        if (prevValues) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : {};

            router.get(
                route(route().current() ? route().current() + "" : ""),
                query,
                {
                    replace: true,
                    preserveState: true,
                }
            );
        }
    }, [values]);

    const handlePrint = () => {
        const params = new URLSearchParams(window.location.search);
        const page = params.get("page") ? params.get("page") : 1;
        setUrl(route(route().current() + "") + `?page=${page}&media=print`);
        setShowModalLaporan(true);
    };

    return (
        <StafLayout>
            <div className="flex content-center items-center justify-center relative -top-2">
                <div className="w-full px-2">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg shadow-slate-400 rounded-lg bg-white border-0">
                        <div className="rounded-t mb-2 px-4 pt-4 ">
                            <div className="w-full flex  justify-between bg-lightBlue-800 text-lightBlue-100 px-2 py-2 shadow-md rounded-lg">
                                <div className="text-left">
                                    <h1 className="font-semibold">
                                        DATA BARANG
                                    </h1>
                                </div>
                                <div className="w-1/3 text-blueGray-800 flex flex-col md:flex-row justify-end items-center gap-2">
                                    <button
                                        onClick={(e) => {
                                            handlePrint();
                                        }}
                                        className="text-lightBlue-300 background-transparent font-bold px-3 py-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        <i className="fas fa-print"></i>
                                        <span> Cetak</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto px-2 lg:px-4 py-6 pt-0 ">
                            {data ? (
                                <div className="p-1 w-full flex-col text-sm">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-y-2 font-semibold bg-slate-300">
                                                <td width="4%">No.</td>
                                                <td width="10%">Kode</td>
                                                <td width="15%">Nama Barang</td>
                                                <td width="35%">Satuan</td>
                                                <td width="10%" align="right">
                                                    Harga Beli
                                                </td>
                                                <td width="10%" align="right">
                                                    Harga Jual
                                                </td>
                                                <td width="10%" align="right">
                                                    Stok
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((barang, i) => (
                                                <tr
                                                    key={i}
                                                    className="border-b-2"
                                                >
                                                    <td>{i + 1}</td>
                                                    <td>
                                                        {barang.kode_barang}
                                                    </td>
                                                    <td>
                                                        {barang.nama_barang}
                                                    </td>
                                                    <td>{barang.satuan}</td>
                                                    <td align="right">
                                                        {barang.harga_beli}
                                                    </td>
                                                    <td align="right">
                                                        {barang.harga_jual}
                                                    </td>
                                                    <td align="right">
                                                        {barang.stok_barang}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="w-full mt-4 flex justify-end items-start">
                                        <div className="w-36 grid grid-cols-2 gap-2 ">
                                            <Link
                                                href={prev_page_url}
                                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-2 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="Link"
                                            >
                                                <i
                                                    className="fa fa-chevron-left"
                                                    aria-hidden="true"
                                                ></i>{" "}
                                                Prev
                                            </Link>
                                            <Link
                                                href={next_page_url}
                                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-2 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="Link"
                                            >
                                                <i
                                                    className="fa fa-chevron-right"
                                                    aria-hidden="true"
                                                ></i>{" "}
                                                Next
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            <ModalCetakLaporan
                showModal={showModalLaporan}
                setShowModal={setShowModalLaporan}
                src={url}
            />
        </StafLayout>
    );
};

export default LapBarang;
