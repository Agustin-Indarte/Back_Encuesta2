import app from "./app.js";
import connectToMongoDB from "./db.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Conectar a MongoDB antes de iniciar el servidor
    await connectToMongoDB();
    console.log("✅ Conexión a MongoDB establecida");

    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error.message);
    process.exit(1); // Salir del proceso si falla
  }
};

startServer();




