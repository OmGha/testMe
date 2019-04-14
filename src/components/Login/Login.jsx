import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
//core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

const styles = {
    textCenter: {
        textAlign: "center"
      }
  };

class Login extends React.Component {
    render() {
    const { classes } = this.props;
      return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <CustomInput name="userName" labelText="User Name" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <People />
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <CustomInput labelText="Password" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <Button className={classes.textCenter} style={{ width: "100%" }} type="button" color="primary">Login</Button>
        </GridContainer>
      );
    }
  }
  
  export default withStyles(styles)(Login);