import React, { useContext, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Graph from "../assets/Graph.svg";
import DashboardImg from "../assets/Category.svg";
import Bag from "../assets/Bag.svg";
import User from "../assets/User.svg";
import InventoryImg from "../assets/Folder.svg";
import Setting from "../assets/Setting.svg";
import Logout from "../assets/Logout.svg";
import Notification from "../assets/Notification.svg";
import All_Orders from "./All_Orders/Allorders";
import Profile from "../assets/profile 1.png";
import Dashboard from "./Dashboard/Dashboard";
import Orders from "./Orders/Orders";
import Customers from "./Customers/Customers";
import Inventory from "./Inventory/Inventory";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import NewProduct from "./Inventory/NewProduct";
import ViewProduct from "./Inventory/ViewProduct";
import CustomerOrder from "./Customers/CustomerOrder";
import DashNotActive from "../assets/Dash-not-active.svg";
import Content from "./Content/Content";
import Settings from "./Settings/Settings";
import ViewUserNetwork from "./Settings/ViewUserNetwork";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import DashboardContext from "./Context/DashboardContext";
import { Backdrop, CircularProgress } from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";
import UserNetworkTable from "../Components/Network/Layout/UserNetworkTable";
import Modal from "@mui/material/Modal";
import Network from "./Network/Network";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Navbar = (props) => {
  const context2 = useContext(DashboardContext);
  const { loading } = context2;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [newActiveLink, setNewActiveLink] = useState(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const context = useContext(UserContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
    context.setUser(false);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: 4,
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#ffffff",
    overflowX: "scroll",
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
    border: "none",
    borderRadius: "12px",
    boxShadow: 24,
    backdropfilter: "blur(4px)",
  };

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: "none",
    background: "#ffffff",
    color: "#45464E",
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const isActive = (match, location) => {
    return ["/inventory", "/addproduct"].includes(location.pathname);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen1(true);
  const handleClose = () => setOpen1(false);

  return (
    <Box>
      <Backdrop sx={{ color: "#fff", zIndex: "1201" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Modal
        open={open1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you Sure, You want to log out?
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="create-new-post-button"
              style={{ margin: "10px 20px" }}
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              className="create-new-post-button"
              style={{ margin: "10px 20px" }}
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Box className="navbar">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <img alt="logo" src={Graph} style={{ width: "40px" }} />
              </IconButton>
              <Typography variant="h6" noWrap component="Box">
                Dashboard
              </Typography>
            </Toolbar>
            <Box className="navbar-profile-image">
              <img alt="notify" src={Notification} />
              <img
                alt="profile"
                src={Profile}
                onClick={() => props.setOpen(true)}
              />
            </Box>
          </Box>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Box className="navbar-logo">
              <img alt="logo" src={Graph} />
              <h4>Search-In</h4>
            </Box>

            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Box className="list-box">
            <Box className="list-child">
              <List>
                <ListItem disablePadding style={{ margin: "10px 10px" }}>
                  <NavLink
                    to="/dashboard"
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      isActive ? "active-class" : "not-active-class"
                    }
                    activeClassName={({ isActive }) => {
                      setNewActiveLink(true);
                    }}
                  >
                    <Box style={{ width: "32vw" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {({ isActive }) => (
                            <img
                              alt="item"
                              src={isActive ? DashboardImg : DashNotActive}
                            />
                          )}
                          <img alt="item" src={DashNotActive} />
                          {/* {({ isActive }) => (
                            <>
                              {isActive ? (
                                <>
                                  <img alt="listItem" src={DashboardImg} />
                                </>
                              ) : (
                                <>
                                  <img alt="listItem" src={DashNotActive} />
                                </>
                              )}
                            </>
                          )} */}
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                          Dashboard
                        </ListItemText>
                      </ListItemButton>
                    </Box>
                  </NavLink>
                </ListItem>

                <ListItem disablePadding style={{ margin: "10px 10px" }}>
                  <NavLink
                    to="/orders"
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      isActive ? "active-class" : "not-active-class"
                    }
                  >
                    <Box style={{ width: "32vw" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <img alt="listItem" src={Bag} />
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                          Orders
                        </ListItemText>
                      </ListItemButton>
                    </Box>
                  </NavLink>
                </ListItem>
                <ListItem disablePadding style={{ margin: "10px 10px" }}>
                  <NavLink
                    to="/allorders"
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      isActive ? "active-class" : "not-active-class"
                    }
                  >
                    <Box style={{ width: "32vw" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <img alt="listItem" src={Bag} />
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                          All Orders
                        </ListItemText>
                      </ListItemButton>
                    </Box>
                  </NavLink>
                </ListItem>

                <ListItem disablePadding style={{ margin: "10px 10px" }}>
                  <NavLink
                    to="/customers"
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      isActive ? "active-class" : "not-active-class"
                    }
                  >
                    <Box style={{ width: "32vw" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <img alt="listItem" src={User} />
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                          Customers
                        </ListItemText>
                      </ListItemButton>
                    </Box>
                  </NavLink>
                </ListItem>

                <ListItem disablePadding style={{ margin: "10px 10px" }}>
                  <NavLink
                    to="/inventory"
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      isActive ? "active-class" : "not-active-class"
                    }
                  >
                    <div style={{ width: "32vw" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <img alt="listItem" src={InventoryImg} />
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                          Inventory
                        </ListItemText>
                      </ListItemButton>
                    </div>
                  </NavLink>
                </ListItem>

                <ListItem disablePadding style={{ margin: "10px 10px" }}>
                  <NavLink
                    to="/content"
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      isActive ? "active-class" : "not-active-class"
                    }
                  >
                    <div style={{ width: "32vw" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <img alt="listItem" src={InventoryImg} />
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                          Krishi Videos
                        </ListItemText>
                      </ListItemButton>
                    </div>
                  </NavLink>
                </ListItem>

                <ListItem disablePadding style={{ margin: "10px 10px" }}>
                  <NavLink
                    to="/network"
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      isActive ? "active-class" : "not-active-class"
                    }
                  >
                    <div style={{ width: "32vw" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <img alt="listItem" src={Setting} />
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                          Network
                        </ListItemText>
                      </ListItemButton>
                    </div>
                  </NavLink>
                </ListItem>
                <ListItem disablePadding style={{ margin: "10px 10px" }}>
                  <NavLink
                    to="/settings"
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      isActive ? "active-class" : "not-active-class"
                    }
                  >
                    <div style={{ width: "32vw" }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <img alt="listItem" src={Setting} />
                        </ListItemIcon>
                        <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                          Settings
                        </ListItemText>
                      </ListItemButton>
                    </div>
                  </NavLink>
                </ListItem>
                <ListItem
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "0 10px",
                  }}
                >
                  {!open ? (
                    <ArrowForwardOutlined
                      onClick={handleDrawerOpen}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <></>
                  )}
                </ListItem>
              </List>
            </Box>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={handleOpen}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img alt="listItem" src={Logout} />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                    Logout
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#f4f5fa" }}>
          <DrawerHeader />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/allorders" element={<All_Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/addproduct" element={<NewProduct />} />
            <Route path="/viewproduct" element={<ViewProduct />} />
            <Route path="/viewcustomer" element={<CustomerOrder />} />
            <Route path="/content" element={<Content />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/viewusernetwork" element={<ViewUserNetwork />} />
            <Route path="/network" element={<Network />} />
            <Route path="/usernetwork" element={<UserNetworkTable />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
