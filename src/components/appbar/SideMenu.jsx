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
import Axios from 'axios';

const styles = theme => ({
  menuTitle: {
    fontSize: 20,
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  menuSubtitle: {
    fontSize: 16,
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 1.5
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: 'none'
  },
  linkHoverized: {
    textDecoration: 'none',
    '&:hover': {
      color: '#333',
      textDecoration: 'underline'
    }
  }
});

class SideMenu extends Component {

  state = {
    open: false,
    release: {}
  };

  toggleMenu = open => this.setState({ open })

  getLatestGitHubRelease = async () => {
    return await Axios.get("https://api.github.com/repos/WellingtonCosta/convalida/releases/latest")
      .then(response => ({ name: response.data['name'], url: response.data['html_url'] }))
      .catch(error => console.error(error));
  }

  async componentDidMount() {
    const release = await this.getLatestGitHubRelease();
    this.setState({ ...this.state, release });
  }

  render() {
    const { classes } = this.props;
    const { open, release } = this.state;
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
          <Link to={"/"} onClick={() => this.toggleMenu(false)} className={classes.linkHoverized}>
            <Typography className={classes.menuTitle}>
              Convalida
            </Typography>
          </Link>
          <a
            onClick={() => this.toggleMenu(false)}
            className={classes.linkHoverized}
            target="_blank"
            href={release.url ? release.url : process.env.PUBLIC_URL}>
            <Typography className={classes.menuSubtitle}>
              { release.name }
            </Typography>
          </a>
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

class GettingStartedSection extends Component {
  state = {
    open: false
  };

  render() {
    const { classes, toggleMenu } = this.props;
    const { open } = this.state;
    const onOpen = () => this.setState({ open: !open })
    return (
      <div>
        <ExpandableMenuItem onClick={onOpen} open={open} title="Getting Started" />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <MenuItem
              title='Introduction'
              url='introduction'
              onClick={() => toggleMenu(false)}
              style={classes.link} />

            <MenuItem
              title='How It Works'
              url='how-it-works'
              onClick={() => toggleMenu(false)}
              style={classes.link} />

            <MenuItem
              title='How To Use'
              url='how-to-use'
              onClick={() => toggleMenu(false)}
              style={classes.link} />

            <MenuItem
              title='Download'
              url='download'
              onClick={() => toggleMenu(false)}
              style={classes.link} />
          </List>
        </Collapse>
      </div>
    );
  }
}

class ApiSection extends Component {

  state = {
    rootOpened: false,
    validationsOpened: false,
    actionsOpened: false
  };

  toggleRoot = () => this.setState({
    ...this.state,
    rootOpened: !this.state.rootOpened
  })

  toggleValidations = () => this.setState({
    ...this.state,
    validationsOpened: !this.state.validationsOpened
  })

  toggleActions = () => this.setState({
    ...this.state,
    actionsOpened: !this.state.actionsOpened
  })

  render() {
    const { classes, toggleMenu } = this.props;
    const { rootOpened, validationsOpened, actionsOpened } = this.state;
    return (
      <div>
        <ExpandableMenuItem
          onClick={this.toggleRoot}
          open={rootOpened}
          title="API" />
        <Collapse in={rootOpened} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ExpandableMenuItem
              onClick={this.toggleValidations}
              open={validationsOpened}
              title="Validations" />
            <Collapse in={validationsOpened} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              <MenuItem
                  title='Required Validation'
                  url='required-validation'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='Email Validation'
                  url='email-validation'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='Confirm Email Validation'
                  url='confirm-email-validation'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='Length Validation'
                  url='length-validation'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='Only Number Validation'
                  url='only-number-validation'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='Pattern Validation'
                  url='pattern-validation'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='Password Validation'
                  url='password-validation'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='Confirm Password Validation'
                  url='confirm-password-validation'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='Between Validation'
                  url='between-validation'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='CPF Validation'
                  url='cpf-validation'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='Credit Card Validation'
                  url='credit-card-validation'
                  onClickList={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='Number Limit Validation'
                  url='number-limit-validation'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
              </List>
            </Collapse>      
            <ExpandableMenuItem
              onClick={this.toggleActions}
              open={actionsOpened}
              title="Actions" />
            <Collapse in={actionsOpened} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <MenuItem
                  title='Validate On Click'
                  url='validate-on-click'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='Clear Validations On Click'
                  url='clear-validations-on-click'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='On Validation Success'
                  url='on-validation-success'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
          
                <MenuItem
                  title='On Validation Error'
                  url='on-validation-error'
                  onClick={() => toggleMenu(false)}
                  style={classes.link} />
              </List>
              </Collapse>
          </List>
        </Collapse>
      </div>
    );
  }
}

const MenuItem = props => (
  <Link to={props.url} className={props.style}>
    <ListItem button onClick={props.onClick}>
      <Typography style={{ fontSize: 16, color: '#333' }}>
        {props.title}
      </Typography>
    </ListItem>
  </Link>
);

const ExpandableMenuItem = props => (
  <ListItem button onClick={props.onClick}>
    <Typography style={{ fontSize: 16, color: '#333' }}>
      <b>{props.title}</b>
    </Typography>
    {props.open ? <ExpandLess /> : <ExpandMore />}
  </ListItem>
);

export default withStyles(styles)(SideMenu);