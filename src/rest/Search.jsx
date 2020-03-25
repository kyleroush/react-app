import React from 'react';
import { Grid } from '@material-ui/core';
import ListGroup from './group/ListGroup';
import ListEmoji from './emoji/ListEmoji';
import SearchList from './SearchList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { GridList, GridListTile, GridListTileBar, Typography, IconButton , Button} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: "Emojis",
      isGrid: false,
    };
    this.categoriesMap = {
      "Groups":{
        urlRoot: "https://raw.githubusercontent.com/kyleroush/react-app/master/src/rest/group/groupList.json",
        gridItem: this.groupGridItem,
        listItem: this.groupListItem
      }, 
      "Emojis":{
        urlRoot: "https://raw.githubusercontent.com/kyleroush/react-app/master/src/rest/emoji/emojiList.json",
        listItem: this.emojiListItem,
        gridItem: this.emojiGridItem
      }, 
      "Slack":{}, 
      "Discords":{}, 
      "SubReddits":{}
    }  
  }

  

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  // move these out and bring them in as imports
  groupGridItem = (item) => (
    <GridListTile key={item.name}>
        <img src={item.coverPic} alt={item.name} />
        <GridListTileBar
          title={item.name}
          subtitle={<span>by: </span>}
          actionIcon={
            <IconButton href={"/react-app/group/" + item.id}>
              <InfoIcon />
            </IconButton>
          }
        />
    </GridListTile>
  )
  groupListItem = (item) => (
    <ListItem key={item.name} dense button >
      <img  width={25}  alt={item.name} src={item.coverPic} />
      <ListItemText primary={item.name} />
      <Button href={"/react-app/group/" + item.id} > Group </Button>
    </ListItem>
  )

  emojiListItem = item => (
    <ListItem key={item.name} dense button >
      <img  width={25}  alt={item.name} src={item.image} />
      <ListItemText primary={item.name} />
      <Button href={"/react-app/emoji/" + item.id} > Emoji </Button>
    </ListItem>
  )

  emojiGridItem = item => (
    <GridListTile key={item.name} >
      <img alt={item.name} src={item.image} />
      <GridListTileBar
          title={item.name}
          actionIcon={
            <IconButton href={"/react-app/emoji/" + item.id}>
              <InfoIcon />
            </IconButton>
          }
        />
    </GridListTile>
  )

  render() {
    console.log(this.props);
    var value = this.state.selectedIndex;
    var query = new URLSearchParams(this.props.location.search).get('q')
    return(
      <div>
        {/* <Typography>
          This is the Search page searching for {query}          <SearchFilter />
        </Typography> */}

        <Grid container>
          <Grid item>
            <List component="nav">
              {Object.keys(this.categoriesMap).map(cat =>               
                <ListItem
                  button
                  selected={value === cat}
                  onClick={event => this.handleListItemClick(event, cat)}
                >
                  <ListItemText primary={cat} />
                </ListItem>)}
            </List>
          </Grid>
          <Grid item>
            <SearchList key={value} data={this.categoriesMap[value]} query={query} isGrid={this.state.isGrid} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Search;