import React, { useState, useCallback } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './icon-button.module.scss';

const IconButton = ({
  children,
  onClick,
  withBackground = false,
  isDisabled = false,
  isActive = false,
  isTicking = false,
  isFloating = false,
  isSecondary = false,
  isTouched = false,
}) => {
  const [hasBeenTouched, setHasBeenTouched] = useState(isTouched);

  const handleTouchStart = useCallback(() => {
    setHasBeenTouched(true);
  }, []);

  return (
    <button
      type="button"
      className={classnames(styles['icon-button'], {
        [styles['icon-button--has-background']]: withBackground,
        [styles['icon-button--is-disabled']]: isDisabled,
        [styles['icon-button--is-active']]: !isDisabled && isActive,
        [styles['icon-button--is-ticking']]:
          !isDisabled && isActive && isTicking,
        [styles['icon-button--is-floating']]: isFloating,
        [styles['icon-button--is-not-touched']]: !hasBeenTouched,
        [styles['icon-button--is-secondary']]: isSecondary,
      })}
      onClick={onClick}
      onTouchStart={handleTouchStart}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  withBackground: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  isTicking: PropTypes.bool,
  isFloating: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isTouched: PropTypes.bool,
};

export default IconButton;
