import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HistoryIcon from "@material-ui/icons/History";
import Form from "./Form";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link, HashRouter } from "react-router-dom";
import Menu from "./Menu";
import History from "./History";
import Profile from "./Profile";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 330;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0
  }
}));
export default function ResponsiveDrawer() {
  const dummyCategories = ["Survey", "History"];
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <div>
      <List>
        <Link
          to={process.env.PUBLIC_URL + "/"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Survey" />
          </ListItem>
        </Link>
        <Link
          to={process.env.PUBLIC_URL + "/history"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
          style={{ background: "#fff", color: "black" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Self Check
            </Typography>
            <section style={{ marginLeft: "auto", marginRight: 12 }}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={6} md={6}>
                  <HelpOutlineIcon style={{ fontSize: "2.3rem" }} />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <Menu />
                </Grid>
              </Grid>
            </section>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.toolbar} />
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <div className={classes.content}>
          <div className={classes.toolbar}>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              component={Form}
            ></Route>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/history"}
              component={History}
            ></Route>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/profile"}
              component={Profile}
            ></Route>
          </div>
        </div>
      </div>
    </Router>
  );
}
ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object
};
