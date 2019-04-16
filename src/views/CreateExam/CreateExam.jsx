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
import Table from "components/Table/Table.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";



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
                    <CardHeader color="primary">
                    <h4 className={classes.cardTitle}>Creating New Exam</h4>
                    <p>In: System Analysis</p>
                    </CardHeader>
                    <CardBody>
                    <Table
                        tableHeaderColor="primary"
                        tableHead={['','Question', '(a)', '(b)', '(c)', '(d)', 'Model Answer', 'Duration','Mark', 'Added By']}
                        tableData={[
                            [ <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        /> , <p>A ... entity has a primary key that is partially or totally derived from the parent entity in the relationship</p> , 'First Answer',
                        'Second Answer', 'Third Answer', 'Fourth Answer', 'Model Answer', '2 min', '5 marks', 'Dr. Gamal Tharwat'],

                            [ <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        /> , <p>Weak entities are used in entity relationship diagrams and are denoted by...</p> , 'First Answer',
                        'Second Answer', 'Third Answer', 'Fourth Answer', 'Model Answer', '2 min', '5 marks', 'Dr. Gamal Tharwat' ] ,

                            [ <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        /> ,
                        <p>Derived attributes in entity relationship diagrams are denoted by...</p> , 'First Answer',
                        'Second Answer', 'Third Answer', 'Fourth Answer', 'Model Answer', '2 min', '5 marks', 'Dr. Gamal Tharwat'] ,

                            [ <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        /> ,
                        <p>Relationship between weak entity set and identifying entity set's association is known as...</p> , 'First Answer',
                        'Second Answer', 'Third Answer', 'Fourth Answer', 'Model Answer', '2 min', '5 marks', 'Dr. Gamal Tharwat' ] ,

                            [ <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        /> ,
                        <p>A rectangle represents which of the following in an ERD...</p> , 'First Answer',
                        'Second Answer', 'Third Answer', 'Fourth Answer', 'Model Answer', '2 min', '5 marks', 'Dr. Gamal Tharwat' ] ,

                            [ <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        /> ,
                        <p>In an ERD, the focus is on the ... and the relationships between them</p> , 'First Answer',
                        'Second Answer', 'Third Answer', 'Fourth Answer', 'Model Answer', '2 min', '5 marks', 'Dr. Gamal Tharwat' ]
                        ,
                        
                        [ <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        /> ,
                        <p>Which of the following might be represented with a multivalued attribute...</p> , 'First Answer',
                        'Second Answer', 'Third Answer', 'Fourth Answer', 'Model Answer', '2 min', '5 marks', 'Dr. Gamal Tharwat' ] ,

                        [ <Checkbox
                        tabIndex={-1}
                        onClick={this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{
                            checked: classes.checked,
                        }}
                        /> ,
                        <p>An entity set that may not have sufficient attributes to form a primary key is called...</p> , 'First Answer',
                        'Second Answer', 'Third Answer', 'Fourth Answer', 'Model Answer', '2 min', '5 marks', 'Dr. Gamal Tharwat' ]
                        ]
                        }
                    />
                       
                   
                    </CardBody>
                </Card>

                <GridItem xs={12} sm={12} md={12}>
                            <Button type="button" color="success"  style={{ margin: "0px 510px" }}>Submit Exam</Button>
                        </GridItem>

            </GridContainer>
        );
    }
}
CreateExam.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(checkboxAdnRadioStyle)(CreateExam);
