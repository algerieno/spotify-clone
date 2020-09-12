export const auth = false;

const AuthEndPoint = "https://accounts.spotify.com/authorize";
const clienID = "2d485af578294da98ffde94fe379c5d4";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${AuthEndPoint}?redirect_uri=${redirectUri}&client_id=${clienID}&response_type=token&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;

export const getTokenFromUrl = () =>
  window.location.hash
    .substring(1)
    .split("&")
    .reduce((acc, item) => {
      let parts = item.split("=");
      acc[parts[0]] = decodeURIComponent(parts[1]);
      return acc;
    }, {});
