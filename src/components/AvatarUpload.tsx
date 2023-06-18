import { useEffect, useRef } from "react";
import avatar from "../assets/img/avatar.webp";
import { alertErrors, handleAsyncError } from "../utils/handleError";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { avatarValidationSchema } from "../validations/avatar.schema";
import { useAppSelector } from "../redux/hooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useUploadAvatarMutation } from "../redux/api/user.api";
import { sentenceCase } from "../utils/textCase";
import { MESSAGES } from "../constants";

type AvatarUploadProps = {
  avatar: any;
};

const AvatarUpload = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [uploadAvatar] = useUploadAvatarMutation();
  const { id } = useAppSelector(selectCurrentUser);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<AvatarUploadProps>({
    resolver: yupResolver(avatarValidationSchema),
  });

  const avatarRegister = register("avatar");

  const onSubmit = async (data: AvatarUploadProps) => {
    try {
      const formData = new FormData();
      formData.append("avatar", data.avatar[0]);
      formData.append("userId", id);

      const response: any = await uploadAvatar(formData);

      if (response.data) {
        toast.success(MESSAGES.UPLOAD_AVATAR_SUCCESS);
      } else {
        const {
          data: { error },
        } = response.error;
        toast.error(sentenceCase(error));
      }
    } catch (err: any) {
      handleAsyncError(err, toast);
    }
  };

  useEffect(() => {
    if (!(Object.keys(errors).length === 0)) alertErrors(errors, toast);
  }, [errors]);

  const previewImage = (ev: React.ChangeEvent<HTMLInputElement> | any) => {
    const file = ev.target.files[0];
    const imgSrc = URL.createObjectURL(file);

    if (imgRef.current) imgRef.current.src = imgSrc;

    URL.revokeObjectURL(file);
  };
  return (
    <div className="flex mb-8">
      <div className="md:flex justify-start space-x-8 items-center border-b-[1px] mb-3 w-full pb-4">
        <div className="pl-20 md:pl-0">
          <img src={avatar} alt="avatar" className="w-28 h-28 rounded-full" ref={imgRef} />
        </div>
        <div>
          <p className="font-semibold text-sm md:block hidden">Profile Photo</p>
          <span className="text-sm text-gray-400">Accepted file type .png, .jpg, .jpeg</span>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-3 pt-3">
              <label
                htmlFor="avatar"
                className="py-2 px-5 bg-nevada cursor-pointer text-white font-medium rounded-full"
              >
                Choose
              </label>
              <input
                type="file"
                id="avatar"
                className="hidden"
                {...avatarRegister}
                onChange={(e) => {
                  avatarRegister.onChange(e);
                  previewImage(e);
                }}
                onBlur={avatarRegister.onBlur}
              />

              <button
                type="submit"
                className="py-2 px-5 bg-thunderbird cursor-pointer text-white font-medium rounded-full"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarUpload;
