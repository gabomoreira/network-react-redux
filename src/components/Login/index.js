import React from "react";
import { LoginFlex, LoginContainer } from "./LoginStyles";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../firebase";
import { login } from "../../features/appSlice";
import LanguageIcon from "@mui/icons-material/Language";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        )
      )
      .catch((error) => alert(error));
  };

  return (
    <LoginContainer>
      <LoginFlex>
        <LanguageIcon />

        <button onClick={signIn}>Sign in Google</button>
      </LoginFlex>
    </LoginContainer>
  );
};

export default Login;
