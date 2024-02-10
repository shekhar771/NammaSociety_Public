import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import Style from '../Css/Component.module.css';

const initialRows = [
  { id: '6HS9BA7FD8', Name: 'Rajendra Prasad', Society: 'Raheja CHS' },
  { id: '9HS9BA7FD8', Name: 'Harsh Raju', Society: 'Kingston CHS' }
  
  // Add more rows as needed
];

const ADLTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState(initialRows);

  
  // This is used for pagination feature
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer className='TContainer'>
      <Table className='TContainer' >
        
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow
              key={row.id}
              style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Society}</TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        // className={Style.page}
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default ADLTable;
