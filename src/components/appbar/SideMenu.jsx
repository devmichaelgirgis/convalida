import React, { Component } from 'react';
import { withStyles, Divider, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import GettingStartedIcon from '@material-ui/icons/FlightTakeoff';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const styles = theme => ({
  menuTitle: {
    fontSize: 20,
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: 'none'
  }
});

const MenuItem = props => (
  <Link to={props.url} className={props.style}>
    <ListItem button onClick={props.onClick}>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.title} />
    </ListItem>
  </Link>
);

class SideMenu extends Component {

  state = {
    open: false
  };

  toggleMenu = open => this.setState({ open })

  render() {
    const { classes } = this.props;
    const { open  } = this.state;
    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={() => this.toggleMenu(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={() => this.toggleMenu(false)}>
          <Typography className={classes.menuTitle}>
            Convalida
          </Typography>
          <Divider />
          <List component="nav">
            <ListSubheader>Getting Started</ListSubheader>
            <MenuItem
              title='Introduction'
              url='introduction'
              onClick={() => this.toggleMenu(false)}
              icon={ <GettingStartedIcon /> }
              style={classes.link} />

            <MenuItem
              title='Download'
              url='download'
              onClick={() => this.toggleMenu(false)}
              icon={ <CloudDownloadIcon /> }
              style={classes.link} />
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(SideMenu);