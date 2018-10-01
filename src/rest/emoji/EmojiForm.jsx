import React from 'react';
import { TextField, FormControlLabel, Checkbox, Button, Input } from '@material-ui/core';

class EmojiForm extends React.Component {
  constructor(props) {
    super(props);
    const emoji = props.emoji? props.emoji: {};
    this.state = {
      id: emoji.id? emoji.id: '',
      image: emoji.image? emoji.image: '',
      name: emoji.name? emoji.name: '',
      etag: emoji.etag? emoji.etag: '',
      desc: emoji.desc? emoji.desc: '',
      isPrivate: emoji.isPrivate? emoji.isPrivate: '',
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
          id="image"
          label="Image url"
          placeholder="Image url"
          className={styles.textField}
          margin="normal"
          variant="outlined"
          value={this.state.image}
          onChange={this.handleChange('image')}
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
export default EmojiForm;