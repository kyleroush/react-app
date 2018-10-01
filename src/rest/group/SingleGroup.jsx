import React from 'react';
import { Typography, Button } from '@material-ui/core';

class SingleGroup extends React.Component {
    render() {

        console.log(this.props)
        return(
            <div>
                <Typography>
                    This Page is the Single Group page.
                </Typography>
                <Typography>
                    This is group {this.props.match.params.id}
                </Typography>
                <Button href={this.props.match.url+"/update"} > Update</Button>

            </div>
        );
    }
}
export default SingleGroup;