import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link, HashRouter } from "react-router-dom";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AccountCircleIcon
        onClick={handleClick}
        style={{ fontSize: "2.3rem", cursor: "pointer" }}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          (Not Set)
          <br />
          vlx984@mocs.utc.edu
        </MenuItem>
        <Link to={process.env.PUBLIC_URL + "/profile"}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
