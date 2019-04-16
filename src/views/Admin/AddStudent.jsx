import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Muted from "components/Typography/Muted.jsx";
import { cardTitle, cardSubtitle, cardLink } from "assets/jss/material-dashboard-react.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
//core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";


const styles = {
    cardTitle,
    cardSubtitle,
    cardLink,
    textCenter: {
        textAlign: "center"
      },
    addQuestionCard: {
        width: "80%",
        margin: "0 auto",
        padding: "50px 30px"
      }
  };

class AddStudent extends React.Component {
    render() {
    const { classes } = this.props;
      return (
        <Card className={classes.addQuestionCard}>
        <p style={{ textAlign: "center"}}>
            <h2 className={classes.cardTitle }>Add a New Question</h2>
            <Muted>
                <h5 className={classes.cardSubtitle}>In: System Analysis</h5>
            </Muted>
        </p>
        <CardBody style={{ margin: "-25px 0 0 0" }}>
        <GridContainer>
            <GridItem xs={12} sm={10} md={8}>
                <CustomInput labelText="Full Name" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>
            <GridItem xs={12} sm={2} md={4}>
                <CustomInput labelText="ID" id="material" formControlProps={{
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
                <CustomInput labelText="User Name" id="material" formControlProps={{
                        fullWidth: true
                    }}
                    inputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                        </InputAdornment>
                        )
                    }} />
            </GridItem>

            <GridItem xs={12} sm={8} md={6}>
                <CustomInput labelText="Department" id="material" formControlProps={{
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
            <GridItem xs={12} sm={6} md={6}>
                <CustomInput labelText="Confirm Password" id="material" formControlProps={{
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
                <Button style={{textAlign: "center"}} type="button" round color="success" size="md" >Submit Student</Button>
            </GridItem>
        </GridContainer>
        </CardBody>
      </Card>
      );
    }
  }
  
  export default withStyles(styles)(AddStudent);