import React from 'react';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Check';

import './RegisterForm.css';

const DeviceAccountForm = props => 
    <div> 
        <Typography className="Register-Header" variant="h5" gutterBottom>
            Your Device is Registered.
        </Typography>

        <TextField
          id="address-device-account"
          label="Device Account ID"
          defaultValue={props.deviceAccountID}
          className="Register-TextField"
          InputProps={{
            readOnly: true,
          }}
          margin="normal"
          variant="filled"
          fullWidth={true}
        />

        <Typography className="Register-Header" variant="h5" gutterBottom>
            Check-In your device!
        </Typography>

        <p style={{ textAlign: 'left' }}><i>
          By checking in your device you are verifying existence and location of the device.
          <br />
          A digital signature will be created using your device's secure account, specifically the private key in order to prove authenticity of the check-in.
          <br />
          The gps location will be pulled from your browser and the check-in will be securely stored on the Ethereum Blockchain.
        </i></p>

        <Button variant="extendedFab" color='primary' className="Register-Button" onClick={props.checkInDevice}>
            <Icon className="Register-Button"/>
            Check Me In!
        </Button>
    </div>

export default DeviceAccountForm;