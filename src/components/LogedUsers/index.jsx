import { useContext } from "react";
import { LoginUser } from "../../context/loginUser";
import LogedUser from "../LogedUser";

function LogedUsers() {
  const [users, setUsers] = useContext(LoginUser);
  return (
    <>
      {users.map((value, index) => (
        <LogedUser key={index} {...value} />
      ))}
    </>
  );
}

export default LogedUsers;
