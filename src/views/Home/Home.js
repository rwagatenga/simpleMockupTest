import React from "react";
// @material-ui/icons
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import AccountBoxIcon from '@material-ui/icons/AccountBox';// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";


 function Home(props) {
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