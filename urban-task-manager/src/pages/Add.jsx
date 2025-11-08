import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tambah } from '../redux/TaskSlice';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [judul, setjudul] = useState('');
  const [deskripsi, setdeskripsi] = useState('');
  const [kategori, setkategori] = useState('Aplikasi Kontenporer');
  const [pdf, setPdf] = useState(null);
  const [image, setImage] = useState(null);
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(tambah({
      judul,
      deskripsi,
      kategori,
      pdf: pdf ? URL.createObjectURL(pdf) : '',
      image: image ? URL.createObjectURL(image) : '',
    }));
    nav('/');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h2>Tambah</h2>
      <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input type="text" placeholder="Judul" value={judul} onChange={e => setjudul(e.target.value)} required />
        <textarea placeholder="Deskripsi" value={deskripsi} onChange={e => setdeskripsi(e.target.value)} required />
        <select value={kategori} onChange={e => setkategori(e.target.value)}>
          <option value="Aplikasi Kontenporer">Aplikasi Kontenporer</option>
          <option value="Kewirausahaan">Kewirausahaan</option>
          <option value="Proyek Manajaemen TIK">Proyek Manajaemen TIK</option>
          <option value="Sistem Pengambilan Keputusan">Sistem Pengambilan Keputusan</option>
        </select>
        <input type="file" accept=".pdf" onChange={e => setPdf(e.target.files[0])} />
        <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}
