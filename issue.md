# Issue: Inisialisasi Project Backend (Bun + Elysia.js + Drizzle ORM + MySQL)

## 📌 Ringkasan Project
Membuat fondasi backend REST API modern, cepat, dan terstruktur menggunakan runtime **Bun**, framework **Elysia.js**, ORM **Drizzle**, serta database **MySQL**.

Dokumen ini disusun sebagai panduan *high-level* untuk eksekutor (programmer / LLM) agar dapat menginisialisasi dan menyusun struktur awal project secara bertahap.

---

## 🎯 Tujuan & Scope
- Inisialisasi project baru berbasis Bun di direktori ini.
- Instalasi dependensi utama dan konfigurasi TypeScript.
- Pengaturan koneksi database MySQL menggunakan Drizzle ORM.
- Pembuatan struktur direktori yang modular dan mudah di-scale.
- Endpoint dasar (health check & sample CRUD/schema) untuk memvalidasi integrasi Elysia + Drizzle + MySQL.

---

## 📋 Rencana Kerja (High-Level Steps)

### Fase 1: Inisialisasi Project & Environment
1. **Inisialisasi Project Bun:**
   - Jalankan inisialisasi project Bun (`bun init`) atau sesuaikan `package.json` dan `tsconfig.json`.
2. **Environment Configuration:**
   - Buat file `.env.example` dan `.env` untuk menyimpan konfigurasi:
     - Port server
     - Kredensial MySQL (host, port, user, password, database name)
   - Pastikan `.env` terdaftar di `.gitignore`.

### Fase 2: Instalasi Dependensi
- **Core Framework & Runtime:**
  - `elysia` (Web framework)
- **Database & ORM:**
  - `drizzle-orm` (ORM)
  - Driver MySQL yang kompatibel (misalnya `mysql2`)
- **Dev Dependencies & Tooling:**
  - `drizzle-kit` (CLI untuk migrasi dan inspeksi schema)
  - Type definitions yang diperlukan (misal: `@types/node` jika diperlukan)

### Fase 3: Konfigurasi Database & Drizzle
1. **Drizzle Config (`drizzle.config.ts`):**
   - Atur path schema, direktori output migrasi, dan dialect `mysql`.
2. **Koneksi Database:**
   - Buat modul client database yang membaca variabel environment dan mengekspos instance Drizzle client.
3. **Definisi Schema:**
   - Buat schema MySQL sederhana (misalnya tabel `users` atau `items`) untuk pembuktian konsep (PoC).
4. **NPM Scripts:**
   - Tambahkan script pada `package.json` untuk migration toolings (misal: generate migrasi, migrate/push, dan studio jika diperlukan).

### Fase 4: Struktur Project & Server Elysia
1. **Susun Arsitektur Direktori:**
   - `src/`
     - `db/` (koneksi & schema Drizzle)
     - `routes/` (modular routing Elysia)
     - `index.ts` (entry point aplikasi)
2. **Setup Server Elysia (`src/index.ts`):**
   - Inisialisasi server Elysia.
   - Tambahkan route dasar:
     - `GET /`: Health check / welcome message.
     - `GET /health`: Cek status server dan koneksi DB.
   - Pasang route modular untuk berinteraksi dengan database menggunakan schema yang sudah dibuat.
   - Konfigurasi port listening dari environment variable.

### Fase 5: Validasi & Pengujian
1. Jalankan migrasi atau push schema ke database MySQL target.
2. Jalankan server dalam mode development (`bun run --watch src/index.ts` atau script dev).
3. Uji endpoint API (HTTP request) untuk memastikan:
   - Server Elysia berjalan normal tanpa error.
   - Drizzle berhasil membaca/menulis data ke MySQL.

---

## ✅ Kriteria Selesai (Definition of Done)
- [ ] Project Bun berhasil diinisialisasi dengan file konfigurasi yang rapi.
- [ ] Dependensi Elysia, Drizzle, driver MySQL, dan Drizzle Kit terpasang dengan benar.
- [ ] Konfigurasi `.env` dan `.gitignore` tersedia.
- [ ] Instance Drizzle ORM terhubung ke MySQL dan schema awal terdefinisi.
- [ ] Server Elysia dapat dijalankan dan merespons request melalui endpoint testing/health check.
