# DESIGN.md — Architectural Minimal Light

Sistem desain untuk landing page perusahaan arsitektur/properti.
Brand contoh: **{{Brand}}** (default: Formwerk). Ganti sesuai proyek.
Dokumen pendamping: `PRD.md` (kebutuhan produk & acceptance criteria).

---

## 1. Karakter Visual

- **Mood:** tenang, minimal, editorial, premium.
- **Kepadatan:** lega. Banyak ruang kosong, satu ide per band.
- **Tema:** terang (off-white hangat). Satu-satunya blok gelap: footer hijau tua.
- **Signature:**
  1. Palet netral hangat (beige/off-white) + satu aksen hijau tua.
  2. Satu keluarga font grotesk ringan, weight 300–400, letter-spacing rapat.
  3. Angka metrik sangat besar dan tipis sebagai fokus visual.
  4. Kartu bersih: border 1px, shadow sangat halus, ikon bulat hijau.
  5. Foto arsitektur monokrom/desaturasi dalam grid asimetris.
  6. Tanpa gradient dekoratif, tanpa shadow keras, tanpa warna terang.
- **Aturan emas:** hierarki dibuat dari ukuran dan ruang, bukan dari warna atau dekorasi.

---

## 2. Design Tokens

### 2.1 Warna

| Token | Hex | Peran |
|---|---|---|
| `--page` | `#fbfaf7` | Latar halaman |
| `--band` | `#f2f0ea` | Header dan band hero |
| `--surface` | `#ffffff` | Kartu |
| `--ink` | `#161616` | Teks utama, border tombol |
| `--muted` | `#6b6a64` | Teks sekunder, label, paragraf kartu |
| `--line` | `#e7e4dc` | Border kartu, pemisah (hr) |
| `--green` | `#1f3328` | Primary: footer, ikon, badge |
| `--green-ink` | `#e9ece4` | Teks/ikon di atas hijau |
| `--sage` | `#6b7a6c` | Aksen: border hover kartu, elemen ilustrasi |
| `--sand` | `#b9b4a6` | Aksen netral untuk ilustrasi |
| `--sky1` / `--sky2` | `#f1efe9` / `#e0e4e3` | Gradient langit di placeholder gambar |

Proporsi pemakaian ~ 70% page/band/surface, 20% ink/muted, 10% hijau.
Kontras: ink vs page ~16:1; muted vs page ~5:1 (lolos AA). Jangan memakai muted di bawah 12px.

### 2.2 Tipografi

- **Font:** Inter (keyakinan tinggi untuk implementasi; referensi asli grotesk serupa, keyakinan sedang).
  Alternatif: Geist, Instrument Sans, Helvetica Neue. Satu keluarga saja.
- **Stack:** `'Inter', system-ui, sans-serif`. Weight dimuat: 300, 400, 500, 600.
- Body: 400, line-height 1.5, `-webkit-font-smoothing: antialiased`.

| Peran | Ukuran (desktop → mobile) | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|
| Display (h1) | `clamp(34px, 4.4vw, 52px)` | 400 | 1.12 | -0.025em |
| Lead | `clamp(17px, 1.8vw, 21px)` | 300 | 1.45 | 0 |
| H2 | `clamp(24px, 2.6vw, 30px)` | 400 | 1.2 | -0.02em |
| Stat (angka) | `clamp(44px, 6vw, 76px)` | 300 | 1 | -0.04em |
| H3 kartu | 14px | 500 | 1.5 | 0 |
| H3 value | 15px | 500 | 1.5 | 0 |
| Body kecil | 13px | 400 | 1.5 | 0 |
| Teks kartu | 12px | 400 | 1.6 | 0 |
| Nav / tombol | 13px | 400 / 500 | 1.5 | 0 |
| Badge | 10px | 400 | 1 | 0 |
| Eyebrow (opsional) | 12px | 400 | 1.5 | 0.06em, UPPERCASE |
| Footer judul / link / copy | 12px / 12px / 11px | 500 / 400 / 400 | 1.5 | 0 |

Rasio display : body ~ 4 : 1. Stat adalah elemen terbesar di halaman.

### 2.3 Spacing (basis 4px)

`4 · 8 · 10 · 12 · 14 · 16 · 20 · 24 · 28 · 32 · 48 · 56 · 72 · 88`

| Konteks | Nilai |
|---|---|
| Kontainer | max-width 1160px, padding horizontal 32px |
| Padding vertikal section | 72px (mobile 72px, tidak berubah) |
| Tinggi header | 56px |
| Hero copy padding | 88px 48px 88px 32px (mobile 56px 24px) |
| Gap hero copy | 28px |
| Gap grid kartu | 16px |
| Padding kartu | 22px 20px 18px, gap isi 10px |
| Gap kolom About | 48px |
| Gap metrik | 24px |
| Gap Value Proposition | 20px (antar baris) / 16px (teks–gambar) |
| Gap grid Featured Work | 14px, tinggi baris 230px |
| Footer | padding 56px 0 28px; gap kolom 32px; copyright margin-top 48px |

### 2.4 Radius

| Token | Nilai | Dipakai di |
|---|---|---|
| sm | 4px | Badge |
| md | 6px | Tombol, gambar value, gambar work |
| lg | 10px | Kartu |
| full | 50% | Ikon bulat |

Gambar hero tanpa radius (full-bleed ke tepi kanan kontainer).

### 2.5 Border & Elevasi

- Border: 1px `--line` (kartu, hr). Tombol: 1px `--ink`.
- Header: border-bawah 1px `--line`; saat scroll tambah `box-shadow: 0 6px 20px -14px rgba(22,22,22,.35)`.
- Kartu: `0 1px 2px rgba(22,22,22,.04), 0 8px 24px -12px rgba(22,22,22,.08)`.
- Dilarang: shadow gelap/keras, glow, blur latar.

### 2.6 Blok CSS Token (siap salin)

```css
:root{
  --page:#fbfaf7; --band:#f2f0ea; --surface:#ffffff;
  --ink:#161616; --muted:#6b6a64; --line:#e7e4dc;
  --green:#1f3328; --green-ink:#e9ece4; --sage:#6b7a6c; --sand:#b9b4a6;
  --sky1:#f1efe9; --sky2:#e0e4e3; color-scheme:light;
}
body{background:var(--page);color:var(--ink);font-family:'Inter',system-ui,sans-serif;line-height:1.5}
.wrap{max-width:1160px;margin:0 auto;padding:0 32px}
```

---

## 3. Layout

- **Frame:** satu kolom penuh; konten di `.wrap` (1160px, rata tengah).
- **Grid:** CSS Grid untuk semua pola multi-kolom; flex hanya untuk nav dan ikon.
- **Alignment:** teks rata kiri di seluruh halaman. Tidak ada heading rata tengah.
- **Pemisah band:** `hr` 1px `--line` di dalam `.wrap` (setelah About, setelah Metrics).

### Anatomi halaman (urut)

| # | Band | Pola |
|---|---|---|
| 1 | Header (sticky) | Logo kiri · nav kanan · tombol outline "Get in Touch" |
| 2 | Hero | 2 kolom `1fr / 1.05fr`: copy (latar `--band`) kiri, gambar full-height kanan |
| 3 | About & Value | `.8fr / 2.2fr`: judul + teks kecil kiri, 3 kartu kanan |
| 4 | Metrics & Impact | `1.1fr + 4 × 1fr`: judul + 4 angka besar, rata bawah (baseline) |
| 5 | Value Proposition | 2 kolom; tiap kolom: teks + gambar persegi (kolom kanan: gambar dulu, lalu teks) |
| 6 | Featured Work | Grid `1.1fr 1fr 1fr`, 2 baris 230px; item pertama `grid-row: span 2` |
| 7 | Footer | Hijau tua, 4 kolom `1.4fr 1fr 1fr 1fr` + baris copyright |

Hero harus memiliki tinggi minimal gambar 380px. Gambar memenuhi sisi kanan tanpa padding.

---

## 4. Komponen

### 4.1 Header / Nav
- Latar `--band`, sticky `top: 0` (hormati safe-area), z-index 5.
- Logo: ikon garis 22px + nama 15px/600, gap 8px.
- Link: 13px, opacity .85 → 1 saat hover (0.2s). Gap 28px.
- Mobile ≤760px: sembunyikan link biasa, sisakan tombol CTA.

### 4.2 Tombol `.btn` (outline)
- Tinggi 36px, padding 0 16px, radius 6px, border 1px `--ink`, 13px/500, transparan.
- Hover: latar `--ink`, teks `--page` (0.25s). Focus: outline 2px `--green` offset 2px.
- Tidak ada varian solid; CTA sekunder berupa **link bergaris bawah** (`.more`):
  12px/500, border-bawah 1px `--ink`, padding-bawah 1px.

### 4.3 Badge
- Absolut, kanan-atas kartu (12px/12px). 10px, padding 4px 7px, radius 4px, latar `--green`, teks `--green-ink`.
- Isi satu kata (Design, Develop, Sustain).

### 4.4 Kartu `.card`
- Struktur vertikal: badge → ikon → h3 → p → link "Learn More" (didorong ke bawah dengan `margin-top: auto`).
- Latar `--surface`, border 1px `--line`, radius 10px, shadow halus.
- Hover: `translateY(-3px)`, border → `--sage` (0.3s).
- Mobile ≤900px: 1 kolom.

### 4.5 Ikon bulat
- 34px, `border-radius: 50%`, latar `--green`. Ikon SVG 17px, stroke `--green-ink` 1.5px, round cap/join, fill none.
- Gaya ikon: garis (outline) sederhana. Jangan pakai ikon berwarna/filled.

### 4.6 Stat
- Angka (stat) di atas, label 13px `--muted` di bawah (margin-top 10px).
- Mobile ≤900px: grid 2 kolom, judul memakai seluruh baris.

### 4.7 Baris Value (`.vrow`)
- Grid `1.1fr .9fr`, gap 16px. Teks: h3 15px/500 + p 13px muted. Gambar: aspect-ratio 1.15, radius 6px.
- Mobile: 1 kolom.

### 4.8 Grid Featured Work
- Setiap item `figure.ph` radius 6px dengan `figcaption` 11px putih, kiri-bawah (12px/10px), text-shadow lembut.
- Hover: gambar `scale(1.04)` dalam 0.6s `cubic-bezier(.2,.7,.2,1)`; wadah `overflow: hidden`.
- Mobile ≤760px: 2 kolom; item tinggi 300px span 2, lainnya 200px.

### 4.9 Footer
- Latar `--green`, teks `--green-ink`. Judul kolom 12px/500 opacity .9; link 12px opacity .65; copyright 11px opacity .55 dengan border-atas `rgba(233,236,228,.15)`.
- Mobile ≤700px: 2 kolom.

---

## 5. Pola Teks & Copywriting

- **Nada:** tenang, percaya diri, visioner. Kalimat deklaratif pendek. Tanpa tanda seru atau emoji.
- **Casing:** Sentence case untuk heading dan paragraf; Title Case untuk label nav, nama section, dan tombol.
- **Panjang:** h1 5–8 kata (2 baris, pakai `<br>`); lead 10–16 kata; judul kartu 2–3 kata; paragraf kartu 12–18 kata; label stat 1–3 kata; CTA 1–3 kata.
- **Struktur h1:** "Kata kerja + hasil jangka panjang" (contoh: "Shaping the future through enduring form.").
- **Stat:** angka + simbol (`15+`, `120+`, `98%`) dan satu label.
- **Contoh netral:**
  1. "Building places that age with grace."
  2. "{{Brand}} plans, builds, and stewards low-carbon developments."
  3. "Quiet buildings, honest materials, long-term thinking."
- Jangan pakai lorem ipsum di versi final.

---

## 6. Ornamen & Dekorasi

- Hampir tanpa ornamen. Satu-satunya "dekorasi": garis pemisah 1px, ikon bulat hijau, badge kecil.
- Dilarang: gradient warna, blob, pola latar, ilustrasi karakter, emoji.

## 7. Gambar & Ilustrasi

- **Gaya:** foto arsitektur modern (beton, kaca, garis horizontal), warna rendah saturasi, cahaya lembut, langit abu muda.
- **Rasio:** hero ~ 1:1 sampai 5:4 (tinggi penuh kolom); value 1.15:1; work: 1 potret tinggi + sisanya ~ 1:1 sampai 4:3.
- **Wadah:** `overflow: hidden`, `object-fit: cover`, `background: var(--sky1)` sebagai fallback.
- **Implementasi referensi:** placeholder SVG inline via `<symbol>` (`house`, `tower`, `block`, `cube`, `sand`). Ganti dengan `<img>` (WebP/AVIF, `loading="lazy"`, `alt` deskriptif) saat foto tersedia.
- Wajib atribusi/lisensi untuk foto stok. Jangan menyalin foto dari situs lain.

---

## 8. Motion

| Efek | Detail |
|---|---|
| Reveal on scroll | Opacity 0 → 1, `translateY(18px → 0)`, 0.7s, `cubic-bezier(.2,.7,.2,1)` |
| Stagger | `index × 80ms`, maksimum 400ms |
| Trigger | IntersectionObserver, threshold .15, rootMargin `0 0 -6% 0`; sekali per elemen |
| Cleanup | Setelah transisi selesai, lepas kelas `rv/in` agar hover kembali normal |
| Hero | Gambar fade-in 1s; parallax `translateY(scrollY × 0.04)` pada SVG/img dengan `scale(1.08)` |
| Count-up | Stat dihitung 0 → nilai dalam 900ms (ease-out cubic) saat muncul |
| Header | Bayangan muncul saat `scrollY > 8` |
| Hover | Kartu naik 3px; foto zoom 1.04; tombol invert (0.25s) |
| Reduced motion | `prefers-reduced-motion: reduce` → matikan semua transisi/animasi/parallax/count-up |

Prinsip: ringan, halus, tidak pernah menghalangi pembacaan. Durasi maksimal 1s.

---

## 9. Responsif

| Breakpoint | Perubahan |
|---|---|
| ≤ 900px | About jadi 1 kolom; kartu 1 kolom; metrik 2 kolom; value 1 kolom |
| ≤ 820px | Hero 1 kolom (copy dulu, gambar min-height 300px); padding copy 56px 24px |
| ≤ 760px | Nav hanya CTA; Featured Work 2 kolom |
| ≤ 700px | Footer 2 kolom |

Wajib: `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`, tanpa scroll horizontal pada body, dukung safe-area (`env(safe-area-inset-*)`).

---

## 10. Aksesibilitas

- Kontras teks ≥ 4.5:1; `--muted` tidak dipakai di bawah 12px.
- Struktur heading: satu `h1`, `h2` per section, `h3` di kartu.
- Gambar bermakna: `role="img"` + `aria-label` (SVG) atau `alt` (img). Gambar dekoratif: `aria-hidden`.
- Fokus terlihat pada semua link/tombol; urutan tab mengikuti urutan visual.
- Landmark: `header`, `main`, `section`, `footer`.
- Hormati `prefers-reduced-motion`.

## 11. Do & Don't

**Do**
- Gunakan ruang kosong besar antar band (72px+).
- Pertahankan satu aksen warna (hijau tua).
- Pakai angka besar tipis sebagai fokus.
- Samakan radius dan border di semua kartu.

**Don't**
- Jangan tambah font kedua, warna terang, atau gradient.
- Jangan tengahkan heading atau gunakan UPPERCASE kecuali eyebrow.
- Jangan pakai shadow gelap, border tebal, atau animasi >1s.
- Jangan menyalin teks, logo, atau foto dari referensi mana pun.

## 12. Cara Memperluas

- **Section baru:** ikuti pola `section > .wrap`, judul h2 di kiri, konten grid di kanan; pisahkan dengan `hr.rule`.
- **Kartu baru:** salin struktur 4.4, jaga panjang teks sesuai §5.
- **Varian brand:** ubah hanya `--green`, `--sage`, `--sand`, dan `--band`; pertahankan kontras ≥ 4.5:1.
- **Mode gelap (opsional):** definisikan ulang token di `@media (prefers-color-scheme: dark)`; footer tetap lebih gelap dari halaman.
