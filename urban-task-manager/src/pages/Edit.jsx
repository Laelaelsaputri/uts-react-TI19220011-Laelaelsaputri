import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edit } from '../redux/TaskSlice';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { id } = useParams();
  const tugas = useSelector(s => (s.tugas || []).find(t => String(t.id) === id));
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [kategori, setKategori] = useState('Aplikasi Kontenporer');
  const [pdf, setPdf] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (tugas) {
      setJudul(tugas.judul);
      setDeskripsi(tugas.deskripsi);
      setKategori(tugas.kategori);
    }
  }, [tugas]);
  if (!tugas) return <div>Tugas tidak ditemukan</div>;
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(edit({
      id: tugas.id,
      judul,
      deskripsi,
      kategori,
      pdf: pdf ? URL.createObjectURL(pdf) : tugas.pdf,
      image: image ? URL.createObjectURL(image) : tugas.image,
    }));
    nav('/');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h2>Edit</h2>
      <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input type="text" value={judul} onChange={e => setJudul(e.target.value)} required />
        <textarea value={deskripsi} onChange={e => setDeskripsi(e.target.value)} required />
        <select value={kategori} onChange={e => setKategori(e.target.value)}>
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
