import { IPasswordField } from "../interfaces/passwordField.interface";

export interface PropsTypes extends Partial<IPasswordField> {
  name: string;
}

const InputPassword = ({ name, id, placeholder, register, errors }: PropsTypes) => {
  return (
    <input
      type="password"
      id={id ? id : name}
      placeholder={placeholder}
      className={`form-input bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg block w-full p-3 focus:outline-none focus:ring-[#c7d6d5] focus:ring-1 ${
        errors?.password ? "border-thunderbird" : "border-gray-300"
      }`}
      autoComplete="off"
      {...register(name)}
    />
  );
};

export default InputPassword;
