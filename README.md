# 📚 BukuKu — Aplikasi Web Pemesanan Buku

Aplikasi web sederhana untuk pemesanan buku pada sebuah toko online. Proyek ini dibuat sebagai **Tugas UTS Pemrograman Web 1** dan berfokus pada sisi **front-end** (HTML, CSS, dan JavaScript). Seluruh data diambil dari variabel JavaScript pada file `data.js`, tanpa server maupun database.

---

## 👤 Identitas

| | |
|---|---|
| **Nama** | _M.FIRZA RIVALDI_ |
| **NIM** | _312510082_ |
| **Kelas / Mata Kuliah** | _TI 25 1 A_ / Pemrograman Web 1 |
| **Dosen Pengampu** | _Agung Nugroho, S.Kom., M.Kom.,_ |
| **Video Penjelasan** | _[KLIK DISINI TAUTAN VIDIO YT ](https://www.youtube.com/watch?v=Hoaq7-Ne9lo)_ |

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
├── screenshots/        # Tangkapan layar untuk laporan (README)
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
| `firza@gmail.com` | `123456` | Admin |

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

## 📸 Tangkapan Layar dan Penjelasan

Setiap tangkapan layar berikut disertai penjelasan tentang apa yang ditampilkan dan bagaimana kodenya bekerja. Semua gambar disimpan di folder `screenshots/`.

### A. Halaman Login

#### 1. Tampilan awal halaman login
![Halaman Login]<img width="1871" height="890" alt="Screenshot 2026-11-05 080829" src="https://github.com/user-attachments/assets/8d1becc5-9b1f-4ddf-a3c8-18ad757e26db" />


**Penjelasan:** Halaman pertama yang muncul saat aplikasi dibuka (`index.html`). Layar terbagi dua. Sisi kiri berisi identitas toko, slogan, dan tumpukan sampul buku yang melayang (diambil dari folder `img/`). Sisi kanan berisi kartu form login dengan kolom **Email** dan **Password**, tombol **Login**, serta tombol **Lupa Password** dan **Daftar**. Halaman ini memakai `data-page="login"` sehingga `script.js` hanya menjalankan logika login di sini.

#### 2. Alert saat email/password salah
![Alert login gagal]<img width="1883" height="1006" alt="Screenshot 2026-11-05 081019" src="https://github.com/user-attachments/assets/4bfd0356-6a07-4ef7-a8d3-d0dc909a9f43" />


**Penjelasan:** Saat tombol Login ditekan, kolom divalidasi lebih dulu (format email dan kolom tidak boleh kosong). Jika lolos, data dicocokkan dengan `dataPengguna` pada `data.js` dan akun yang didaftarkan lewat modal Daftar. Bila tidak ada yang cocok, muncul **alert** berisi *"Email/password yang Anda masukkan salah"*, sesuai ketentuan soal. Jika cocok, pengguna dibawa ke Dashboard.

#### 3. Modal Lupa Password
![Modal Lupa Password]<img width="1880" height="999" alt="Screenshot 2026-11-05 081118" src="https://github.com/user-attachments/assets/09014c83-8528-4206-9ab8-dff6dc7041b5" />


**Penjelasan:** Tombol **Lupa Password** membuka **modal box** (pop-up) yang dibuat lewat JavaScript DOM dengan fungsi `bukaModal()`. Pengguna mengisi email. Jika format salah, muncul pesan merah. Jika email terdaftar, muncul alert bahwa tautan reset dikirim (simulasi). Jika belum terdaftar, muncul pesan "Email belum terdaftar". Modal dapat ditutup lewat tombol ×, klik area gelap, atau tombol `Esc`.

#### 4. Modal Daftar akun baru
![Modal Daftar]<img width="1876" height="899" alt="Screenshot 2026-11-05 081240" src="https://github.com/user-attachments/assets/c4ae8e24-af23-49be-bc27-b423d5f69917" />


**Penjelasan:** Tombol **Daftar** membuka modal berisi form pendaftaran. Validasi yang berjalan: nama minimal 3 karakter, email valid dan belum dipakai, password minimal 6 karakter, dan konfirmasi password harus sama. Setiap kesalahan ditampilkan sebagai teks merah di bawah kolom yang bermasalah. Akun yang berhasil dibuat disimpan di `localStorage` dengan peran **User**, lalu bisa langsung dipakai login.

---

### B. Dashboard

#### 5. Tampilan dashboard
![Dashboard]<img width="1897" height="904" alt="Screenshot 2026-11-05 074847" src="https://github.com/user-attachments/assets/19b5b3f7-5b6a-425e-b74c-800582d24b59" />


**Penjelasan:** Halaman utama setelah login (`dashboard.html`). Banner di atas menampilkan **salam otomatis** berdasarkan jam di komputer pengguna: Pagi (sebelum 11.00), Siang (11.00 sampai 14.59), Sore (15.00 sampai 17.59), dan Malam (setelah itu). Banner juga menampilkan nama, peran pengguna, dan tanggal hari ini. Di bawahnya ada empat kartu menu: **Informasi Stok/Katalog**, **Tracking Pengiriman**, **Laporan Pemesanan**, dan **History Transaksi**. Bila belum login, halaman ini otomatis mengarahkan kembali ke halaman login.

#### 6. Modal Laporan Pemesanan
![Laporan Pemesanan]<img width="1887" height="910" alt="image" src="https://github.com/user-attachments/assets/922051e1-c05e-4972-abb7-692d49819ffe" />

**Penjelasan:** Kartu **Laporan Pemesanan** membuka modal berisi ringkasan: jumlah seluruh pesanan, total nilai transaksi, dan rata-rata nilai per pesanan. Di bawahnya ada tabel jumlah dan nilai pesanan untuk tiap status (Diproses, Dikemas, Dalam Perjalanan, Terkirim). Nilai harga pada `data.js` berbentuk teks seperti `"Rp 180.000"`, sehingga diubah menjadi angka dengan fungsi `angka()` sebelum dijumlahkan.

#### 7. Modal History Transaksi
![History Transaksi]<img width="1893" height="916" alt="Screenshot 2026-11-05 081656" src="https://github.com/user-attachments/assets/5c46fe9e-90f7-486c-9813-50a7ebc708cd" />


**Penjelasan:** Kartu **History Transaksi** membuka modal berisi tabel seluruh transaksi: nomor DO, tanggal, pemesan, ekspedisi, total, dan status. Isinya gabungan data dari `dataTracking` dan pesanan baru yang dibuat lewat halaman Pemesanan, dengan transaksi terbaru di bagian atas.

---

### C. Informasi Stok / Katalog

#### 8. Tabel katalog buku
![Katalog Buku]!<img width="1899" height="915" alt="Screenshot 2026-11-05 082256" src="https://github.com/user-attachments/assets/553c57ef-87a7-4f23-a573-2f6dd99dd7e4" />



**Penjelasan:** Halaman `stok.html` menampilkan tabel yang **dibuat dinamis** dari variabel `dataKatalogBuku`: sampul, kode, nama barang, jenis, edisi, stok, harga, dan tombol Hapus. Stok di bawah 200 diberi label merah **"(menipis)"**. Di atas tabel terdapat ringkasan jumlah judul dan total stok, serta kolom pencarian yang menyaring tabel secara langsung saat mengetik (berdasarkan nama, jenis, atau kode).

#### 9. Validasi form tambah stok
![Validasi tambah stok]<img width="1892" height="916" alt="Screenshot 2026-11-05 082345" src="https://github.com/user-attachments/assets/d66567a1-a470-45f2-9bdb-4267951f9cde" />

**Penjelasan:** Form **Tambah stok baru** divalidasi sebelum data disimpan. Kode harus berformat 4 huruf diikuti 4 angka (contoh `ASIP4302`) dan tidak boleh sama dengan kode yang sudah ada. Nama minimal 3 karakter, jenis harus dipilih, edisi minimal 1, harga lebih dari 0, dan stok berupa bilangan bulat tidak negatif. Kolom yang salah diberi garis merah dan pesan penjelasan. Kolom sampul bersifat opsional, hanya menerima gambar dengan ukuran maksimal 500 KB.

#### 10. Baris stok baru berhasil ditambahkan
![Stok baru ditambahkan]<img width="1884" height="908" alt="image" src="https://github.com/user-attachments/assets/73a0d9a4-a558-4b19-9b4d-abfb795ae360" />


**Penjelasan:** Setelah semua validasi lolos, baris baru **dibuat dengan JavaScript DOM** (`document.createElement` untuk `tr`, `td`, `img`, dan tombol), lalu ditambahkan ke tabel tanpa memuat ulang halaman. Muncul alert konfirmasi, dan data disimpan di `localStorage` sehingga tidak hilang saat halaman di-refresh. Tombol **Reset data awal** mengembalikan katalog ke data asli milik dosen.

---

### D. Halaman Pemesanan

#### 11. Keranjang dan perhitungan total
![Keranjang pemesanan]
<img width="1884" height="901" alt="Screenshot 2026-11-05 085537" src="https://github.com/user-attachments/assets/886be549-556e-44d6-851a-aab521108312" />
<img width="1896" height="912" alt="Screenshot 2026-11-05 085552" src="https://github.com/user-attachments/assets/f1b50ea9-b1ec-43bc-b1f7-29b9e2263346" />
<img width="1873" height="910" alt="Screenshot 2026-11-05 085604" src="https://github.com/user-attachments/assets/8454e5a7-36e4-42f8-8f7e-4e858418bb77" />


**Penjelasan:** Halaman `checkout.html` terdiri dari dua bagian. Bagian kiri adalah **keranjang**: pilih buku dari katalog, isi jumlah, lalu klik Tambah. Jumlah pada keranjang dapat diubah langsung dan item dapat dihapus. Sistem menolak jumlah yang melebihi stok. Subtotal, ongkos kirim, dan total bayar dihitung otomatis. Ongkos kirim mengikuti jenis paket: Reguler Rp 15.000, Express Rp 30.000, dan Same Day Rp 50.000.

#### 12. Validasi form data pemesan
![Validasi pemesanan]
<img width="1884" height="897" alt="image" src="https://github.com/user-attachments/assets/5e0488e4-6061-44f8-a455-5b8d2ee0ea8e" />
<img width="1873" height="910" alt="Screenshot 2026-11-05 085604" src="https://github.com/user-attachments/assets/9d479b5d-216c-4c47-a9d6-f639d654d915" />



**Penjelasan:** Bagian kanan berisi data pemesan dan pembayaran: nama, email, nomor HP, alamat, ekspedisi, jenis paket, dan metode pembayaran. Semua kolom divalidasi: nomor HP harus berformat Indonesia (diawali 08, 62, atau +62), alamat minimal 10 karakter, dan pilihan dropdown wajib diisi. Jika keranjang masih kosong saat menekan **Pesan sekarang**, muncul alert agar pengguna menambahkan buku terlebih dahulu.

#### 13. Modal pesanan berhasil
![Pesanan berhasil]<img width="1895" height="902" alt="image" src="https://github.com/user-attachments/assets/17e9899a-7d22-4289-a050-6ab92d0a5fe4" />


**Penjelasan:** Setelah pesanan sah, sistem membuat **Nomor Delivery Order** unik (diawali `2026` diikuti 4 angka acak), menyimpan pesanan ke `localStorage`, dan **mengurangi stok** buku yang dipesan. Modal menampilkan nomor DO dan total pembayaran. Tombol **Lacak pesanan** membuka halaman Tracking dengan nomor tersebut sudah terisi.

---

### E. Informasi Pengiriman

#### 14. Hasil pencarian (status dalam perjalanan)
![Tracking dalam perjalanan<img width="1889" height="905" alt="image" src="https://github.com/user-attachments/assets/96ca30cb-424e-46f7-81a9-839730bcbacc" />


**Penjelasan:** Halaman `tracking.html` menerima input nomor DO. Contoh di atas memakai `20230012` (milik Rina Wulandari). Setelah tombol **Cari** ditekan, ditampilkan nama pemesan, **progress bar** empat tahap (Diproses, Dikemas, Dalam Perjalanan, Terkirim) yang terisi sesuai status, serta detail ekspedisi, tanggal kirim, jenis paket, dan total pembayaran. Di bagian bawah terdapat **riwayat perjalanan paket** berbentuk timeline dengan kejadian terbaru di paling atas, diambil dari data `perjalanan` pada `data.js`.

#### 15. Hasil pencarian (pengiriman selesai)
![Tracking selesai]<img width="1919" height="925" alt="Screenshot 2026-11-05 084152" src="https://github.com/user-attachments/assets/0ce762c5-006e-4400-ae86-b0a4b3f39526" />


**Penjelasan:** Contoh dengan nomor `20230013` (milik Agus Pranoto). Karena riwayat terakhirnya berisi "Selesai Antar", progress bar penuh dan berubah warna menjadi **hijau** untuk menandakan paket sudah diterima. Perbedaan warna dan persentase ini menunjukkan simulasi status pengiriman sesuai permintaan soal.

#### 16. Nomor DO tidak ditemukan
![Tracking tidak ditemukan]<img width="1918" height="926" alt="Screenshot 2026-11-05 083015" src="https://github.com/user-attachments/assets/5c64ca7b-5a98-4b0c-a6e9-fd49811b36ed" />


**Penjelasan:** Jika nomor yang dimasukkan tidak ada di data, muncul kotak peringatan merah berisi *"Nomor DO ... tidak ditemukan"*. Jika kolom dibiarkan kosong, muncul pesan *"Nomor Delivery Order wajib diisi"* di bawah kolom input.

---



<p align="center">Dibuat untuk Tugas UTS Pemrograman Web 1 · 2026</p>
