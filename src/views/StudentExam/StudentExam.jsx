import React from "react";
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Muted from "components/Typography/Muted.jsx";
import Countdown from 'components/Countdown/Countdown.js';
import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
//core components
import checkboxAdnRadioStyle from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.jsx";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import Translate from "@material-ui/icons/Translate";
import Tooltip from "@material-ui/core/Tooltip";
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




class StudentExam extends React.Component {

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
          
            <h2 className={classes.cardTitle}>System Analysis Final Exam</h2>
            <p>2018/2019</p>
            <p>
             Department: Computer Sciense
            </p>
            <p>Duration: 2 Hours</p>
            
          </CardBody>
         
        </Card>
        </GridItem>

    <GridItem xs={12} sm={12} md={8}>
      <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Question (7): An entity that doesn't have sufficient attributes to form a primary key is called</h4>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                          
                            tableData={[
                                [ <Radio
                    checked={this.state.selectedValue === 'a'}
                    onChange={this.handleChange}
                    value="a"
                    name="radio button demo1"
                    aria-label="A"
                    icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                    checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                    classes={{
                        checked: classes.radio,
                    }}
                />, "Strong Entity", "", "", ""],
                                [<Radio
                    checked={this.state.selectedValue === 'b'}
                    onChange={this.handleChange}
                    value="b"
                    name="radio button demo2"
                    aria-label="B"
                    icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                    checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                    classes={{
                        checked: classes.radio,
                    }}
                />, "Variant Entity", "", " ", ""],
                                [<Radio
                    checked={this.state.selectedValue === 'c'}
                    onChange={this.handleChange}
                    value="c"
                    name="radio button demo3"
                    aria-label="C"
                    icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                    checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                    classes={{
                        checked: classes.radio,
                    }}
                />, "Weak Entity", "", "", ""],
                                [<Radio
                    checked={this.state.selectedValue === 'd'}
                    onChange={this.handleChange}
                    value="d"
                    name="radio button demo4"
                    aria-label="D"
                    icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                    checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                    classes={{
                        checked: classes.radio,
                    }}
                />, "Variable Entity", "", "", ""]

                            ]}
                        />
                    </CardBody>
                </Card>

                <GridItem xs={8} sm={8} md={8} className={classes.textCenter}>
                  
          
                <Tooltip
                    id="tooltip-top"
                    title="Translate Question In Arabic"
                    placement="top"
                    classes={{tooltip:classes.tooltip}}>
                    <IconButton aria-label="Translate" className={classes.tableActionButton}>
                        <Translate className={classes.tableActionButtonIcon + " " + classes.translate}/>
                    </IconButton>
                </Tooltip>

          <Button type="button" color="primary" size="md" style={{ margin: "0px 20px 0px 230px" }}><NavigateBefore /></Button>
          <Button type="button" color="primary" size="md"><NavigateNext /></Button>
      

                </GridItem>

               

      </GridItem>

      <GridItem xs={4} sm={4} md={4}>
      <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitle}>Answered Questions</h4>
              <p>Time Remaining: <Countdown date={`${year}-12-24T00:00:00`} /></p>
            </CardHeader>
            <CardBody style={{ overflowY: "scroll", height: "239px" }}>
            <Table
                            tableHeaderColor="primary"
                            
                            tableData={[
                                [ <div>
                              Q1
              <Checkbox style={{ padding: "8px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>,  <div>
              Q2
              <Checkbox style={{ padding: "8px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>, <div>
              Q3
              <Checkbox style={{ padding: "8px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>,  <div>
              Q4
              <Checkbox style={{ padding: "8px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div> ],
                                [<div>
              Q5
              <Checkbox style={{ padding: "8px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>,  <div>
              Q6
              <Checkbox style={{ padding: "8px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>, <div>
              Q7
              <Checkbox style={{ padding: "8px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>,  <div>
              Q8
              <Checkbox style={{ padding: "8px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div> ],

            
            [<div>
              Q9
              <Checkbox style={{ padding: "8px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>,  <div>
              Q10
              <Checkbox style={{ padding: "7px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>, <div>
              Q11
              <Checkbox style={{ padding: "7px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>,  <div>
              Q12
              <Checkbox style={{ padding: "7px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div> ],


            [<div>
                              Q13
              <Checkbox style={{ padding: "7px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>,  <div>
              Q14
              <Checkbox style={{ padding: "7px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>, <div>
              Q15
              <Checkbox style={{ padding: "7px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>,  <div>
              Q16
              <Checkbox style={{ padding: "7px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div> ],


            [<div>
                              Q17
              <Checkbox style={{ padding: "7px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>,  <div>
              Q18
              <Checkbox style={{ padding: "7px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>, <div>
              Q19
              <Checkbox style={{ padding: "7px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div>,  <div>
              Q20
              <Checkbox style={{ padding: "7px" }}
                tabIndex={-1}
                onClick={this.handleToggle(1)}
                checkedIcon={<Check className={classes.checkedIcon}/>}
                icon={<Check className={classes.uncheckedIcon}/>}
                color={'primary'}
                classes={{
                    checked: classes.unchecked,
                }}
            />
            </div> ]


            

                            ]}
                        />

            
            </CardBody>
          </Card>


<Popup trigger={<div className={classes.textCenter}>
  <Button round color="success" size="lg">Submit</Button>
</div>} modal>
    {close => (
      <div className="modal">
        <div className="header"> <h3>Confirmation Message</h3> </div>
        <div className="content">
         <h4>Are You Sure You Want To Submit The Exam?</h4>
        </div>
        <div className="actions">
        <Button type="button" round color="success" size="md" onClick={() => {close()}}>
            Yes
          </Button>
          <Button type="button" round color="danger" size="md" onClick={() => {close()}}>
            No
          </Button>
        </div>
      </div>
    )}
  </Popup>
         
         
      </GridItem>

    </GridContainer>
  );
              }
             
}

StudentExam.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(checkboxAdnRadioStyle, tasksStyle)(StudentExam);
