import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Box from "@material-ui/core/Box";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Radio from "@material-ui/core/Radio";
import { Paper, Grid, Button } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import { black } from "color-name";
import TextField from "@material-ui/core/TextField";

import {
  fade,
  ThemeProvider,
  withStyles,
  createMuiTheme
} from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "red"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "red"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "red"
      },
      "&.Mui-focused fieldset": {
        borderColor: "red"
      }
    }
  }
})(TextField);
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  formCol: {
    color: "#202124"
  }
}));
export default function Form() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "40vh" }}
      >
        <img
          style={{ width: "93px" }}
          alt="Hello"
          src={require("../assets/img/icons8-user-shield.svg")}
        />
        <h2>Your Profile</h2>
        <p>Manage your user information and application settings</p>
      </Grid>
      <Paper
        elevation={0}
        style={{
          padding: "24px",
          border: "1px solid #cfd8dc"
        }}
      >
        <form>
          <CssTextField
            fullWidth
            label="vlx984@mocs.utc.edu"
            disabled
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </form>
        <br />
        <br />
        <form>
          <CssTextField
            fullWidth
            label="Mocs ID *"
            variant="outlined"
            id="custom-css-outlined-input"
          />
          <p style={{ marginTop: "0px", color: "red" }}>
            Mocs ID cannot be empty
          </p>
        </form>
        <br />
        <form>
          <CssTextField
            fullWidth
            label="Full Name *"
            variant="outlined"
            id="custom-css-outlined-input"
          />
          <p style={{ marginTop: "0px", color: "red" }}>Name cannot be empty</p>
        </form>
      </Paper>
      <Button fullWidth style={{ background: "lightgray" }}>
        UPDATE
      </Button>
    </main>
  );
}
