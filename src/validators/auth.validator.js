import {z} from "zod";

/*
 * Esquema de validación para el registro de usuarios.
 */
export const registerSchema = z.object({
  // Nombre de usuario debe ser un string y es obligatorio
  username: z.string({ required_error: "username is required" }),

  // Email debe ser un string válido y tener formato de email
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),

  // Password debe ser un string con al menos 6 caracteres
  password: z
    .string({ required_error: "password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

/*
 * Esquema de validación para el inicio de sesión.
 */
export const loginSchema = z.object({
  // Email debe ser un string válido y tener formato de email
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),

  // Password debe ser un string con al menos 6 caracteres
  password: z
    .string({ required_error: "password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});