import React from 'react';
import { Typography, Button } from '@material-ui/core';

class SingleEmoji extends React.Component {
    render() {
        console.log(this.props.match);
        return(
            <div>
                <Typography>
                    This Page is the single Emoji page.
                </Typography>
                <Typography>
                    This is emoji {this.props.match.params.id}
                </Typography>
                <Button href={this.props.match.url+"/update"} > Update </Button>
            </div>
        );
    }
}
export default SingleEmoji;