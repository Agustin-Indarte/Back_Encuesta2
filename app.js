import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Importar rutas explícitamente
import encuestaRoutes from "./src/routes/encuesta.routes.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

// Configurar CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};
app.use(cors(corsOptions));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Registrar rutas explícitas
app.use("/api/v1", encuestaRoutes);

// Registrar las demás rutas dinámicamente
const routeFiles = fs.readdirSync('./src/routes');
routeFiles.forEach(file => {
  // Evitar volver a cargar encuesta.routes.js
  if (file === 'encuesta.routes.js') return;

  import(`./src/routes/${file}`).then(route => {
    app.use("/api/v1", route.default);
  }).catch(err => console.error(`Error cargando ruta ${file}:`, err));
});

export default app;








