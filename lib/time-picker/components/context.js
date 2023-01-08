import React from "react";

const componentContext = React.createContext();

const initialState = {
  sliderMode: false,
  typedInputTime: "",
};

export const ComponentContextProvider = ({ children }) => {
  const [state, setState] = React.useState(initialState);

  const setComponentContext = (context) => {
    setState({ ...state, ...context });
  };

  return (
    <componentContext.Provider value={{ ...state, setComponentContext }}>
      {children}
    </componentContext.Provider>
  );
};

export default componentContext;
