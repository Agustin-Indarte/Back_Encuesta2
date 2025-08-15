import mongoose from 'mongoose';

const encuestaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { type: String, default: 'General' },
  estado: { type: String, default: 'inactiva' },
  fecha: { type: Date, default: Date.now },
});

export default mongoose.model('Encuesta', encuestaSchema);
