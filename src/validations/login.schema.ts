import { object, string, ObjectSchema, setLocale } from "yup";
import { ILogin } from "../interfaces/login.interface";

setLocale({
  mixed: {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${path} is required",
  },
});

export const loginValidationSchema: ObjectSchema<ILogin> = object({
  email: string().required().email("invalid email address").trim(),
  password: string().required().min(8, "password must be atleast 8 character"),
});
