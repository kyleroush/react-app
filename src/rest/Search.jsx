import React from 'react';
import { Grid } from '@material-ui/core';
import ListGroup from './group/ListGroup';
import ListEmoji from './emoji/ListEmoji';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Search extends React.Component {
  state = {
    selectedIndex: 1,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    console.log(this.props);
    var value =this.state.selectedIndex;
    var query = new URLSearchParams(this.props.location.search).get('q')
    return(
      <div>
        {/* <Typography>
          This is the Search page searching for {query}          <SearchFilter />
        </Typography> */}
        <Grid container>
          <Grid item>
            <List component="nav">
              <ListItem
                button
                selected={value === 0}
                onClick={event => this.handleListItemClick(event, 0)}
              >
                <ListItemText primary="Groups" />
              </ListItem>
              <ListItem
                button
                selected={value === 1}
                onClick={event => this.handleListItemClick(event, 1)}
              >
                <ListItemText primary="Emojis" />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            {value === 0 && <ListGroup query={query} />}
            {value === 1 && <ListEmoji query={query} />}
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Search;