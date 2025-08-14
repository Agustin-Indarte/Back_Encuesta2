import express from 'express'; //importo express
import { validateSchema } from '../middlewares/validator.middleware.js';
import { loginSchema, registerSchema } from '../validators/auth.validator.js';
import {login, logout, profile, register, verifyEmail, verifyToken} from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import uploadIconProfileImage from '../helpers/multer.config.iconProfile.js';
import { getProfileImage, uploadProfileImage } from '../controllers/profile.controller.js';


const router = express.Router(); //creo una instancia de express.Router()

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile', authRequired, profile);
router.get('/verify-token', verifyToken);
router.get('/verify-email', verifyEmail);


//Estas son las rutas para la imagen de perfil del usuario
router.post('/upload-profile-image', 
    authRequired, 
    uploadIconProfileImage.single("iconProfile"), // 'iconProfile' tiene que coincidir con el name del front del input
    uploadProfileImage
); 
router.get('/profile-image', authRequired, getProfileImage);


export default router; //exporto la instancia de express.Router()