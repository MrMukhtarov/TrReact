import { object, string } from "yup";
const required_error = "Zehmet olmasa doldurun";

const contactSchema = object({
  firstName: string().required(required_error),
  lastName: string().required(required_error),
  email: string()
    .email("Gerçək bir email adresi yazın")
    .required(required_error),
  message: string().min(5, "Minimum 6 xarakter girin").required(required_error),
});

export default contactSchema;
