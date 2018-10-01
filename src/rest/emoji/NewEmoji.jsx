import React from 'react';
import { Typography } from '@material-ui/core';
import EmojiForm from './EmojiForm';

class NewEmoji extends React.Component {

  submit = state => {
    const newEmoji = {id: 1};
    window.location.pathname = "/react-app/emoji/" + newEmoji.id;
  };


    render() {
        return(
            <div>
              <Typography>
                  This Page is the New Emoji page.
              </Typography>
              <EmojiForm action="create" submit={this.submit}/>
      
            </div>
        );
    }
}
export default NewEmoji;