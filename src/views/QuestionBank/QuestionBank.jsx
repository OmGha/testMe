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


    <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Question Bank</h4>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                                tableHead={["Course Name", "Department", "Year", "", ""]}
                            tableData={[
                                ["System Analysis", "Computer Science", "Second Year", <Button type="button" color="success" size="sm">Add Question</Button>, <Button type="button" color="success" size="sm">Create Exam</Button>],
                                ["System Design", "Computer Science", "Third  Year", <Button type="button" color="success" size="sm">Add Question</Button>, <Button type="button" color="success" size="sm">Create Exam</Button>],
                                ["تصميم وتحليل النظم", "Information System", "Third Year", <Button type="button" color="success" size="sm">Add Question</Button>, <Button type="button" color="success" size="sm">Create Exam</Button>],
                                ["Expert Systems", "Computer Science", "Fourth  Year", <Button type="button" color="success" size="sm">Add Question</Button>, <Button type="button" color="success" size="sm">Create Exam</Button>]


                            ]}
                        />
                    </CardBody>
                </Card>
                </GridItem>





     
    
    </GridContainer>
  );
}

export default withStyles(styles)(QuestionBank);
