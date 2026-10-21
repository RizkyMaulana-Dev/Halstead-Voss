# PRD.md — Landing Page Arsitektur Minimalis ({{Brand}})

**Versi:** 1.0 · **Status:** Siap dibangun · **Pendamping:** `DESIGN.md` (sumber kebenaran visual)
**Pembaca utama:** AI agent / developer yang akan membangun halaman ini dari nol.

---

## 1. Ringkasan

Satu halaman landing (single-page) untuk perusahaan arsitektur, pembangunan, dan investasi properti.
Tujuan: menyampaikan filosofi perusahaan, bukti kredibilitas (angka), dan portofolio, lalu mengarahkan pengunjung ke kontak.

Referensi gaya: situs arsitektur minimalis terang dengan palet beige + hijau tua, tipografi grotesk ringan, dan grid foto asimetris.
Hasil akhir **terinspirasi gaya**, bukan salinan: nama brand, teks, dan aset visual harus orisinal.

## 2. Tujuan & Metrik

| Tujuan | Metrik keberhasilan |
|---|---|
| Menyampaikan identitas brand dalam < 10 detik | Hero terbaca tanpa scroll di desktop 1440×900 |
| Mendorong kontak | CTA "Get in Touch" terlihat di header sepanjang scroll (sticky) |
| Kesan premium dan bersih | Skor visual QA (§12) lolos semua butir |
| Performa | Lighthouse Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95 |
| Ringan | Halaman statis, total < 150 KB di luar foto |

## 3. Non-Tujuan

- Tidak ada CMS, login, checkout, atau blog.
- Tidak ada backend untuk versi 1.0 (form kontak = tautan `mailto:` atau placeholder).
- Tidak ada mode gelap pada v1.0 (halaman terang saja).
- Tidak ada carousel, video latar, atau animasi berat.

## 4. Target Pengguna

| Persona | Kebutuhan | Perilaku |
|---|---|---|
| Calon klien properti | Menilai kualitas dan kredibilitas cepat | Scroll cepat, fokus ke hero, angka, dan foto |
| Investor/mitra | Melihat skala dan rekam jejak | Mencari metrik dan proyek unggulan |
| Calon karyawan/pers | Mengenal perusahaan | Membuka About dan footer |

Perangkat: 60% mobile, 40% desktop (asumsi). Dukungan: Chrome, Safari, Firefox, Edge dua versi terakhir.

## 5. Ruang Lingkup Konten

Bahasa: Inggris (sesuai referensi). Pastikan semua teks ditulis ulang dan netral.
Placeholder brand: `{{Brand}}` (contoh: Formwerk).

| Elemen | Konten |
|---|---|
| Nav | Our Story, Capabilities, Portfolio, Contact, tombol "Get in Touch" |
| Hero | H1 (≤ 8 kata, 2 baris) + lead (10–16 kata) + gambar bangunan |
| About & Value | Judul, 1 kalimat pendek, 3 kartu (badge, ikon, judul, 12–18 kata, "Learn More") |
| Metrics & Impact | 4 stat: `15+ Years`, `120+ Projects`, `98% Sustainability Rate`, `24 Awards` |
| Value Proposition | 2 blok teks + gambar (judul, ~20 kata) |
| Featured Work | 5 gambar dengan caption "Featured Work 01–05" |
| Footer | Logo + deskripsi 1 kalimat, kolom Links, Company, Social, copyright |

## 6. Kebutuhan Fungsional

Prioritas: **P0** wajib, **P1** sebaiknya, **P2** opsional.

### 6.1 Header & Navigasi
| ID | Kebutuhan | Prio | Acceptance criteria |
|---|---|---|---|
| FR-01 | Header sticky | P0 | Tetap di atas saat scroll; menghormati safe-area iOS |
| FR-02 | Link nav smooth-scroll ke anchor | P0 | Klik "Our Story/Capabilities" → `#about`; "Portfolio" → `#work`; "Contact" → `#contact` |
| FR-03 | Bayangan header saat scroll | P1 | Muncul setelah `scrollY > 8` |
| FR-04 | Nav mobile disederhanakan | P0 | ≤760px hanya logo + tombol CTA terlihat |

### 6.2 Hero
| ID | Kebutuhan | Prio | Acceptance criteria |
|---|---|---|---|
| FR-05 | Layout dua kolom | P0 | Desktop: copy kiri (latar `--band`), gambar kanan setinggi kolom |
| FR-06 | Responsif | P0 | ≤820px menjadi satu kolom: copy dulu, gambar min-height 300px |
| FR-07 | Parallax ringan pada gambar | P1 | Pergeseran ≤ 4% dari scrollY; nonaktif saat reduced-motion |

### 6.3 About & Value
| ID | Kebutuhan | Prio | Acceptance criteria |
|---|---|---|---|
| FR-08 | Tiga kartu berisi badge, ikon, judul, teks, link | P0 | Struktur sesuai DESIGN.md §4.4; link "Learn More" selalu rata bawah kartu |
| FR-09 | Hover kartu | P1 | Naik 3px, border berubah `--sage`, transisi 0.3s |
| FR-10 | Kolom jadi satu di ≤900px | P0 | Tidak ada overflow horizontal |

### 6.4 Metrics & Impact
| ID | Kebutuhan | Prio | Acceptance criteria |
|---|---|---|---|
| FR-11 | Empat stat berukuran besar | P0 | Font `clamp(44px, 6vw, 76px)`, weight 300 |
| FR-12 | Count-up saat terlihat | P1 | 0 → nilai dalam 900ms; suffix (`+`, `%`) dipertahankan; hanya sekali |
| FR-13 | Grid 2 kolom di mobile | P0 | ≤900px, judul menempati satu baris penuh |

### 6.5 Value Proposition & Featured Work
| ID | Kebutuhan | Prio | Acceptance criteria |
|---|---|---|---|
| FR-14 | Dua blok teks + gambar | P0 | Blok kedua urutan gambar-dulu pada desktop |
| FR-15 | Grid asimetris Featured Work | P0 | 3 kolom `1.1fr 1fr 1fr`, 2 baris 230px, item pertama span 2 baris |
| FR-16 | Zoom hover pada foto | P1 | `scale(1.04)` 0.6s, tidak keluar dari wadah |
| FR-17 | Mobile grid | P0 | ≤760px 2 kolom; item pertama span 2 kolom |

### 6.6 Footer
| ID | Kebutuhan | Prio | Acceptance criteria |
|---|---|---|---|
| FR-18 | Footer hijau 4 kolom | P0 | Sesuai DESIGN.md §4.9; ≤700px 2 kolom |
| FR-19 | Copyright otomatis tahun berjalan | P2 | Gunakan JS `new Date().getFullYear()` atau tahun statis |

### 6.7 Animasi
| ID | Kebutuhan | Prio | Acceptance criteria |
|---|---|---|---|
| FR-20 | Reveal on scroll untuk judul, kartu, stat, baris value, foto work | P1 | Fade + naik 18px, 0.7s, stagger 80ms (maks 400ms), sekali per elemen |
| FR-21 | Hero fade-in saat load | P1 | 1s |
| FR-22 | Reduced motion | P0 | Dengan `prefers-reduced-motion: reduce` semua animasi/parallax/count-up mati dan semua konten langsung terlihat |
| FR-23 | Konten tetap terlihat tanpa JS | P1 | Jika JS gagal, tidak ada konten yang tersembunyi permanen |

## 7. Kebutuhan Non-Fungsional

| Area | Kebutuhan |
|---|---|
| Performa | LCP < 2.5s pada 4G; gambar WebP/AVIF, `loading="lazy"` kecuali hero; tidak ada layout shift (CLS < 0.05) |
| Aksesibilitas | WCAG 2.1 AA; satu `h1`; landmark benar; fokus terlihat; alt/aria-label pada gambar |
| SEO | `<title>` ≤ 60 karakter, meta description 140–160 karakter, Open Graph dasar, `lang="en"` |
| Responsif | 360px sampai 1920px tanpa scroll horizontal |
| Keamanan | Tidak ada skrip pihak ketiga selain font; tautan eksternal `rel="noopener"` |
| Kompatibilitas | Hindari fitur CSS tanpa dukungan Safari 16+; sediakan fallback `clamp()` |

## 8. Spesifikasi Teknis

- **Bentuk:** satu file `index.html` (CSS dan JS inline) atau struktur sederhana di bawah. Tanpa build step.
- **Stack default:** HTML5 + CSS (variabel + Grid) + JS vanilla (IntersectionObserver). Tanpa framework.
- **Font:** Inter 300/400/500/600 via Google Fonts (`display=swap`) dengan fallback `system-ui`.
- **Ikon:** SVG inline (stroke 1.5px).
- **Gambar:** placeholder SVG (`<symbol>`) pada v1.0; ganti dengan foto berlisensi (`<img>`, rasio sesuai DESIGN.md §7).
- **Stack alternatif (jika diminta):** React/Vue/Laravel Blade — pertahankan token dan struktur komponen yang sama.

```
/ (root)
├── index.html          # markup + CSS + JS
├── assets/             # foto (webp/avif), favicon
├── DESIGN.md
└── PRD.md
```

## 9. Kontrak Desain (ringkas, detail di DESIGN.md)

- Warna: `--page #fbfaf7`, `--band #f2f0ea`, `--surface #fff`, `--ink #161616`, `--muted #6b6a64`, `--line #e7e4dc`, `--green #1f3328`.
- Font: Inter, satu keluarga; h1 `clamp(34px,4.4vw,52px)`; stat `clamp(44px,6vw,76px)`.
- Kontainer 1160px / padding 32px; section padding 72px; radius 4/6/10px.
- Satu aksen warna; tanpa gradient dekoratif; tanpa shadow keras.

## 10. Rencana Pengerjaan untuk Agent

| Tahap | Pekerjaan | Selesai bila |
|---|---|---|
| 1 | Setup file, meta, font, token CSS | Token & reset terpasang, halaman kosong tampil benar |
| 2 | Header + Hero | FR-01–07 lolos |
| 3 | About + Metrics | FR-08–13 lolos |
| 4 | Value + Featured Work | FR-14–17 lolos |
| 5 | Footer + responsif | FR-18, semua breakpoint DESIGN.md §9 |
| 6 | Animasi + reduced motion | FR-20–23 lolos |
| 7 | QA & Lighthouse | Semua butir §12 tercentang |

Aturan kerja agent:
1. Baca `DESIGN.md` penuh sebelum menulis kode; jangan menebak nilai yang sudah ada di tabel token.
2. Bangun mobile-aware sejak awal, bukan sebagai tambalan akhir.
3. Jangan menambah fitur, section, atau warna di luar dokumen ini tanpa izin.
4. Jika ada konflik antara PRD dan DESIGN: **DESIGN.md menang untuk visual, PRD.md menang untuk perilaku**.
5. Semua teks, nama brand, dan gambar harus orisinal/berlisensi.

## 11. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Foto stok tidak sesuai gaya | Kesan tidak premium | Pilih foto desaturasi, cahaya lembut; tetap pakai fallback `--sky1` |
| Animasi mengganggu | Pengunjung tidak nyaman | Durasi ≤ 1s, reduced-motion, sekali jalan |
| Konten tersembunyi jika JS gagal | Halaman tampak kosong | Kelas reveal hanya ditambahkan oleh JS (FR-23) |
| Kontras teks kecil rendah | Gagal aksesibilitas | Teks muted minimal 12px; cek kontras tiap perubahan warna |
| Mirip situs referensi terlalu persis | Risiko hak cipta/merek | Gunakan brand, teks, dan aset sendiri |

## 12. Checklist QA (Definition of Done)

**Visual**
- [ ] Semua token sesuai DESIGN.md §2 (warna, font, spacing, radius)
- [ ] Hero 2 kolom, gambar menempel ke sisi kanan
- [ ] Angka stat jelas menjadi elemen terbesar
- [ ] Footer satu-satunya blok gelap

**Fungsional**
- [ ] Anchor nav bekerja, header sticky
- [ ] Reveal, count-up, parallax, hover berjalan sekali dan halus
- [ ] Reduced motion mematikan semua animasi

**Responsif & A11y**
- [ ] Tidak ada scroll horizontal di 360, 768, 1024, 1440px
- [ ] Satu `h1`, heading berurutan, alt/aria-label lengkap
- [ ] Fokus keyboard terlihat; kontras ≥ 4.5:1

**Kualitas**
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95
- [ ] Tidak ada teks/aset salinan dari referensi
- [ ] Tidak ada error konsol

## 13. Pertanyaan Terbuka

1. Nama brand, logo, dan copy final?
2. Foto proyek asli tersedia, atau memakai stok berlisensi?
3. Form kontak: `mailto:`, WhatsApp, atau backend (mis. Formspree)?
4. Perlu versi bahasa Indonesia atau dwibahasa?
5. Perlu mode gelap atau halaman tambahan (detail proyek, blog) di v2?

## 14. Prompt Pemakaian untuk Agent

```
Baca DESIGN.md dan PRD.md. Bangun landing page {{Brand}} sesuai kedua dokumen:
satu file index.html, HTML+CSS+JS vanilla, tanpa framework. Pakai token di
DESIGN.md §2.6, ikuti anatomi §3, komponen §4, motion §8. Penuhi FR-01 s.d. FR-23
dan checklist §12. Gunakan teks dan aset orisinal. Setelah selesai, laporkan
butir yang belum terpenuhi dan asumsi yang diambil.
```
