import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class StudentDashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
        <div>
            <GridContainer>

               
              

            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Exams Taken</h4>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                                tableHead={["Name", "Course", "Date", "Score", "Report"]}
                            tableData={[
                                ["Database Final Exam", "Database", "5 Jan 2019", "55/60", <Button type="button" color="success" size="sm">View</Button>],
                                ["Logic Programming Final Exam", "Logic Programming", "1 Jan 2019", "53/60", <Button type="button" color="success" size="sm">View</Button>],
                                ["Software Engineering Midterm Exam", "Software Engineering", "27 Nov 2018", "23/25", <Button type="button" color="success" size="sm">View</Button>],
                                ["System Analysis Midterm Exam", "System Analysis", "25 Nov 2018", "20/25", <Button type="button" color="success" size="sm">View</Button>],
                                ["Operating Systems Midterm Exam", "Operating Systems", "24 Nov 2018", "23/25", <Button type="button" color="success" size="sm">View</Button>],
                                ["Logic Programming Quiz", "Logic Programming", "30 Oct 2018", "9/10", <Button type="button" color="success" size="sm">View</Button>]


                            ]}
                        />
                    </CardBody>
                </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Upcoming Exams</h4>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="primary"
                                tableHead={["Name", "Course", "Date/Time", "Duration", "Take The Exam"]}
                                tableData={[

                                    ["Operating Systems Final Exam", "Operating Systems", "9 Jan 2019 / 09:00 am", "2 Hours", <Button type="button" color="success" size="sm">Start</Button>],
                                    ["Software Engineering Final Exam", "Software Engineering", "12 Jan 2019 / 01:00 pm", "2 Hours", <Button type="button" color="danger" size="sm">Pending</Button>],
                                    ["System Analysis Final Exam", "System Analysis", "15 Nov 2019 / 09:00 am", "3 Hours", <Button type="button" color="danger" size="sm">Pending</Button>]

                                ]}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
      </div>
    );
  }
}

StudentDashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(StudentDashboard);
