import ReactPaginate from "react-paginate";
import ReportItems from "../../../components/ReportItems";
import { useGetWeeklyReportsQuery } from "../../../redux/api/report.api";
import { useEffect, useState } from "react";
import { itemsPerPage } from "../../../components/PaginateConfig";
import MoonLoader from "react-spinners/MoonLoader";

const WeeklyReports = () => {
  const { data, isLoading, isError, refetch } = useGetWeeklyReportsQuery();
  const [itemOffset, setItemOffset] = useState(0);

  let reports = [];

  if (data) {
    reports = data.reports;
  }

  const endOffset = itemOffset + itemsPerPage;
  const currentReports = reports.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(reports.length / itemsPerPage);

  const handlePageClick = (ev: any) => {
    const newOffset = (ev.selected * itemsPerPage) % reports.length;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError)
    return (
      <div className="flex justify-center p-10 h-screen w-full text-xl">
        An Error Occured while fetching reports
      </div>
    );

  if (isLoading)
    return (
      <div className="flex justify-center cur p-10 h-screen w-full">
        <MoonLoader color="#b41421" />
      </div>
    );

  return (
    <>
      <ReportItems refetch={refetch} reportType="weekly" reports={currentReports} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        nextLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={3}
        pageCount={pageCount}
        previousLabel="<<"
        previousLinkClassName="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100"
        activeLinkClassName="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
        pageLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
        renderOnZeroPageCount={null}
        breakLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
        containerClassName="flex justify-end mx-10 -space-x-px"
        disabledLinkClassName="pointer-events-none"
      />
    </>
  );
};

export default WeeklyReports;
