import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { reportValidationSchema } from "../../../validations/report.shema";
import { useEffect } from "react";
import { alertErrors, handleAsyncError } from "../../../utils/handleError";
import { toast } from "react-toastify";
import { MESSAGES } from "../../../constants";
import { useSaveReportMutation } from "../../../redux/api/report.api";
import { sentenceCase } from "../../../utils/textCase";
import { BiLoaderCircle } from "react-icons/bi";

type FormValues = {
  report: any;
  reportType: string;
};

const CreatReport = () => {
  const [saveReport] = useSaveReportMutation();

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
    register,
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(reportValidationSchema) });

  // const avatar = register("avatar");

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    console.log(data);
    try {
      const rptYear = new Date().getFullYear();
      const formData = new FormData();

      formData.append("report", data.report[0]);
      formData.append("reportType", data.reportType);
      formData.append("year", `${rptYear}`);

      const response: any = await saveReport(formData);

      if (response.data) {
        reset();
        toast.success(MESSAGES.UPLOAD_REPORT_SUCCESS, {
          toastId: "uploadReportSuccess",
        });
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
    alertErrors(errors, toast);
  }, [errors]);

  return (
    <div className="flex justify-center p-10 bg-gray-50 h-screen w-full">
      <form
        className="md:w-[60%] sm:w-[75%] w-[90%] mx-auto bg-white shadow-lg rounded-xl p-6 pt-10 h-fit mt-10"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center space-x-6">
          <label>
            <input
              type="file"
              className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-[#ecebf3] file:text-[#b41421]
            hover:file:cursor-pointer hover:file:bg-gray-50
            hover:file:text-[#6d7275]
          "
              {...register("report")}
            />
          </label>
        </div>
        <div className="mt-3 pt-4">
          <select
            id="reportType"
            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
              errors.reportType ? "border-thunderbird" : "border-gray-300"
            }`}
            onChange={(e) => setValue("reportType", e.target.value, { shouldValidate: true })}
            defaultValue=""
          >
            <option value="" disabled>
              Select Report Type
            </option>
            <option value="daily">Daily Report</option>
            <option value="weekly">Weekly Report</option>
            <option value="monthly">Monthly Report</option>
          </select>
        </div>

        <div className="mt-6 mb-3 float-right">
          <button
            type="submit"
            className={`bg-[#b41421] text-white hover:bg-[#6d7275] hover:text-[#ecebf3] font-semibold px-6 py-2 rounded-full ${
              isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            // disabled={isSubmitting}
            disabled={isSubmitting}
          >
            {isSubmitting && <BiLoaderCircle className="text-2xl inline-block pr-1" />}
            <span className="inline-block">{isSubmitting ? "Uploading" : "Upload"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatReport;
