import React from "react";
import { Spinner } from "react-bootstrap";

import classes from "./LoadingMask.module.css";

const LoadingMask: React.FC = () => {
  return (
    <div className={classes.wrapper} data-testid="loading-mask">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default LoadingMask;
