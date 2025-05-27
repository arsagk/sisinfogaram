import React, { useEffect } from 'react'
import Modal from './Modal'
import { LoadingButton } from '../Shared/LoadingButton'
import LinkButton from '../Shared/LinkButton'
import { Biayaperm, OptionSelect, Transpermohonan, User } from '@/types'
import { useForm, usePage } from '@inertiajs/react'
import Input from '../Shared/Input'
import MoneyInput from '../Shared/MoneyInput'
import useSwal from '@/utils/useSwal'

type Props = {
    showModal: boolean,
    setShowModal: (e: boolean) => void,
}
const ModalAddBiayaperm = ({ showModal, setShowModal }: Props) => {
    type FormValues = {
        transpermohonan_id: string,
        jumlah_biayaperm: string,
        jumlah_bayar: string,
        kurang_bayar: string,
        catatan_biayaperm: string,
        image_biayaperms: string,
        _method: string
    }
    const { transpermohonan } = usePage<{ transpermohonan: Transpermohonan }>().props;

    const { data, setData, errors, post, processing, reset } = useForm<FormValues>({
        transpermohonan_id: transpermohonan?.id || '',
        jumlah_biayaperm: '0',
        jumlah_bayar: '0',
        kurang_bayar: '0',
        catatan_biayaperm: '',
        image_biayaperms: '',
        _method: 'POST'
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        useSwal.confirm({
            title: 'Simpan Data', text: 'apakah akan menyimpan?'
        }).then((result) => {
            if (result.isConfirmed) {
                post(route('transaksi.biayaperms.store'), {
                    onSuccess: () => {
                        reset()
                        setShowModal(false)
                    }
                })
            }
        })

    }
    const getKurangBayar = (jmlBiaya: number, jmlBayar: number) => {
        let xkurang = jmlBiaya > jmlBayar ? jmlBiaya - jmlBayar : 0
        return xkurang.toString()
    }

    useEffect(() => {
        if (transpermohonan) {
            setData('transpermohonan_id', transpermohonan.id)
        }
    }, [transpermohonan])

    return (
        <Modal show={showModal} maxWidth='md' closeable={false} onClose={() => setShowModal(false)}>
            <div className='p-4 bg-blueGray-100 rounded-md'>
                <form onSubmit={handleSubmit}>
                    <h1 className='font-bold text-xl text-blueGray-700 mb-4'>ADD BIAYA PERMOHONAN</h1>
                    <MoneyInput name='jumlah_biayaperm' label='Jumlah Biaya' errors={errors.jumlah_biayaperm}
                        autoComplete='off'
                        value={data.jumlah_biayaperm}
                        onValueChange={e => setData(prev => ({
                            ...prev, 'jumlah_biayaperm': e.value,
                            'kurang_bayar': getKurangBayar(Number.parseInt(e.value), Number.parseInt(data.jumlah_bayar))
                        }))} />
                    <MoneyInput disabled name='jumlah_bayar' label='Jumlah Bayar' errors={errors.jumlah_bayar}
                        autoComplete='off'
                        value={data.jumlah_bayar}
                        onValueChange={e => setData(prev => ({
                            ...prev, 'jumlah_bayar': e.value,
                            'kurang_bayar': getKurangBayar(Number.parseInt(data.jumlah_biayaperm), Number.parseInt(e.value))
                        }))} />
                    <MoneyInput name='kurang_bayar' label='Kurang Bayar' disabled errors={errors.kurang_bayar} value={data.kurang_bayar} onValueChange={e => {
                        setData('kurang_bayar', e.value)
                    }} />
                    <Input name='catatan_biayaperm' label='Catatan' errors={errors.catatan_biayaperm} value={data.catatan_biayaperm} onChange={e => setData('catatan_biayaperm', e.target.value)} />
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

export default ModalAddBiayaperm
