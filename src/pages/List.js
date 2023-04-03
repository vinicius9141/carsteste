// import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

const List = () => {

  const [selectedRows, setSelectedRows] = useState([]);

  const [rows, setRows] = useState( [
    { id: 1, model: 'Fiat Mobi', color: 'Branco', license: 'ABC-1234', potency:'59cv', renavam: 12345678910, typeFuel:'Flex', volumeFuel:'10L', priceFuel:'R$ 30,00', actions:'Excluir' },
    { id: 2, model: 'Ford Fiesta', color: 'Prata', license: 'BRA2E19', potency:'90cv', renavam: 11121314151, typeFuel:'Alcool', volumeFuel:'40L', priceFuel:'R$ 60,00', actions:'Excluir' },
  ]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'model',
      headerName: 'Modelo',
      width: 150,
      editable: true,
    },
    {
      field: 'color',
      headerName: 'Cor',
      width: 150,
      editable: true,
    },
    {
      field: 'license',
      headerName: 'Placa',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'potency',
      headerName: 'Potência',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'typeFuel',
      headerName: 'Tipo de combustivel',
      width: 170,

      headerAlign: 'center',
      editable: true,
    },
    {
      field: 'volumeFuel',
      headerName: 'Qauntidade de combustivel',
      width: 200,
      editable: true,
    },
    {
      field: 'priceFuel',
      headerName: 'Valor total de combustivel',
      width: 200,
      editable: true,
    },
    {
      field: 'renavam',
      headerName: 'Renavam',
      description: 'Esta Coluna tem um valor importante e não pode ser recolocada',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.renavam || ''}`,
    },
    {
      field: 'actions',
      headerName: 'Ações',
      description: 'Ações para realizar',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.actions || ''}`,
        renderCell: (params) => (
          <Button onClick={() => setSelectedRows([params.id])}>Excluir</Button>
        ),
    },
  ];



  const saveAlts = () =>{
    localStorage.setItem('rows',  JSON.stringify(rows));
  }

  const newFuelSupply =  ()=>{
   window.location.href= '/cadastroAbastecimento'
  }

  const handleEditCellChange = (params) => {
    setRows(
      (oldRows) => {
        return oldRows.map(oldRow => {
          if(oldRow.id === params.id){
            return params;
          }
          return oldRow;
        });
      }
    )
  }

  const handleRowSelectionModelChange = (newSelection) => {
    setSelectedRows(newSelection.selectionModel);
  };

  const deleteRow = (params) =>{
     const updatedRows = rows.filter((row) => !selectedRows.includes(row.id));
  setRows(updatedRows);
  setSelectedRows([]);
    
  }

  useEffect(()=>{
    const _rows = JSON.parse(localStorage.getItem('rows'));
    if(_rows?.length > 0){
      setRows(_rows);
    }
  },[])
  return(
    <>
        <Button sx={{ marginTop:'20px' , alignItems:'flex-end',width: '20%', marginLeft:'3%'}} variant="contained" color="success" onClick={newFuelSupply}>
            Cadastrar novo abastecimento
        </Button>
      <Box sx={{ height: 500, width: '100%', flexDirection:'column', justifyContent:'center' , marginTop:'20px', padding:'3%', boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>
      <DataGrid
       
        rows={rows}
        columns={columns}
        onRowSelectionModelChange={deleteRow}
        processRowUpdate={handleEditCellChange}
        onProcessRowUpdateError={(e)=>{}}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>

    <Button sx={{  alignItems:'flex-end',width: '10%', marginLeft:'3%' ,marginTop:'10px'}} variant="contained"  onClick={saveAlts}>
            Salvar alteraçoes
        </Button>
    </>
  )
}

export default List