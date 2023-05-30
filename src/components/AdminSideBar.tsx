import { useRef } from "react";
import { BsBoxArrowInRight, BsChevronUp, BsFilterLeft, BsXLg } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { MdLibraryBooks } from "react-icons/md";
import { HiPlusCircle } from "react-icons/hi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { logoutUser } from "../redux/features/auth/authSlice";
import { IUser } from "../interfaces/user.interface";
import { titleCase } from "../utils/textCase";

type ActiveProps = {
  isActive: boolean;
  isPending: boolean;
};

interface IProps extends IUser {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminSideBar = ({ username, setIsVisible }: Partial<IProps>) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const sideBarRef = useRef<HTMLDivElement>(null);
  const subMenuRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  const openSidebar = () => {
    sideBarRef.current?.classList.toggle("hidden");
    (setIsVisible as React.Dispatch<React.SetStateAction<boolean>>)((prev) => !prev);
  };

  const dropdown = () => {
    subMenuRef.current?.classList.toggle("hidden");
    arrowRef.current?.classList.toggle("rotate-0");
  };

  const reportActive = ({ isActive, isPending }: ActiveProps) =>
    `block cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 ${isActive ? "bg-blue-600" : ""}`;

  const checkActive = () => {
    if (pathname === "/dashboard/report/new") return "newReport";
    else if (pathname === "/dashboard/profile") return "profile";
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      navigate("/");
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <aside className="z-30">
      <span
        className="absolute text-white text-4xl top-2 left-4 cursor-pointer"
        onClick={openSidebar}
      >
        <BsFilterLeft className="px-2 bg-slate-700 rounded-md text-4xl" />
      </span>
      <div
        ref={sideBarRef}
        className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[280px] overflow-y-auto text-center bg-slate-700"
      >
        <div className="text-gray-100 text-xl mb-5">
          <div className="p-2.5 mt-1 flex items-center">
            <h2 className="font-bold text-gray-200 text-[15px] ml-3">
              Welcome&nbsp;{titleCase(username as string)}
            </h2>
            <BsXLg className="ml-28 cursor-pointer lg:hidden text-4xl" onClick={openSidebar} />
          </div>
        </div>

        <div className="my-2 bg-gray-600 h-[1px]"></div>

        <div
          className={`p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white ${
            checkActive() === "newReport" ? "bg-blue-600" : ""
          }`}
        >
          <HiPlusCircle className="text-2xl" />
          <div className="flex justify-between w-full items-center">
            <NavLink
              to="/dashboard/report/new"
              className="text-[15px] ml-2 text-gray-200 font-bold"
            >
              New Report
            </NavLink>
          </div>
        </div>

        <div
          className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={dropdown}
        >
          <MdLibraryBooks className="text-2xl" />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-2 text-gray-200 font-bold">Reports</span>
            <span ref={arrowRef} className="text-sm rotate-180" id="arrow">
              <BsChevronUp className="text-2xl" />
            </span>
          </div>
        </div>
        <div
          ref={subMenuRef}
          className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold hidden"
          id="submenu"
        >
          <NavLink to="/dashboard/reports/daily" className={reportActive}>
            Daily Reports
          </NavLink>
          <NavLink to="/dashboard/reports/weekly" className={reportActive}>
            Weekly Reports
          </NavLink>
          <NavLink to="/dashboard/reports/monthly" className={reportActive}>
            Monthly Reports
          </NavLink>
        </div>
        <div
          className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white ${
            checkActive() === "profile" ? "bg-blue-600" : ""
          }`}
        >
          <BiUser className="text-2xl" />
          <div className="flex justify-between w-full items-center">
            <NavLink to="/dashboard/profile" className="text-[15px] ml-2 text-gray-200 font-bold">
              Profile
            </NavLink>
          </div>
        </div>
        <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <BsBoxArrowInRight className="text-2xl" />
          <button className="text-[15px] ml-2 text-gray-200 font-bold" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSideBar;
