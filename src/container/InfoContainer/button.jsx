import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, primary, dark, dark2, children }) => {
    const buttonClass = primary ? 'btn btn-primary' : 'btn btn-secondary';

    return (
        <Link to={to} className={buttonClass}>
            {children}
        </Link>
    );
};

export default Button;
