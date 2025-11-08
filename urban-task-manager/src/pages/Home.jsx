import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hapus } from '../redux/TaskSlice';
import { Link } from 'react-router-dom';

export default function Home() {
  const tugas = useSelector(s => s.tugas);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('All');
  const filtered = tugas.filter(t => filter === 'All' ? true : t.kategori === filter);
  const handleDelete = (id) => {
    if (window.confirm('yakin ingin menghapus tugas ini?')) dispatch(hapus(id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <label style={{ marginRight: '8px' }}>Filter:</label>
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="All">Semua</option>
            <option value="Aplikasi Kontenporer">Aplikasi Kontenporer</option>
            <option value="Kewirausahaan">Kewirausahaan</option>
            <option value="Proyek Manajaemen TIK">Proyek Manajaemen TIK</option>
            <option value="Sistem Pengambilan Keputusan">Sistem Pengambilan Keputusan</option>
          </select>
        </div>
        <Link to="/add" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '8px 14px', borderRadius: '6px', textDecoration: 'none' }}>+ Tambah</Link>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Judul</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Deskripsi</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Kategori</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>PDF</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Gambar</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '12px', color: 'gray' }}>Belum ada tugas.</td>
            </tr>
          ) : filtered.map(t => (
            <tr key={t.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{t.judul}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{t.deskripsi}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{t.kategori}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{t.pdf ? <a href={t.pdf} target="_blank">Lihat PDF</a> : '-'}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{t.image ? <img src={t.image} alt="tugas" style={{ width: '60px', height: '60px', objectFit: 'cover' }} /> : '-'}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <Link to={`/edit/${t.id}`} style={{ marginRight: '8px', backgroundColor: '#2196F3', color: 'white', padding: '6px 10px', borderRadius: '6px', textDecoration: 'none' }}>Edit</Link>
                <button onClick={() => handleDelete(t.id)} style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer' }}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
