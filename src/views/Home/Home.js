import React from "react";
import { connect } from 'react-redux';
// import * as actions from '../../store/actions/index';
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Tasks from "../../components/Tasks/Tasks.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

 function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={8} sm={4} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                Comptes Comptable
              </CardIcon>
            </CardHeader>
            <CardBody>
              <AccountBoxIcon style={{fontSize: 60}} />
            </CardBody>
            <CardFooter stats>
              Comptes Comptable
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={8} sm={4} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success" >
                Formulation
              </CardIcon>
              {/*<p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>*/}
            </CardHeader>
            <CardBody>
              <FormatAlignJustifyIcon style={{fontSize: 60}} />
            </CardBody>
            <CardFooter stats>
              Formulation
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={8} sm={4} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                Comptes Comptable
              </CardIcon>
            </CardHeader>
            <CardBody>
              <AccountBoxIcon style={{fontSize: 60}} />
            </CardBody>
            <CardFooter stats>
              Comptes Comptable
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={8} sm={4} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success" >
                Formulation
              </CardIcon>
              {/*<p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>*/}
            </CardHeader>
            <CardBody>
              <FormatAlignJustifyIcon style={{fontSize: 60}} />
            </CardBody>
            <CardFooter stats>
              Formulation
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Home;