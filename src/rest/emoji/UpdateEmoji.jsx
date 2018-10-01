import React from 'react';
import { Typography } from '@material-ui/core';
import EmojiForm from './EmojiForm';

class UpdateEmoji extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          emoji: {}
        };      
    }

    componentDidMount() {
        const groupRootUrl = "https://raw.githubusercontent.com/kyleroush/react-app/master/src/rest/emoji/emoji.json";
        const url = groupRootUrl;// + getFilters() + addPagination();
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                emoji: result,
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
        const { error, isLoaded, emoji, } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                <div>
                    <Typography>
                        This Page is the Update emoji page.
                    </Typography>
                    <Typography>
                        This is emoji {this.props.match.params.id}
                    </Typography>
                    <EmojiForm emoji={emoji}/>
                </div>
            );
        }
    }
}
export default UpdateEmoji;