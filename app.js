import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
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

// Registrar todas las rutas dinámicamente
const routeFiles = fs.readdirSync('./src/routes');

// Iteramos sobre cada archivo encontrado en el directorio de rutas
routeFiles.forEach((file) => {
    // Usamos importaciones dinámicas (import()) para cargar cada módulo de ruta.
    // Esto es útil porque:
    // 1. Nos permite cargar módulos de forma asíncrona
    // 2. Cada ruta se registra independientemente
    // 3. Si una ruta falla, no afecta a las demás
    import(`./src/routes/${file}`).then((route) => {
        // Registramos la ruta en nuestra aplicación Express
        // Todas las rutas importadas serán prefijadas con '/api/v1'
        // Esto nos da:
        // - Versionado de API
        // - Un punto de entrada común para todas las rutas
        // - Mejor organización del código
        app.use('/api/v1', route.default);
        // Log de rutas cargadas después de registrar cada ruta
        if (app._router && app._router.stack) {
          console.log(`Rutas cargadas tras registrar ${file}:`);
          app._router.stack.forEach(r => {
            if (r.route && r.route.path) {
              console.log(r.route.path);
            }
          });
        }
    }).catch((err) => {
        console.error(`Error al cagrar la ruta ${file}:`, err)
    })
})

// Log de rutas cargadas
// (Eliminado el setTimeout duplicado que causaba el crash)

export default app;








