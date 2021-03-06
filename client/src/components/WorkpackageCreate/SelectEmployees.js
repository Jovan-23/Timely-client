import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import RemoveIcon from "@material-ui/icons/RemoveCircleOutlineSharp";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./WorkpackageCreate.css";

/**
 * Author: Prabh
 * Version: 1
 * Desc: first step for wp creation
 */
const SelectEmployees = props => {

  return (
    <Autocomplete
      multiple
      fullWidth
      options={props.emps ? props.project.employees.filter(y => props.emps.map(e => {
        return e.employee_id;
       }).indexOf(y.employee_id) === -1) : props.project.employees}
      onChange={(e, v) => props.handleTagsChange(v)}
      getOptionLabel={(option) => option.first_name + " " + option.last_name + " (" + option.labor_grade_id.labor_grade_id + ")"}
      disabled={props.isDisabled}
      renderInput={params => (
        <TextField
        className="selectEmployee-textfield"
          {...params}
          variant="standard"
        />
      )}
    /> 
  );
};

export default SelectEmployees;
