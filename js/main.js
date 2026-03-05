// Rizal Motor Website - Main JavaScript

// Data Motor
const motors = [
    {
        id: 1,
        nama: "Honda Beat CBS",
        merk: "Honda",
        hargaCash: 19300000,
        dp: 2000000,
        angsuran: 840000,
        tenor: 35,
        gambar: "images/honda-beat.jpg",
        spesifikasi: {
            mesin: "110cc",
            transmisi: "Matic",
            bb: "Pertalite/Pertamax",
            tahun: "2024"
        },
        ready: true,
        kategori: "matic",
    },
    {
        id: 2,
        nama: "Honda Vario 125",
        merk: "Honda",
        hargaCash: 24075000,
        dp: 3000000,
        angsuran: 1061000,
        tenor: 35,
        gambar: "images/honda-vario.webp",
        spesifikasi: {
            mesin: "125cc",
            transmisi: "Matic",
            bb: "Pertalite/Pertamax",
            tahun: "2024"
        },
        ready: true,
        kategori: "matic"
    },
    {
        id: 3,
        nama: "Honda Beat Street",
        merk: "Honda",
        hargaCash: 22200000,
        dp: 2500000,
        angsuran: 925000,
        tenor: 35,
        gambar: "images/honda-beat-street.jpg",
        spesifikasi: {
            mesin: "110cc",
            transmisi: "Matic",
            bb: "Pertalite/Pertamax",
            tahun: "2024"
        },
        ready: true,
        kategori: "matic"
    },
    {
        id: 4,
        nama: "Nmax",
        merk: "Yamaha",
        hargaCash: 33000000,
        dp: 4000000,
        angsuran: 1420000,
        tenor: 35,
        gambar: "images/nmax.jpg",
        spesifikasi: {
            mesin: "155cc",
            transmisi: "Matic",
            bb: "Pertalite/Pertamax",
            tahun: "2024"
        },
        ready: true,
        kategori: "matic"
    },
    {
        id: 5,
        nama: "Pcx 160 CBS ",
        merk: "honda",
        hargaCash: 33775000,
        angsuran: 1420000,
        dp: 4000000,
        tenor: 35,
        gambar: "images/pcx.jpg",                     
        spesifikasi: {
            mesin: "160cc",
            transmisi: "matic",
            bb: "Pertalite/Pertamax",
            tahun: "2024"
        },
        ready: true,
        kategori: "matic"
    },
    {
       id: 6,
       nama: " Honda Revo X",
       merk: "Honda",
       hargaCash: 19875000,
       angsuran: 858000,
       dp: 2000000,
       tenor: 35,
       gambar: "images/revox.jpg",
       spesifikasi: {
        mesin: "110 cc",
        transmisi: "Manual",
        bb: "Pertalite/Pertamax",
        tahun: "2024"
       },
       ready: true,
       kategori: "bebek"
       
    },
];

// Format Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(angka);
}

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize all functions
    initNavbar();
    initMobileMenu();
    renderMotorCards('semua');
    initSimulasiKredit();
    initContactForm();
    initSmoothScroll();
    initScrollAnimations();
});

// Navbar Scroll Effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Render Motor Cards
function renderMotorCards(filter) {
    const grid = document.getElementById('motor-grid');
    const filteredMotors = filter === 'semua' 
        ? motors 
        : motors.filter(m => m.kategori === filter);
    
    grid.innerHTML = filteredMotors.map(motor => `
        <div class="motor-card bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100" data-kategori="${motor.kategori}">
            <div class="relative">
                <img src="${motor.gambar}" alt="${motor.nama}" class="w-full h-56 object-contain bg-gradient-to-b from-gray-100 to-white p-4">
                ${motor.ready ? '<span class="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Ready Stock</span>' : ''}
                <span class="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">${motor.merk}</span>
            </div>
            <div class="p-5">
                <h3 class="text-xl font-bold text-gray-900 mb-2">${motor.nama}</h3>
                
                <!-- Spesifikasi -->
                <div class="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <div class="flex items-center gap-1 text-gray-600">
                        <i data-lucide="gauge" class="w-4 h-4"></i>
                        <span>${motor.spesifikasi.mesin}</span>
                    </div>
                    <div class="flex items-center gap-1 text-gray-600">
                        <i data-lucide="bike" class="w-4 h-4"></i>
                        <span>${motor.spesifikasi.transmisi}</span>
                    </div>
                    <div class="flex items-center gap-1 text-gray-600">
                        <i data-lucide="fuel" class="w-4 h-4"></i>
                        <span>${motor.spesifikasi.bb}</span>
                    </div>
                    <div class="flex items-center gap-1 text-gray-600">
                        <i data-lucide="calendar" class="w-4 h-4"></i>
                        <span>${motor.spesifikasi.tahun}</span>
                    </div>
                </div>
                
                <!-- Harga -->
                <div class="space-y-2 mb-4">
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500">Harga Cash</span>
                        <span class="text-lg font-bold text-red-600">${formatRupiah(motor.hargaCash)}</span>
                    </div>
                    <div class="flex justify-between items-center bg-red-50 p-2 rounded-lg">
                        <span class="text-sm text-gray-600">DP Mulai</span>
                        <span class="font-semibold text-red-700">${formatRupiah(motor.dp)}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500">Angsuran</span>
                        <span class="font-medium text-gray-900">${formatRupiah(motor.angsuran)}/${motor.tenor}x</span>
                    </div>
                </div>
                
                <!-- Buttons -->
                <div class="flex gap-2">
                    <button onclick="showMotorDetail(${motor.id})" class="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-50 font-medium py-2.5 rounded-lg transition-all">
                        Detail
                    </button>
                    <a href="https://wa.me/6285724247488?text=Halo%20Rizal%20Motor,%20saya%20tertarik%20dengan%20${encodeURIComponent(motor.nama)}" target="_blank" class="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 rounded-lg transition-all flex items-center justify-center gap-1">
                        <i data-lucide="phone" class="w-4 h-4"></i>
                        Pesan
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-initialize icons for new content
    lucide.createIcons();
}

// Filter Motor
function filterMotor(kategori) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-red-600', 'text-white', 'shadow-lg');
        btn.classList.add('bg-white', 'text-gray-600');
    });
    
    const activeBtn = document.querySelector(`[data-filter="${kategori}"]`);
    activeBtn.classList.add('active', 'bg-red-600', 'text-white', 'shadow-lg');
    activeBtn.classList.remove('bg-white', 'text-gray-600');
    
    // Render filtered cards
    renderMotorCards(kategori);
}

// Show Motor Detail Modal
function showMotorDetail(id) {
    const motor = motors.find(m => m.id === id);
    if (!motor) return;
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-[slideDown_0.3s_ease-out]">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-2xl font-bold text-gray-900">${motor.nama}</h3>
                    <button onclick="this.closest('.modal-backdrop').remove()" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <i data-lucide="x" class="w-6 h-6"></i>
                    </button>
                </div>
                <img src="${motor.gambar}" alt="${motor.nama}" class="w-full h-48 object-contain bg-gray-100 rounded-xl mb-4">
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="bg-gray-50 p-3 rounded-lg">
                        <p class="text-sm text-gray-500">Mesin</p>
                        <p class="font-semibold">${motor.spesifikasi.mesin}</p>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg">
                        <p class="text-sm text-gray-500">Transmisi</p>
                        <p class="font-semibold">${motor.spesifikasi.transmisi}</p>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg">
                        <p class="text-sm text-gray-500">Bahan Bakar</p>
                        <p class="font-semibold">${motor.spesifikasi.bb}</p>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg">
                        <p class="text-sm text-gray-500">Tahun</p>
                        <p class="font-semibold">${motor.spesifikasi.tahun}</p>
                    </div>
                </div>
                <div class="space-y-2 mb-6">
                    <div class="flex justify-between">
                        <span>Harga Cash</span>
                        <span class="font-bold text-red-600">${formatRupiah(motor.hargaCash)}</span>
                    </div>
                    
                    </div>
                    <div class="flex justify-between">
                        <span>DP Minimum</span>
                        <span class="font-bold">${formatRupiah(motor.dp)}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Angsuran</span>
                        <span class="font-bold">${formatRupiah(motor.angsuran)} x ${motor.tenor} bulan</span>
                    </div>
                </div>
                <a href="https://wa.me/6285724247488?text=Halo%20Rizal%20Motor,%20saya%20tertarik%20dengan%20${encodeURIComponent(motor.nama)}" target="_blank" class="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all text-center flex items-center justify-center gap-2">
                    <i data-lucide="phone" class="w-5 h-5"></i>
                    Pesan via WhatsApp
                </a>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    lucide.createIcons();
    
    // Close on backdrop click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Simulasi Kredit
function initSimulasiKredit() {
    const motorSelect = document.getElementById('motor-select');
    const hargaDisplay = document.getElementById('harga-display');
    const hargaOtr = document.getElementById('harga-otr');
    const form = document.getElementById('simulasi-form');
    
    // Populate motor select
    motors.forEach(motor => {
        const option = document.createElement('option');
        option.value = motor.id;
        option.textContent = `${motor.nama} - ${formatRupiah(motor.hargaCash)}`;
        motorSelect.appendChild(option);
    });
    
    // Show harga when motor selected
    motorSelect.addEventListener('change', function() {
        const motor = motors.find(m => m.id == this.value);
        if (motor) {
            hargaDisplay.classList.remove('hidden');
            hargaOtr.textContent = formatRupiah(motor.hargaCash);
        } else {
            hargaDisplay.classList.add('hidden');
        }
    });
    
    // Form submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        hitungCicilan();
    });
}

// Hitung Cicilan
function hitungCicilan() {
    const motorId = document.getElementById('motor-select').value;
    const dpInput = document.getElementById('dp-input').value;
    const tenorSelect = document.getElementById('tenor-select').value;
    
    const motor = motors.find(m => m.id == motorId);
    if (!motor || !dpInput || !tenorSelect) {
        showToast('Mohon lengkapi semua field');
        return;
    }
    
    const dpAmount = parseInt(dpInput);
    const tenor = parseInt(tenorSelect);
    
    // Bunga berdasarkan tenor
    const bungaRates = { 12: 0.02, 24: 0.025, 36: 0.03 };
    const bungaRate = bungaRates[tenor];
    
    const pokokHutang = motor.hargaCash - dpAmount;
    const bungaTotal = pokokHutang * bungaRate * (tenor / 12);
    const totalHutang = pokokHutang + bungaTotal;
    const cicilanPerBulan = Math.ceil(totalHutang / tenor);
    const totalBayar = dpAmount + totalHutang;
    
    // Show result
    document.getElementById('hasil-kosong').classList.add('hidden');
    document.getElementById('hasil-simulasi').classList.remove('hidden');
    
    document.getElementById('cicilan-bulanan').textContent = formatRupiah(cicilanPerBulan);
    document.getElementById('tenor-display').textContent = `x ${tenor} bulan`;
    document.getElementById('harga-motor').textContent = formatRupiah(motor.hargaCash);
    document.getElementById('dp-hasil').textContent = formatRupiah(dpAmount);
    document.getElementById('pokok-hutang').textContent = formatRupiah(pokokHutang);
    document.getElementById('total-bunga').textContent = formatRupiah(bungaTotal);
    document.getElementById('total-bayar').textContent = formatRupiah(totalBayar);
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const telepon = document.getElementById('telepon').value;
        const pesan = document.getElementById('pesan').value;
        
        const waMessage = `Halo Rizal Motor,%0A%0ANama: ${nama}%0AEmail: ${email}%0ATelepon: ${telepon}%0A%0APesan:%0A${pesan}`;
        window.open(`https://wa.me/6285724247488?text=${waMessage}`, '_blank');
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.motor-card, .stat-number').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add animation class
const style = document.createElement('style');
style.textContent = `
    .animate-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Toast Notification
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Lazy Load Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // ESC to close modals
    if (e.key === 'Escape') {
        const modal = document.querySelector('.modal-backdrop');
        if (modal) {
            modal.remove();
        }
    }
});

// Performance: Preload critical resources
const preloadLinks = [
    { rel: 'preload', href: 'images/honda-beat.jpg', as: 'image' }
];

preloadLinks.forEach(link => {
    const el = document.createElement('link');
    Object.assign(el, link);
    document.head.appendChild(el);
});
