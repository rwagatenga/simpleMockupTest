import React from 'react';
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }
  },
}));
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function ClientForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedG: true,
  });
   const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Non du Client" />
      <TextField id="standard-basic" label="Telephone" />
      <TextField id="standard-basic" label="Registre de Commerce" />
      <TextField id="standard-basic" label="Secteur d'Activite" />
      <TextField id="standard-basic" label="NIF" />
      <TextField id="standard-basic" label="Address" multline />
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="TVA"
      /><br/>
      <Button variant="contained" component="span" style={{backgroundColor: '#21CC62', color: 'white'}}>
          Reactualiser
      </Button>
    </form>
  );
}
