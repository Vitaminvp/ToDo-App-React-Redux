import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
    <h2 className="title">{title}</h2>
);

Title.propTypes = {
    title: PropTypes.string,
};

Title.defaultProps = {
    title: 'Simple title',
};

export default Title;