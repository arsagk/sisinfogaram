<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Laporan Daftar Barang</title>
</head>
<style>
    body {
        box-sizing: border-box;
        padding: 0px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .container {
        padding-left: 1.5px;
        padding-right: 1px;
        padding-top: 0.5px;
        padding-bottom: 1px;
        font-size: 12px;
    }

    .judul-kopsurat {
        font-size: 14px;
        margin-bottom: 2px;
        font-weight: bold;
    }

    .subjudul-kopsurat {
        font-size: 18px;
        margin-bottom: 2px;
        font-weight: bold;
    }

    .ketjudul-kopsurat {
        font-size: 12px;
        margin-bottom: 2px;
        text-align: left;
        width: 500px;
        padding-bottom: 4px;
        border-bottom: 2px solid rgb(29, 28, 28);
        margin-bottom: 20px;
    }

    .judul-lap {
        font-size: 21px;
        margin-bottom: 2px;
        vertical-align: middle;
        font-weight: bold;
    }

    .subjudul-lap {
        font-size: 11px;
        margin-bottom: 2px;
        width: 250px;
        display: flex;
        flex-direction: row;
    }

    .isi-subjudul-lap {
        font-size: 11px;
        margin-bottom: 2px;
        width: 300px;
        display: flex;
        flex-direction: row;
        background-color: gray;
    }

    .ket-judul {
        width: 90px;
        background-color: burlywood;
    }

    .detail-isi-lap {
        width: 700px;
        /* border: 1px solid gray; */
        color: black;
    }

    table {
        border-collapse: collapse;
    }

    table.detail-isi-lap {
        margin-bottom: 10px;
    }

    table.detail-isi-lap thead td {
        padding: 5px;
        border: 1px solid black
    }

    table.detail-isi-lap tbody td {
        padding: 5px;
        border: 1px solid black
    }

    table.detail-isi-lap tfoot td {
        padding: 5px;
        border: 1px solid black
    }
</style>

<body>
    <div class="container">
        <table>
            <tr>
                <td class="image-kop" width="20">
                    <img src={{ $pengaturan->image_kop }} alt="" width="120" height="auto">
                </td>
                <td>
                    <div class="judul-kopsurat">{{ $pengaturan->nama_perusahaan }}</div>
                    <div class="subjudul-kopsurat">{{ $pengaturan->alamat_perusahaan }}</div>
                    <div class="ketjudul-kopsurat">Telp. {{ $pengaturan->telp_perusahaan }}, email
                        {{ $pengaturan->email_perusahaan }}</div>
                </td>
            </tr>
        </table>
    </div>
    <div class="judul-lap">{{ $judul_lap }}</div>
    <table class="detail-isi-lap">
        <thead>
            <tr style="background-color: rgb(233, 232, 232); font-weight: bold;">
                <td>No.</td>
                <td>Kode Barang</td>
                <td>Nama Barang</td>
                <td>Satuan</td>
                <td align="right">Harga beli</td>
                <td align="right">Harga Jual</td>
                <td align="right">Stok</td>
            </tr>
        </thead>
        <tbody>
            @forelse ($barangs as $barang)
                <tr>
                    <td>{{ $loop->index + 1 }}</td>
                    <td>{{ $barang->kode_barang }}</td>
                    <td>{{ $barang->nama_barang }}</td>
                    <td>{{ $barang->satuan }}</td>
                    <td align='right'>{{ $barang->harga_beli }}</td>
                    <td align='right'>{{ $barang->harga_jual }}</td>
                    <td align='right'>{{ $barang->stok_barang }}</td>
                </tr>
            @empty
                <tr>
                    <td colspan="5">Data Kosong</td>
                </tr>
            @endforelse
        </tbody>
    </table>
    <div style="width: 500px; margin-left: 500px;">
        <table>
            <tr>
                <td>Pati, </td>
                <td>{{ $tanggal }}</td>
            </tr>
            <tr>
                <td colspan="2">Petugas</td>
            </tr>
            <tr>
                <td style="padding-top: 40px;" colspan="2">&nbsp;</td>
            </tr>
            <tr>
                <td colspan="2">{{ strtoupper(Auth::user()->name) }}</td>
            </tr>
        </table>

    </div>
    </div>
</body>

</html>
