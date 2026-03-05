# 🏍️ Sistem Informasi Penjualan Motor - Rizal Motor

Website sistem informasi penjualan motor untuk Showroom Rizal Motor di Cimerak, Pangandaran.
Dibuat dengan HTML, CSS (Tailwind), dan JavaScript.

![Website Preview](images/honda-beat.jpg)

---

## 🌐 Live Website

**URL**: https://rizal-motor-cimerak.netlify.app

---

## 📋 Informasi Showroom

| Informasi | Detail |
|-----------|--------|
| **Nama** | Rizal Motor |
| **Alamat** | Dusun Cidadap, Desa Cimerak, Kecamatan Cimerak, Kabupaten Pangandaran |
| **Telepon/WhatsApp** | 0857-2424-7488 |
| **Email** | rizalmotor.cimerak@gmail.com |
| **Jam Operasional** | Senin-Sabtu: 08.00-17.00, Minggu: 09.00-15.00 |

---

## ✨ Fitur Website

### 1. 🏠 Halaman Utama (Hero)
- Tampilan menarik dengan gradient merah
- Informasi showroom lengkap
- Tombol aksi cepat
- Responsive design

### 2. 📦 Katalog Motor
- 5 motor dengan harga terbaik:
  - Honda Beat CBS - Rp 18.500.000
  - Honda Vario 125 - Rp 22.500.000
  - Honda Revo X - Rp 16.500.000
  - Suzuki Address 110 - Rp 18.000.000
  - Yamaha Jupiter Z1 - Rp 19.500.000
- Filter kategori (Semua/Matic/Bebek)
- Spesifikasi detail
- Modal detail motor
- Tombol pemesanan WhatsApp

### 3. 💰 Simulasi Kredit
- Kalkulator cicilan otomatis
- Pilihan DP fleksibel
- Tenor: 12, 24, 36 bulan
- Perhitungan bunga transparan

### 4. ℹ️ Tentang Kami
- Profil showroom
- Visi & Misi
- Keunggulan layanan
- Statistik (10+ tahun, 5000+ pelanggan)

### 5. 📞 Kontak
- Form kontak terintegrasi WhatsApp
- Informasi lengkap
- Link Google Maps
- Jam operasional

---

## 🛠️ Teknologi

| Teknologi | Penggunaan |
|-----------|------------|
| **HTML5** | Struktur halaman |
| **Tailwind CSS** | Styling (via CDN) |
| **JavaScript** | Interaktivitas |
| **Lucide Icons** | Icon library |
| **Google Fonts** | Font Inter |

---

## 📁 Struktur Folder

```
rizal-motor-html/
├── index.html              # Halaman utama
├── css/
│   └── style.css          # Custom CSS
├── js/
│   └── main.js            # JavaScript
├── images/                 # Gambar motor
│   
│   
│   
│   
│  
├── README.md              # File ini
└── DOKUMENTASI-LENGKAP.md # Dokumentasi lengkap
```

---

## 🚀 Cara Menjalankan

### Cara 1: Buka Langsung
1. Double-click file `index.html`
2. Website terbuka di browser

### Cara 2: Live Server (VS Code)
1. Install extension "Live Server"
2. Klik kanan `index.html`
3. Pilih "Open with Live Server"

### Cara 3: Python Server
```bash
cd rizal-motor-html
python -m http.server 8000
```
Buka: http://localhost:8000

---

## 🌐 Cara Deploy ke Hosting Gratis

### Opsi 1: Netlify (Paling Mudah)
1. Buka https://app.netlify.com/drop
2. Drag folder `rizal-motor-html/` ke browser
3. Website langsung live!

### Opsi 2: GitHub Pages
1. Buat repository di GitHub
2. Upload semua file
3. Aktifkan GitHub Pages di Settings
4. Website live di `username.github.io/repo-name`

### Opsi 3: Vercel
```bash
npm install -g vercel
vercel --prod
```

---

## 🔄 Cara Update Website

### Update Harga Motor
Edit file `js/main.js`:
```javascript
const motors = [
    {
        id: 1,
        nama: "Honda Beat CBS",
        hargaCash: 18500000,  // ← Update harga di sini
        // ...
    }
];
```

### Update Nomor Telepon
Ganti semua `085724247488` di:
- `index.html`
- `js/main.js`

### Update Alamat
Edit di `index.html` bagian Kontak section.

---

## 📱 Motor yang Dijual

| Motor | Harga Cash | DP Minimal | Cicilan (24x) |
|-------|------------|------------|---------------|
| Honda Beat CBS | Rp 18.500.000 | Rp 2.500.000 | Rp 750.000 |
| Honda Vario 125 | Rp 22.500.000 | Rp 3.000.000 | Rp 950.000 |
| Honda Revo X | Rp 16.500.000 | Rp 2.000.000 | Rp 720.000 |
| Suzuki Address 110 | Rp 18.000.000 | Rp 2.400.000 | Rp 790.000 |
| Yamaha Jupiter Z1 | Rp 19.500.000 | Rp 2.500.000 | Rp 850.000 |

---

## 📞 Kontak

- **WhatsApp**: [0857-2424-7488](https://wa.me/6285724247488)
- **Alamat**: Dusun Cidadap, Desa Cimerak, Kecamatan Cimerak, Kabupaten Pangandaran

---

## 📄 Dokumentasi

Lihat file `DOKUMENTASI-LENGKAP.md` untuk panduan lengkap:
- Langkah pembuatan dari awal
- Penjelasan kode
- Cara deploy
- Troubleshooting

---

## 📝 Lisensi

© mifganteng. All rights reserved.

---

**Dibuat dengan ❤️ untuk Showroom Rizal Motor**
