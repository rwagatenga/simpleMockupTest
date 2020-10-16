import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    //minWidth: 650,
  },
});

function createData(client, creances) {
  return { client, creances };
}

const rows = [
  createData('KAYITANI Robert', 2,654,800.00),
  createData('RUGAMBA Fred', 374,400.00),
  createData('NSHIMIYIMANA Aimable', 0.00),
  createData('RUBAYIZA Charles', 0.00),
  createData('KALISA Pierre', '16,000.00'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell>Creance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.client}>
              <TableCell component="th" scope="row">
                {row.client}
              </TableCell>
              <TableCell>{row.creances}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
