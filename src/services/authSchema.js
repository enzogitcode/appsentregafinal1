import { object, string, ref } from "yup"

export const signupSchema = object().shape({
    empresa: string().required("El nombre de la empresa es requerido").email("El email no es válido"),
    email: string().required("El email es requerido").email("El email no es válido"),
    password: string()
        .required("La contraseña es requerida")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: string()
        .oneOf([ref("password"), null], "Passwords must match")
        .required(),
    role: string()
        .required("Debes elegir un rol")
})
