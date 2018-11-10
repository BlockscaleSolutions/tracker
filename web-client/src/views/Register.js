import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Custom components
import SearchAppBar from '../components/SearchAppBar/SearchAppBar';
import Footer from '../components/Footer/Footer';

import './Dashboard.css';

import createAccount from '../utils/createAccount';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: null
        }
    }

    componentDidMount() {
        const wallet = this.getWallet();

        if (wallet) {
            this.setState({ address: wallet.address });
        }
    }

    /**
     * Register a new device, create associated "account" to sign transactions
     */
    register() {
        // Confirm persistent storage exists before generating an account
        if (navigator.storage && navigator.storage.persist) {
            navigator.storage.persist().then(granted => {
                if (granted) {
                    console.log("Storage will not be cleared except by explicit user action");
                    let wallet = this.getWallet()

                    if (!wallet) {
                        wallet = createAccount()
                        localStorage.setItem('wallet', JSON.stringify(wallet))
                    }

                    this.setState({ address: wallet.address })
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
    
    render() {
        const { address } = this.state;

        return (
          <div>
            <SearchAppBar />

            <Grid container>
                <Grid item xs={12} sm={3}>
                    <Paper className="Paper" elevation={10}>
                        {/* <BlockExplorer /> */}
                        {address}
                    </Paper>
                </Grid>
                
                <Grid item xs={12} sm={9}>
                    <Paper className="Paper" elevation={10}>
                    </Paper>
                </Grid>
                
                <Grid item xs={12} sm={12}>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Footer />
                </Grid>
            </Grid>
        </div>
      );
    }
}

export default Register;
