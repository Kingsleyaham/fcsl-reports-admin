import { Outlet } from "react-router-dom";
import AdminSideBar from "../../components/AdminSideBar";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { useState } from "react";

const DashBoard = () => {
  const user = useAppSelector(selectCurrentUser);
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <div className="flex justify-start">
        <AdminSideBar username={user.username} setIsVisible={setIsVisible} />
        <AdminNavbar imageUrl={user.imageUrl} />
      </div>
      <div className={`${isVisible ? "sm:ml-[280px]" : "sm:ml-0"} mt-10`}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
