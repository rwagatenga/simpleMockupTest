import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  '& .MuiTextField-root': {
      margin: 1,
      width: '100%',
    },
  }
});

function createData(project, produit, mesure, pv, metiere, conditionment, cout, transport, total, brute) {
  return { project, produit, mesure, pv, metiere, conditionment, cout, transport, total, brute  };
}

const rows = [
  createData('MENUSUIRE', 'Salon Simple', 'piece', 20000, 159, 159, 6.0, 24, 4.0, 24 ),
  createData('MENUSUIRE', 'porte Simple', 'prestation', 40000, 159, 6.0, 24, 4.0, 24, 24),
  createData('COUTURE', 'costume', 'piece', 20000, 159, 6.0, 24, 4.0, 24, 24),
  createData('COUTURE', 'costume', 'prestation', 40000, 159, 6.0, 24, 4.0, 24, 24),
];
const project = [
  {
    value: 'MENUSUIRE',
    label: 'MENUSUIRE'
  },
  {
    value: 'COUTURE',
    label: 'COUTURE',
  },
  {
    value: 'SOUDIRE',
    label: 'SOUDIRE',
  },
];
const produit = [
  {
    value: 'Salon Simple',
    label: 'Salong Simple'
  },
  {
    value: 'porte Simple',
    label: 'Porte Simple'
  },
  {
    value: 'costume',
    label: 'Costume'
  }
];
const mesure = [
  {
    value: 'piece',
    label: 'Piece'
  },
  {
    value: 'prestation',
    label: 'Prestation'
  }
];
const pv = [
  {
    value: '20000',
    label: '20000'
  },
  {
    value: '40000',
    label: '40000'
  }
];
export default function BasicTable() {
  const classes = useStyles();
   const [state, setState] = React.useState({
    project: '',
    produit: '',
    mesure: '',
    pv: ''
   });

  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;
    setState({
      ...state,
      [name]: newValue
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell rowSpan={2}>Project/Activity</TableCell>
            <TableCell rowSpan={2}>Produit/Service Propose</TableCell>
            <TableCell rowSpan={2}>Unite de Mesure</TableCell>
            <TableCell rowSpan={2}>PV-HTVA</TableCell>
            <TableCell colSpan={5}>Cout de Revient Direct</TableCell>
            <TableCell rowSpan={2}>Marge Brute(%)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Matiere premiere par unite</TableCell>
            <TableCell>Conditionment par unite</TableCell>
            <TableCell>Cout Main d'oeuvre par unite</TableCell>
            <TableCell>Cout transport par unite</TableCell>
            <TableCell>Total par unite</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TextField
                id="select-project"
                select
                //label="Select Project"
                value={state.project}
                name="project"
                onChange={handleChange}
                style={{width: '100%'}}
              >
                {project.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </TableCell>
            <TableCell>
              <TextField
                id="select-produit"
                select
                //label="Select Produit"
                value={state.produit}
                onChange={handleChange}
                name="produit"
              >
                {produit.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </TableCell>
            <TableCell>
              <TextField
                id="select-mesure"
                select
                //label="Select Mesure"
                value={state.mesure}
                onChange={handleChange}
                name="mesure"
              >
                {mesure.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </TableCell>
            <TableCell>
              <TextField
                id="select-pv"
                select
                //label="Select PV-HTVA"
                value={state.pv}
                onChange={handleChange}
                name="pv"                
              >
                {pv.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.project}
              </TableCell>
              <TableCell>{row.produit}</TableCell>
              <TableCell>{row.mesure}</TableCell>
              <TableCell>{row.pv}</TableCell>
              <TableCell>{row.metiere}</TableCell>
              <TableCell>{row.conditionment}</TableCell>
              <TableCell>{row.cout}</TableCell>
              <TableCell>{row.transport}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>{row.brute}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
