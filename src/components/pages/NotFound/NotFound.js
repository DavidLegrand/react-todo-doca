import React from "react";
import PropTypes from "prop-types";

import H1 from "components/shared/H1";
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return <>
    <H1 title='Erreur 404'>Ressource Introuvable</H1>
    <div className='text-center'>
      <p>La page demandée n'existe pas</p>
      <NavLink className="btn btn-dark me-3" to='/'>{'< Retour à l\'Accueil'}</NavLink>
    </div>
  </>;
};

NotFound.propTypes = {
  //
};

export default NotFound;
