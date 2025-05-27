import { Deserializer } from "v8";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Client {
    id: number;
    nama_client: string;
    alamat_client: string;
    no_telp: string;
    kode_client: string;
    tipe_client: string;
    active: boolean;
}

export interface Sopir {
    id: number;
    nama_sopir: string;
    alamat_sopir: string;
    no_telp: string;
    kode_sopir: string;
    active: boolean;
}

export interface Barang {
    id: number;
    nama_barang: string;
    harga_beli: string;
    harga_jual: string;
    satuan: string;
    kode_barang: string;
    stok_barang: string;
}

export interface Pengaturan {
    id: number;
    nama_perusahaan: string;
    alamat_perusahaan: string;
    telp_perusahaan: string;
    email_perusahaan: string;
    kode_pos: string;
    map_url: string;
    image_kop: string;
}

export interface Pembelian {
    id: number;
    barang_id: string;
    client_id: string;
    barang: Barang;
    client: Client;
    jumlah_pembelian: string;
    harga_perkg: string;
    ongkos_perkg: string;
    jenis_muatan: string;
    kode_pembelian: string;
    lunas: boolean;
}
export interface Penjualan {
    id: number;
    barang_id: string;
    client_id: string;
    barang: Barang;
    client: Client;
    jumlah_penjualan: string;
    harga_perkg: string;
    ongkos_perkg: string;
    jenis_muatan: string;
    kode_penjualan: string;
    lunas: boolean;
}

export interface Barangmasuk {
    id: number;
    pembelian_id: string;
    pembelian: Pembelian;
    jumlah_muatan: string;
    jumlah_terima: string;
    no_pol: string;
    no_daftar: string;
    created_at;
}

export interface Barangkeluar {
    id: number;
    penjualan_id: string;
    penjualan: Penjualan;
    jumlah_muatan: string;
    jumlah_keluar: string;
    no_pol: string;
    no_daftar: string;
    created_at;
    sopir_id: string;
    sopir: Sopir;
}

export interface Kecamatan {
    id: string;
    nama_kecamatan: string;
}
export interface Desa {
    id: string;
    nama_desa: string;
    kecamatan: Kecamatan;
}

export interface Metodebayar {
    id: string;
    nama_metodebayar: string;
    akun: Akun;
    akun_id: string;
}

export interface Jenisakun {
    id: string;
    nama_jenisakun: string;
    kode_jenisakun: string;
}
export interface Kelompokakun {
    id: string;
    nama_kelompokakun: string;
    kode_kelompokakun: string;
    jenisakun: Jenisakun;
}

export interface Akun {
    id: string;
    nama_akun: string;
    kelompokakun: Kelompokakun;
    kelompokakun_id: string;
    slug: string;
    kode_akun: string;
}

export interface Permission {
    id: number;
    name: string;
    roles: Role[];
}

export interface Role {
    id: number;
    name: string;
    permissions: Permission[];
}

export interface Jenispermohonan {
    id: number;
    nama_jenispermohonan: string;
}
export interface Instansi {
    id: string;
    nama_instansi: string;
    info_instansi: string;
}

export interface Grupitemkegiatan {
    id: string;
    nama_grupitemkegiatan: string;
}

export interface Traffic {
    nama_barang: string;
    jumlah: number;
    percentage: number;
    bg_color: string;
}
export interface RecentActivity {
    nama_penerima: string;
    identitas: string;
    catatan_proses_perm: string;
    tanggal: string;
    nama_itemprosesperm: string;
}

export interface Itemkegiatan {
    id: string;
    nama_itemkegiatan: string;
    instansi_id: string;
    instansi: Instansi;
    akun_id: string;
    akun: Akun;
    grupitemkegiatans: Grupitemkegiatan[];
    isunique: boolean;
}
export interface Postingjurnal {
    id: string;
    uraian: string;
    user_id: string;
    user: User;
    akun_debet: string;
    akun_kredit: string;
    jumlah: string;
    image: string;
}

export interface Kasbon {
    id: string;
    tgl_kasbon: string;
    jumlah_kasbon: number;
    jumlah_penggunaan: number;
    sisa_penggunaan: number;
    user_id: string;
    user: User;
    keperluan: string;
    status_kasbon: string;
}

export interface JenispermohonanPivotePerm extends Jenispermohonan {
    pivot: { active: boolean };
}

export interface Itemprosesperm {
    id: number;
    nama_itemprosesperm: string;
}
export interface Statusprosesperm {
    id: string;
    nama_statusprosesperm: string;
    image_statusprosesperm: string;
}
export interface Jenishak {
    id: string;
    nama_jenishak: string;
    singkatan: string;
}

export interface Pemohon {
    id: number;
    nama_pemohon: string;
    email_pemohon: string;
    alamat_pemohon: string;
    telp_pemohon: string;
    nodaftar_pemohon: string;
    thdaftar_pemohon: string;
    no_daftar: string;
    nik_pemohon: string;
    users: User[];
    active: boolean;
}

export interface Keluarbiayapermuser {
    id: string;
    tgl_keluarbiayaperm: string;
    instansi: Instansi;
    metodebayar: Metodebayar;
    kasbons: Kasbon[];
    created_at: string;
    status_keluarbiayapermuser: string;
    user: User;
    dkeluarbiayapermusers: Dkeluarbiayapermuser[];
    saldo_awal: string;
    jumlah_biaya: string;
    saldo_akhir: string;
}
export interface Keluarbiaya {
    id: string;
    tgl_keluarbiayaperm: string;
    instansi: Instansi;
    metodebayar: Metodebayar;
    kasbons: Kasbon[];
    created_at: string;
    status_keluarbiaya: string;
    user: User;
    dkeluarbiaya: Dkeluarbiaya[];
    saldo_awal: string;
    jumlah_biaya: string;
    saldo_akhir: string;
}

export interface Dkeluarbiayapermuser {
    id: string;
    created_at: string;
    permohonan: string;
    nama_itemkegiatan: string;
    jumlah_biaya: string;
    ket_biaya: string;
}

export interface Dkeluarbiaya {
    id: string;
    created_at: string;
    nama_itemkegiatan: string;
    jumlah_biaya: string;
    ket_biaya: string;
}

export interface DkeluarbiayapermuserStaf {
    id: string;
    created_at: string;
    metodebayar: Metodebayar;
    itemkegiatan: Itemkegiatan;
    instansi: Instansi;
    user: User;
    jumlah_biaya: string;
    ket_biaya: string;
}

export interface OptionSelect {
    value: string;
    label: string;
}
export interface OptionSelectActive {
    value: string;
    label: string;
    active: boolean;
}

export type OptionSelectDisabled = OptionSelect & { isDisabled: boolean };

export interface OptionSelectWithData<Data> {
    value: string;
    label: string;
    data: Data;
}

export interface Permohonan {
    id: string;
    nama_pelepas: string;
    nama_penerima: string;
    jenishak_id: number;
    nomor_hak: string;
    persil: string;
    klas: string;
    luas_tanah: number;
    atas_nama: string;
    jenis_tanah: string;
    desa_id: string;
    nodaftar_permohonan: number;
    thdaftar_permohonan: number;
    users: User[];
    active: boolean;
    letak_obyek: string;
    no_daftar: string;
    tgl_daftar: string;
    users: User[];
    bidang: number;
    kode_unik: string;
    transpermohonans: Transpermohonan[];
    transpermohonan: Transpermohonan;
    jenishak: Jenishak;
    desa: Desa;
}

export interface Transpermohonan {
    id: string;
    no_daftar: string;
    tgl_daftar: string;
    jenispermohonan: Jenispermohonan;
    permohonan: Permohonan;
    active: boolean;
}

export interface Statusprosesperm {
    id: string;
    nama_statusprosesperm: string;
    image_statusprosesperm: string;
}

export interface StatusprosespermProsespermohonan {
    id: string;
    nama_statusprosesperm: string;
    image_statusprosesperm: string;
    user: User;
    pivot: { created_at: string; catatan_statusprosesperm: string };
    canRemove: boolean;
}

// export interface Prosespermohonan {
//     id: string;
//     tgl_proses: string;
//     itemprosesperm: Itemprosesperm;
//     user: User;
//     catatan_prosesperm: string;
//     active: boolean;
// }

export interface Prosespermohonan {
    id: string;
    tgl_proses: string;
    itemprosesperm: Itemprosesperm;
    transpermohonan: Transpermohonan;
    user: User;
    catatan_prosesperm: string;
    statusprosesperms: StatusprosespermProsespermohonan[];
    active: boolean;
}
export interface Biayaperm {
    id: string;
    tgl_biayaperm: string;
    jumlah_biayaperm: number;
    jumlah_bayar: number;
    kurang_bayar: number;
    transpermohonan: Transpermohonan;
    user: User;
    catatan_biayaperm: string;
    statusprosesperms: StatusprosespermProsespermohonan[];
    image_biayaperm: string;
}
export interface KeluarBiayaperm {
    id: string;
    tgl_keluarbiayaperm: string;
    transpermohonan_id: string;
    transpermohonan: Transpermohonan;
    jumlah_keluarbiayaperm: number;
    metodebayar: Metodebayar;
    itemkegiatan: Itemkegiatan;
    metodebayar_id: string;
    user: User;
    catatan_keluarbiayaperm: string;
    image_keluarbiayaperm: string;
}

export interface Bayarbiayaperm {
    id: string;
    tgl_bayarbiayaperm: string;
    saldo_awal: number;
    jumlah_bayar: number;
    saldo_akhir: number;
    metodebayar: Metodebayar;
    metodebayar_id: string;
    info_rekening: string;
    catatan_bayarbiayaperm: string;
    image_bayarbiayaperm: string;
}

// export interface Statusprosespermprosespermohonan {
//     id: string;
//     prosespermohonan_id: string;
//     statusprosesperm_id: string;
//     statusprosesperm: Statusprosesperm;
//     user: User;
//     catatan_statusprosesperm: string;
// }

export type TPermohonan = {
    id: string;
    nama_pelepas: string;
    nama_penerima: string;
    jenishak_id: number;
    nomor_hak: string;
    persil: string;
    klas: string;
    luas_tanah: number;
    atas_nama: string;
    jenispermohonan_id: string;
    jenis_tanah: string;
    desa_id: string;
    nodaftar_permohonan: number;
    thdaftar_permohonan: number;
    users: User[];
    active: boolean;
    letak_obyek: string;
    no_daftar: string;
    tgl_daftar: string;
};

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
