import mongoose from "mongoose";

const respuestaSchema = new mongoose.Schema({
  encuesta: { type: mongoose.Schema.Types.ObjectId, ref: "Encuesta", required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: false }, // Ahora no es requerido
  respuestas: [
    {
      cardId: { type: mongoose.Schema.Types.ObjectId, required: true },
      valor: {} // Puede ser String, Number, Array, etc. según la pregunta
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Respuesta", respuestaSchema);