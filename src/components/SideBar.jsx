import React from "react";
import { Box, Collapsible, Button, Layer } from "grommet";
import { FormClose } from "grommet-icons";
import SideContent from "./SideContent";

/**
 * A responsive sidebar.
 * @param {*} props - props from parent component. {size, showSideBar}
 */
const SideBar = props => {
  const renderContent = () => {
    return <SideContent>Hi there a sidebar</SideContent>;
  };

  const getCloseButton = clickingFun => (
    <Box
      background="light-2"
      tag="header"
      justify="end"
      align="center"
      direction="row"
    >
      <Button icon={<FormClose />} onClick={clickingFun} />
    </Box>
  );

  return (
    <Collapsible direction="horizontal" open={props.showSidebar}>
      {props.showSidebar &&
      (props.size === "small" || props.size === "xsmall") ? (
        <Layer>
          {getCloseButton(props.onClick)}
          {renderContent()}
        </Layer>
      ) : (
        <Box
          flex
          width="medium"
          background="light-2"
          elevation="small"
          align="center"
          justify="center"
        >
          {renderContent()}
        </Box>
      )}
    </Collapsible>
  );
};

export default SideBar;
