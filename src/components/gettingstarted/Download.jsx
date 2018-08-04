import React, { Component } from 'react';
import Viewport from '../Viewport';
import { Typography, withStyles, Button, Grid } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Link from '../common/Link';
import axios from 'axios';
import 'code-prettify/loader/run_prettify.js';
import Code from '../common/Code';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  div: {
    marginTop: theme.spacing.unit * 12,
    marginLeft: theme.spacing.unit * 8,
    marginRight: theme.spacing.unit * 8,
  },
  button: {
    height: 60,
    marginTop: 32,
    fontSize: 20
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 40,
  }
});

const baseUrl = "https://jitpack.io/com/github/WellingtonCosta/convalida";

class Download extends Component {

  state = {
    latestRelease: null
  };

  componentDidMount() {
    axios
    .get("https://jitpack.io/api/builds/com.github.WellingtonCosta/convalida/latestOk")
    .then(response => this.setState({ latestRelease: response.data.version }))
    .catch(error => console.error(error));
  }

  downloadRuntimeJar = () => {
    const { latestRelease } = this.state;
    const downloadUrl = `${baseUrl}/${latestRelease}/convalida-${latestRelease}.jar`;
    window.open(downloadUrl, "_blank").focus();
  }

  downloadCompilerJar = () => {
    const { latestRelease } = this.state;
    const downloadUrl = `${baseUrl}/convalida-compiler/${latestRelease}/convalida-compiler-${latestRelease}.jar`;
    window.open(downloadUrl, "_blank").focus();
  }

  render() {
    const { classes } = this.props;
    const { latestRelease } = this.state;
    return (
      <Viewport>
        <div className={classes.div}>
          <Typography variant="title">
            Download
          </Typography>
          <Typography style={{ marginTop: 16 }}>
            You need to include Convalida JARs in your classpath to use it. Convalida has two JARs, runtime library and compiler library. You can download JARs directly by clicking on buttons above or include it as dependencies in Maven or Gradle.
          </Typography>
          <Typography style={{ marginTop: 32 }}>
            The source code is available on <Link text="GitHub repository" url="https://github.com/WellingtonCosta/convalida" />.
          </Typography>

          <Typography variant="subheading" style={{ marginTop: 32 }}>
            Download JARs:
          </Typography>

          <Grid container className={classes.root} spacing={16}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={40}>
                <Grid item>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={this.downloadRuntimeJar}>
                    <CloudDownloadIcon className={classes.leftIcon} />
                    Download Runtime JAR
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={this.downloadCompilerJar}>
                    <CloudDownloadIcon className={classes.leftIcon} />
                    Download Compiler JAR
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Typography variant="subheading" style={{ marginTop: 32 }}>
            Maven:
          </Typography>

          <Typography style={{ marginTop: 16 }}>
            Step 1: Add Jitpack repository
          </Typography>
          <Code style={{ marginTop: 8, fontSize: 16 }} language="groovy" code={`
&lt;repositories>
  &lt;repository>
    &lt;id>jitpack.io&lt;/id>
    &lt;url>https://jitpack.io&lt;/url>
  &lt;/repository>
&lt;/repositories>
            `} />
          <Typography style={{ marginTop: 16 }}>
            Step 2: Add dependencies
          </Typography>
          <Code style={{ marginTop: 8, fontSize: 16 }} language="groovy" code={`
&lt;dependency>
  &lt;groupId>com.github.WellingtonCosta.convalida&lt;/groupId>
  &lt;artifactId>convalida&lt;/artifactId>
  &lt;version>${latestRelease}&lt;/version>
&lt;/dependency>

&lt;dependency>
  &lt;groupId>com.github.WellingtonCosta.convalida&lt;/groupId>
  &lt;artifactId>convalida-compiler&lt;/artifactId>
  &lt;version>${latestRelease}&lt;/version>
&lt;/dependency>
            `} />

          <Typography variant="subheading" style={{ marginTop: 32 }}>
            Gradle:
          </Typography>

          <Typography style={{ marginTop: 16 }}>
            Step 1: Add Jitpack repository
          </Typography>
          <Code style={{ marginTop: 8, fontSize: 16 }} language="groovy" code={`
allprojects {
  repositories {
    maven { url 'https://jitpack.io' }
  }
}
            `} />
          <Typography style={{ marginTop: 16 }}>
            Step 2: Add dependencies
          </Typography>
          <Code style={{ marginTop: 8, fontSize: 16 }} language="groovy" code={`
dependencies {
  implementation 'com.github.WellingtonCosta.convalida:convalida:${latestRelease}'
  annotationProcesso 'com.github.WellingtonCosta.convalida:convalida-compiler:${latestRelease}'
}
            `} />

          <Typography variant="subheading" style={{ marginTop: 32 }}>
            License
          </Typography>
          <Code style={{ marginTop: 8, fontSize: 16 }} colorize={false} code={`
Copyright 2017 Wellington Costa

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
            `} />
        </div>
      </Viewport>
    );
  }
}

export default withStyles(styles)(Download);