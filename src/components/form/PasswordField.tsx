import Label from "./components/Label";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { IPasswordField } from "../../interfaces/passwordField.interface";
import InputPassword from "./components/InputPassword";
import InputText from "./components/InputText";
import { titleCase } from "../../utils/textCase";
import { useState } from "react";

const PasswordField = ({
  name,
  register,
  labelName,
  htmlFor,
  placeholder,
  errors,
}: IPasswordField) => {
  const [pwdVisible, setPwdVisible] = useState(false);

  const togglePasswordVisible = () => setPwdVisible(!pwdVisible);

  return (
    <div className="relative">
      <Label
        htmlFor={htmlFor ?? (name || "password")}
        labelName={labelName ?? (titleCase(name) || "Password")}
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
