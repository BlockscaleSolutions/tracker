import React, { Component } from 'react';

// Custom components
import SearchAppBar from '../components/SearchAppBar';
import LiveFeed from '../components/LiveFeed';
import ProductMap from '../components/ProductMap';
import Footer from '../components/Footer';

class Dashboard extends Component {
    render() {
        return (
          <div>
            <SearchAppBar />
            <ProductMap
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
            <LiveFeed />
        </div>
      );
    }
}

export default Dashboard;
