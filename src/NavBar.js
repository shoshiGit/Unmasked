
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { logOut } from "./features/user/userSlice";

const NavBar = () => {
  let user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const settings = ['My Profile', 'Account', 'My Orders', 'Sign Out'];
  const sighnInSettings = ['Sign In', 'Log In'];
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0, });

  const handleButtonClick = (settings) => {
    if (settings == "Sign Out") dispatch(logOut());
    if (settings == "Log In") navigate('/login');
    if (settings == "Sign In") navigate("/register")
  };

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  
  const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget);};
  const handleOpenUserMenu = (event) => { setAnchorElUser(event.currentTarget);};
  const handleCloseNavMenu = () => { setAnchorElNav(null);};
  const handleCloseUserMenu = () => { setAnchorElUser(null);};

  return (<>
    <header className="header gradient-custom">
      <div className="header__content">
        <Link to="/" className="header__content__logo">UNMASKED</Link>
        <nav className={`${menuOpen && size.width < 768 ? "header__content__nav isMenu" : "header__content__nav"}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">Products</Link>
            </li>
            <li>
              <Link to="/Basket">Basket</Link>
            </li>
          </ul>
        </nav>
        <div className="header__content_end">
          <div style={{ color: "#7d5656" }} className="header__content__toggle">
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
          
          {!menuOpen && size.width > 700 ? (<>
            <NavLink to="/wis" style={{ color: "#7d5656" }}>
              <MDBIcon style={{ padding: "0.75rem 0.5rem" }} far icon="heart" />
            </NavLink>
            <NavLink to="basket" style={{ color: "#7d5656" }}>
              <MDBIcon style={{ padding: "0.75rem 0.5rem" }} icon="shopping-cart" />
            </NavLink>
            <MDBIcon
              style={{ padding: "0.75rem 0.5rem" }}
              onClick={handleOpenUserMenu}
              far
              icon="user"
            />
          </>) : (
            <div></div>
          )}
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '40px' }} id="menu-appbar"
              anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
              keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }}
              open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}
            >
              <MenuItem key="user">Hello {user == null ? "guest" : user.name}</MenuItem>
              {
                user != null ?
                  settings.map((setting) => (
                    <MenuItem key={setting} onClick={() => handleButtonClick(setting)}>                  
                     {setting}
                    </MenuItem>
                  )) :
                  sighnInSettings.map((setting) => (
                    <MenuItem key={setting} onClick={()=>handleButtonClick(setting)}>
                     <Link to={setting == 'Sign In' ? 'register' : 'login'}>{setting}</Link>
                    </MenuItem>
                  ))
              }
            </Menu>
          </Box>
        </div>
      </div>
    </header>
  </>
  );
};

export default NavBar;
