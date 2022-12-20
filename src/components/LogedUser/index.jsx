function LogedUser(props) {
  return (
    <div>
      {props.name} {" -> "}
      {props.login}
    </div>
  );
}

export default LogedUser;
