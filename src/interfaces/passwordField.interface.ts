import { FieldErrors } from "react-hook-form";
import { ILogin } from "./auth.interface";
export interface IPasswordField {
  name: string;
  labelName?: string;
  id?: string;
  register?: any;
  htmlFor?: string;
  placeholder?: string;
  errors: FieldErrors<ILogin>;
}
