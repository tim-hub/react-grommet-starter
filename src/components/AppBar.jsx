import React from "react";
import { Box } from "grommet";

/**
 * An app header bar.
 * @param {*} props
 */
const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

export default AppBar;
