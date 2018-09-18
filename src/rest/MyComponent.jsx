import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ListEmoji from './emoji/ListEmoji';
import ListGroup from './group/ListGroup';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
      loggedIn: false,
    };
    
    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value, loggedIn } = this.state;
        const menuButton = {
              marginLeft: -12,
              marginRight: 20,
            }
        return (
            <div >
                <AppBar position="static">
                  <Tabs value={value} onChange={this.handleChange}>
                    <Tab label="Index (need to figure this out)" />
                    <Tab label="Emojis" />
                    <Tab label="Groups" />
                  </Tabs>
                  {/* {loggedIn?  <Button color="inherit" style={menuButton}>Login true</Button> : <Button color="inherit" style={menuButton} >Login false</Button>} */}
                </AppBar>
                <TabContainer>
                  { value === 0 && <div /> }
                  { value === 1 && <ListEmoji /> }
                  { value === 2 && <ListGroup /> }
                </TabContainer>

            </div>
        );
    }
}

export default App;