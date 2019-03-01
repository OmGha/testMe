import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
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

class AddQuestion extends React.Component {
    render() {
    const { classes } = this.props;
      return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={9}>
                <CustomInput labelText="Question Body" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
                <CustomInput labelText="Chapter" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <CustomInput labelText="Answer (a)" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <CustomInput labelText="Answer (b)" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <CustomInput labelText="Answer (c)" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <CustomInput labelText="Answer (d)" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <CustomInput labelText="Model Answer" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <GridItem style={{textAlign: "center", margin: "20px 0 0 0"}} xs={12} sm={12} md={12}>
                <Button style={{textAlign: "center"}} type="button" color="primary">Submit Question</Button>
            </GridItem>
        </GridContainer>
      );
    }
  }
  
  export default withStyles(styles)(AddQuestion);