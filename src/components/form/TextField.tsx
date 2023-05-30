import { ITextField } from "../../interfaces/textField.interface";
import { titleCase } from "../../utils/textCase";
import InputText from "../InputText";
import Label from "./Label";

const TextField = ({
  type,
  name,
  id,
  placeholder,
  register,
  labelName,
  htmlFor,
  errors,
}: ITextField) => {
  return (
    <div>
      <Label htmlFor={htmlFor ?? name} labelName={labelName ?? titleCase(name)} />
      <InputText
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default TextField;
