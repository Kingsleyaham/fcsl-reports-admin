import { IUser } from "../../interfaces/user.interface";
import defaultAvatar from "../../assets/img/avatar.webp";

const AdminNavbar = ({ imageUrl }: Partial<IUser>) => {
  return (
    <nav className="z-20 w-full bg-whisper border-b border-gray-200 absolute right-0">
      <div className="px-3 py-2 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-end">
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div>
                <img
                  className="w-8 h-8 rounded-full"
                  src={imageUrl ? imageUrl : defaultAvatar}
                  alt="user profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
