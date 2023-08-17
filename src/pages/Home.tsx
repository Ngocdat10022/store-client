import instance from "@/config/axios";
import { useAuthContext } from "@/context/authContext";
import { useEffect } from "react";

const Home = () => {
  const { user, handleLogout } = useAuthContext();
  return (
    <div>
      <div className="user">
        <h3>{`${user?.displayName} ` || "yhixyzml"}</h3>
        <img src={user?.photoURL} alt="" />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
