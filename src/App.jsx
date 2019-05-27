import React from "react";
import { Box, Button, Heading, Grommet, ResponsiveContext } from "grommet";
import { Notification } from "grommet-icons";
import "./App.css";
import AppBar from "./components/AppBar";
import SideBar from "./components/SideBar";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };
    this.hideSideBar = this.hideSideBar.bind(this);
  }
  hideSideBar() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }
  render() {
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level="3" margin="none">
                  {size} Title
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
                <SideBar showSidebar={this.state.showSidebar} size={size} />
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
