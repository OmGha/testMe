import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
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

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
//core components
import checkboxAdnRadioStyle from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.jsx";
//core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
//core components
class StudentExam extends React.Component {
  // state = {
  //   value: 0
  // };
  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };
  state = {
    selectedValue: null,
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
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
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>

          <Checkbox
            tabIndex={-1}
            onClick={this.handleToggle(1)}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
            }}
          />
          <Checkbox
            tabIndex={-1}
            onClick={this.handleToggle(1)}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
            }}
          />
          <Checkbox
            tabIndex={-1}
            onClick={this.handleToggle(1)}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
            }}
          />
          <Checkbox
            tabIndex={-1}
            onClick={this.handleToggle(1)}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
            }}
          />
          <Checkbox
            tabIndex={-1}
            onClick={this.handleToggle(1)}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
            }}
          />
          <Checkbox
            tabIndex={-1}
            onClick={this.handleToggle(1)}
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{
              checked: classes.checked,
            }}
          />


        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary"  >
                <h4 className={classes.cardTitleWhite}> Question 2 </h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={[<h2> what is your favourit subject ? </h2>]}
                  tableData={[
                    [
                      <Radio
                        checked={this.state.selectedValue === 'a'}
                        onChange={this.handleChange}
                        value="a"
                        name="radio button demo"
                        aria-label="A"
                        icon={<FiberManualRecord className={classes.radioUnchecked} />}
                        checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                        classes={{
                          checked: classes.radio,
                        }}
                      />
                    ],
                    [<Radio
                      checked={this.state.selectedValue === 'b'}
                      onChange={this.handleChange}
                      value="b"
                      name="radio button demo"
                      aria-label="B"
                      icon={<FiberManualRecord className={classes.radioUnchecked} />}
                      checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                      classes={{
                        checked: classes.radio,
                      }}
                    />

                    ],

                    [<Radio
                      checked={this.state.selectedValue === 'c'}
                      onChange={this.handleChange}
                      value="c"
                      name="radio button demo"
                      aria-label="C"
                      icon={<FiberManualRecord className={classes.radioUnchecked} />}
                      checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                      classes={{
                        checked: classes.radio,
                      }}
                    />

                    ],

                    [<Radio
                      checked={this.state.selectedValue === 'd'}
                      onChange={this.handleChange}
                      value="d"
                      name="radio button demo"
                      aria-label="D"
                      icon={<FiberManualRecord className={classes.radioUnchecked} />}
                      checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                      classes={{
                        checked: classes.radio,
                      }}
                    />
                    ]



                  ]}
                />
                <Button type="button" color="success"> submit</Button>
                <Button type="button" color="success"> <Icon>ArrowLeft</Icon></Button>

              </CardBody>
            </Card>
          </GridItem>

        </GridContainer>
      </div>
    );
  }
}

StudentExam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(checkboxAdnRadioStyle)(StudentExam);
