import React from 'react';
import { Typography } from '@material-ui/core';
import EmojiForm from './EmojiForm';

class NewEmoji extends React.Component {
    render() {
        return(
            <div>
              <Typography>
                  This Page is the New Emoji page.
              </Typography>
              <EmojiForm />
      
            </div>
        );
    }
}
export default NewEmoji;