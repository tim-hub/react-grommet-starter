import React from "react";
import { Box, Collapsible, Button, Layer } from "grommet";
import { FormClose } from "grommet-icons";

const SideContent = props => (
  <Box fill background="light-2" align="center" justify="center" {...props} />
);

/**
 * A responsive sidebar.
 * @param {*} props - props from parent component. {size, showSideBar}
 */
const SideBar = props => {
  const renderContent = () => {
    return <SideContent>Hi there a sidebar</SideContent>;
  };

  return (
    <Collapsible
      direction="horizontal"
      open={
        props.showSidebar ||
        props.size === "medium" ||
        props.size === "large" ||
        props.size === "xlarge"
      }
    >
      {props.size === "small" ||
      (props.size === "xsmall" && props.showSidebar) ? (
        <Layer>
          <Box
            background="light-2"
            tag="header"
            justify="end"
            align="center"
            direction="row"
          >
            <Button
              icon={<FormClose />}
              onClick={() => {
                console.log("clicked" + props.onClick);
                props.onClick();
              }}
            />
          </Box>
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
