import React, { useState } from 'react';

export default function form({ onSubmit, submitLabel, initialData = {} }) {
  const [judul, setJudul] = useState(initialData.judul || '');
  const [deskripsi, setdeskripsi] = useState(initialData.deskripsi || '');
  const [kategori, setkategori] = useState(initialData.kategori || 'Aplikasi Kontenporer');
  const [pdf, setPdf] = useState(initialData.pdf || null);
  const [image, setImage] = useState(initialData.image || null);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ judul, deskripsi, kategori, pdf, image });
  };
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (type === 'pdf') setPdf(url);
      else setImage(url);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '12px', maxWidth: 500, margin: '0 auto' }}>
      <div>
        <label>Judul:</label>
        <input
          type="tugas"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginTop: '4px' }}
        />
      </div>
      <div>
        <label>Deskripsi:</label>
        <textarea
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginTop: '4px' }}
        />
      </div>
      <div>
        <label>Kategori:</label>
        <select
          value={kategori}
          onChange={(e) => setkategori(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '4px' }}
        >
          <option value="Aplikasi Kontenporer">Aplikasi Kontenporer</option>
          <option value="Kewirausahaan">Kewirausahaan</option>
          <option value="Proyek Manajaemen TIK">Proyek Manajaemen TIK</option>
          <option value="Sistem Pengambilan Keputusan">Sistem Pengambilan Keputusan</option>
        </select>
      </div>
      <div>
        <label>Upload PDF:</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => handleFileChange(e, 'pdf')}
          style={{ marginTop: '4px' }}
        />
        {pdf && (
          <div>
            <a href={pdf} target="_blank" rel="noreferrer">
              📄 Lihat PDF
            </a>
          </div>
        )}
      </div>
      <div>
        <label>Upload Gambar:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, 'image')}
          style={{ marginTop: '4px' }}
        />
        {image && (
          <div>
            <img
              src={image}
              alt="Preview"
              style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '8px', borderRadius: '8px' }}
            />
          </div>
        )}
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        {submitLabel}
      </button>
    </form>
  );
}
