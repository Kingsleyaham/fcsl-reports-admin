import { ERRORS } from "../constants";
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

export const handleAsyncError = (err: any, toast: any) => {
  let errorMsg = "";

  if (!err?.response) errorMsg = ERRORS.NO_SERVER_RESPONSE;
  else if (err.response?.status === 400) errorMsg = ERRORS.STATUS_400;
  else if (err.response?.status === 401) errorMsg = ERRORS.STATUS_401;
  else errorMsg = ERRORS.DEFAULT;

  console.log(errorMsg);

  toast.error(sentenceCase(errorMsg));
};
