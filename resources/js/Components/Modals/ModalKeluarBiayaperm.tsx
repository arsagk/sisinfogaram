import React, { useEffect } from 'react'
import Modal from './Modal'
import { LoadingButton } from '../Shared/LoadingButton'
import LinkButton from '../Shared/LinkButton'
import { Biayaperm, OptionSelect, Transpermohonan, User } from '@/types'
import { useForm, usePage } from '@inertiajs/react'
import Input from '../Shared/Input'
import MoneyInput from '../Shared/MoneyInput'
import useSwal from '@/utils/useSwal'
import SelectSearch from '../Shared/SelectSearch'

type Props = {
    showModal: boolean,
    setShowModal: (e: boolean) => void,
    transpermohonan: Transpermohonan
}
const ModalKeluarBiayaperm = ({ showModal, setShowModal, transpermohonan }: Props) => {
    const { metodebayars, itemkegiatansOpts } = usePage<{ metodebayars: OptionSelect[], itemkegiatansOpts: OptionSelect[] }>().props;

    type FormValues = {
        transpermohonan_id: string,
        jumlah_keluarbiayaperm: string,
        itemkegiatan_id: string,
        itemkegiatan: OptionSelect | undefined,
        akun: OptionSelect | undefined,
        akun_id: string,
        metodebayar: OptionSelect | undefined,
        metodebayar_id: string,
        catatan_keluarbiayaperm: string,
        image_keluarbiayaperm: string,
        _method: string
    }

    const { data, setData, errors, post, processing, reset } = useForm<FormValues>({
        transpermohonan_id: transpermohonan.id || '',
        jumlah_keluarbiayaperm: '',
        itemkegiatan_id: '',
        itemkegiatan: undefined,
        akun: undefined,
        akun_id: '',
        metodebayar: metodebayars.length > 0 ? metodebayars[0] : undefined,
        metodebayar_id: '',
        catatan_keluarbiayaperm: '',
        image_keluarbiayaperm: '',
        _method: 'POST'
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        useSwal.confirm({
            title: 'Simpan Data', text: 'apakah akan menyimpan?'
        }).then((result) => {
            if (result.isConfirmed) {
                post(route('transaksi.keluarbiayaperms.store'), {
                    onSuccess: () => {
                        setShowModal(false)
                    }
                })
            }
        })

    }

    useEffect(() => {
        setData((prev) => ({
            ...prev,
            transpermohonan_id: transpermohonan.id || '',
            jumlah_keluarbiayaperm: '0',
            metodebayar_id: metodebayars.length > 0 ? metodebayars[0].value : '',
            metodebayar: metodebayars.length > 0 ? metodebayars[0] : undefined,
            catatan_keluarbiayaperm: '',
            image_keluarbiayaperm: '',
        }))
    }, [transpermohonan])


    return (
        <Modal show={showModal} maxWidth='md' closeable={false} onClose={() => setShowModal(false)}>
            <div className='p-4 bg-blueGray-100 rounded-md'>
                <form onSubmit={handleSubmit}>
                    <h1 className='font-bold text-xl text-blueGray-700 mb-4'>PENGELUARAN BIAYA</h1>
                    <SelectSearch name='metodebayar' options={metodebayars}
                        onChange={(e) => setData((prev) => ({ ...prev, metodebayar: e ? e : undefined, metodebayar_id: e ? e.value : '' }))}
                        label='Metode Pembayaran' value={data.metodebayar} errors={errors.metodebayar_id} />
                    <SelectSearch name='itemkegiatan' options={itemkegiatansOpts}
                        onChange={(e) => setData((prev) => ({ ...prev, itemkegiatan: e ? e : undefined, itemkegiatan_id: e ? e.value : '' }))}
                        label='Item Kegiatan' value={data.itemkegiatan} errors={errors.itemkegiatan_id} />
                    <MoneyInput name='jumlah_keluarbiayaperm' label='Jumlah Bayar' errors={errors.jumlah_keluarbiayaperm} value={data.jumlah_keluarbiayaperm} onValueChange={e => {
                        setData('jumlah_keluarbiayaperm', e.value)
                    }} />
                    <Input name='catatan_keluarbiayaperm' label='Catatan' errors={errors.catatan_keluarbiayaperm} value={data.catatan_keluarbiayaperm} onChange={e => setData('catatan_keluarbiayaperm', e.target.value)} />
                    <div className="mt-4 w-full flex justify-between items-center">

                        <LoadingButton
                            theme='black'
                            loading={processing}
                            type="submit"
                        >
                            <span>Simpan</span>
                        </LoadingButton>
                        <LinkButton
                            href='#'
                            theme='blue'
                            onClick={(e) => {
                                e.preventDefault()
                                setShowModal(false)
                            }}
                        >
                            <span>Close</span>
                        </LinkButton>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default ModalKeluarBiayaperm
