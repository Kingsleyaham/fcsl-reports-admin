import { yupResolver } from "@hookform/resolvers/yup";
import { IProfileUpdate } from "../interfaces/profile.interface";
import { profileValidationSchema } from "../validations/profile.schema";
import TextField from "./form/TextField";
import { useForm } from "react-hook-form";
import { alertErrors, handleAsyncError } from "../utils/handleError";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useUpdateUserMutation } from "../redux/api/user.api";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";
import { MESSAGES } from "../constants";
import { sentenceCase } from "../utils/textCase";

const ProfileUpdateForm = () => {
  const [updateUser] = useUpdateUserMutation();
  const { id } = useAppSelector(selectCurrentUser);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<IProfileUpdate>({
    resolver: yupResolver(profileValidationSchema),
  });

  const onSubmit = async (data: IProfileUpdate) => {
    try {
      const response: any = await updateUser({ id, ...data });
      if (response.data) {
        toast.success(MESSAGES.PROFILE_UPDATE_SUCCESS);
      } else {
        const {
          data: { error },
        } = response.error;
        toast.error(sentenceCase(error));
      }
    } catch (err) {
      handleAsyncError(err, toast);
    }
  };

  useEffect(() => {
    if (!(Object.keys(errors).length === 0)) alertErrors(errors, toast);
  }, [errors]);

  return (
    <div className="border-b-[1px] mb-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative mb-6">
            <TextField
              labelName="First Name"
              name="firstname"
              placeholder="Firstname"
              errors={errors}
              register={register}
              classNames="font-bold text-gray-900"
            />
          </div>
          <div className="relative mb-6">
            <TextField
              labelName="Surname"
              name="surname"
              placeholder="Surname"
              errors={errors}
              register={register}
              classNames="font-bold text-gray-900"
            />
          </div>
          <div className="relative mb-6">
            <TextField
              labelName="Email"
              name="email"
              placeholder="Email"
              errors={errors}
              register={register}
              classNames="font-bold text-gray-900"
            />
          </div>
          <div className="relative mb-6">
            <TextField
              labelName="Username"
              name="username"
              placeholder="Username"
              errors={errors}
              register={register}
              classNames="font-bold text-gray-900"
            />
          </div>
        </div>

        <div className="flex justify-end my-4">
          <button type="submit" className="bg-thunderbird text-white px-8 py-2 rounded-full">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdateForm;
