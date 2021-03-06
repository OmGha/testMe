import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
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
            <GridItem xs={12} sm={10} md={9}>
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
            <GridItem xs={12} sm={2} md={3}>
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
            <GridItem xs={12} sm={8} md={8}>
                <CustomInput labelText="Question Body (Arabic)" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <GridItem xs={12} sm={2} md={2}>
                <CustomInput labelText="Duration" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <GridItem xs={12} sm={2} md={2}>
                <CustomInput labelText="Mark" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
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
            <GridItem xs={12} sm={6} md={6}>
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
            <GridItem xs={12} sm={6} md={6}>
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
            <GridItem xs={12} sm={6} md={6}>
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
            <GridItem xs={12} sm={8} md={8}>
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
            <GridItem xs={12} sm={4} md={4}>
                <Button style={{bottom: "-30px"}} type="button" color="primary">Add MultiMedia</Button>
            </GridItem>
            <GridItem style={{textAlign: "center", margin: "20px 0 0 0"}} xs={12} sm={12} md={12}>
                <Button style={{textAlign: "center"}} type="button" round color="success" size="md" >Submit Question</Button>
            </GridItem>
        </GridContainer>
      );
    }
  }
  
  export default withStyles(styles)(AddQuestion);