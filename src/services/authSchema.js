import { object, string, ref } from "yup"

export const signupSchema = object().shape({
    email: string().required("El email es requerido").email("El email no es válido"),
    password: string()
        .required("La contraseña es requerida")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: string()
        .oneOf([ref("password"), null], "Passwords must match")
        .required(),
})
