import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Box from "@material-ui/core/Box";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Radio from "@material-ui/core/Radio";
import { Paper, Grid, Button } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import { black } from "color-name";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import Select from "@material-ui/core/Select";

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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
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
          src={require("../assets/img/icons8-pass-fail.svg")}
        />
        <h2>Self Check Survey</h2>
        <p>
          Answer the following questions to determine if you should stay at home
        </p>
      </Grid>
      <Paper
        elevation={0}
        style={{
          padding: "24px",
          border: "1px solid #cfd8dc"
        }}
      >
        <FormLabel component="legend" className={classes.formCol}>
          Who should receive this survey response? *
        </FormLabel>{" "}
        <br />
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Supervisor
          </InputLabel>
          <Select>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          </Select>
          <br />
        </FormControl>
        <hr />
        <br />        <FormLabel component="legend" className={classes.formCol}>
          What's your body temperature?
        </FormLabel>{" "}
        <br />
        <form autoComplete="off">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Temperature"
            variant="outlined"
          />
        </form>
        <br />
        <hr />
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.formCol}>
            Have you been tested for the coronavirus (awaiting results)? *
          </FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <Box flexDirection="row">
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="Yes"
              />
              <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="No"
              />
            </Box>
          </RadioGroup>
        </FormControl>
        <hr />
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.formCol}>
            Have you tested POSITIVE for the coronavirus? *
          </FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <Box flexDirection="row">
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="Yes"
              />
              <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="No"
              />
            </Box>
          </RadioGroup>
        </FormControl>
        <hr />
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.formCol}>
            Have you had prolonged close contact with someone who tested
            positive for the coronavirus? *
          </FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <Box flexDirection="row">
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="Yes"
              />
              <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="No"
              />
            </Box>
          </RadioGroup>
        </FormControl>
        <hr />
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.formCol}>
            Has a member of your household been tested for the coronavirus
            (awaiting results)? *
          </FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <Box flexDirection="row">
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="Yes"
              />
              <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="No"
              />
            </Box>
          </RadioGroup>
        </FormControl>
        <hr />
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.formCol}>
            Has a member of your household been asked by a medical professional
            to isolate for potential coronavirus? *
          </FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <Box flexDirection="row">
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="Yes"
              />
              <FormControlLabel
                value="No"
                control={<Radio color="primary" />}
                label="No"
              />
            </Box>
          </RadioGroup>
        </FormControl>
        <hr />
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.formCol}>
            Has a household member had prolonged close contact with someone who
            tested positive for the coronavirus? *
          </FormLabel>
          <Box flexDirection="row">
            <FormControlLabel
              value="end"
              control={<Radio color="primary" />}
              label="End"
            />
            <FormControlLabel
              value="end"
              control={<Radio color="primary" />}
              label="End"
            />
          </Box>
        </FormControl>
        <hr />
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.formCol}>
            Have you been tested for caronavirus Have you traveled out of the
            country within the last 14 days? * ?
          </FormLabel>
          <Box flexDirection="row">
            <FormControlLabel
              value="end"
              control={<Radio color="primary" />}
              label="End"
            />
            <FormControlLabel
              value="end"
              control={<Radio color="primary" />}
              label="End"
            />
          </Box>
        </FormControl>
        <hr />
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.formCol}>
            Have you taken a cruise within the last 14 days? *
          </FormLabel>
          <Box flexDirection="row">
            <FormControlLabel
              value="end"
              control={<Radio color="primary" />}
              label="End"
            />
            <FormControlLabel
              value="end"
              control={<Radio color="primary" />}
              label="End"
            />
          </Box>
        </FormControl>
        <hr />
        <FormControl component="fieldset">
          <FormLabel className={classes.formCol}>
            Are you experiencing or have you experienced any of the following
            symptoms in the past 14 days?
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="Cough (not related to allergies)" />}
              label="Cough (not related to allergies) "
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="Shortness of breath
                "
                />
              }
              label="Shortness of breath
                "
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="Difficulty breathing
                "
                />
              }
              label="Difficulty breathing
                "
            />
            <FormControlLabel
              control={<Checkbox name="Fever" />}
              label="Fever"
            />
            <FormControlLabel
              control={<Checkbox name="Chills" />}
              label="Chills"
            />
            <FormControlLabel
              control={<Checkbox name="Repeated shaking with chills" />}
              label="Repeated shaking with chills"
            />
            <FormControlLabel
              control={<Checkbox name="Muscle Pain" />}
              label="Muscle Pain"
            />
            <FormControlLabel
              control={<Checkbox name="New Loss of Taste or Smell" />}
              label="New Loss of Taste or Smell"
            />
            <FormControlLabel
              control={<Checkbox name="Sore Throat or Headache" />}
              label="Sore Throat or Headache"
            />
          </FormGroup>
        </FormControl>
      </Paper>
      <FormControlLabel
        control={
          <Checkbox name="I certify that the information submitted is true and accurate to the best of my knowledge" />
        }
        label="I certify that the information submitted is true and accurate to the best of my knowledge"
      />
      <Button fullWidth style={{ background: "lightgray" }}>
        Submit
      </Button>
    </main>
  );
}
