import React from "react";
import { Box, Collapsible } from "grommet";

const SideContent = props => <Box {...props} />;

/**
 * A responsive sidebar.
 * @param {*} props - props from parent component. {size, showSideBar}
 */
const SideBar = props => {
  console.log(props.size);
  return (
    <Collapsible
      direction="horizontal"
      open={
        props.showSidebar || props.size === "medium" || props.size === "large"
      }
    >
      <Box
        flex
        width="small"
        background="light-2"
        elevation="small"
        align="center"
        justify="center"
      >
        Show Side Bar
        <SideContent />
      </Box>
    </Collapsible>
  );
};

export default SideBar;
