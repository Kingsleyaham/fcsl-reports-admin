import { object, setLocale, mixed } from "yup";

const supportedFormat = ["image/jpeg", "image/jpg", "image/png"];

setLocale({
  mixed: {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${path} is required",
  },
});

export const avatarValidationSchema = object({
  avatar: mixed()
    .test("required", "Signature is required", (value: any) => value?.length > 0)
    .test(
      "file format",
      "Invalid file format",
      (value: any) => value?.length && supportedFormat.includes(value[0]?.type)
    )
    .test(
      "file size",
      "File size too large",
      (value: any) => value?.length && value[0]?.size <= 1048576
    ),
});
