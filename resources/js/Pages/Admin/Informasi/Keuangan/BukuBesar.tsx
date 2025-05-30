import SelectSearch from '@/Components/Shared/SelectSearch'
import AdminLayout from '@/Layouts/AdminLayout'
import { Link, router } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { OptionSelect } from '@/types';
import { usePrevious } from 'react-use';
import { pickBy } from 'lodash';
import ModalCetakLaporan from '@/Components/Modals/ModalCetakLaporan';

interface Bukubesar {
    nourut: string,
    tanggal: string,
    nama_akun: string,
    uraian: string,
    debet: string,
    kredit: string,
    saldo: string,
}
type Props = {
    bukubesars: {
        data: Bukubesar[] | undefined,
        next_page_url: string,
        prev_page_url: string,
    },
    akunopts: OptionSelect[] | [],
    periodOpts: OptionSelect[] | [],
    period: string,
    akun_id: string,
    media: string,
}

const BukuBesar = ({ bukubesars: { data, next_page_url, prev_page_url }, akunopts, periodOpts, akun_id, period, media }: Props) => {
    const [values, setValues] = useState({ akun_id: akun_id, period: period, media });
    const prevValues = usePrevious(values);
    const cakun = akunopts.find((e) => e.value == values.akun_id);
    const cperiod = periodOpts.find((e) => e.value == values.period);
    const [akun, setAkun] = useState<OptionSelect | null>(cakun ? cakun : null);
    const [periode, setPeriode] = useState<OptionSelect | null>(cperiod ? cperiod : null);
    const [showModalLaporan, setShowModalLaporan] = useState<boolean>(false)
    const [url, setUrl] = useState<any>()
    useEffect(() => {
        if (prevValues) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : {};

            router.get(route(route().current() ? route().current() + '' : ''), query, {
                replace: true,
                preserveState: true
            });
        }
    }, [values]);

    const handlePrint = () => {
        const params = new URLSearchParams(window.location.search);
        const page = params.get('page') ? params.get('page') : 1;
        const akun_id = params.get('akun_id') ? params.get('akun_id') : '';
        const period = params.get('period') ? params.get('period') : 'this_year';
        setUrl(route(route().current() + '') + `?akun_id=${akun_id}&period=${period}&page=${page}&media=print`)
        setShowModalLaporan(true)
    }

    return (
        <AdminLayout>
            <div className="flex content-center items-center justify-center relative -top-2">
                <div className="w-full px-2">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg shadow-slate-400 rounded-lg bg-white border-0">
                        <div className="rounded-t mb-2 px-4 pt-4 ">
                            <div className='w-full flex  justify-between bg-lightBlue-800 text-lightBlue-100 px-2 py-2 shadow-md rounded-lg'>
                                <div className="text-left">
                                    <h1 className="font-semibold">
                                        BUKU BESAR
                                    </h1>
                                </div>
                                <div className='w-1/3 text-blueGray-800 flex flex-col md:flex-row justify-between items-center gap-2'>
                                    <SelectSearch name='akun' value={akun} options={akunopts} placeholder="Pilih Akun"
                                        onChange={(e: any) => {
                                            setValues((prev) => ({ ...prev, akun_id: e.value }))
                                            setAkun(e ? e : {})
                                        }
                                        } />
                                    <SelectSearch name='period' value={periode} options={periodOpts} placeholder="Periode"
                                        onChange={(e: any) => {
                                            setValues((prev) => ({ ...prev, period: e.value }))
                                            setPeriode(e ? e : {})
                                        }
                                        } />
                                    <button
                                        onClick={(e) => {
                                            handlePrint();
                                        }}
                                        className="text-lightBlue-300 background-transparent font-bold uppercase px-3 py-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                        <i className="fas fa-print"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto px-2 lg:px-4 py-6 pt-0 ">
                            {data ?
                                <div className='p-1 w-full flex-col text-sm'>
                                    <table className='w-full'>
                                        <thead>
                                            <tr className='border-y-2 font-semibold bg-slate-300'>
                                                <td width="4%">No.</td>
                                                <td width="10%">Tanggal</td>
                                                <td width="15%">Nama Akun</td>
                                                <td width="35%">Uraian</td>
                                                <td width="10%" align='right'>Debet</td>
                                                <td width="10%" align='right'>Kredit</td>
                                                <td width="10%" align='right'>Saldo</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((bukubesar, i) => (
                                                <tr key={i} className='border-b-2'>
                                                    <td>{bukubesar.nourut}</td>
                                                    <td>{bukubesar.tanggal}</td>
                                                    <td>{bukubesar.nama_akun}</td>
                                                    <td>{bukubesar.uraian}</td>
                                                    <td align='right'>{bukubesar.debet}</td>
                                                    <td align='right'>{bukubesar.kredit}</td>
                                                    <td align='right'>{bukubesar.saldo}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className='w-full mt-4 flex justify-end items-start'>
                                        <div className='w-36 grid grid-cols-2 gap-2 '>
                                            <Link href={prev_page_url} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-2 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="Link">
                                                <i className="fa fa-chevron-left" aria-hidden="true"></i> Prev
                                            </Link>
                                            <Link href={next_page_url} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-2 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="Link">
                                                <i className="fa fa-chevron-right" aria-hidden="true"></i> Next
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                : null}
                        </div>
                    </div>
                </div>
            </div>
            <ModalCetakLaporan showModal={showModalLaporan} setShowModal={setShowModalLaporan} src={url} />
        </AdminLayout>
    )
}

export default BukuBesar
