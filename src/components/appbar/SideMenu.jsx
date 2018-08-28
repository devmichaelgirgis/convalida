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
    release: {},
    sections: {
      gettingStarted: { open: false },
      api: {
        open: false,
        validations: { open: false },
        actions: { open: false }
      }
    }
  };

  toggleMenu = () => this.setState({ ...this.state, open: !this.state.open })

  toggleGettingStartedSection = () => this.setState({
    ...this.state,
    sections: {
      ...this.state.sections,
      gettingStarted: {
        open: !this.state.sections.gettingStarted.open
      }
    }
  })

  toggleApiSection = () => this.setState({
    ...this.state,
    sections: {
      ...this.state.sections,
      api: {
        ...this.state.sections.api,
        open: !this.state.sections.api.open
      }
    }
  })

  toggleApiValidationsSection = () => this.setState({
    ...this.state,
    sections: {
      ...this.state.sections,
      api: {
        ...this.state.sections.api,
        validations: { open: !this.state.sections.api.validations.open }
      }
    }
  })

  toggleApiActionsSection = () => this.setState({
    ...this.state,
    sections: {
      ...this.state.sections,
      api: {
        ...this.state.sections.api,
        actions: { open: !this.state.sections.api.actions.open }
      }
    }
  })

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
    const { open, release, sections: { gettingStarted, api } } = this.state;
    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={this.toggleMenu}>
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={this.toggleMenu}>
          <Link to={"/"} onClick={this.toggleMenu} className={classes.linkHoverized}>
            <Typography className={classes.menuTitle}>
              Convalida
            </Typography>
          </Link>
          <a
            onClick={this.toggleMenu}
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
              onOpen={this.toggleGettingStartedSection}
              open={gettingStarted.open}
              toggleMenu={this.toggleMenu} />
            <ApiSection
              classes={classes}
              onRootOpen={this.toggleApiSection}
              rootOpen={api.open}
              onValidationsOpen={this.toggleApiValidationsSection}
              validationsOpen={api.validations.open}
              onActionsOpen={this.toggleApiActionsSection}
              actionsOpen={api.actions.open}
              toggleMenu={this.toggleMenu} />
          </List>
        </Drawer>
      </div>
    );
  }
}

const GettingStartedSection = props => (
  <div>
    <ExpandableMenuItem onClick={props.onOpen} open={props.open} title="Getting Started" />
    <Collapse in={props.open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <MenuItem
          title='Introduction'
          url='introduction'
          onClick={props.toggleMenu}
          style={props.classes.link} />

        <MenuItem
          title='How It Works'
          url='how-it-works'
          onClick={props.toggleMenu}
          style={props.classes.link} />

        <MenuItem
          title='How To Use'
          url='how-to-use'
          onClick={props.toggleMenu}
          style={props.classes.link} />

        <MenuItem
          title='Download'
          url='download'
          onClick={props.toggleMenu}
          style={props.classes.link} />
      </List>
    </Collapse>
  </div>
);

const ApiSection  = props => (
  <div>
    <ExpandableMenuItem
      onClick={props.onRootOpen}
      open={props.rootOpen}
      title="API" />
    <Collapse in={props.rootOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ExpandableMenuItem
          onClick={props.onValidationsOpen}
          open={props.validationsOpen}
          title="Validations" />
        <Collapse in={props.validationsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <MenuItem
              title='Required Validation'
              url='required-validation'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='Email Validation'
              url='email-validation'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='Confirm Email Validation'
              url='confirm-email-validation'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='Length Validation'
              url='length-validation'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='Only Number Validation'
              url='only-number-validation'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='Pattern Validation'
              url='pattern-validation'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='Password Validation'
              url='password-validation'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='Confirm Password Validation'
              url='confirm-password-validation'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='Between Validation'
              url='between-validation'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='CPF Validation'
              url='cpf-validation'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='Credit Card Validation'
              url='credit-card-validation'
              onClickList={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='Number Limit Validation'
              url='number-limit-validation'
              onClick={props.toggleMenu}
              style={props.classes.link} />
          </List>
        </Collapse>      
        <ExpandableMenuItem
          onClick={props.onActionsOpen}
          open={props.actionsOpen}
          title="Actions" />
        <Collapse in={props.actionsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <MenuItem
              title='Validate On Click'
              url='validate-on-click'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='Clear Validations On Click'
              url='clear-validations-on-click'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='On Validation Success'
              url='on-validation-success'
              onClick={props.toggleMenu}
              style={props.classes.link} />
      
            <MenuItem
              title='On Validation Error'
              url='on-validation-error'
              onClick={props.toggleMenu}
              style={props.classes.link} />
          </List>
          </Collapse>
      </List>
    </Collapse>
  </div>
);

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