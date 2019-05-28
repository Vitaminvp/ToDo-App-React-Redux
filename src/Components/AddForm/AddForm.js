import React from "react";
import PropTypes from "prop-types";
import { Input } from "./Input";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '32px',
  }
}));


const AddForm = React.forwardRef(({onSubmit }, ref) => {
  const classes = useStyles();
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event);
  };
  return (
    <form className="todo-form-wrapper" onSubmit={handleSubmit}>
      <Input ref={ref} />
      <Button size="medium" type="submit" variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
    </form>
  );
});

AddForm.propTypes = {
  onSubmit: PropTypes.func,
};

AddForm.defaultProps = {
  onSubmit: () => {},
};

export default AddForm;
