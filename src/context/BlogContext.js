import createDataContext from "./createDataContext";

// utilize useReducer hook
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog post #${state.length + 1}` }];
    default:
      return state;
  }
};
const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};
// Context: Object
// Provider: data that is available throughout app
// []: initial state, empty array
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
