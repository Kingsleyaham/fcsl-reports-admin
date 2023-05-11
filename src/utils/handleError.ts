import { sentenceCase } from "./textCase";

// const customId = "toastId";

// utility functions for handling form errors
export const alertErrors = (errors: any, toast: any) => {
  for (const key in errors) {
    if (errors.hasOwnProperty(key)) {
      toast.error(sentenceCase(errors[key].message), {
        // toastId: customId,
      });
    } else {
      toast.error(sentenceCase(errors));
    }
  }
};
