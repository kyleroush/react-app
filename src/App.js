import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConnectFour from './ConnectFour.js';
import Snake from './Snake.js';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  });

class App extends Component {

    state = {
        value: 0,
    };
    
    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div >
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Connect Four" />
                        <Tab label="Snake" />
                    </Tabs>
                </AppBar>
                <TabContainer>
                    { value === 0 && <ConnectFour /> }
                    { value === 1 && <Snake /> }
                </TabContainer>

            </div>
        );
    }
}

export default App;