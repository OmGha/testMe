import React from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class AdminDashboard extends React.Component {


  render() {
    const { classes } = this.props;
    return (
        <div>
            <GridContainer>


            <Popup trigger={
              <div style= {{textAlign: "center", margin: "0px 1070px"}}>
                <Button round color="success" size="md">Add</Button>
              </div>} modal>
      {close => (
      <div className="modal">
        <div className="header"> <h3>Add New User</h3> </div>
        <div className="content">
          {' '}
         <h4>Do You Want To Add A New Instructor Or A New Student?</h4>
        </div>
        <div className="actions">
        <Button type="button" round color="primary" size="md" onClick={() => {close()}}>
        Instructor
          </Button>
          <Button type="button" round color="primary" size="md" onClick={() => {close()}}>
          Student
          </Button>
        </div>
      </div>
    )}
  </Popup>



            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Instructrors</h4>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                                tableHead={["ID", "Name", "Department", "Action"]}
                            tableData={[
                                ["1", "Dr. Gamal Tharwat", "Computer Science", <Popup trigger={<div style= {{textAlign: "center"}}>
                                <Button type="button" color="danger" size="sm">Delete</Button>
</div>} modal>
    {close => (
      <div className="modal">
        <div className="header"> <h3>Delete A User</h3> </div>
        <div className="content" style= {{textAlign: "center"}}>
          {' '}
         <h4>Are You Sure You Want To Delete This User?</h4>
        </div>
        <div className="actions">
        <Button type="button" round color="success" size="md" onClick={() => {close()}}>
        Yes
          </Button>
          <Button type="button" round color="primary" size="md" onClick={() => {close()}}>
          Cancel
          </Button>
        </div>
      </div>
    )}
  </Popup>],
                                ["2", "Dr. Noha El-Qady", "Computer Science", <Button type="button" color="danger" size="sm">Delete</Button>],
                                ["3", "Dr. Kamal Hefny", "Computer Science", <Button type="button" color="danger" size="sm">Delete</Button>],
                                ["4", "Dr. Hessin Karam", "Computer Science", <Button type="button" color="danger" size="sm">Delete</Button>],
                                ["5", "Dr. Fouaad Shedid", "Computer Science", <Button type="button" color="danger" size="sm">Delete</Button>],
                                ["6", "Dr. Mohammed El-Agamy", "Computer Science", <Button type="button" color="danger" size="sm">Delete</Button>]


                            ]}
                        />
                    </CardBody>
                </Card>
                </GridItem>


                <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Students</h4>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                                tableHead={["ID", "Name", "Department", "Year", "Action"]}
                            tableData={[
                                ["1", "Mariam Samy", "Computer Science", "Fourth", <Button type="button" color="danger" size="sm">Delete</Button>],
                                ["2", "Esraa Hossam", "Computer Science", "Fourth", <Button type="button" color="danger" size="sm">Delete</Button>],
                                ["3", "Marina Isaac", "Computer Science", "Fourth", <Button type="button" color="danger" size="sm">Delete</Button>],
                                ["4", "Youssef Zekry", "Computer Science", "Fourth", <Button type="button" color="danger" size="sm">Delete</Button>],
                                ["5", "Mohammed Nagy", "Computer Science", "Fourth", <Button type="button" color="danger" size="sm">Delete</Button>],
                                ["6", "Ahmad Safwat", "Computer Science", "Fourth", <Button type="button" color="danger" size="sm">Delete</Button>]
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

AdminDashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(AdminDashboard);
