import { object, string, ref } from "yup"

export const postJobSchema = object().shape({
    firm: string().required("El nombre de la empresa es requerido").empresa("El email no es válido"),
    jobtitle: string().required("El nombre de la empresa es requerido").empresa("El email no es válido"),
    description: string().required("El nombre de la empresa es requerido").empresa("El email no es válido"),
    jobAge: string().required("El nombre de la empresa es requerido").empresa("El email no es válido"),
    otherdata: string().required("El nombre de la empresa es requerido").empresa("El email no es válido"),
    location: string().required("El nombre de la empresa es requerido").empresa("El email no es válido"),
    experience: string().required("El nombre de la empresa es requerido").empresa("El email no es válido"),
})


