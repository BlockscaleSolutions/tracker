import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SearchAppBar from '../../components/SearchAppBar/SearchAppBar';
import Footer from '../../components/Footer/Footer';
import RegisterDeviceForm from '../../components/DeviceForms/RegisterDeviceForm';
import DeviceAccountForm from '../../components/DeviceForms/DeviceAccountForm';

import createAccount from '../../utils/createAccount';
import getCurrentGPSLocation from '../../utils/getCurrentGPSLocation';
import createWeb3Connection from '../../utils/createWeb3Connection';
import registerDeviceOnChain from '../../utils/registerDeviceOnChain';
import startListeningForEvents from '../../utils/startListeningForEvents';

import './DeviceManagement.css';

class DeviceManagement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: undefined,
            web3: undefined,
            listening: false, // To ensure listeners are not created multiple times
        }
    }

    componentDidMount() {
        const wallet = this.getWallet();

        if (wallet) {
            this.setState({ address: wallet.address });
        }
    }

    componentWillUnmount() {
        // Clear all filters that may be bound to a node
        const { web3 } = this.state;
        
        if (web3) 
            web3.reset();
    }

    /**
     * Register a new device, create associated "account" to sign transactions
     */
    register = async () => {
        // if (!await this.web3ConnectionExists()) return;
        
        // Confirm persistent storage exists before generating an account
        if (navigator.storage && navigator.storage.persist) {
            navigator.storage.persist().then(async granted => {
                if (granted) {
                    let wallet = this.getWallet()

                    if (!wallet) {
                        wallet = createAccount()
                        await registerDeviceOnChain(this.state.web3, wallet);
                        // localStorage.setItem('wallet', JSON.stringify(wallet))
                    }

                    // this.setState({ address: wallet.address })
                } else {
                }
            });
        } else {
            alert("Storage may be cleared in your browser!  We are not confident in generating an account for you.  Our advice is to use an up to date version of Chrom or Brave. Thank you.");
        }
    }

    /**
     * Retrieve the wallet from browser storage if it exists
     */
    getWallet() {
        let wallet = localStorage.getItem('wallet');

        if (wallet) {
            return JSON.parse(wallet)
        }
    }
    
    checkInDevice = async () => {
        if (!await this.web3ConnectionExists()) return;
        
            try {
            const location = await getCurrentGPSLocation();
            console.log(location);

            // Send the transaction to check the device in
            // Push the raw data to ipfs log the data onchain

        } catch(err) {
            alert('So sorry but it appears there was an error in retrieving your location.  We recommend using the Google Chrome or Brave browsers and to ensure location data is not blocked.')
        }
    }

    async web3ConnectionExists() {
        const { web3, listening } = this.state;
        
        if (web3) {
            return true
        
        // Doesn't exist, try to create it
        } else {
            const web3Conn = await createWeb3Connection();

            if (web3Conn) {
                this.setState({ web3: web3Conn });

                if (!listening) {
                    startListeningForEvents(web3Conn, ['ProductRegistry', 'ProductRegistry'], ['DeviceRegistered', 'DeviceCheckedIn']);
                    this.setState({ listening: true });
                }
                return true;
            } else {
                return false;
            }
        }
    }

    render() {
        const { address } = this.state;

        // TODO get real data from db, query with address
        const fullName = 'Adam'
        const emailAddress = 'adam@adam.com'

        return (
            <div>
                <SearchAppBar />

                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <Paper className="Register-Paper" elevation={10}>
                        {
                            address 
                            ? <DeviceAccountForm 
                                fullName={fullName} 
                                emailAddress={emailAddress} 
                                deviceAccountID={address} 
                                checkInDevice={this.checkInDevice}
                                />
                            : <RegisterDeviceForm 
                                register={this.register} 
                                /> 
                        }
                        </Paper>
                    </Grid>
                </Grid>
                
                <Footer />
            </div>
      );
    }
}

export default DeviceManagement;

