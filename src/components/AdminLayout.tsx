import AdminSideBar from "./AdminSideBar";
import AdminNavbar from "./navbar/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex justify-start">
      <AdminSideBar />
      <AdminNavbar />
    </div>
  );
};

export default AdminLayout;
