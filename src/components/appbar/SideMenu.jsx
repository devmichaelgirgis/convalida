import React, { Component } from 'react';
import { withStyles, Divider, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';

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
      <Typography style={{ fontSize: 16, color: '#333' }}>
        {props.title}
      </Typography>
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
            <GettingStartedSection
              classes={classes}
              toggleMenu={this.toggleMenu} />
            <ApiSection
              classes={classes}
              toggleMenu={this.toggleMenu} />
          </List>
        </Drawer>
      </div>
    );
  }
}

const GettingStartedSection = props => (
  <div>
    <ListSubheader>Getting Started</ListSubheader>
    <MenuItem
      title='Introduction'
      url='introduction'
      onClick={() => props.toggleMenu(false)}
      style={props.classes.link} />

    <MenuItem
      title='Download'
      url='download'
      onClick={() => props.toggleMenu(false)}
      style={props.classes.link} />
  </div>
);

const ApiSection = props => (
  <div>
    <ListSubheader>API</ListSubheader>
    <MenuItem
      title='Required Validation'
      url='required-validation'
      onClick={() => props.toggleMenu(false)}
      style={props.classes.link} />

    <MenuItem
      title='Email Validation'
      url='email-validation'
      onClick={() => props.toggleMenu(false)}
      style={props.classes.link} />
  </div>
);

export default withStyles(styles)(SideMenu);