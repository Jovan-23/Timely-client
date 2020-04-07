import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./CreationWizard.css";

const useStyles = makeStyles(() => ({
  projDesc: {
    width: "100%",
  },
  projDescContainer: {
    width: "80%",
  },
}));

/**
 * Author: Prabh
 * Version: 1
 * Desc: second step for project creation
 */
const Desc = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.projDescContainer}>
      <form autoComplete="off">
        <TextField
          className={classes.projDesc}
          id="outlined-multiline-static"
          label="Project Description"
          multiline
          rows="8"
          variant="outlined"
          name="projectDesc"
          value={props.Desc}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
};

export default Desc;
