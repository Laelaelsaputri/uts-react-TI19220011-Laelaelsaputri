import { createSlice, nanoid } from '@reduxjs/toolkit';

const simpan = JSON.parse(localStorage.getItem('tugas')) || [];
const initialState = simpan.length > 0 ? simpan : [];
const taskSlice = createSlice({
  name: 'tugas',
  initialState,
  reducers: {
    tambah: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem('tugas', JSON.stringify(state)); // untuk menyimpan ke localStorage
      },
      prepare({ judul, deskripsi, kategori, pdf, image }) {
        return { payload: { id: nanoid(), judul, deskripsi, kategori, pdf, image } }
      }
    },
    edit(state, action) {
      const { id, judul, deskripsi, kategori, pdf, image } = action.payload;
      const idx = state.findIndex(t => t.id === id);
      if (idx !== -1) state[idx] = { id, judul, deskripsi, kategori, pdf, image };
      localStorage.setItem('tugas', JSON.stringify(state)); 
    },
    hapus(state, action) {
      const newState = state.filter(t => t.id !== action.payload);
      localStorage.setItem('tugas', JSON.stringify(newState)); 
      return newState;
    }
  }
});

export const { tambah, edit, hapus } = taskSlice.actions;
export default taskSlice.reducer;
