/* script.js - logika semua halaman (dipilih lewat <body data-page="...">) */
const $ = (s, r = document) => r.querySelector(s);
const rupiah = n => "Rp " + Number(n).toLocaleString("id-ID");
const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch (e) { return d; } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
};
const page = document.body.dataset.page;
const sesi = store.get("sesi", null);
const semuaUser = () => dataUsers.concat(store.get("usersBaru", []));
const semuaTransaksi = () => store.get("transaksiBaru", []).concat(dataTransaksi);
const getKatalog = () => store.get("katalog", dataKatalogBuku.map(b => ({ ...b })));

/* ---------- Guard login ---------- */
if (page !== "login" && !sesi) location.href = "index.html";

/* ---------- Validasi & modal ---------- */
function cek(el, ok, pesan) {
  const s = el.parentElement.querySelector(".err");
  if (s) s.textContent = ok ? "" : pesan;
  el.classList.toggle("invalid", !ok);
  return ok;
}
function bukaModal(judul, html, lebar) {
  tutupModal();
  const o = document.createElement("div");
  o.className = "modal-overlay"; o.id = "modal";
  o.innerHTML = `<div class="modal ${lebar ? "lebar" : ""}" role="dialog" aria-modal="true" aria-label="${esc(judul)}">
    <button class="modal-close" aria-label="Tutup">&times;</button><h2>${esc(judul)}</h2>${html}</div>`;
  document.body.appendChild(o);
  o.addEventListener("click", e => { if (e.target === o || e.target.classList.contains("modal-close")) tutupModal(); });
  const f = o.querySelector("input,a.btn"); if (f) f.focus();
  return o.querySelector(".modal");
}
function tutupModal() { const m = $("#modal"); if (m) m.remove(); }
document.addEventListener("keydown", e => { if (e.key === "Escape") tutupModal(); });

const btnLogout = $("#btnLogout");
if (btnLogout) btnLogout.addEventListener("click", () => {
  if (confirm("Yakin ingin keluar?")) { localStorage.removeItem("sesi"); location.href = "index.html"; }
});

/* =========================================================
   HALAMAN LOGIN
   ========================================================= */
if (page === "login") {
  if (sesi) location.href = "dashboard.html";
  const emailRe = /^\S+@\S+\.\S+$/;

  $("#formLogin").addEventListener("submit", e => {
    e.preventDefault();
    const em = $("#email"), pw = $("#password");
    const ok = cek(em, emailRe.test(em.value.trim()), "Format email tidak valid") &
               cek(pw, pw.value.length > 0, "Password wajib diisi");
    if (!ok) return;
    const u = semuaUser().find(x => x.email === em.value.trim().toLowerCase() && x.password === pw.value);
    if (!u) { alert("Email/password yang Anda masukkan salah"); return; }
    store.set("sesi", { nama: u.nama, email: u.email });
    location.href = "dashboard.html";
  });

  $("#btnLupa").addEventListener("click", () => {
    const m = bukaModal("Lupa Password", `<form id="formLupa" novalidate>
      <p style="margin-bottom:12px">Masukkan email terdaftar. Kami akan mengirim tautan reset (simulasi).</p>
      <div class="field"><label for="emailLupa">Email</label><input id="emailLupa" type="email"><span class="err"></span></div>
      <button class="btn" type="submit">Kirim tautan reset</button></form>`);
    $("#formLupa", m).addEventListener("submit", ev => {
      ev.preventDefault();
      const el = $("#emailLupa");
      if (!cek(el, emailRe.test(el.value.trim()), "Format email tidak valid")) return;
      if (semuaUser().some(x => x.email === el.value.trim().toLowerCase())) {
        tutupModal(); alert("Tautan reset password telah dikirim ke " + el.value.trim());
      } else cek(el, false, "Email belum terdaftar");
    });
  });

  $("#btnDaftar").addEventListener("click", () => {
    const m = bukaModal("Daftar Akun Baru", `<form id="formDaftar" novalidate>
      <div class="field"><label for="dNama">Nama lengkap</label><input id="dNama"><span class="err"></span></div>
      <div class="field"><label for="dEmail">Email</label><input id="dEmail" type="email"><span class="err"></span></div>
      <div class="field"><label for="dPw">Password (min. 6 karakter)</label><input id="dPw" type="password"><span class="err"></span></div>
      <div class="field"><label for="dPw2">Ulangi password</label><input id="dPw2" type="password"><span class="err"></span></div>
      <button class="btn" type="submit">Daftar</button></form>`);
    $("#formDaftar", m).addEventListener("submit", ev => {
      ev.preventDefault();
      const n = $("#dNama"), em = $("#dEmail"), p = $("#dPw"), p2 = $("#dPw2");
      const email = em.value.trim().toLowerCase();
      const ok = cek(n, n.value.trim().length >= 3, "Nama minimal 3 karakter") &
        cek(em, emailRe.test(email) && !semuaUser().some(x => x.email === email),
            emailRe.test(email) ? "Email sudah terdaftar" : "Format email tidak valid") &
        cek(p, p.value.length >= 6, "Password minimal 6 karakter") &
        cek(p2, p2.value === p.value && p2.value !== "", "Konfirmasi password tidak sama");
      if (!ok) return;
      const baru = store.get("usersBaru", []);
      baru.push({ nama: n.value.trim(), email, password: p.value });
      store.set("usersBaru", baru);
      tutupModal(); alert("Pendaftaran berhasil! Silakan login.");
    });
  });
}

/* =========================================================
   DASHBOARD
   ========================================================= */
if (page === "dashboard") {
  const jam = new Date().getHours();
  const waktu = jam < 11 ? "Pagi" : jam < 15 ? "Siang" : jam < 18 ? "Sore" : "Malam";
  $("#greeting").textContent = `Selamat ${waktu}, ${sesi.nama}!`;
  $("#tanggal").textContent = new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  const tabelTransaksi = list => `<div class="tabel-wrap"><table><thead><tr><th>No. DO</th><th>Tanggal</th><th>Pemesan</th><th>Item</th><th>Total</th><th>Status</th></tr></thead><tbody>${
    list.map(t => `<tr><td>${esc(t.noDO)}</td><td>${esc(t.tanggal)}</td><td>${esc(t.nama)}</td><td>${esc(t.item)}</td><td>${rupiah(t.total)}</td><td>${langkahStatus[t.status]}</td></tr>`).join("")
  }</tbody></table></div>`;

  $("#btnLaporan").addEventListener("click", () => {
    const t = semuaTransaksi();
    const omzet = t.reduce((a, x) => a + x.total, 0);
    const perStatus = langkahStatus.map((s, i) => `<tr><td>${s}</td><td>${t.filter(x => x.status === i).length} pesanan</td><td>${rupiah(t.filter(x => x.status === i).reduce((a, x) => a + x.total, 0))}</td></tr>`).join("");
    bukaModal("Laporan Pemesanan", `<div class="ringkas"><div>Total pesanan<strong>${t.length}</strong></div><div>Total nilai<strong>${rupiah(omzet)}</strong></div><div>Rata-rata<strong>${rupiah(Math.round(omzet / (t.length || 1)))}</strong></div></div>
      <table><thead><tr><th>Status</th><th>Jumlah</th><th>Nilai</th></tr></thead><tbody>${perStatus}</tbody></table>`);
  });
  $("#btnHistory").addEventListener("click", () => bukaModal("History Transaksi", tabelTransaksi(semuaTransaksi()), true));
}

/* =========================================================
   STOK / KATALOG
   ========================================================= */
if (page === "stok") {
  let katalog = getKatalog();
  const tbody = $("#tbodyStok");

  function buatBaris(b) {
    const tr = document.createElement("tr");
    const tdCover = document.createElement("td");
    const img = document.createElement("img");
    img.className = "sampul"; img.alt = "Sampul " + b.judul;
    img.onerror = () => { const ph = document.createElement("span"); ph.className = "sampul-ph"; ph.textContent = "📘"; img.replaceWith(ph); };
    if (b.gambar) img.src = b.gambar; else img.onerror();
    tdCover.appendChild(img);
    tr.appendChild(tdCover);
    [b.kode, b.judul, b.kategori, rupiah(b.harga)].forEach(v => { const td = document.createElement("td"); td.textContent = v; tr.appendChild(td); });
    const tdStok = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = "badge" + (b.stok < 10 ? " rendah" : "");
    badge.textContent = b.stok + (b.stok < 10 ? " (menipis)" : "");
    tdStok.appendChild(badge); tr.appendChild(tdStok);
    const tdAksi = document.createElement("td");
    const hapus = document.createElement("button");
    hapus.className = "btn bahaya kecil"; hapus.textContent = "Hapus";
    hapus.addEventListener("click", () => {
      if (!confirm(`Hapus "${b.judul}" dari katalog?`)) return;
      katalog = katalog.filter(x => x.kode !== b.kode); store.set("katalog", katalog); render();
    });
    tdAksi.appendChild(hapus); tr.appendChild(tdAksi);
    return tr;
  }
  function render() {
    const q = $("#cariBuku").value.trim().toLowerCase();
    tbody.innerHTML = "";
    const data = katalog.filter(b => (b.judul + b.kategori + b.kode).toLowerCase().includes(q));
    if (!data.length) tbody.innerHTML = `<tr><td colspan="7" class="kosong">Tidak ada buku yang cocok.</td></tr>`;
    data.forEach(b => tbody.appendChild(buatBaris(b)));
    $("#jumlahBuku").textContent = `${data.length} judul • total stok ${data.reduce((a, b) => a + b.stok, 0)} eksemplar`;
  }
  $("#cariBuku").addEventListener("input", render);

  $("#formStok").addEventListener("submit", e => {
    e.preventDefault();
    const kode = $("#sKode"), judul = $("#sJudul"), kat = $("#sKategori"), harga = $("#sHarga"), stok = $("#sStok");
    const ok = cek(kode, /^[A-Za-z]{2}-\d{3}$/.test(kode.value.trim()) && !katalog.some(b => b.kode.toLowerCase() === kode.value.trim().toLowerCase()), "Kode format BK-009 dan harus unik") &
      cek(judul, judul.value.trim().length >= 3, "Judul minimal 3 karakter") &
      cek(kat, kat.value !== "", "Pilih kategori") &
      cek(harga, Number(harga.value) > 0, "Harga harus lebih dari 0") &
      cek(stok, stok.value !== "" && Number(stok.value) >= 0 && Number.isInteger(Number(stok.value)), "Stok harus bilangan bulat ≥ 0");
    if (!ok) return;
    katalog.push({ kode: kode.value.trim().toUpperCase(), judul: judul.value.trim(), kategori: kat.value, harga: Number(harga.value), stok: Number(stok.value), gambar: "" });
    store.set("katalog", katalog);
    e.target.reset(); render();
    alert("Stok buku baru berhasil ditambahkan.");
  });
  $("#btnReset").addEventListener("click", () => {
    if (confirm("Kembalikan katalog ke data awal?")) { localStorage.removeItem("katalog"); katalog = getKatalog(); render(); }
  });
  render();
}

/* =========================================================
   CHECKOUT / PEMESANAN
   ========================================================= */
if (page === "checkout") {
  let katalog = getKatalog();
  let keranjang = []; // { kode, qty }
  const pilih = $("#pilihBuku");
  const isiPilihan = () => { pilih.innerHTML = `<option value="">-- Pilih buku --</option>` + katalog.map(b => `<option value="${esc(b.kode)}">${esc(b.judul)} (${rupiah(b.harga)}, stok ${b.stok})</option>`).join(""); };
  isiPilihan();
  const cari = k => katalog.find(b => b.kode === k);
  const ongkir = () => tarifOngkir[$("#paket").value] || 0;

  function renderKeranjang() {
    const tb = $("#tbodyKeranjang");
    tb.innerHTML = "";
    if (!keranjang.length) tb.innerHTML = `<tr><td colspan="5" class="kosong">Keranjang masih kosong. Pilih buku lalu klik Tambah.</td></tr>`;
    keranjang.forEach(it => {
      const b = cari(it.kode);
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${esc(b.judul)}</td><td>${rupiah(b.harga)}</td>
        <td><input class="qty" type="number" min="1" max="${b.stok}" value="${it.qty}" aria-label="Jumlah ${esc(b.judul)}"></td>
        <td>${rupiah(b.harga * it.qty)}</td><td><button class="btn bahaya kecil" type="button">Hapus</button></td>`;
      $("input", tr).addEventListener("change", ev => {
        let q = parseInt(ev.target.value, 10);
        if (!q || q < 1) q = 1;
        if (q > b.stok) { alert(`Stok "${b.judul}" hanya ${b.stok}.`); q = b.stok; }
        it.qty = q; renderKeranjang();
      });
      $("button", tr).addEventListener("click", () => { keranjang = keranjang.filter(x => x !== it); renderKeranjang(); });
      tb.appendChild(tr);
    });
    hitung();
  }
  function hitung() {
    const sub = keranjang.reduce((a, it) => a + cari(it.kode).harga * it.qty, 0);
    const ong = keranjang.length ? ongkir() : 0;
    $("#subtotal").textContent = rupiah(sub);
    $("#ongkir").textContent = rupiah(ong);
    $("#grand").textContent = rupiah(sub + ong);
    return sub + ong;
  }
  $("#paket").addEventListener("change", hitung);

  $("#btnTambah").addEventListener("click", () => {
    const qty = $("#qtyBuku");
    const ok = cek(pilih, pilih.value !== "", "Pilih buku dulu") & cek(qty, Number(qty.value) >= 1, "Jumlah minimal 1");
    if (!ok) return;
    const b = cari(pilih.value);
    const ada = keranjang.find(x => x.kode === b.kode);
    const total = (ada ? ada.qty : 0) + Number(qty.value);
    if (total > b.stok) { alert(`Stok "${b.judul}" tidak cukup (tersisa ${b.stok}).`); return; }
    if (ada) ada.qty = total; else keranjang.push({ kode: b.kode, qty: Number(qty.value) });
    pilih.value = ""; qty.value = 1; renderKeranjang();
  });

  $("#formPesan").addEventListener("submit", e => {
    e.preventDefault();
    const f = id => $("#" + id);
    const ok = cek(f("nama"), f("nama").value.trim().length >= 3, "Nama minimal 3 karakter") &
      cek(f("emailP"), /^\S+@\S+\.\S+$/.test(f("emailP").value.trim()), "Format email tidak valid") &
      cek(f("telp"), /^(\+62|62|0)8\d{7,12}$/.test(f("telp").value.trim()), "Nomor HP tidak valid (contoh 081234567890)") &
      cek(f("alamat"), f("alamat").value.trim().length >= 10, "Alamat minimal 10 karakter") &
      cek(f("ekspedisi"), f("ekspedisi").value !== "", "Pilih ekspedisi") &
      cek(f("paket"), f("paket").value !== "", "Pilih jenis paket") &
      cek(f("metode"), f("metode").value !== "", "Pilih metode pembayaran");
    if (!ok) return;
    if (!keranjang.length) { alert("Keranjang masih kosong. Tambahkan minimal satu buku."); return; }

    const total = hitung();
    const baru = store.get("transaksiBaru", []);
    const noDO = "DO-2026-" + String(dataTransaksi.length + baru.length + 1).padStart(4, "0");
    baru.unshift({
      noDO, tanggal: new Date().toISOString().slice(0, 10), nama: f("nama").value.trim(),
      ekspedisi: f("ekspedisi").value, paket: f("paket").value, metode: f("metode").value, total, status: 0,
      item: keranjang.map(it => `${cari(it.kode).judul} x${it.qty}`).join(", ")
    });
    store.set("transaksiBaru", baru);
    keranjang.forEach(it => { cari(it.kode).stok -= it.qty; });
    store.set("katalog", katalog);

    keranjang = []; e.target.reset(); renderKeranjang(); isiPilihan();
    bukaModal("Pesanan Berhasil", `<p>Terima kasih! Nomor Delivery Order Anda:</p>
      <p style="font-size:1.4rem;font-weight:bold;margin:10px 0">${noDO}</p>
      <p style="margin-bottom:14px">Total pembayaran: <strong>${rupiah(total)}</strong>. Gunakan nomor ini di halaman Tracking.</p>
      <a class="btn" href="tracking.html?do=${noDO}">Lacak pesanan</a>`);
  });
  renderKeranjang();
}

/* =========================================================
   TRACKING
   ========================================================= */
if (page === "tracking") {
  function cariDO() {
    const input = $("#noDO"), hasil = $("#hasil");
    const no = input.value.trim().toUpperCase();
    if (!cek(input, no !== "", "Nomor Delivery Order wajib diisi")) { hasil.innerHTML = ""; return; }
    const t = semuaTransaksi().find(x => x.noDO.toUpperCase() === no);
    if (!t) { hasil.innerHTML = `<div class="notif" role="alert">Nomor DO <strong>${esc(no)}</strong> tidak ditemukan. Periksa kembali nomornya.</div>`; return; }
    const persen = Math.round((t.status / (langkahStatus.length - 1)) * 100);
    hasil.innerHTML = `<div class="card"><h2>${esc(t.noDO)}</h2>
      <p>Pemesan: <strong>${esc(t.nama)}</strong></p>
      <div class="progress ${t.status === 3 ? "selesai" : ""}" role="progressbar" aria-valuenow="${persen}" aria-valuemin="0" aria-valuemax="100"><div style="width:${persen}%"></div></div>
      <div class="langkah">${langkahStatus.map((s, i) => `<div class="${i <= t.status ? "on" : ""}">${i <= t.status ? "✔ " : ""}${s}</div>`).join("")}</div>
      <dl class="detail">
        <dt>Status</dt><dd><strong>${langkahStatus[t.status]}</strong></dd>
        <dt>Ekspedisi</dt><dd>${esc(t.ekspedisi)}</dd>
        <dt>Tanggal kirim</dt><dd>${new Date(t.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</dd>
        <dt>Jenis paket</dt><dd>${esc(t.paket)}</dd>
        <dt>Isi pesanan</dt><dd>${esc(t.item)}</dd>
        <dt>Pembayaran</dt><dd>${esc(t.metode)}</dd>
        <dt>Total pembayaran</dt><dd><strong>${rupiah(t.total)}</strong></dd>
      </dl></div>`;
  }
  $("#formCari").addEventListener("submit", e => { e.preventDefault(); cariDO(); });
  const q = new URLSearchParams(location.search).get("do");
  if (q) { $("#noDO").value = q; cariDO(); }
}