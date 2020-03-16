import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../static/styles/header.css';

class Header extends Component {
  render() {
    return (
      <Grid container direction="column" alignItems="center" className="header-spacing">
        <Grid item xs={12}>
          <Typography variant="h3">
            {this.props.heading}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
