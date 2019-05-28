import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "../Components/List";
import { Footer } from "../Components/Footer";
import { CommentList } from "../Components/CommentList";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import {
  addTask,
  removeTask,
  completeTask,
  changeFilter,
  addComment
} from "../Components/actions/actionCreator";
import { AddForm } from "../Components/AddForm";

class ToDo extends Component {
  inputAddTask = React.createRef();
  inputAddComment = React.createRef();
  state = {
    currentTaskId: ""
  };

  handleAddTaskSubmit = () => {
    const {
      current: { value }
    } = this.inputAddTask;
    const { addTask } = this.props;
    const timeStampId = new Date().getTime();
    value.length > 3 &&
      this.setState(
        state => ({
          ...state,
          taskText: value,
          currentTaskId: timeStampId
        }),
        () => {
          addTask(timeStampId, value, false);
          this.inputAddTask.current.value = "";
        }
      );
  };

  handleTaskSelect = currentTaskId => {
    this.setState({
      currentTaskId
    });
  };

  handleAddCommentSubmit = () => {
    const {
      current: { value }
    } = this.inputAddComment;
    const { addComment } = this.props;
    if (value.length > 3) {
      const { currentTaskId } = this.state;
      currentTaskId && addComment(new Date().getTime(), currentTaskId, value);
      this.inputAddComment.current.value = "";
    }
  };

  filterTasks = (tasks, filter) => {
    switch (filter) {
      case "completed":
        return tasks.filter(task => task.isCompleted);
      case "active":
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  };

  render() {
    const { currentTaskId } = this.state;
    const {
      tasks,
      filter,
      removeTask,
      completeTask,
      changeFilter
    } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    const currentTask =
      isTasksExist && tasks.filter(task => task.id === currentTaskId)[0];
    const isCommentsExist = currentTask && currentTask.comments.length > 0;
    const filteredTasks = this.filterTasks(tasks, filter);
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper>
            <AddForm
              onSubmit={this.handleAddTaskSubmit}
              ref={this.inputAddTask}
            />
            {isTasksExist && (
              <List
                currentTaskId={currentTaskId}
                tasksList={filteredTasks}
                removeTask={removeTask}
                completeTask={completeTask}
                selectTask={this.handleTaskSelect}
              />
            )}
            {isTasksExist && (
              <Footer
                amount={tasks.length}
                activeFilter={filter}
                changeFilter={changeFilter}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            {isCommentsExist && (
              <CommentList commentsList={currentTask.comments} />
            )}
            <AddForm
              onSubmit={this.handleAddCommentSubmit}
              ref={this.inputAddComment}
            />
          </Paper>
        </Grid>
      </Grid>
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
  changeFilter,
  addComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
