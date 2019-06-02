import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { FormattedMessage } from "react-intl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

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
    fontSize: 16,
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

const LangSelect = ({ lang, handleLangChange }) => {
  const handleChange = event => {
    handleLangChange(event.target.value);
  };
  return (
    <div className='i18n'>
      <FormControl>
        <InputLabel htmlFor="lang-customized-select" style={{ color: "white" }}>
          <FormattedMessage id="language" defaultMessage="Select language" />
        </InputLabel>
        <Select
          value={lang}
          onChange={handleChange}
          input={<BootstrapInput name="lang" id="lang-customized-select" />}
        >
          <MenuItem value="">
            <em />
          </MenuItem>
          <MenuItem value="ru">Русский</MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="uk">Українська</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

LangSelect.propTypes = {
  lang: PropTypes.string,
  handleLangChange: PropTypes.func
};

LangSelect.defaultProps = {
  lang: "",
  handleLangChange: () => {}
};

export default LangSelect;
