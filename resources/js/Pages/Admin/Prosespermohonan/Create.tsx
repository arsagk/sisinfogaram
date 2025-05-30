// import CardPermohonan from '@/Components/Cards/Admin/CardPermohonan';
import CardTableProsespermohonans from '@/Components/Cards/Admin/CardTableProsespermohonans';
import Button from '@/Components/Shared/Button';
import Input from '@/Components/Shared/Input';
import LinkButton from '@/Components/Shared/LinkButton';
import { LoadingButton } from '@/Components/Shared/LoadingButton';
import PermohonanSelect from '@/Components/Shared/PermohonanSelect';
import SelectSearch from '@/Components/Shared/SelectSearch';
import AdminLayout from '@/Layouts/AdminLayout'
import { Itemprosesperm, OptionSelect, OptionSelectDisabled, Permohonan, Prosespermohonan, Statusprosesperm, Transpermohonan } from '@/types';
import useSwal from '@/utils/useSwal';
import { router, useForm, usePage } from '@inertiajs/react';
import { pickBy, values } from 'lodash';
import React, { CSSProperties, ComponentType, LazyExoticComponent, Suspense, lazy, useEffect, useState } from 'react'
import { usePrevious } from 'react-use';
type LazyComponentType = LazyExoticComponent<ComponentType<any>>;
const CardPermohonan: LazyComponentType = lazy(() => import('@/Components/Cards/Admin/CardPermohonan'));

const Create = () => {
    const { transpermohonan, itemprosesperms, prosespermohonans, statusprosesperms } = usePage<{ transpermohonan: Transpermohonan, itemprosesperms: OptionSelect[], prosespermohonans: Prosespermohonan[], statusprosesperms: OptionSelectDisabled[] }>().props;
    type FormValues = {
        transpermohonan_id: string;
        permohonan: Permohonan | unknown;
        itemprosesperm_id: string;
        itemprosesperm: OptionSelect | undefined;
        catatan_prosesperm: string;
        active: boolean,
        _method: string
    }
    const { data, setData, errors, post, processing, reset } = useForm<FormValues>({
        transpermohonan_id: transpermohonan ? transpermohonan.id : '',
        permohonan: null,
        itemprosesperm_id: '',
        itemprosesperm: undefined,
        catatan_prosesperm: '',
        active: true,
        _method: 'POST'
    });
    const [AddMode, setAddMode] = useState(false)

    function handleSubmit(e: any) {
        e.preventDefault();
        useSwal.confirm({
            title: 'Simpan Data', text: 'akan menyimpan perubahan?'
        }).then((result) => {
            if (result.isConfirmed) {
                post(route('admin.transaksi.prosespermohonans.store'), {
                    onSuccess: () => {
                        reset('itemprosesperm', 'itemprosesperm_id', 'catatan_prosesperm', 'active')
                        setAddMode(false)
                    }
                })
            }
        })
    }

    const setPermohonan = (permohonan: Permohonan) => {
        if (permohonan) {
            setData({ ...data, transpermohonan_id: permohonan.transpermohonan.id, permohonan: permohonan })
            setValues(prev => ({ ...prev, transpermohonan_id: permohonan.transpermohonan.id }))

        }
        // router.get(route('admin.prosespermohonans.create', { transpermohonan_id: permohonan.transpermohonan.id }), {}, { preserveState: true, preserveScroll: true })

    }
    const params = new URLSearchParams(window.location.search);
    const [values, setValues] = useState({ transpermohonan_id: params.get('transpermohonan_id'), itemprosesperm_id: params.get('itemprosesperm_id') });
    const prevValues = usePrevious(values);
    const itemprosesId = itemprosesperms.find(e => e.value === values.itemprosesperm_id)
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    useEffect(() => {
        if (prevValues) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : {};
            router.get(route(route().current() ? route().current() + '' : ''), query, {
                replace: true,
                preserveState: true
            })
        }
    }, [values]);
    return (
        <AdminLayout>
            {AddMode ? (<div className='z-20 absolute h-full w-full left-0'></div>) : null}
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-2/3 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg shadow-slate-400 rounded-lg bg-blueGray-200 border-0">
                        <div className="rounded-t mt-2 px-4">
                            <div className="text-center">
                                <h6 className="text-blueGray-500 text-lg font-bold">
                                    PROSES PERMOHONAN
                                </h6>
                            </div>
                        </div>
                        <div className="flex-auto p-4">
                            <form onSubmit={handleSubmit}>
                                <div className='flex flex-col md:flex-row items-center w-full gap-1'>
                                    <PermohonanSelect className={`w-full ${AddMode ? 'z-10' : ''}`} value={transpermohonan?.permohonan} onValueChange={setPermohonan} errors={errors.transpermohonan_id} />
                                    <SelectSearch className='z-40 mb-0 w-1/3 text-sm' options={itemprosesperms} value={itemprosesId} onChange={(e: any) => setValues(prev => ({ ...prev, itemprosesperm_id: e.value }))} />
                                </div>
                                <Suspense fallback={
                                    <div className='w-full'>
                                        <div className='flex items-center justify-center h-52 m-auto'>Loading...</div>
                                    </div>
                                }>
                                    <div>
                                        {transpermohonan && transpermohonan.permohonan ? <CardPermohonan permohonan={transpermohonan.permohonan} /> : null}
                                    </div>
                                </Suspense>
                                {/* <CardPermohonan permohonan={transpermohonan.permohonan} /> : null} */}
                                {transpermohonan && transpermohonan.permohonan ? <>

                                    <div className='z-30 flex justify-end items-center bg-blueGray-400 py-2 px-1 rounded-md shadow-md mb-0 relative'>
                                        {
                                            AddMode ? <>
                                                <LinkButton href='#' theme='black' onClick={(e) => {
                                                    e.preventDefault()
                                                    setAddMode(false)
                                                }}>
                                                    <span>Tutup</span>
                                                </LinkButton>
                                            </>
                                                : <LinkButton href='#' theme='black' onClick={(e) => {
                                                    e.preventDefault()
                                                    setAddMode(true)
                                                }}>
                                                    <span>Tambah</span>
                                                </LinkButton>
                                        }
                                    </div>

                                    <div className={`z-20 flex flex-wrap lg:items-start transition-all transform ease-linear duration-150 origin-top m-auto mt-2 absolute shadow-slate-500 shadow-lg bg-blueGray-300 w-[95%] rounded-b-md ring-blueGray-400 ring-2 p-2 ${AddMode ? 'translate-y-100 opacity-100' : '-translate-y-full opacity-0 '}`}>
                                        <div className="w-full lg:w-2/5 pr-2">
                                            <SelectSearch name='itemprosesperm_id' label='Nama Proses' value={data.itemprosesperm} options={itemprosesperms}
                                                onChange={(e: any) => setData({ ...data, itemprosesperm_id: e ? e.value : '', itemprosesperm: e ? e : {} })
                                                } errors={errors.itemprosesperm_id} />
                                        </div>
                                        <div className="w-full lg:w-2/5 pr-2">
                                            <Input name='catatan_prosesperm' autoComplete='off' multiple label='Catatan' errors={errors.catatan_prosesperm} value={data.catatan_prosesperm} type='text' onChange={e => setData('catatan_prosesperm', e.target.value)} />
                                        </div>
                                        <div className='relative h-full lg:mt-8'>
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input
                                                    id="customCheckLogin"
                                                    type="checkbox"
                                                    className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                                    checked={data.active}
                                                    onChange={e => setData('active', e.target.checked)}
                                                />
                                                <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                    Active
                                                </span>
                                            </label>
                                        </div>
                                        <LoadingButton
                                            theme='black'
                                            loading={processing}
                                            type="submit"
                                        >
                                            <span>Simpan</span>
                                        </LoadingButton>

                                    </div>
                                </>
                                    : null}
                            </form>
                            {prosespermohonans && prosespermohonans.length > 0 ? (
                                <CardTableProsespermohonans prosespermohonans={prosespermohonans} statusprosesperms={statusprosesperms} />
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Create
