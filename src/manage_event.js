import React from 'react';
import TextField from '@material-ui/core/TextField';
import { red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import spaghetti from './spaghetti.jpeg';
import jonathan from './jonathan.png';
import valentin from './valentin.png';
import hannah from './hannah.png';

export class ManageEvent extends React.Component {

    state = {
        numberOfSlotsLeft: 5,
    };

    render() {
        return (
            <div>
                <FormGroup row>

                    <div>
                        <br /><TextField defaultValue="Chilli con Carne" id="title" type="text" label="title" />
                        <br />
                        <TextField defaultValue="We cook the classic chili after an old family recipe. There'll be some wine or softdrinks if you prefer"
                            id="description" type="text" label="description" multiline={true} rows="4" />
                        <br />
                        <TextField defaultValue="5€" id="price" type="text" label="price" />
                        <br />
                        <br />
                    </div>

                    <img src={spaghetti} width={350} />

                </FormGroup>
                {this.state.numberOfSlotsLeft > 4 ? <ApplicationSlide user_name="Jonathan Weber" image_source={jonathan} /> : null}
                {this.state.numberOfSlotsLeft > 3 ? <ApplicationSlide user_name="Valentin Schwartz" image_source={valentin} /> : null}
                {this.state.numberOfSlotsLeft > 2 ? <ApplicationSlide user_name="Hannah Montannah" image_source={hannah} /> : null}
            </div>
        );
    }
}

class ApplicationSlide extends React.Component {

    state = {
        application_active: true,
        is_participating: false,
    }

    // state = {
    //     user_name: 'Jonathan Weber',
    //     image_source: null,
    // };


    render() {
        const declineUser = () => {
            this.setState({ application_active: false })
        }
        const acceptUser = () => {
            this.setState({ is_participating: true })
        }
        const user_name = "Jonathan Weber";
        const image_source = null;
        return (
            <div>
                {this.state.application_active ? <FormGroup row>
                    <img src={this.props.image_source} width={50} height={50} />
                    <TextField
                        InputProps={{
                            readOnly: true,
                        }}
                        id="standard-read-only_input"
                        defaultValue={this.props.user_name}
                        margin="normal"
                    />
                    {!this.state.is_participating ?
                        <div>
                            <Button variant="contained" onClick={declineUser} >
                                Decline
                        </Button>
                            <Button variant="contained" onClick={acceptUser}>
                                Accept
                        </Button>
                        </div> :
                        <div>
                            is participating
                        </div>
                    }

                </FormGroup> : null}
            </div>
        )
    }
}



export default ManageEvent;