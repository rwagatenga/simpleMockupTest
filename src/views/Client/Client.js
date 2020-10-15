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
import Typography from "@material-ui/core/Typography";
import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';

import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import ProduitTable from "../../components/Table/ProduitTable";


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
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    width: 250,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  }))(InputBase);
const useStyles = makeStyles(styles);

export default function Produit() {
  const classes = useStyles();
  const [anne, setAnne] = React.useState('');
  const handleChange = (event) => {
    setAnne(event.target.value);
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          {/*<CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Produit </h4>
          </CardHeader>*/}
          <CardBody>
          Hello World
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
