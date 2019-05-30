import React from "react";
import PropTypes from "prop-types";
import { Input } from "./Input";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(theme => ({
  button: {
    maxWidth: "120px",
    marginRight: "10px",
    alignSelf: "flex-end"
  },
  flexRow: {
    "& button": {
      marginTop: "32px"
    }
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column"
  }
}));

const AddForm = React.forwardRef(
  ({ onSubmit, forComment, currentTaskId }, ref) => {
    const classes = useStyles();
    const handleSubmit = event => {
      event.preventDefault();
      onSubmit(event);
    };
    return (
      <form
        className={forComment ? classes.flexColumn : classes.flexRow}
        onSubmit={handleSubmit}
      >
        <Input ref={ref} forComment={forComment} />
        <Button
          size="medium"
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={!currentTaskId && forComment}
        >
          <FormattedMessage id="buttonTitle" defaultMessage="Ok" />
        </Button>
      </form>
    );
  }
);

AddForm.propTypes = {
  onSubmit: PropTypes.func,
  forComment: PropTypes.bool,
  currentTaskId: PropTypes.string
};

AddForm.defaultProps = {
  onSubmit: () => {},
  forComment: false,
  currentTaskId: ""
};

export default AddForm;
