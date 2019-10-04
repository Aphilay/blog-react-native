import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";
// reducer function that gets called by 'dispatch' function
const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    case "edit_blogpost":
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      return state.filter(blogPost => blogPost.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    default:
      return state;
  }
};
// jsonServer API CALL
const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    //response.data === [{},{},{}]

    // when dispatch is called, React takes this object and calls
    // the reducer function, the object is provided as the
    // the 2nd argument in the reducer function (e.g. the 'actions' argument)
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({
      type: "add_blogpost",
      payload: { title, content }
    });
    if (callback) {
      callback();
    }
  };
};

// VERSION 2 of addBlogPost.
// async HTTP request with callback
// note: this is typical format when talking to API
// const addBlogPost = dispatch => {
//   return async (title, content, callback) => {
//     try {
//       await axios.post("url", title, content);
//       dispatch({
//         type: "add_blogpost",
//         payload: { title, content }
//       });
//       if(callback){
//        callback();
//        }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};
// Context: Object
// Provider: data that is available throughout app
// []: initial state, empty array
// Actions addBlogPost, deleteBlogPost, editBlogPost is now availble
// to all child components through Context object
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
