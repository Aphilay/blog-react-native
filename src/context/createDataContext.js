// This file provides a resuable function allowing
// many resources to set up a Context and Provider
import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  // This object is responsible for moving information
  // from parent component to some nested child
  // a pipe of some sort
  const Context = React.createContext();

  // {children}: unrelated to Context.
  // Acts as an argument/prop from BlogProvider
  // along with parent element that's being returned.
  // In App.js, "children", refers to <App/>
  // REF: Chap 121 Intro to Context
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => return()=> {} }}
    const boundActions = {};

    // This re-factor allows BlogContext to have access
    // to dispatch function which is only accessible here
    // REF: chap 130
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
