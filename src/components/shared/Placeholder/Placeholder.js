import React from "react";
import PropTypes from "prop-types";

const Placeholder = ({ text }) => {
  return <div><em>{text || '... Chargement'}</em></div>;
};

Placeholder.propTypes = {
  //
};

export default Placeholder;
