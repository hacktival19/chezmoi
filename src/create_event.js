import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import React from 'react';

class LocationSwitch extends React.Component {
  state = {
    alternativeLocation: true,
    // checked: false,
  };

  handleChange = event => {
    this.setState(prevState => ({
      alternativeLocation: !prevState.alternativeLocation
    }));
  }

  render() {
    let alternativeLocation_field;

    if (this.state.alternativeLocation) {
      alternativeLocation_field =
        <div>
          <TextField id="name" type="text" label="Name" />
          <br />
          <TextField id="adress" type="text" label="Adress" />
          <br />
          <TextField id="zip" type="text" label="ZIP code" />
        </div>
    }
    else {
      alternativeLocation_field = null;
    }

    return (
      <div>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.alternativeLocation}
                onChange={this.handleChange}
                //value={this.state.alternativeLocation}
                color="primary"
              />
            }
            label="Alternative Location"
          />
          <br />
        </FormGroup>
        {alternativeLocation_field}

      </div>
    )
  }
}



class SwitchLabels extends React.Component {
  state = {
    selectedValue: 'a',
  };


  handleChange = event => {
    this.setState({
      selectedValue: event.target.value
    });
  };

  render() {
    return (
      <FormGroup row>

        <FormControlLabel
          control={
            <Switch
              checked={this.state.selectedValue === 'a'}
              onChange={this.handleChange}
              value="a"
              color="primary"
            />
          }
          label="Vegetarian"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.selectedValue === 'b'}
              onChange={this.handleChange}
              value="b"
              color="primary"
            />
          }
          label="Vegan"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.selectedValue === 'c'}
              onChange={this.handleChange}
              value="c"
              color="primary"
            />
          }
          label="FLEISCH!!!!"
        />
      </FormGroup>
    );
  }
}


class CreateEvent extends React.Component {
  render() {
    return (


      <div style={{ backgroundColor: 'white' }}>
        <TextField id="title" type="text" label="enter title" />
        <br />
        <TextField id="description" type="text" label="enter title" multiline="true" rows="5" />
        <br />
        <h1>
          Details:
            </h1>
        <SwitchLabels />
        <LocationSwitch />
				<br/>
				<Button variant="contained">
          Create event
        </Button>
      </div>
    );
  }
}



export default CreateEvent;