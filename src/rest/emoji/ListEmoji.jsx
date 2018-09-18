import React, { Component } from 'react';
import { List, ListItem, Avatar, ListItemText } from '@material-ui/core';


class ListEmoji extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
      // const emojiRootUrl = "https://gist.githubusercontent.com/kyleroush/83640c24b7d88c72cc0a7334116f9469/raw/d2bdfd80b1cdc9d659211583d0ed302407945004/gistfile1.txt";
    
    }

  
  
    componentDidMount() {
      const emojiRootUrl = "https://raw.githubusercontent.com/kyleroush/react-app/master/src/rest/emoji/emojiList.json";

      const url = emojiRootUrl;// + getFilters();
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error: error.message
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div >
            <List>
              {items.map(item => (
                <ListItem key={item.name} dense button >
                  <img  width={25}  alt={item.name} src={item.img} />
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </div>
        );
      }
    }
  }
  
  export default ListEmoji;
