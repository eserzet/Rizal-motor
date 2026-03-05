# Dokumentasi Lengkap: Sistem Informasi Penjualan Motor Berbasis Web

## Showroom Rizal Motor - Cimerak, Pangandaran

---

## 📋 Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur Website](#fitur-website)
3. [Struktur File](#struktur-file)
4. [Langkah 1: Persiapan](#langkah-1-persiapan)
5. [Langkah 2: Membuat File HTML](#langkah-2-membuat-file-html)
6. [Langkah 3: Membuat File CSS](#langkah-3-membuat-file-css)
7. [Langkah 4: Membuat File JavaScript](#langkah-4-membuat-file-javascript)
8. [Langkah 5: Menambahkan Gambar](#langkah-5-menambahkan-gambar)
9. [Langkah 6: Testing Lokal](#langkah-6-testing-lokal)
10. [Langkah 7: Deploy ke Hosting Gratis](#langkah-7-deploy-ke-hosting-gratis)
11. [Cara Mengupdate Website](#cara-mengupdate-website)
12. [Troubleshooting](#troubleshooting)

---

## Pendahuluan

Website ini dibuat untuk **Showroom Rizal Motor** dengan teknologi:
- **HTML5** - Struktur halaman
- **CSS3** - Styling dengan Tailwind CSS
- **JavaScript** - Interaktivitas

**Informasi Showroom:**
- **Nama**: Rizal Motor
- **Alamat**: Dusun Cidadap, Desa Cimerak, Kecamatan Cimerak, Kabupaten Pangandaran
- **Telepon/WhatsApp**: 0857-2424-7488
- **Fokus**: Motor murah (Honda Beat prioritas)

---

## Fitur Website

### 1. 🏠 **Hero Section**
- Tampilan menarik dengan gradient merah
- Informasi showroom lengkap
- Tombol CTA (Lihat Katalog & Hubungi Kami)
- Info kontak cepat

### 2. 📦 **Katalog Motor**
- 5 motor dengan harga terbaik
- Filter kategori (Semua/Matic/Bebek)
- Spesifikasi lengkap
- Modal detail motor
- Tombol pemesanan WhatsApp

### 3. 💰 **Simulasi Kredit**
- Kalkulator cicilan otomatis
- Pilihan DP fleksibel
- Tenor: 12, 24, 36 bulan
- Perhitungan bunga transparan

### 4. ℹ️ **Tentang Kami**
- Profil showroom
- Visi & Misi
- Keunggulan layanan
- Statistik

### 5. 📞 **Kontak**
- Form kontak terintegrasi WhatsApp
- Informasi lengkap
- Link Google Maps
- Jam operasional

### 6. 🔻 **Footer**
- Navigasi cepat
- Sosial media
- Floating WhatsApp button

---

## Struktur File

```
rizal-motor-html/
├── index.html              # File utama HTML
├── css/
│   └── style.css          # Custom CSS
├── js/
│   └── main.js            # JavaScript interaktivitas
├── images/                 # Folder gambar motor
│   ├── honda-beat.jpg
│   ├── honda-vario.webp
│   ├── honda-revo.jpg
│   ├── suzuki-address.jpg
│   └── yamaha-jupiter.jpg
└── DOKUMENTASI-LENGKAP.md  # File ini
```

---

## Langkah 1: Persiapan

### 1.1 Buat Folder Project
```bash
mkdir rizal-motor-html
cd rizal-motor-html
mkdir css js images
```

### 1.2 Tools yang Dibutuhkan
- **Text Editor**: VS Code, Sublime Text, atau Notepad++
- **Browser**: Chrome, Firefox, atau Edge
- **Koneksi Internet**: Untuk CDN resources

---

## Langkah 2: Membuat File HTML

### 2.1 Buat File index.html
```bash
touch index.html
```

### 2.2 Struktur Dasar HTML
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rizal Motor - Showroom Motor Terpercaya</title>
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <!-- Hero Section -->
    <!-- Katalog Section -->
    <!-- Simulasi Kredit Section -->
    <!-- Tentang Kami Section -->
    <!-- Kontak Section -->
    <!-- Footer -->
    
    <script src="js/main.js"></script>
</body>
</html>
```

### 2.3 Penjelasan Tag Penting

| Tag | Fungsi |
|-----|--------|
| `<!DOCTYPE html>` | Mendeklarasikan dokumen HTML5 |
| `<meta charset="UTF-8">` | Mendukung karakter Unicode |
| `<meta viewport>` | Responsive di mobile |
| `<title>` | Judul halaman di browser |
| `<script src>` | Memuat JavaScript external |
| `<link rel="stylesheet">` | Memuat CSS external |

---

## Langkah 3: Membuat File CSS

### 3.1 Buat File style.css
```bash
touch css/style.css
```

### 3.2 CSS yang Dibutuhkan
```css
/* Smooth Scroll */
html {
    scroll-behavior: smooth;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-thumb {
    background: #dc2626;
    border-radius: 4px;
}

/* Navbar Scroll Effect */
#navbar.scrolled {
    background: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Card Hover Effects */
.motor-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

---

## Langkah 4: Membuat File JavaScript

### 4.1 Buat File main.js
```bash
touch js/main.js
```

### 4.2 Fungsi-fungsi Utama

#### Data Motor
```javascript
const motors = [
    {
        id: 1,
        nama: "Honda Beat CBS",
        hargaCash: 18500000,
        gambar: "images/honda-beat.jpg",
        kategori: "matic"
    },
    // ... motor lainnya
];
```

#### Format Rupiah
```javascript
function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(angka);
}
```

#### Filter Motor
```javascript
function filterMotor(kategori) {
    const filtered = kategori === 'semua' 
        ? motors 
        : motors.filter(m => m.kategori === kategori);
    // Render cards...
}
```

#### Simulasi Kredit
```javascript
function hitungCicilan() {
    const pokokHutang = hargaMotor - dp;
    const bungaTotal = pokokHutang * bungaRate * (tenor / 12);
    const cicilan = Math.ceil((pokokHutang + bungaTotal) / tenor);
    return cicilan;
}
```

---

## Langkah 5: Menambahkan Gambar

### 5.1 Download Gambar Motor
Sumber gambar gratis:
- https://www.honda.co.id/
- https://www.yamaha-motor.co.id/
- https://www.suzuki.co.id/

### 5.2 Optimasi Gambar
- Ukuran: 800x600px
- Format: JPG atau WebP
- Compress: https://tinypng.com/

### 5.3 Letakkan di Folder images/
```
images/
├── honda-beat.jpg
├── honda-vario.webp
├── honda-revo.jpg
├── suzuki-address.jpg
└── yamaha-jupiter.jpg
```

---

## Langkah 6: Testing Lokal

### 6.1 Buka File HTML
Cara 1: Double-click file `index.html`

Cara 2: Gunakan Live Server (VS Code Extension)
1. Install extension "Live Server"
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

Cara 3: Python Simple Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Buka browser: http://localhost:8000

### 6.2 Cek Responsive
- Buka di browser
- Tekan F12 (Developer Tools)
- Klik icon toggle device toolbar
- Pilih device (iPhone, Android, dll)

---

## Langkah 7: Deploy ke Hosting Gratis

### Opsi 1: Netlify (Paling Mudah & Rekomendasi)

#### Langkah-langkah:
1. **Kompres Folder**
   ```bash
   zip -r rizal-motor-html.zip rizal-motor-html/
   ```

2. **Upload ke Netlify**
   - Buka https://app.netlify.com/drop
   - Drag & drop folder `rizal-motor-html/`
   - Tunggu upload selesai
   - Website langsung live!

3. **Dapatkan URL**
   - URL akan seperti: `https://rizal-motor-123.netlify.app`
   - Copy dan bagikan!

#### Keunggulan Netlify:
- ✅ Gratis selamanya
- ✅ SSL otomatis (HTTPS)
- ✅ CDN global (cepat di mana saja)
- ✅ Custom domain gratis (.netlify.app)
- ✅ Tidak perlu daftar akun (drag & drop)

---

### Opsi 2: GitHub Pages

#### Langkah 1: Buat Akun GitHub
1. Buka https://github.com/signup
2. Daftar dengan email
3. Verifikasi akun

#### Langkah 2: Buat Repository
1. Klik tombol "+" → "New repository"
2. Nama repository: `rizal-motor`
3. Pilih "Public"
4. Klik "Create repository"

#### Langkah 3: Upload File
1. Klik "uploading an existing file"
2. Drag semua file project
3. Klik "Commit changes"

#### Langkah 4: Aktifkan GitHub Pages
1. Buka Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. Klik "Save"

#### Langkah 5: Akses Website
- URL: `https://username.github.io/rizal-motor`
- Tunggu 2-5 menit untuk deploy

---

### Opsi 3: Vercel

#### Langkah 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Langkah 2: Deploy
```bash
cd rizal-motor-html
vercel --prod
```

#### Langkah 3: Ikuti Instruksi
- Login dengan email/GitHub
- Konfirmasi project
- Tunggu deploy selesai

---

### Opsi 4: Surge.sh

#### Langkah 1: Install Surge
```bash
npm install -g surge
```

#### Langkah 2: Deploy
```bash
cd rizal-motor-html
surge
```

#### Langkah 3: Konfirmasi
- Email & password
- Domain (bisa custom)
- Done!

---

### Opsi 5: 000webhost

#### Langkah 1: Daftar
1. Buka https://www.000webhost.com/
2. Daftar akun gratis

#### Langkah 2: Upload
1. Login ke dashboard
2. Klik "Upload your first website"
3. Pilih "Upload files"
4. Upload semua file project

#### Langkah 3: Akses
- URL akan diberikan setelah upload

---

## Perbandingan Platform Hosting Gratis

| Platform | Kemudahan | Storage | Bandwidth | Custom Domain | Rekomendasi |
|----------|-----------|---------|-----------|---------------|-------------|
| **Netlify** | ⭐⭐⭐⭐⭐ | 100MB | 100GB/bulan | ✅ | **#1** |
| **GitHub Pages** | ⭐⭐⭐⭐ | 1GB | 100GB/bulan | ✅ | **#2** |
| **Vercel** | ⭐⭐⭐⭐ | 100MB | 100GB/bulan | ✅ | **#3** |
| **Surge.sh** | ⭐⭐⭐⭐⭐ | 200MB | Unlimited | ✅ | **#4** |
| **000webhost** | ⭐⭐⭐ | 300MB | 3GB/bulan | ✅ | **#5** |

---

## Cara Mengupdate Website

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
Cari dan ganti semua `085724247488` di:
- `index.html`
- `js/main.js`

### Update Alamat
Edit di `index.html` bagian Kontak section.

### Deploy Ulang
Setelah update, upload ulang ke hosting yang sama.

---

## Troubleshooting

### Gambar Tidak Muncul
**Solusi:**
1. Cek nama file (case sensitive)
2. Pastikan path benar: `images/nama-file.jpg`
3. Cek console browser (F12)

### CSS Tidak Berfungsi
**Solusi:**
1. Cek path: `css/style.css`
2. Clear browser cache (Ctrl+Shift+R)
3. Cek console untuk error

### JavaScript Error
**Solusi:**
1. Buka Developer Tools (F12)
2. Klik tab "Console"
3. Lihat pesan error
4. Perbaiki sesuai error

### Website Tidak Responsive
**Solusi:**
1. Pastikan ada meta viewport di `<head>`
2. Gunakan class Tailwind yang benar
3. Test di berbagai ukuran layar

### WhatsApp Link Tidak Berfungsi
**Solusi:**
1. Format: `https://wa.me/6285724247488`
2. Pastikan nomor diawali 62
3. Tanpa tanda + atau spasi

---

## Tips & Trik

### 1. Optimasi SEO
Tambahkan di `<head>`:
```html
<meta name="description" content="Showroom motor terpercaya di Cimerak, Pangandaran">
<meta name="keywords" content="motor, honda, yamaha, suzuki, cimerak, pangandaran">
```

### 2. Analytics Gratis
Tambahkan Google Analytics:
1. Buat akun di https://analytics.google.com
2. Dapatkan tracking ID
3. Tambahkan ke HTML

### 3. Custom Domain (Gratis)
**Freenom:**
1. Buka https://freenom.com
2. Cari domain .tk .ml .ga (gratis)
3. Hubungkan ke Netlify/GitHub Pages

### 4. Backup Berkala
- Simpan copy folder project
- Gunakan Git untuk version control
- Backup ke cloud (Google Drive, Dropbox)

---

## Link Penting

- **Tailwind CSS**: https://tailwindcss.com/
- **Lucide Icons**: https://lucide.dev/
- **Netlify**: https://www.netlify.com/
- **GitHub**: https://github.com/
- **Vercel**: https://vercel.com/
- **Google Fonts**: https://fonts.google.com/

---

## Checklist Sebelum Deploy

- [ ] Semua gambar sudah di-folder images/
- [ ] CSS dan JS sudah ter-link dengan benar
- [ ] Tidak ada error di console browser
- [ ] Website responsive di mobile
- [ ] Semua link berfungsi
- [ ] Form WhatsApp berfungsi
- [ ] Simulasi kredit berfungsi
- [ ] Filter motor berfungsi

---

## Kontak Support

Jika ada pertanyaan:
- **WhatsApp**: 0857-2424-7488
- **Email**: rizalmotor.cimerak@gmail.com

---

**Selamat Membuat Website! 🚀**

Dokumen ini dibuat untuk Showroom Rizal Motor
Tanggal: 22 Februari 2024
