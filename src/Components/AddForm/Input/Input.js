import React, { Fragment } from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

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
  },
  textField: {
    width: '100%',
    display: 'block',
    minWidth: '250px'
  }
}));
const Input = React.forwardRef(({ forComment }, ref) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.margin}>
      {forComment ? (
        <TextField
          id="outlined-dense"
          className={classes.textField}
          label={
            <FormattedMessage id="mixLength" defaultMessage="Min 4 symbols." />
          }
          margin="dense"
          variant="outlined"
          inputRef={ref}
          multiline
          rowsMax="6"
          fullWidth={true}
        />
      ) : (
        <Fragment>
          <InputLabel htmlFor="age-customized-select">
            <FormattedMessage id="mixLength" defaultMessage="Min 4 symbols." />
          </InputLabel>
          <BootstrapInput inputRef={ref} />
        </Fragment>
      )}
    </FormControl>
  );
});

Input.propTypes = {
  forComment: PropTypes.bool
};

Input.defaultProps = {
  forComment: false
};

export default Input;
