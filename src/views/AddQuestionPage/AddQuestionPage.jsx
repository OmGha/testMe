import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Muted from "components/Typography/Muted.jsx";
import { cardTitle, cardSubtitle, cardLink } from "assets/jss/material-dashboard-react.jsx";
import AddQuestion from "../../components/AddQuestion/AddQuestion";
  

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

class LoginPage extends React.Component {
    render() {
    const { classes } = this.props;
      return (
        <Card className={classes.addQuestionCard}>
        <p style={{ textAlign: "center"}}>
            <h2 className={classes.cardTitle }>Add a New Question</h2>
            <Muted>
                <h5 className={classes.cardSubtitle}>In: System Design</h5>
            </Muted>
        </p>
        <CardBody style={{ margin: "-25px 0 0 0" }}>
          <AddQuestion />
        </CardBody>
      </Card>
      );
    }
  }
  
  export default withStyles(styles)(LoginPage);