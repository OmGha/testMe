import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Assessment from "@material-ui/icons/Assessment";
import Subject from "@material-ui/icons/Subject";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { SystemAnalysis, SystemDesign, SystemDesignA, ExpertSystems } from "variables/general.jsx";

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class InstructorDashboard extends React.Component {
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
            <h4 className={classes.cardTitleWhite}>Courses</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Title", "Department", "Level", "Branch", "Hours/Week"]}
              tableData={[
                ["1", "System Analysis", "Computer Science", "1", "English", "3"],
                ["2", "System Design", "Computer Science", "3", "English", "3"],
                ["3", "تصميم النظم", "Information System", "3", "Arabic", "3"],
                ["4", "Expert Systems", "Computer Science", "4", "English", "3"]
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

InstructorDashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(InstructorDashboard);
