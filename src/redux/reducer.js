const initialState = {
  data: [],
  loading: false,

  users: [],
  usersLoading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "app/loading/start":
      return {
        ...state,
        loading: true,
      };

    case "app/loading/success":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case "todo/deleting/start":
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              deleting: true,
            };
          }
          return item;
        }),
      };

    case "todo/deleting/success":
      return {
        ...state,
        data: state.data.filter((item) => {
          return item.id !== action.payload;
        }),
      };

    case "todo/check/start":
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              checking: true,
            };
          }
          return item;
        }),
      };

    case "todo/check/success":
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed,
              checking: false,
            };
          }
          return item;
        }),
      };

    case "users/load/start":
      return {
        ...state,
        usersLoading: true,
      };

    case "users/load/success":
      return {
        ...state,
        users: action.payload,
        usersLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
