import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import './RegisterForm.css';

const RegisterDeviceForm = props => 
    <div> 
        <Typography className="Register-Header" variant="h5" gutterBottom>
            Register your device...
        </Typography>

        <TextField
            required
            id="filled-required"
            label="Email Address [Required]"
            defaultValue="adam@blg.com"
            className="Register-TextField"
            margin="normal"
            variant="filled"
            fullWidth={true}
        />

        <p><i>
            Registering your device will register the device that you are visiting this application from.
        <br />
            This will create an account for the device that will be stored securely ONLY on your device.
        </i></p>

        <Button variant="extendedFab" color='secondary' className="Register-Button" onClick={props.register}>
            <AddIcon className="Register-Button"/>
            Register My Device!
        </Button>
    </div>

export default RegisterDeviceForm;