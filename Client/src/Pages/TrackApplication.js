import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 }, 
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'role', headerName: 'Job Role', width: 150 },
    { field: 'company', headerName: 'Company', width: 150 },
    { field: 'location', headerName: 'Location', width: 90 },
    { field: 'status', headerName: 'Status', width: 90},
    { field: 'notes', headerName: 'Notes', width: 200},
];

const rows = [
  { id: 1, category:'NHS', role: 'Software Engineer', company: 'NHS', location: 'Leeds', satus: 'Applied', notes: ' '},
];

const paginationModel = { page: 0, pageSize: 5 };

function TrackApplication () {
   return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
   );
}


export default TrackApplication;