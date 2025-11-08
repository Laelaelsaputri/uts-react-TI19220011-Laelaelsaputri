import React from 'react';
import { useDispatch } from 'react-redux';
import { hapus } from '../redux/TaskSlice';
import { useNavigate } from 'react-router-dom';

export default function item({ tugas }) {
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '10px',
      marginBottom: '10px',
      backgroundColor: '#fafafa'
    }}>
      <h3>{tugas.judul}</h3>
      <p>{tugas.deskripsi}</p>
      <p><strong>Kategori:</strong> {tugas.kategori}</p>
      {tugas.link && (
        <p>
          <a href={tugas.link} target="_blank" rel="noreferrer">{tugas.link}</a>
        </p>
      )}
      {tugas.pdf && (
        <p>
          <a href={tugas.pdf} target="_blank" rel="noreferrer">Lihat PDF</a>
        </p>
      )}
      {tugas.image && (
        <img
          src={tugas.image}
          alt="Tugas"
          style={{ width: '100px', borderRadius: '8px', marginTop: '8px' }}
        />
      )}
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => nav(`/edit/${tugas.id}`)}>Edit</button>
        <button onClick={() => dispatch(deleteTask(tugas.id))}>Hapus</button>
      </div>
    </div>
  );
}
