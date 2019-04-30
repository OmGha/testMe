import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import headerStyle from "assets/jss/material-dashboard-react/components/headerStyle.jsx";

function Header({ ...props }) {
  function makeBrand() {
    var name;
    props.routes.map((prop, key) => {
      if (prop.layout + prop.path === props.location.pathname) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });
    return name;
  }
  const { classes, color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <div className={classes.title}>
          {makeBrand()} <span style={{ margin: "0px 0px 0px 1020px" }} className="marginLeft: 1020px;">Student</span> 
          </div>
         
        </div>
        {/* <Hidden smDown implementation="css">
          {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
        </Hidden> */}
        {/* <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden> */}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
