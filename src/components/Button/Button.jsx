import * as React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

const Button = (props) => {
  const {onClick, children, className} = props;

  return (
    <button
      className={cn(styles['button'], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;