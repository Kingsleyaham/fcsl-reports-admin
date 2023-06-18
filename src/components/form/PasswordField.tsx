import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import InputPassword from "./InputPassword";
import { titleCase } from "../../utils/textCase";
import { useState } from "react";
import Label from "./Label";
import InputText from "./InputText";
import { IInputField } from "../../interfaces/inputField.interface";

const PasswordField = ({
  name,
  register,
  labelName,
  htmlFor,
  placeholder,
  errors,
  classNames,
}: IInputField) => {
  const [pwdVisible, setPwdVisible] = useState(false);

  const togglePasswordVisible = () => setPwdVisible(!pwdVisible);

  return (
    <div className="relative">
      <Label
        htmlFor={htmlFor ?? (name || "password")}
        labelName={labelName ?? (titleCase(name) || "Password")}
        classNames={classNames ?? ""}
      />
      {pwdVisible ? (
        <>
          <InputText
            name={name}
            placeholder={placeholder ?? "your password"}
            register={register}
            errors={errors}
          />
        </>
      ) : (
        <InputPassword
          register={register}
          placeholder={placeholder ?? "your password"}
          name={name ?? "password"}
          errors={errors}
        />
      )}

      <span className="cursor-pointer" onClick={togglePasswordVisible}>
        {pwdVisible ? (
          <AiOutlineEye className="absolute top-10 right-2 text-lg" />
        ) : (
          <AiOutlineEyeInvisible className="absolute top-10 right-2 text-lg" />
        )}
      </span>
    </div>
  );
};

export default PasswordField;
