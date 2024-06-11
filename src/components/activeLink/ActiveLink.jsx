import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({to}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "active"
                        : ''
                        
                    }
                  >
                    {/* other code */}
                  </NavLink>
    );
};

export default ActiveLink;