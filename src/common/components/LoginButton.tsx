import { Button } from "@mui/material";
import { getSpotifyAuthUrl } from "../../utils/auth";

const LoginOutButton = () => {
  const accessToken = localStorage.getItem("access_token")
  const login=()=> {
    getSpotifyAuthUrl()
  }
  const logout=()=> {
    localStorage.removeItem("access_token")
    window.location.href = '/';
  }
  return <Button variant="contained" color="secondary" 
    size={accessToken ? "small" : "large"} onClick={accessToken ? logout : login}>
    {accessToken ? "Logout" : "Login"}
  </Button>;
};

export default LoginOutButton;
