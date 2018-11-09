import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

import 'font-awesome/css/font-awesome.css'

import './Footer.css';
import logo from '../../blockscale.png';

const Footer = props =>
    <footer className="Footer">
        <img src={logo} className="Footer-logo" alt="logo" />
        <Typography variant="h6" align="center" className="Footer-Contact">
          &copy; Blockscale Solutions Inc.
        </Typography>


        <a href="https://www.linkedin.com/company/blockscale-solutions-inc/" target="_blank">
            <i className="fa fa-linkedin Footer-Social-Icon"></i>
        </a>
        <a href="https://github.com/BlockscaleSolutions" target="_blank">
            <i className="fa fa-github Footer-Social-Icon"></i>
        </a>
        <a href="https://twitter.com/BlockscaleSolns" target="_blank">
            <i className="fa fa-twitter Footer-Social-Icon"></i>
        </a>

      </footer>

export default Footer





