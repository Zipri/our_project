import * as React from 'react';
import cn from 'classnames'
import styles from './Input.module.css';

const Input = ({placeholder, value, onChange, className, ...props}) => {
  return (
    <input
      className={cn(styles['input'], className)}
      placeholder={placeholder} value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default Input;