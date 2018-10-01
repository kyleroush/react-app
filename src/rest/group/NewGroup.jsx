import React from 'react';
import { Typography } from '@material-ui/core';
import GroupForm from './GroupForm';

class NewGroup extends React.Component {
  submit = state => {

    const newGroup = {id: 1}

    window.location.pathname = "/react-app/group/" + newGroup.id
  };
  render() {
    return(
      <div>
        <Typography>
            This Page is the new Group page.
        </Typography>
        <GroupForm action="Create" submit={this.submit} />

      </div>
    );
  }
}
export default NewGroup;