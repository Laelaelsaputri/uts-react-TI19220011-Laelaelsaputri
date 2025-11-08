import React from 'react';

export default function About() {
  return (
    <div className="about-container">
      <h2>Tentang Aplikasi</h2>
      <div className="card">
        <p>
          Proyek ini merupakan pengembangan aplikasi berbasis web yang dirancang menggunakan React.js, 
          dengan dukungan Redux Toolkit sebagai manajemen state global, serta React Router DOM untuk sistem navigasi antarhalaman. 
          Aplikasi ini dibuat sebagai sarana untuk mengelola data tugas atau proyek secara digital, 
          di mana pengguna dapat menambah, melihat, memperbarui, dan menghapus data dengan antarmuka yang interaktif dan responsif.
        </p>
        <p>
          Secara umum, aplikasi ini berfungsi sebagai sistem manajemen tugas sederhana (Task Management App) 
          yang menyimpan berbagai informasi mengenai kegiatan atau proyek yang sedang dikerjakan. 
          Setiap entri data mencakup beberapa atribut seperti judul tugas, deskripsi, kategori, 
          serta lampiran berupa file PDF dan gambar. 
          Data yang diinputkan oleh pengguna akan tersimpan secara otomatis di <strong>localStorage</strong> 
          sehingga tetap dapat diakses meskipun halaman web ditutup atau direfresh, tanpa perlu menggunakan server atau database eksternal.
        </p>
      </div>
    </div>
  );
}
