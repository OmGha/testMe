import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Login from "components/Login/Login.jsx"
import Muted from "components/Typography/Muted.jsx";
import { cardTitle, cardSubtitle, cardLink } from "assets/jss/material-dashboard-react.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import {Tabs, Tab} from 'react-materialize'

const styles = {
    cardTitle,
    cardSubtitle,
    cardLink,
    textCenter: {
        textAlign: "center"
      },
    loginCard: {
        width: "30%",
        margin: "0 auto",
        padding: "50px 30px"
      },
    loginTabs: {
      width: "28%",
      margin: "0 auto",
      padding: "12px 30px",
    },
    innerTab: {
      width: "50%",
      padding: "12px 40px",
      margin: "0 2px",
      background: "#9c27b0",
      color: "#fff",
      borderRadius: "4px 4px 0 0 "
    }
  };

class LoginPage extends React.Component {
    render() {
    const { classes } = this.props;
      return (
        <GridItem>
          <div className={classes.loginTabs}>
            <label className={classes.innerTab}>Instructor</label>
            <label className={classes.innerTab}>Student</label>
          </div>
          <Card className={classes.loginCard}>
            <p style={{ textAlign: "center"}}>
                <h2 className={classes.cardTitle }>Sign In Here</h2>
                <Muted>
                   <h5 className={classes.cardSubtitle}>Student's Form</h5>
                </Muted>
            </p>
            <CardBody style={{ margin: "-25px 0 0 0" }}>
              <Login />
            </CardBody>
          </Card>
        </GridItem>
      );
    }
  }
  
  export default withStyles(styles)(LoginPage);