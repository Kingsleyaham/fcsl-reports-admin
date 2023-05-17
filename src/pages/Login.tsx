import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import TextField from "../components/form/TextField";
import PasswordField from "../components/form/PasswordField";
import { alertErrors, handleAsyncError } from "../utils/handleError";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { loginValidationSchema } from "../validations/login.schema";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../interfaces/auth.interface";
import { useLoginMutation } from "../redux/api/auth.api";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setToken } from "../redux/features/auth/authSlice";
import { sentenceCase } from "../utils/textCase";
import { MESSAGES } from "../constants";

const Login = () => {
  const [login, { error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const token = useAppSelector()

  // useEffect(() => {}, []);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<ILogin>({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = async (data: ILogin) => {
    try {
      const userData: any = await login({ ...data });
      if (userData?.data) {
        const { token } = userData.data;

        dispatch(setToken({ token }));
        reset();
        toast.success(MESSAGES.LOGIN_SUCCESS);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        const {
          data: { error },
        } = userData.error;

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
    <main className="bg-slate-800">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-sm xl:p-0">
          <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-3 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                name="email"
                labelName="Email address"
                placeholder="example@email.com"
                register={register}
                errors={errors}
              />

              <PasswordField
                register={register}
                name="password"
                labelName="Password"
                errors={errors}
              />

              <div className="py-4">
                <button
                  type="submit"
                  className="w-full text-white bg-thunderbird hover:bg-thunderbird focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
