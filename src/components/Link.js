import React from 'react';
import PropTypes from 'prop-types'

const Link = ({ active, onClick, children }) => {
    if(active){
        return 
    }
    return (
        <a href="#" onClick={(e)=>{
            e.preventDefault
            onClick()
            }}>
            
        </a>
    );
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }

export default Link;