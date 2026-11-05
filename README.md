# 📚 BukuKu — Aplikasi Web Pemesanan Buku

Aplikasi web sederhana untuk pemesanan buku pada sebuah toko online. Proyek ini dibuat sebagai **Tugas UTS Pemrograman Web 1** dan berfokus pada sisi **front-end** (HTML, CSS, dan JavaScript). Seluruh data diambil dari variabel JavaScript pada file `data.js`, tanpa server maupun database.

---

## 👤 Identitas

| | |
|---|---|
| **Nama** | _isi nama lengkap_ |
| **NIM** | _isi NIM_ |
| **Kelas / Mata Kuliah** | _isi kelas_ / Pemrograman Web 1 |
| **Dosen Pengampu** | _isi nama dosen_ |
| **Video Penjelasan** | _tempel tautan video (maks. 15 menit)_ |

---

## 🎯 Tujuan Pembelajaran

1. Merancang struktur HTML yang **semantik dan valid**.
2. Mengelola gaya antarmuka menggunakan **CSS**.
3. Menggunakan **JavaScript** untuk manipulasi DOM, validasi form, manipulasi data tabel, dan interaksi UI (pop-up, modal box, alert box).

---

## ✨ Fitur per Halaman

### 1. Login (`index.html`)
- Input email dan password dengan validasi (format email, kolom wajib diisi).
- Jika email/password salah, muncul **alert**: *"Email/password yang Anda masukkan salah"*.
- Tombol **Lupa Password** dan **Daftar** membuka **modal box**.
- Akun yang didaftarkan lewat modal Daftar dapat langsung dipakai login.

### 2. Dashboard (`dashboard.html`)
- **Greeting otomatis** sesuai waktu lokal: Pagi, Siang, Sore, atau Malam.
- Menampilkan nama dan peran pengguna (User/Admin).
- Menu navigasi ke Informasi Stok/Katalog dan Tracking Pengiriman.
- **Laporan Pemesanan** (modal): total pesanan, total nilai, rata-rata, dan rincian per status.
- **History Transaksi** (modal): tabel seluruh transaksi.

### 3. Informasi Stok / Katalog (`stok.html`)
- Tabel katalog dibuat **secara dinamis** dari variabel `dataKatalogBuku`, lengkap dengan sampul buku.
- **Menambah baris stok baru** menggunakan JavaScript DOM (`createElement`), dengan validasi kode, nama, jenis, edisi, harga, dan stok.
- Unggah sampul buku (opsional, maksimal 500 KB).
- Hapus baris, pencarian langsung (*live search*), dan label **"menipis"** untuk stok di bawah 200.

### 4. Pemesanan (`checkout.html`)
- Keranjang yang dapat **ditambah, diubah jumlahnya, dan dihapus**.
- Form data pemesan dan pembayaran dengan validasi setiap kolom (nama, email, nomor HP, alamat, ekspedisi, paket, metode bayar).
- Ongkos kirim dan total bayar dihitung otomatis.
- Setelah pesan, stok berkurang dan muncul modal berisi **Nomor Delivery Order** yang bisa langsung dilacak.

### 5. Informasi Pengiriman (`tracking.html`)
- Input **Nomor Delivery Order** dan tombol **Cari**.
- Menampilkan nama pemesan, **status pengiriman** (progress bar 4 tahap), ekspedisi, tanggal kirim, jenis paket, dan total pembayaran.
- **Riwayat perjalanan paket** dalam bentuk *timeline*.
- Pesan error jika nomor DO tidak ditemukan.

---

## 🛠️ Teknologi

| Teknologi | Penggunaan |
|---|---|
| **HTML5** | Struktur semantik (`header`, `nav`, `main`, `section`, `footer`, `form`, `label`, `table`) |
| **CSS3** | CSS eksternal, variabel CSS, Flexbox, Grid, animasi, desain responsif, efek *glassmorphism* |
| **JavaScript (ES6)** | Manipulasi DOM, validasi form, event handling, modal, `localStorage` |
| **Google Fonts** | Playfair Display dan Poppins |

> Tidak memakai framework atau library tambahan.

---

## 📁 Struktur Folder

```
tugas-uts-web1/
├── index.html          # Halaman login
├── dashboard.html      # Dashboard menu
├── stok.html           # Informasi stok / katalog
├── checkout.html       # Halaman pemesanan
├── tracking.html       # Informasi pengiriman
├── css/
│   └── style.css       # Seluruh gaya tampilan
├── js/
│   ├── data.js         # Data dummy (dari dosen)
│   └── script.js       # Logika semua halaman
├── assets/
│   └── logo.png        # (opsional)
└── img/                # Sampul buku
    ├── pengantar_komunikasi.jpg
    ├── manajemen_keuangan.jpg
    ├── kepemimpinan.jpg
    ├── mikrobiologi.jpg
    └── paud_perkembangan.jpg
```

---

## 🗂️ Data

Data berasal dari `js/data.js` yang disediakan dosen dan **tidak diubah**:

| Variabel | Isi |
|---|---|
| `dataPengguna` | Daftar akun (id, nama, email, password, role) |
| `dataKatalogBuku` | Katalog buku (kode, nama, jenis, edisi, stok, harga, cover) |
| `dataTracking` | Data pengiriman berdasarkan nomor DO beserta riwayat perjalanan |

Data tambahan yang dibuat pengguna (akun baru, stok baru, pesanan baru) disimpan di **`localStorage`** browser, sehingga `data.js` tetap utuh.

---

## ▶️ Cara Menjalankan

1. Unduh atau *clone* repositori ini.
   ```bash
   git clone https://github.com/<username>/<nama-repo>.git
   ```
2. Pastikan semua gambar sampul ada di folder `img/`.
3. Buka folder proyek di **VS Code**, klik kanan `index.html`, lalu pilih **Open with Live Server**.
   (Bisa juga dengan klik dua kali `index.html` untuk membukanya langsung di browser.)

Halaman lain tidak perlu dibuka satu per satu karena bisa diakses lewat menu navigasi setelah login.

---

## 🔑 Akun dan Data Uji

**Akun login**

| Email | Password | Peran |
|---|---|---|
| `rina@gmail.com` | `rina123` | User |
| `agus@gmail.com` | `agus123` | User |
| `siti@gmail.com` | `siti123` | Admin |

**Nomor Delivery Order untuk Tracking**

| Nomor DO | Pemesan | Status |
|---|---|---|
| `20230012` | Rina Wulandari | Dalam Perjalanan |
| `20230013` | Agus Pranoto | Dikirim (selesai antar) |

---

## ✅ Pemenuhan Kriteria Penilaian

| Kriteria | Penerapan |
|---|---|
| Struktur HTML semantik, valid, dan lengkap | Elemen semantik, atribut `lang`, `label` untuk setiap input, atribut ARIA pada modal dan progress bar |
| Desain CSS | CSS eksternal terpusat, variabel warna, layout Flexbox/Grid, responsif, animasi |
| JavaScript DOM | Tabel dibuat dinamis, tambah/hapus/ubah baris, pencarian, keranjang interaktif, modal |
| Validasi form dan alert | Pesan error di bawah tiap kolom, `alert` dan `confirm` untuk kondisi penting |
| Modularitas file dan struktur file | Pemisahan HTML, CSS, data, dan logika sesuai struktur folder yang diminta |
| Kreativitas tambahan | Tema gelap bergradasi, efek kaca, sampul buku melayang, timeline pengiriman, peran pengguna, unggah sampul |

---

## 📝 Catatan

- Data tersimpan di `localStorage`. Untuk mengembalikan katalog ke kondisi awal, klik tombol **Reset data awal** di halaman Katalog, atau hapus data situs lewat DevTools browser.
- Pengguna harus login terlebih dahulu. Membuka halaman lain tanpa login akan diarahkan kembali ke halaman login.
- Font memerlukan koneksi internet. Tanpa internet, tampilan tetap berjalan menggunakan font cadangan.
- Aplikasi ini hanya simulasi front-end. Autentikasi dan pembayaran **bukan** sistem sungguhan.

---

## 📸 Tangkapan Layar

_Tambahkan screenshot tiap halaman di sini, misalnya:_

```markdown
![Halaman Login](screenshots/login.png)
![Dashboard](screenshots/dashboard.png)
```

---

<p align="center">Dibuat untuk Tugas UTS Pemrograman Web 1 · 2026</p>
