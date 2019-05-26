import React, { Component } from "react";
import { connect } from "react-redux";

import { Input } from "../Components/Input";
import { List } from "../Components/List";
import { Footer } from "../Components/Footer";
import {
  addTask,
  removeTask,
  completeTask,
  changeFilter
} from "../Components/actions/actionCreator";

class ToDo extends Component {
  state = {
    activeFilter: "all",
    taskText: ""
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ taskText: value });
  };

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === "Enter") {
      const { addTask } = this.props;

      addTask(new Date().getTime(), taskText, false);

      this.setState({
        taskText: ""
      });
    }
  };

  render() {
    const { taskText } = this.state;
    const { tasks, filter, removeTask, completeTask, changeFilter } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <Input
          value={taskText}
          onChange={this.handleInputChange}
          onKeyPress={this.addTask}
        />
        {isTasksExist && (
          <List
            tasksList={tasks}
            removeTask={removeTask}
            completeTask={completeTask}
          />
        )}
        {isTasksExist && (
          <Footer
            amount={tasks.length}
            activeFilter={filter}
            changeFilter={changeFilter}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ tasks, filter }) => ({
  tasks,
  filter
});

const mapDispatchToProps = {
  addTask,
  removeTask,
  completeTask,
  changeFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
