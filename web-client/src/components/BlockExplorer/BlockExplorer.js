import React from 'react';
import Typography from '@material-ui/core/Typography';

import block from '../../img/cube.png';

import './BlockExplorer.css';

function BlockExplorer(props) {
  return (
    <React.Fragment>
      <Typography className="text" variant="h5" gutterBottom>
        Block Explorer
      </Typography>
      <img src={block} className="Block-Logo" alt="logo" />
    </React.Fragment>
  );
}

export default BlockExplorer