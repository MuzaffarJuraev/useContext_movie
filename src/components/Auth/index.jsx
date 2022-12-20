import { useContext, useReducer } from "react";
import { LoginUser } from "../../context/loginUser";
import { auth_types } from "../../reducer/types/auth";

const reducer = (state, action) => {
  switch (action.type) {
    case auth_types.INPUT_VALUE_CHANGE:
      return {
        ...state,
        inputsValue: {
          ...state.inputsValue,
          [action.payload.name]: action.payload.value,
        },
      };
    case auth_types.CLEAR_INPUTS_VALUE:
      return { ...state, inputsValue: { name: "", login: "" } };
    default:
      return state;
  }
};

function Auth() {
  const [users, setUsers] = useContext(LoginUser);
  const [state, dispatch] = useReducer(reducer, {
    inputsValue: { name: "", login: "" },
  });
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>Name</label>
        <input
          value={state.inputsValue.name}
          onChange={(e) =>
            dispatch({
              type: auth_types.INPUT_VALUE_CHANGE,
              payload: { value: e.target.value, name: "name" },
            })
          }
        />
        <label>Login</label>
        <input
          value={state.inputsValue.login}
          onChange={(e) =>
            dispatch({
              type: auth_types.INPUT_VALUE_CHANGE,
              payload: { value: e.target.value, name: "login" },
            })
          }
        />
        <button
          style={{
            marginTop: "20px",
            padding: "6px 15px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={() => {
            setUsers([...users, state.inputsValue]);
            dispatch({ type: auth_types.CLEAR_INPUTS_VALUE });
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Auth;
