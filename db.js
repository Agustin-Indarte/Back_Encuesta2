import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    console.log("🔗 Conectando a MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ MongoDB conectado correctamente");
  } catch (error) {
    console.error("❌ Error al conectar MongoDB:", error);
    process.exit(1);
  }
};

export default connectToMongoDB;
