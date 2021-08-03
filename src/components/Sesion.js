import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'linear-gradient(45deg, #a662e6 30%, #d124f1 90%)',
    borderRadius: '50px',
    border: '0px',
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 12px rgba(grey, .15)',
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button sx sm md lg className={clsx(classes.root, className)} {...other}>
      {children || 'class names'}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
