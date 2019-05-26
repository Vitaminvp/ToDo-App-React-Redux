import React from "react";
import PropTypes from "prop-types";
import { Input } from "./Input";

const AddForm = React.forwardRef(({onSubmit }, ref) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event);
  };
  return (
    <form className="todo-form-wrapper" onSubmit={handleSubmit}>
      <Input ref={ref} />
      <button type="submit">Add</button>
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
