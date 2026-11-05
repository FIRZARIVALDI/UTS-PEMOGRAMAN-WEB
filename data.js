// data.js - data dummy (pengganti database/server)
const dataUsers = [
  { nama: "Budi Santoso", email: "mahasiswa@email.com", password: "123456" },
  { nama: "Admin Toko", email: "admin@bukuku.id", password: "admin123" }
];

const dataKatalogBuku = [
  { kode: "BK-001", judul: "Pemrograman Web Dasar", kategori: "Teknologi", harga: 85000, stok: 24, gambar: "img/buku1.png" },
  { kode: "BK-002", judul: "JavaScript untuk Pemula", kategori: "Teknologi", harga: 92000, stok: 15, gambar: "img/buku2.png" },
  { kode: "BK-003", judul: "Desain Antarmuka Modern", kategori: "Desain", harga: 110000, stok: 8, gambar: "img/buku3.png" },
  { kode: "BK-004", judul: "Basis Data Relasional", kategori: "Teknologi", harga: 98000, stok: 12, gambar: "img/buku4.png" },
  { kode: "BK-005", judul: "Laskar Pelangi", kategori: "Novel", harga: 75000, stok: 30, gambar: "img/buku5.png" },
  { kode: "BK-006", judul: "Filosofi Kopi", kategori: "Novel", harga: 68000, stok: 5, gambar: "img/buku6.png" },
  { kode: "BK-007", judul: "Ekonomi Digital", kategori: "Bisnis", harga: 120000, stok: 18, gambar: "img/buku7.png" },
  { kode: "BK-008", judul: "Statistika Terapan", kategori: "Sains", harga: 105000, stok: 9, gambar: "img/buku8.png" }
];

// status: 0 = Diproses, 1 = Dikemas, 2 = Dikirim, 3 = Diterima
const dataTransaksi = [
  { noDO: "DO-2026-0001", tanggal: "2026-10-02", nama: "Budi Santoso", ekspedisi: "JNE", paket: "Reguler", metode: "Transfer Bank", total: 192000, status: 3, item: "Pemrograman Web Dasar x2" },
  { noDO: "DO-2026-0002", tanggal: "2026-10-15", nama: "Siti Aminah", ekspedisi: "J&T", paket: "Express", metode: "E-Wallet", total: 140000, status: 2, item: "Laskar Pelangi x1, Filosofi Kopi x1" },
  { noDO: "DO-2026-0003", tanggal: "2026-10-28", nama: "Andi Wijaya", ekspedisi: "SiCepat", paket: "Reguler", metode: "COD", total: 125000, status: 1, item: "Desain Antarmuka Modern x1" },
  { noDO: "DO-2026-0004", tanggal: "2026-11-01", nama: "Dewi Lestari", ekspedisi: "AnterAja", paket: "Same Day", metode: "Transfer Bank", total: 290000, status: 0, item: "Ekonomi Digital x2" },
  { noDO: "DO-2026-0005", tanggal: "2026-11-03", nama: "Rizky Pratama", ekspedisi: "JNE", paket: "Express", metode: "E-Wallet", total: 128000, status: 0, item: "Basis Data Relasional x1" }
];

const tarifOngkir = { "Reguler": 15000, "Express": 30000, "Same Day": 50000 };
const langkahStatus = ["Diproses", "Dikemas", "Dikirim", "Diterima"];