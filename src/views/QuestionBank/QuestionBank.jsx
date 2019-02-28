import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function QuestionBank (props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={4}>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>System Analysis</h4>
            <p className={classes.cardCategoryWhite}>
              Computer Science, Secound Year
            </p>
          </CardHeader>
          <CardBody>
            <div>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description
</div>
          <Button color="warning">View and Edit</Button>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={4}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>System Design</h4>
            <p className={classes.cardCategoryWhite}>
              Computer Science, Third Year
            </p>
          </CardHeader>
          <CardBody>
            <div>Description Description Description Description Description Description Description Description Description Description Description Description Description
</div>
            <Button color="primary">View and Edit</Button>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={4}>
        <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>تصميم النظم</h4>
            <p className={classes.cardCategoryWhite}>
              Information System, Third Year
            </p>
          </CardHeader>
          <CardBody>
            <div>Description Description Description Description Description Description Description Description Description Description            
</div>
          <Button color="danger">View and Edit</Button>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={4}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Expert Systems</h4>
            <p className={classes.cardCategoryWhite}>
              Computer Science, Fourth Year
            </p>
          </CardHeader>
          <CardBody>
            <div>Description Description Description Description Description Description Description Description Description Description Description Description Description
</div>
          <Button color="info">View and Edit</Button>
          </CardBody>
        </Card>
      </GridItem>
    
    </GridContainer>
  );
}

export default withStyles(styles)(QuestionBank);
