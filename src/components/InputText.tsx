import { ITextField } from "../interfaces/textField.interface";

interface PropsTypes extends Partial<ITextField> {
  name: string;
}

const InputText = ({ type, name, id, placeholder, register, errors }: PropsTypes) => {
  return (
    <input
      type={type ?? "text"}
      name={name}
      id={id ? id : name}
      className={`bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-3 form-input focus:outline-none focus:ring-[#c7d6d5] focus:ring-1 ${
        errors?.email ? "border-thunderbird" : "border-gray-300"
      } `}
      placeholder={placeholder}
      {...register(name)}
      autoComplete="off"
    />
  );
};

export default InputText;
