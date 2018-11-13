import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Custom components
import SearchAppBar from '../../components/SearchAppBar/SearchAppBar';
import LiveFeed from '../../components/LiveFeed/LiveFeed';
import ProductMap from '../../components/ProductMap/ProductMap';
import Footer from '../../components/Footer/Footer';
import BlockExplorer from '../../components/BlockExplorer/BlockExplorer';

import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
          <div>
            <SearchAppBar />

            <Grid container>
                <Grid item xs={12} sm={3}>
                    <Paper className="Dash-Paper" elevation={10}>
                        <BlockExplorer />
                    </Paper>
                </Grid>
                
                <Grid item xs={12} sm={9}>
                    <Paper className="Dash-Paper" elevation={10}>
                        <ProductMap
                            isMarkerShown
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `500px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        /> 
                    </Paper>        
                </Grid>
                
                <Grid item xs={12} sm={12}>
                    <LiveFeed />
                </Grid>
            </Grid>

            <Footer />
        </div>
      );
    }
}

export default Dashboard;
