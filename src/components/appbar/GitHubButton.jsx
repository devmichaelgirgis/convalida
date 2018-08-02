import React, { Component } from 'react';
import { IconButton, withStyles, Tooltip } from '@material-ui/core';
import GitHubIcon from '../icon/GitHubIcon';

const styles = {
  largeIcon: {
    width: 48,
    height: 48,
    marginTop: 8,
    marginLeft: 16
  }
};

class GitHubButton extends Component {

  openGitHubRepository = () => {
    window
    .open('https://github.com/WellingtonCosta/convalida', '_blank')
    .focus();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Tooltip title="GitHub repository">
          <IconButton
            aria-label="GitHub repository"
            color="inherit"
            onClick={this.openGitHubRepository}>
            <GitHubIcon className={classes.largeIcon} />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(styles)(GitHubButton);