import { FieldErrors } from "react-hook-form";
import { ILogin } from "./auth.interface";

export interface ITextField {
  name: string;
  register?: any;
  type?: string;
  id?: string;
  placeholder?: string;
  labelName: string;
  htmlFor?: string;
  errors: FieldErrors<ILogin>;
}
