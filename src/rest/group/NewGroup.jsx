import React from 'react';
import { Typography } from '@material-ui/core';
import GroupForm from './GroupForm';

class NewGroup extends React.Component {
  render() {

    return(
      <div>
        <Typography>
            This Page is the new Group page.
        </Typography>
        <GroupForm />

      </div>
    );
  }
}
export default NewGroup;