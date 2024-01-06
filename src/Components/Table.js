import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Style from '../Css/UserUnlock.module.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
const initialRows = [
  { id: 1, Name: 'John Doe', Locked: false },
  { id: 2, Name: 'Jane Doe', Locked: true },
  { id: 3, Name: 'John Doe', Locked: false },
  { id: 4, Name: 'Jane Doe', Locked: true },
  { id: 5, Name: 'John Doe', Locked: false },
  { id: 6, Name: 'Jane Doe', Locked: true },
  { id: 7, Name: 'John Doe', Locked: false },
  { id: 8, Name: 'Jane Doe', Locked: true },
  { id: 9, Name: 'John Doe', Locked: false },
  { id: 10, Name: 'Jane Doe', Locked: true },
  { id: 11, Name: 'John Doe', Locked: false },
  { id: 12, Name: 'Jane Doe', Locked: true },
  { id: 13, Name: 'John Doe', Locked: false },
  { id: 14, Name: 'Jane Doe', Locked: true },
  { id: 15, Name: 'John Doe', Locked: false },
  { id: 16, Name: 'Jane Doe', Locked: true },

  // Add more rows as needed
];

const CustomizedTables = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState(initialRows);

  // Change icon code
  const handleIconClick = (id) => {
    setRows((prevRows) =>
      prevRows.map((item) =>
        item.id === id ? { ...item, Locked: !item.Locked } : item
      )
    );
  };

  // This is used for pagination feature
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer className={Style.table} component={Paper}>
      <Table className={Style.table}>
        <TableHead>
          <TableRow>
            <TableCell className={Style.tableCell}>User ID </TableCell>
            <TableCell className={Style.tableCell}>User Name </TableCell>
            <TableCell className={Style.tableCell}>Locked/ Unlock</TableCell>
          </TableRow>
        </TableHead>
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
              <TableCell>
                {row.Locked ? (
                  <LockOpenOutlinedIcon
                    onClick={() => handleIconClick(row.id)}
                  />
                ) : (
                  <LockOutlinedIcon onClick={() => handleIconClick(row.id)} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        className={Style.page}
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

export default CustomizedTables;
