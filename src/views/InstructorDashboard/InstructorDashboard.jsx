import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";


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
