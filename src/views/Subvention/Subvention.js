import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";

import GridContainer from "../../components/Grid/GridContainer.js";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton"
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PrintIcon from '@material-ui/icons/Print';
import Typography from "@material-ui/core/Typography";
// import Table from "@material-ui/core/Table";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import SubventionTable from "../../components/Table/SubventionTable";


const styles = {
  formControl: {
    marginTop: '10px',
    minWidth: '20ch',
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
   menuButton: {
    marginRight: 2
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: 'green',
      color: 'white'
    }
  }
};

const useStyles = makeStyles(styles);

export default function Subvention() {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Recu de Subvention et Don</h4>
          </CardHeader>
          <CardBody>
          <AppBar position="static" style={{backgroundColor: "#F3EEED", color: "#000000"}}>
            <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <PrintIcon />
              </IconButton>
              <Typography color="black" style={{color: "black"}}>
                Imprimer
              </Typography>
              &nbsp;&nbsp;&nbsp;
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuBookIcon/>
              </IconButton>
              <Typography color="black" style={{color: "black"}}>
                Excel
              </Typography>
            </Toolbar>
          </AppBar>
            <SubventionTable
              tableHeaderColor="success"
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
