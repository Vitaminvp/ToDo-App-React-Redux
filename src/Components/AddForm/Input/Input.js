import React from "react";
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//     },
//     dense: {
//         marginTop: theme.spacing(2),
//     },
//     menu: {
//         width: 200,
//     },
// }));

const Input = React.forwardRef((props, ref) => {
    // const classes = useStyles();
    return <div className="todo-input-wrapper">
        {/*<TextField*/}
            {/*id="outlined-with-placeholder"*/}
            {/*label="With placeholder"*/}
            {/*placeholder="Click to add task"*/}
            {/*className={classes.textField}*/}
            {/*margin="normal"*/}
            {/*variant="outlined"*/}
            {/*ref={ref}*/}
        {/*/>*/}
        <input
        className="todo-input"
        placeholder="Click to add task"
        ref={ref}
        />
    </div>
});

export default Input;
