export const BASE_URL = !(process.env.NODE_ENV === "development")
  ? (process.env.REACT_APP_REMOTE_SERVER_ENDPOINT as string)
  : (process.env.REACT_APP_LOCAL_SERVER_ENDPOINT as string);

export const REMOTE_URL = !(process.env.NODE_ENV === "development")
  ? process.env.REMOTE_URL_PROD!
  : process.env.REMOTE_URL_DEV!;

export const MESSAGES = {
  LOGIN_SUCCESS: "login succesful",
  UPLOAD_REPORT_SUCCESS: "report uploaded successfully",
  UPLOAD_AVATAR_SUCCESS: "profile image uploaded successfully",
  PROFILE_UPDATE_SUCCESS: "profile updated successfully",
  DELETE_SUCCESS: "report(s) deleted successfully",
};

export const ERRORS = {
  DEFAULT: "An Error occured",
  STATUS_400: "Invalid email or password",
  STATUS_401: "You are unauthorized to access resource",
  NO_SERVER_RESPONSE: "No Server Response",
};
