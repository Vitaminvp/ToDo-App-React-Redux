import React from "react";
import PropTypes from "prop-types";
import { FILTERS } from "../../constants";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";

const styles = {
  filter: {
    margin: "10px",
    opacity: "1"
  },
  filterSecondary: {
    margin: "10px",
    opacity: "0.5"
  },
  amountLeft: {
    marginLeft: "20px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "bold"
  }
};

const Footer = ({ amount, activeFilter, changeFilter }) => {
  return (
    <>
      <span style={styles.amountLeft}>{amount} <FormattedMessage id='total' defaultMessage='tasks left!'/></span>
      <div className="btn-group">
        {FILTERS.map(({ text, id }) => (
          <Button
            style={id === activeFilter ? styles.filter : styles.filterSecondary}
            variant="outlined"
            size="small"
            color={id === activeFilter ? "secondary" : "primary"}
            key={id}
            id={id}
            onClick={() => changeFilter(id)}
          >
            <FormattedMessage id={id} defaultMessage={text} />
          </Button>
        ))}
      </div>
    </>
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
