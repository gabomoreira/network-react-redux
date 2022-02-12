import React, { useState, useEffect } from "react";
import { HeaderContainer, HeaderLogo } from "./HeaderStyles";
import LanguageIcon from "@mui/icons-material/Language";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/appSlice";
import { auth } from "../../firebase";
import { enterRoomId } from "../../features/roomSlice";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [activeMenu, setActvieMenu] = useState(false);
  const [screen, setScreen] = useState(null);

  const logout = () => {
    auth.signOut();
    dispatch(enterRoomId({ roomId: "" }));
  };

  const openMenu = () => {
    setActvieMenu(!activeMenu);
  };

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screen > 768) {
      setActvieMenu(false);
    }
  }, [screen]);

  return (
    <>
      <HeaderContainer>
        <HeaderLogo>
          <Link to="/">
            <LanguageIcon />
            <h2>Network</h2>
          </Link>
        </HeaderLogo>
        {screen > 768 ? (
          <Avatar src={user.profilePic} onClick={logout} />
        ) : (
          <MenuIcon onClick={openMenu} />
        )}
      </HeaderContainer>
      {activeMenu && <Sidebar mobile activeMenu={activeMenu} />}
    </>
  );
};

export default Header;
