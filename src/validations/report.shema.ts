import { object, setLocale, mixed, string } from "yup";

setLocale({
  mixed: {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${path} is required",
  },
});

export const reportValidationSchema = object({
  report: mixed()
    .test("required", "Please select report to upload", (value: any) => value?.length > 0)
    .test(
      "file format",
      "File type must be pdf",
      (value: any) => value?.length && value[0]?.type === "application/pdf"
    ),
  reportType: string().required().trim().label("Report Type"),
});
