import React from "react";
import {
  Box,
  Button,
  Heading,
  Grommet,
  Collapsible,
  ResponsiveContext,
  Layer
} from "grommet";
import { Notification, FormClose } from "grommet-icons";
import "./App.css";

const theme = {
  global: {
    colors: {
      brand: "#228BE6"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };
  }
  render() {
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level="3" margin="none">
                  Tim's Portfolio
                </Heading>
                <Button
                  icon={<Notification />}
                  onClick={() => {
                    this.setState({
                      showSidebar: !this.state.showSidebar
                    });
                  }}
                />
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                {!this.state.showSidebar || size !== "small" ? (
                  <Collapsible
                    direction="horizontal"
                    open={this.state.showSidebar}
                  >
                    <Box
                      flex
                      width="medium"
                      background="light-2"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      sidebar
                    </Box>
                  </Collapsible>
                ) : (
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
                        onClick={() => this.setState({ showSidebar: false })}
                      />
                    </Box>

                    <Box
                      fill
                      background="light-2"
                      align="center"
                      justify="center"
                    >
                      sidebar
                    </Box>
                  </Layer>
                )}
                <Box flex align="center" justify="center">
                  app body
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
