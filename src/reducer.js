export const initialState ={
    user: null,
    playlists: [],
    item: null,
    discover_weekly: null,
    // REMOVE after finishsed developing...
    // token:'BQD76ahZn8d0z6Hv6BoJiDcrIjHateae9EuOlU2TDxGvms2sVoOV0zk4RcVWUDSqQUOAxPxx6xYiBUfvw9iftdDaKvOexN-XlEe3DRbGxB_1H-7SL4Qz00D3bQdRY5aaQGHbe7Eit1IdwRXsvFHiqQDuB8IuJj0',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
        return {
            ...state,
            token: action.token
        };

    case "SET_PLAYLISTS":
        return {
            ...state,
            playlists: action.playlists,
        };

      case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
        return state;
  };
};
      
export default reducer;