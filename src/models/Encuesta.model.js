import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    type: { type: String, required: true, enum: ["text", "question", "multimedia"] },
    content: {
        title: { type: String }, // Solo para type "text"
        description: { type: String }, // Solo para type "text"
        questionText: { type: String }, // Solo para type "question"
        questionType: { type: String }, // Ej: Pregunta, Fecha, Desplegable...
        options: [{ type: String }], // Para preguntas con opciones
        fileConfig: { // Solo para type "question" con "Archivos"
            maxSize: { type: Number },
            maxFiles: { type: Number },
            allowedTypes: [{ type: String }]
        },
        min: { type: Number }, // Escala
        max: { type: Number }, // Escala
        labelMin: { type: String }, // Escala
        labelMax: { type: String }, // Escala
        fileUrl: { type: String }, // Multimedia
        fileType: { type: String }, // Multimedia
        caption: { type: String } // Multimedia
    }
});

const encuestaSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    state: { type: String, required: true, enum: ["activa", "inactiva"] },
    category: { type: String, required: true },
    image: { type: String },
    cards: [cardSchema]
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("Encuesta", encuestaSchema);