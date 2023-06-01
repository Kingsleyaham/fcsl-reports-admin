import { object, string, ObjectSchema, setLocale } from "yup";
import { IProfileUpdate } from "../interfaces/profile.interface";

setLocale({
  mixed: {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${path} is required",
  },
});

export const profileValidationSchema: ObjectSchema<IProfileUpdate> = object({
  firstname: string().trim(),
  surname: string().trim(),
  username: string().trim(),
});
