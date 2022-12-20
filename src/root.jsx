import { useState } from "react";
import Auth from "./components/Auth";
import { LoginUser } from "./context/loginUser";
import LogedUsers from "./components/LogedUsers";

function Root() {
  const [users, setUsers] = useState([]);

  return (
    <LoginUser.Provider value={[users, setUsers]}>
      <div style={{ margin: "0 auto", width: "300px" }}>
        <Auth />
        <LogedUsers />
      </div>
    </LoginUser.Provider>
  );
}

export default Root;
