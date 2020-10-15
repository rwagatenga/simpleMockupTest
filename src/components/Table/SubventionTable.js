import React from 'react';
import MaterialTable from 'material-table';

export default function SubventionTable() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'DATE', field: 'dates', type: 'date' },
    { 
      title: 'COMPTE DE FINANCEMENT', 
      field: 'compte', 
      initialEditValue: 'initial edit value',
      lookup: { 
        34: 'AUTRES BAILLEURS',
        43: 'SUBVENTION ETAT',
        53: 'ENABEL'
      }
    },
    { title: 'MONTANT', field: 'montan' },
    { 
      title: 'COMPTE DESTINATAIRE', 
      field: 'destination', 
      initialEditValue: 'initial edit value',
      lookup: { 
        63: 'BANCOBU', 
        73: 'ETAT',
      }
    },
    { title: 'MONTANT', field: 'montan', type: 'textArea' },
  ]);

  const [data, setData] = useState([
    { dates: '2020-01-01', compte: 34, montan: '50,000.00', destination: 63 },
    { dates: '2020-12-31', compte: 43, montan: '1,000,000.00', destination: 73 },
  ]);

  return (
    <MaterialTable
      title="Fond Recu Recement"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
    />
  )
}
