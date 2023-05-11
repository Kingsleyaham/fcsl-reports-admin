import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import TextField from "../../components/form/TextField";
import PasswordField from "../../components/form/PasswordField";
import { alertErrors } from "../../utils/handleError";
import { ILogin } from "../../interfaces/login.interface";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { loginValidationSchema } from "../../validations/login.schema";

const Login = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ILogin>({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = async (data: ILogin) => {
    console.log(data);
  };

  useEffect(() => {
    if (!(Object.keys(errors).length === 0)) alertErrors(errors, toast);
    // console.log(errors);
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
