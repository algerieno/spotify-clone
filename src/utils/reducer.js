export const initialState = {
  user: null,
  profile_image: null,
  playlist: [],
  playing: false,
  item: null,
  token: null,
  //"BQB8POEN2q7Rj4ft2iEcP1iIV3uR2iUq6_cv8PxKfF20eqG_R2sWA1X56lIEfSCpXnqqsWIlpPieQuuK7TUyI68qaSZTIkFM8Fjx5XBedjck7SYjjHKGIq0y9jQDldxrLUU7IONv2cT8HxnQKAq1cNzkMPjKQv7vLOjXM4jxh6Wdor_j",
};

const reducer = (state, action) => {
  console.log("reducer called for ", action.type);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.payload,
      };
    case "SET_IMAGE":
      return {
        ...state,
        profile_image: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
