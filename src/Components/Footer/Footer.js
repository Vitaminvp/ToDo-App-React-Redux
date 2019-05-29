import React from "react";
import PropTypes from "prop-types";
import { FILTERS } from "../../constants";
import Button from "@material-ui/core/Button";

const styles = {
  Filter: {
    margin: "10px",
    opacity: "1"
  },
  FilterSecondary: {
    margin: "10px",
    opacity: "0.5"
  }
};

const Footer = ({ amount, activeFilter, changeFilter }) => {
  return (
    <div className="footer">
      <span className="amount">{`${amount} Tasks left`}</span>
      <div className="btn-group">
        {FILTERS.map(({ text, id }) => (
          <Button
            style={id === activeFilter ? styles.Filter : styles.FilterSecondary}
            variant="outlined"
            size="small"
            color={id === activeFilter ? "secondary" : "primary"}
            key={id}
            id={id}
            onClick={() => changeFilter(id)}
          >
            {text}
          </Button>
        ))}
      </div>
    </div>
  );
};

Footer.propTypes = {
  amount: PropTypes.number,
  filter: PropTypes.string,
  changeFilter: PropTypes.func
};

Footer.defaultProps = {
  amount: null,
  filter: "",
  changeFilter: () => {}
};

export default Footer;
