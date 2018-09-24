import React from 'react';
import { Typography, TextField } from '@material-ui/core';

class NewGroup extends React.Component {
  render() {
    const styles = theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
      dense: {
        marginTop: 16,
      },
      menu: {
        width: 200,
      },
    });
    return(
      <form className={styles.container} noValidate autoComplete="off" >
          
        <TextField
          id="title"
          label="Title"
          placeholder="Title"
          className={styles.textField}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}
export default NewGroup;