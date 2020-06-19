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
        style={{ minHeight: "100vh" }}
      >
        <img
          style={{ width: "256px" }}
          alt="Hello"
          src={require("../assets/img/hugo-list-is-empty.svg")}
        />
        <p>No self check response found </p>
      </Grid>
    </main>
  );
}
