import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT_VALUE":
      return {
        ...state,
        addValueCollector: {
          ...state.addValueCollector,
          [action.payload.name]: action.payload.value,
        },
      };
    case "ADD":
      return {
        ...state,
        data: [...state.data, { id: new Date().getTime(), ...action.payload }],
        addValueCollector: { name: "", surname: "" },
      };
    case "DELETE":
      return {
        ...state,
        data: state.data.filter((value) => value.id !== action.payload.id),
      };
    case "EDIT_USER":
      return { ...state, isChanged: true, editingValue: { ...action.payload } };

    case "EDIT_INPUT_VALUE":
      return {
        ...state,
        editingValue: {
          ...state.editingValue,
          [action.payload.name]: action.payload.value,
        },
      };
    case "SAVE_USER":
      return {
        ...state,
        data: state.data.map((value) =>
          value.id === state.editingValue.id ? { ...state.editingValue } : value
        ),
        isChanged: false,
        editingValue: {},
      };
    default:
      return state;
  }
};

function WithUseRedcer() {
  const [state, dispatch] = useReducer(reducer, {
    data: [
      { name: "Muzaffarjon", surname: "Juraev", id: 1 },
      { name: "Shermat", surname: "Toshmatov", id: 2 },
    ],
    addValueCollector: { name: "", surname: "" },
    isChanged: false,
    editingValue: {},
  });
  return (
    <div style={{ width: 500, margin: "0 auto" }}>
      <div>
        <input
          value={state.addValueCollector.name}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_INPUT_VALUE",
              payload: { value: e.target.value, name: "name" },
            })
          }
        />
        <input
          value={state.addValueCollector.surname}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_INPUT_VALUE",
              payload: { value: e.target.value, name: "surname" },
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: "ADD",
              payload: {
                ...state.addValueCollector,
              },
            })
          }
        >
          Add
        </button>
      </div>
      <div>
        {state.data.map((value) => (
          <div key={value.id}>
            {state.isChanged && state.editingValue.id === value.id ? (
              <input
                value={state.editingValue.name}
                onChange={(e) => {
                  dispatch({
                    type: "EDIT_INPUT_VALUE",
                    payload: { name: "name", value: e.target.value },
                  });
                }}
              />
            ) : (
              value.name
            )}{" "}
            {"=>"}{" "}
            {state.isChanged && state.editingValue.id === value.id ? (
              <input
                value={state.editingValue.surname}
                onChange={(e) => {
                  dispatch({
                    type: "EDIT_INPUT_VALUE",
                    payload: { name: "surname", value: e.target.value },
                  });
                }}
              />
            ) : (
              value.surname
            )}{" "}
            <button
              onClick={() => {
                dispatch({
                  type:
                    state.isChanged && state.editingValue.id === value.id
                      ? "SAVE_USER"
                      : "EDIT_USER",
                  payload: { ...value },
                });
              }}
            >
              {state.isChanged && state.editingValue.id === value.id
                ? "save"
                : "edit"}
            </button>
            <button
              onClick={() =>
                dispatch({ type: "DELETE", payload: { id: value.id } })
              }
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WithUseRedcer;
