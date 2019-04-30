import React from "react";
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import checkboxAdnRadioStyle from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import tasksStyle from 'assets/jss/material-dashboard-react/components/tasksStyle.jsx';

import {
  cardTitle,
  cardSubtitle,
  cardLink
} from "assets/jss/material-dashboard-react.jsx";
import { IconButton } from "@material-ui/core";

const styles = {
  cardTitle,
  cardSubtitle,
  cardLink,
  textCenter: {
    textAlign: "center"
  },
  textLeft: {
    textAlign: "left"
  },
  Submitbtn: {
    width: "135px",
    height: "55px"
  },
  checkboxpadding: {
    padding: "8px"
  }
};




class Reports extends React.Component {

  state = {
    checked: [],
    selectedValue: null
};
handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
        newChecked.push(value);
    } else {
        newChecked.splice(currentIndex, 1);
    }

    this.setState({
        checked: newChecked,
    });
};

handleChange = event => {
  this.setState({ selectedValue: event.target.value });
};
  
  render(){
  const { classes } = this.props;
  const currentDate = new Date();
    const year = currentDate.getFullYear();
     return (
    <GridContainer>
  
    
    
        <GridItem xs={12} sm={12} md={12}>
        <Card className={classes.textCenter}>
          <CardBody>
          
            <h2 className={classes.cardTitle}>Logic Programming Final Exam (Report)</h2>
            <p>2018/2019</p>
            <p>
             Department: Computer Sciense
            </p>
            <p>Score: 53/60</p>
            
          </CardBody>
         
        </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="danger">
                        <h4 className={classes.cardTitleWhite}>Questions You Got Wrong: </h4>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="danger"
                                tableHead={["Question No.", "Question", "Your Answer", "Model Answer", "Refrence"]}
                            tableData={[

                                ["4", "The acronym PLC stands for", "Pressure Loss Chamber", "Programmable Logic Controller", "Chapter 2"],
                                ["12", "The difference between online and offline PLC programming is", "The Type Of Programming Cable Used", "Where The Edited Program Resides", "Chapter 5"],                                
                                ["24", "The OR function implemented in ladder logic uses", "Normally-Closed Contacts In Series", "Normally-Open Contacts In Parallel", "Chapter 3"]
                            ]}
                        />
                    </CardBody>
                </Card>
        </GridItem>


        <GridItem xs={12} sm={12} md={6} style={{margin: "0px 0px 0px 612px"}}>
              <SnackbarContent
                message={
                  'Please Study The Chapters Mentioned In The Refrence!'
                }
                close
                color="warning"
              />
        </GridItem>
          


    </GridContainer>
  );
              }
             
}

Reports.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(checkboxAdnRadioStyle, tasksStyle)(Reports);
