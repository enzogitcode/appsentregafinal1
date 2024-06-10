import { object, string, ref } from "yup"

export const postJobSchema = object().shape({
    empresa: string().required("El nombre de la empresa es requerido").empresa("El email no es válido"),
    Descripción: string().required("El nombre de la empresa es requerido").empresa("El email no es válido"),
})
