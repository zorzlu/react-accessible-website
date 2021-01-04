import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  type,
  // eslint-disable-next-line react/prop-types
  onClick,
  // eslint-disable-next-line react/prop-types
  buttonStyle,
  // eslint-disable-next-line react/prop-types
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
