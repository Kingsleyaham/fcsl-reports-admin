import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const DashBoard = () => {
  const user = useAppSelector(selectCurrentUser);

  return <div>welcome to my your dashboard {user?.username}</div>;
};

export default DashBoard;
