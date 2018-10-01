import React from 'react';
import { TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    const group = props.group? props.group: {};
    this.state = {
      id: group.id? group.id: '',
      coverPic: group.coverPic? group.coverPic: '',
      name: group.name? group.name: '',
      etag: group.etag? group.etag: '',
      desc: group.desc? group.desc: '',
      isPrivate: group.isPrivate? group.isPrivate: '',
    }
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleCheckBoxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

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
          id="name"
          label="Name"
          placeholder="Name"
          className={styles.textField}
          margin="normal"
          variant="outlined"
          required
          value={this.state.name}
          onChange={this.handleChange('name')}
        />
        < br/>
        <TextField
          id="coverPic"
          label="Cover Pic"
          placeholder="Cover Pic"
          className={styles.textField}
          margin="normal"
          variant="outlined"
          value={this.state.coverPic}
          onChange={this.handleChange('coverPic')}
        />
        < br/>
        <TextField
          id="desc"
          label="Desc"
          placeholder="Desc"
          className={styles.textField}
          margin="normal"
          variant="outlined"
          value={this.state.desc}
          onChange={this.handleChange('desc')}
        />
        < br/>

        <FormControlLabel
            control={
              <Checkbox
                checked={this.state.isPrivate}
                onChange={this.handleCheckBoxChange('isPrivate')}
                value="isPrivate"
              />
            }
            label="isPrivate"
          />
          <br />
          <Button onClick={()=>this.props.submit(this.state)}>{this.props.action}</Button>
      </form>
    );
  }
}
export default GroupForm;