import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Login from "components/Login/Login.jsx"
import Muted from "components/Typography/Muted.jsx";
import { cardTitle, cardSubtitle, cardLink } from "assets/jss/material-dashboard-react.jsx";
  

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
      }
  };

class LoginPage extends React.Component {
    render() {
    const { classes } = this.props;
      return (
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
      );
    }
  }
  
  export default withStyles(styles)(LoginPage);