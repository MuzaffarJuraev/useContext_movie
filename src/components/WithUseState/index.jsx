import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, data: [...state.data, action.payload] };
    case "DELETE":
      return {
        ...state,
        data: state.data.filter((value) => {
          return value.id !== action.payload.id;
        }),
      };
    case "EDIT":
      return { ...state, isEdit: true, editingValue: action.payload };
    case "SAVE_USER":
      return {
        ...state,
        data: state.data.map((value) => {
          return value.id === action.payload.id ? action.payload : value;
        }),
        isEdit: false,
        editingValue: { name: "", surname: "" },
      };
    default:
      return state;
  }
};

function WithUseState() {
  const [state, dispatch] = useReducer(reducer, {
    data: [
      { name: "Muzaffarjon", surname: "Juraev", id: 1 },
      { name: "Sarvar", surname: "Shermatov", id: 2 },
    ],
    isEdit: false,
    editingValue: { name: "", surname: "" },
  });
  const [name, setName] = useState("");
  const [changeName, setChangeName] = useState(state.editingValue.name);
  const [changeSurname, setChangeSurname] = useState(
    state.editingValue.surname
  );
  const [surname, setSurname] = useState("");
  return (
    <div style={{ margin: "0 auto", width: 500 }}>
      <input
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={surname}
        placeholder="surname"
        onChange={(e) => setSurname(e.target.value)}
      />
      <button
        onClick={() => {
          setName("");
          setSurname("");
          dispatch({
            type: "ADD",
            payload: { name, surname, id: state.data.length + 1 },
          });
        }}
      >
        add
      </button>
      {console.log(state)}
      {state.data.map((value) => (
        <div key={value.id}>
          <span>
            {state.editingValue.id === value.id ? (
              <input
                value={changeName}
                onChange={(e) => setChangeName(e.target.value)}
              />
            ) : (
              value.name
            )}
            {">"}
            {state.editingValue.id === value.id ? (
              <input
                value={changeSurname}
                onChange={(e) => setChangeSurname(e.target.value)}
              />
            ) : (
              value.surname
            )}
            <button
              onClick={() =>
                dispatch({
                  type: state.isEdit ? "SAVE_USER" : "EDIT",
                  payload: state.isEdit
                    ? {
                        name: changeName,
                        surname: changeSurname,
                        id: state.editingValue.id,
                      }
                    : value,
                })
              }
            >
              {state.editingValue.id === value.id ? "Save" : "Edit"}
            </button>
            <button
              onClick={() =>
                dispatch({ type: "DELETE", payload: { id: value.id } })
              }
            >
              delete
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default WithUseState;
