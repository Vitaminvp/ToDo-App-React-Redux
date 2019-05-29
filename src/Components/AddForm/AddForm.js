import React from "react";
import PropTypes from "prop-types";
import { Input } from "./Input";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: "32px"
  }
}));

const AddForm = React.forwardRef(({ onSubmit, forComment }, ref) => {
  const classes = useStyles();
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event);
  };
  return (
    <form className="todo-form-wrapper" onSubmit={handleSubmit}>
      <Input ref={ref} forComment={forComment} />
      <Button
        size="medium"
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        <FormattedMessage id="buttonTitle" defaultMessage="Ok" />
      </Button>
    </form>
  );
});

AddForm.propTypes = {
  onSubmit: PropTypes.func,
  forComment: PropTypes.boolean
};

AddForm.defaultProps = {
  onSubmit: () => {},
  forComment: false
};

export default AddForm;