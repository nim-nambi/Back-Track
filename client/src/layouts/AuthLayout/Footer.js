import React from "react";
import { footerStyles, AuthTheme } from "./styles";
import {
  Grid,
  CssBaseline,
  Typography,
  Divider,
  Link,
} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  const classes = footerStyles(AuthTheme);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Divider className={classes.divider} />
        <Grid className={classes.gridContainer} container alignItems="center">
          <Grid item xs={11}>
            <Typography className={classes.footerText} variant="body2">
              Developed by Harshdeep
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};

export default Footer;
