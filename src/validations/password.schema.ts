import { IPasswordUpdate } from "./../interfaces/passwordUpdate.interface";
import { object, string, ObjectSchema, setLocale, ref } from "yup";

setLocale({
  mixed: {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${path} is required",
  },
});

export const passwordValidationSchema: ObjectSchema<IPasswordUpdate> = object({
  currentPassword: string()
    .label("current password")
    .required()
    .min(8, "current password must be atleast 8 character"),
  newPassword: string()
    .label("new password")
    .required()
    .min(8, "new password must be atleast 8 character"),
  confirmPassword: string()
    .label("confirm password")
    .required()
    .oneOf([ref<any>("newPassword"), null], "Passwords must match"),
});
