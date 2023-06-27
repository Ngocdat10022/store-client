import { useAuthContext } from "@/context/authContext";

const Home = () => {
  const { user, handleLogout, accessToken } = useAuthContext();

  return (
    <div>
      <div className="user">
        <h3>{`${user?.displayName}`}</h3>
        <img src={user?.photoURL} alt="" />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
