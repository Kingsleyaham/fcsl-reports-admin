import { toast } from "react-toastify";
import { useDeleteReportMutation, useDeleteSelectedReportMutation } from "../redux/api/report.api";
import { handleAsyncError } from "../utils/handleError";
import { sentenceCase, titleCase } from "../utils/textCase";
import { IReportProps } from "../interfaces/report.interface";

type PropTypes = {
  reports: IReportProps[];
  reportType: string;
  refetch: any;
};

const ReportItems = ({ reports, reportType, refetch }: PropTypes) => {
  const [deleteSelectedReport] = useDeleteSelectedReportMutation();
  const [deleteReport] = useDeleteReportMutation();

  const handleDeleteAllReport = async (type: string) => {
    try {
      const response: any = await deleteSelectedReport(type);
      refetch();
      console.log(response);
    } catch (err) {
      handleAsyncError(err, toast);
    }
  };

  const handleDeleteReport = async (ev: any) => {
    try {
      const id = ev.target.id;
      const response: any = await deleteReport(id);

      if (response?.data) {
        const { message } = response.data;
        toast.success(titleCase(message));
        refetch();
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

  return (
    <div className="mt-24">
      <div className="flex justify-end m-10">
        <button
          className="text-white bg-thunderbird rounded-lg py-2 px-5 font-medium"
          onClick={() => handleDeleteAllReport(reportType)}
        >
          Delete All
        </button>
      </div>
      <div className="flex justify-center overflow-x-scroll shadow-md sm:rounded-lg m-10">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Name
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Year
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Report Url
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {reports?.length > 0 ? (
              reports?.map((report: IReportProps, index: any) => (
                <tr className="bg-white border-b" key={index}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {titleCase(report?.name)}
                  </th>
                  <td className="px-6 py-4">{report?.year}</td>
                  <td className="px-6 py-4">
                    <a
                      href={report?.reportUrl}
                      className="text-blue-500"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Preview
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      id={report?.id.toString()}
                      className="cursor-pointer text-thunderbird"
                      onClick={(ev) => handleDeleteReport(ev)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
                  colSpan={3}
                >
                  No reports found
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportItems;
