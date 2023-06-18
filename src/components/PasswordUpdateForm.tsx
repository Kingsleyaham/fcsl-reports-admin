import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputPassword from "./form/InputPassword";
import { IPasswordUpdate } from "../interfaces/passwordUpdate.interface";
import { passwordValidationSchema } from "../validations/password.schema";
import { toast } from "react-toastify";
import { alertErrors } from "../utils/handleError";
import { useEffect } from "react";

const PasswordUpdateForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<IPasswordUpdate>({
    resolver: yupResolver(passwordValidationSchema),
  });

  const onSubmit = async (data: IPasswordUpdate) => {
    console.log(data);
  };

  useEffect(() => {
    if (!(Object.keys(errors).length === 0)) alertErrors(errors, toast);
  }, [errors]);

  return (
    <div className="mt-10 mb-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mb-6">
          <InputPassword
            name="currentPassword"
            placeholder="Current Password"
            errors={errors}
            register={register}
          />
        </div>
        <div className="relative mb-6">
          <InputPassword
            name="newPassword"
            placeholder="New Password"
            errors={errors}
            register={register}
          />
        </div>
        <div className="relative mb-6">
          <InputPassword
            name="confirmPassword"
            placeholder="Confirm New Password"
            errors={errors}
            register={register}
          />
        </div>

        <div className="flex justify-end my-4">
          <button type="submit" className="bg-thunderbird text-white px-4 py-2 rounded-full">
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordUpdateForm;
