import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import checkboxAdnRadioStyle from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";


class CreateExam extends React.Component {
    state = {
        checked: [],
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
            <GridContainer>
                <Card>
                    <CardHeader color="info">
                    <h4 className={classes.cardTitle}>Creating New Exam</h4>
                    <p>In: System Design</p>
                    </CardHeader>
                    <CardBody>
                        <GridItem>
                        <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        />
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to "Naviglio" where you can enjoy the main night
                        life in Barcelona...
                        </GridItem>
                        <GridItem>
                        <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        />
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to "Naviglio" where you can enjoy the main night
                        life in Barcelona...
                        </GridItem>
                        <GridItem>
                        <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        />
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to "Naviglio" where you can enjoy the main night
                        life in Barcelona...
                        </GridItem>
                        <GridItem>
                        <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        />
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to "Naviglio" where you can enjoy the main night
                        life in Barcelona...
                        </GridItem>
                        <GridItem>
                        <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        />
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to "Naviglio" where you can enjoy the main night
                        life in Barcelona...
                        </GridItem>
                        <GridItem>
                        <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        />
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to "Naviglio" where you can enjoy the main night
                        life in Barcelona...
                        </GridItem>
                        <GridItem>
                        <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        />
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to "Naviglio" where you can enjoy the main night
                        life in Barcelona...
                        </GridItem>
                        <GridItem>
                        <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        />
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to "Naviglio" where you can enjoy the main night
                        life in Barcelona...
                        </GridItem>
                        <GridItem>
                            <Button type="button" color="info">Submit Exam</Button>
                        </GridItem>
                    </CardBody>
                </Card>
            </GridContainer>
        );
    }
}
CreateExam.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(checkboxAdnRadioStyle)(CreateExam);