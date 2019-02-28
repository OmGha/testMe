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

function StudentCoursesList(props) {
  const { classes } = props;
  return (
    <GridContainer>
  
      <GridItem xs={12} sm={12} md={12}>
      <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Courses</h4>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                                tableHead={["ID", "Name", "Department", "Teached By", "Hours/Week"]}
                            tableData={[
                                ["1", "System Analysis", "Computer Science", "Dr. Gamal Tharwat", "3"],
                                ["2", "Database", "Computer Science", "Dr. Hessin Karam ", "3"],
                                ["3", "Software Engineering", "Computer Science", "Dr. Fouaad Shedid", "3"],
                                ["4", "Logic Programming", "Computer Science", "Dr. Noha El Qady", "3"],
                                ["5", "Operating Systems", "Computer Science", "Dr. Kamal Hefny", "3"]

                            ]}
                        />
                    </CardBody>
                </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(StudentCoursesList);
