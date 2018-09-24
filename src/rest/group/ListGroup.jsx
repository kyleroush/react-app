import React, { Component } from 'react';
import { List, ListItem, Avatar, ListItemText, GridList, GridListTile, ListSubheader, GridListTileBar, Typography } from '@material-ui/core';


class ListGroup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        offset: 0,
        limit: 20
      };
      // const groupRootUrl = "https://gist.githubusercontent.com/kyleroush/83640c24b7d88c72cc0a7334116f9469/raw/d2bdfd80b1cdc9d659211583d0ed302407945004/gistfile1.txt";
    
    }

  
  
    componentDidMount() {
      const groupRootUrl = "https://raw.githubusercontent.com/kyleroush/react-app/master/src/rest/group/groupList.json";


      const url = groupRootUrl;// + getFilters() + addPagination();
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items,
              totalResults: 6//result.totalResults
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: false,
              error: error.message
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items, totalResults} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div >
            <Typography>There are a total of {totalResults} Groups.</Typography>
            <GridList>
              {items.map(item => (
                <GridListTile key={item.name}>
                    <img src={item.coverPic} alt={item.name} />
                    <GridListTileBar
                    title={item.name}
                    subtitle={<span>by: text</span>}
                    />
                </GridListTile>
              ))}
            </GridList>
          </div>
        );
      }
    }
  }
  
  export default ListGroup;
