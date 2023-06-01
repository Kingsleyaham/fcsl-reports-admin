import ProfileUpdateForm from "../components/ProfileUpdateForm";
import PasswordUpdateForm from "../components/PasswordUpdateForm";
import AvatarUpload from "../components/AvatarUpload";

const Profile = () => {
  
  return (
    <div className="-z-50 p-10 bg-[#f5f6f7] h-screen">
      <div className="mx-auto bg-white p-5 rounded-lg shadow-md">
        {/* profile details update */}
        <AvatarUpload />
        <ProfileUpdateForm />
        <PasswordUpdateForm />
      </div>
    </div>
  );
};

export default Profile;
