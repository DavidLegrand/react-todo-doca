import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useTitle from "hooks/useTitle";

const H1 = ({ title, children }) => {
  useTitle(title || children)
  return <h1 className='display-4 text-center'>{children || title}</h1>;
};

H1.propTypes = {
  //
};

export default H1;
