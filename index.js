import app from "./app.js";
import connectToMongoDB from "./db.js";

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectToMongoDB();
    console.log("✅ Conexión a MongoDB establecida");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error.message);
    process.exit(1);
  }
};

startServer();






