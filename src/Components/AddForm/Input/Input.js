import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import TextField from '@material-ui/core/TextField';
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import AddForm from "../AddForm";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 13,
    width: "auto",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));
const Input = React.forwardRef(({forComment}, ref) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.margin}>
      {/*<InputLabel htmlFor="age-customized-select">*/}
        {/*Minimum 4 symbols.*/}
      {/*</InputLabel>*/}
      {/*<BootstrapInput inputRef={ref} />*/}
      <TextField
          id="outlined-dense"
          label={<FormattedMessage id='mixLength' defaultMessage='Min 4 symbols.' />}
          margin="dense"
          variant="outlined"
          inputRef={ref}
          forComment&& multiline
          forComment&& rowsMax="4"
          multiline
          rowsMax="4"
      />
    </FormControl>
  );
});

AddForm.propTypes = {
  forComment: PropTypes.boolean
};

AddForm.defaultProps = {
  forComment: false
};


export default Input;
