import React from "react";
// @material-ui/core components
import { makeStyles, withStyles  } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import Grid from '@material-ui/core/Grid';
import GridContainer from "../../components/Grid/GridContainer.js";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton"
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PrintIcon from '@material-ui/icons/Print';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Typography from "@material-ui/core/Typography";
import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';

import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import ProduitTable from "../../components/Table/ProduitTable";
import ClientTable from "components/Table/ClientTable.js";
import ClientForm from "components/CustomInput/ClientForm.js";
import TransactionTable from "components/Table/TransactionTable.js";


const styles = {
  root: {
    flexGrow: 1,
    justify: 'flex-end'
  },
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

export default function Produit() {
  const classes = useStyles();
  const [anne, setAnne] = React.useState('');
  const handleChange = (event) => {
    setAnne(event.target.value);
  };

  return ([
    <AppBar position="static" color= "black">
      <Toolbar variant="dense">
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <AccountBoxIcon />
        </IconButton>
        <Typography color="black" style={{color: "black"}}>
          Nouveau
        </Typography>
        &nbsp;&nbsp;&nbsp;
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
    </AppBar>,
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardBody>
              <ClientTable />
            </CardBody>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Information du Client </h4>
            </CardHeader>
            <CardBody>
              <ClientForm/>
            </CardBody>
          </Card>
        </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="success">
                <h4 className={classes.cardTitleWhite}>Transactions recentes</h4>
              </CardHeader>
              <CardBody>
                <TransactionTable/>
              </CardBody>
            </Card>
          </Grid>
      </Grid>
    </div>
  ]);
}
