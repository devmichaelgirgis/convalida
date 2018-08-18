import React, { Component } from 'react';
import { withStyles, Divider, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
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
    open: false,
    gettingStartedOpened: false,
    apiOpened: false
  };

  toggleMenu = open => this.setState({ open })

  toggleGettingStartedSection = () => this.setState({
    ...this.state,
    gettingStartedOpened: !this.state.gettingStartedOpened
  })

  toggleApiSection = () => this.setState({
    ...this.state,
    apiOpened: !this.state.apiOpened
  })

  render() {
    const { classes } = this.props;
    const { open, gettingStartedOpened, apiOpened } = this.state;
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
            <ListItem button onClick={this.toggleGettingStartedSection}>
              <Typography style={{ fontSize: 16, color: '#333' }}>
                <b>Getting Started</b>
              </Typography>
              {gettingStartedOpened ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <GettingStartedSection
              classes={classes}
              open={gettingStartedOpened}
              toggleMenu={this.toggleMenu} />
            <ListItem button onClick={this.toggleApiSection}>
              <Typography style={{ fontSize: 16, color: '#333' }}>
                <b>API</b>
              </Typography>
              {apiOpened ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <ApiSection
              classes={classes}
              open={apiOpened}
              toggleMenu={this.toggleMenu} />
          </List>
        </Drawer>
      </div>
    );
  }
}

const GettingStartedSection = props => (
  <Collapse in={props.open} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
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
    </List>
  </Collapse>
);

const ApiSection = props => (
  <Collapse in={props.open} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
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

      <MenuItem
        title='Confirm Email Validation'
        url='confirm-email-validation'
        onClick={() => props.toggleMenu(false)}
        style={props.classes.link} />

      <MenuItem
        title='Length Validation'
        url='length-validation'
        onClick={() => props.toggleMenu(false)}
        style={props.classes.link} />

      <MenuItem
        title='Only Number Validation'
        url='only-number-validation'
        onClick={() => props.toggleMenu(false)}
        style={props.classes.link} />

      <MenuItem
        title='Pattern Validation'
        url='pattern-validation'
        onClick={() => props.toggleMenu(false)}
        style={props.classes.link} />

      <MenuItem
        title='Password Validation'
        url='password-validation'
        onClick={() => props.toggleMenu(false)}
        style={props.classes.link} />

      <MenuItem
        title='Confirm Password Validation'
        url='confirm-password-validation'
        onClick={() => props.toggleMenu(false)}
        style={props.classes.link} />

      <MenuItem
        title='Between Validation'
        url='between-validation'
        onClick={() => props.toggleMenu(false)}
        style={props.classes.link} />

      <MenuItem
        title='CPF Validation'
        url='cpf-validation'
        onClick={() => props.toggleMenu(false)}
        style={props.classes.link} />

      <MenuItem
        title='Credit Card Validation'
        url='credit-card-validation'
        onClickList={() => props.toggleMenu(false)}
        style={props.classes.link} />

      <MenuItem
        title='Number Limit Validation'
        url='number-limit-validation'
        onClick={() => props.toggleMenu(false)}
        style={props.classes.link} />
    </List>
  </Collapse>
);

export default withStyles(styles)(SideMenu);