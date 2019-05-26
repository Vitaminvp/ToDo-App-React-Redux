import React from "react";

const Input = React.forwardRef((props, ref) => (
  <div className="todo-input-wrapper">
    <input
      className="todo-input"
      placeholder="Click to add task"
      ref={ref}
    />
  </div>
));

export default Input;
