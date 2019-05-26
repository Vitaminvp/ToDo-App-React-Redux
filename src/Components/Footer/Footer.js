import React from "react";
import PropTypes from "prop-types";
import { FILTERS } from "../../constants";

const Footer = ({ amount, filter, changeFilter }) => (
  <div className="footer">
    <span className="amount">{`${amount} Tasks left`}</span>
    <div className="btn-group">
      {FILTERS.map(({ text, id }) => (
        <button
          key={id}
          className={id === filter ? "filter-btn active" : "filter-btn"}
          onClick={() => changeFilter(id)}
        >
          {text}
        </button>
      ))}
    </div>
  </div>
);

Footer.propTypes = {
  amount: PropTypes.number,
  filter: PropTypes.string,
  changeFilter: PropTypes.func
};

Footer.defaultProps = {
  amount: 0,
  filter: "all",
  changeFilter: () => {}
};

export default Footer;
