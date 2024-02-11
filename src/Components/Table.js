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
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Style from '../Css/Component.module.css';
import { ModifyButton } from './CustomButton';
import { useNavigate } from 'react-router-dom';

const initialRows = [
  { id: 1, Code: 201, Name: 'John Doe', Locked: false, Society: 'Raheja CHS', Crossed: false },
  { id: 2, Code: 202,Name: 'Jane Doe', Locked: true, Society: 'Kingston CHS', Crossed: true},
  { id: 3, Code: 203,Name: 'John Doe', Locked: false, Society: 'Raheja CHS', Crossed: false },
  { id: 4, Code: 204,Name: 'Jane Doe', Locked: true, Society: 'Kingston CHS',Crossed: true },
  { id: 5, Code: 205,Name: 'John Doe', Locked: false , Society: 'Raheja CHS', Crossed: false },
  { id: 6, Code: 206,Name: 'Jane Doe', Locked: true, Society: 'Kingston CHS' , Crossed: true},
  { id: 7, Code: 207,Name: 'John Doe', Locked: false, Society: 'Raheja CHS', Crossed: false },
  { id: 8, Code: 208,Name: 'Jane Doe', Locked: true , Society: 'Kingston CHS', Crossed: true},
  { id: 9, Code: 209,Name: 'John Doe', Locked: false, Society: 'Raheja CHS' , Crossed: false },
  { id: 10, Code: 210,Name: 'Jane Doe', Locked: true, Society: 'Kingston CHS', Crossed: true },
  { id: 11, Code: 211,Name: 'John Doe', Locked: false , Society: 'Raheja CHS', Crossed: false },
  { id: 12, Code: 212,Name: 'Jane Doe', Locked: true, Society: 'Kingston CHS' , Crossed: true},
  { id: 13, Code: 213,Name: 'John Doe', Locked: false, Society: 'Raheja CHS', Crossed: false  },
  { id: 14, Code: 214,Name: 'Jane Doe', Locked: true , Society: 'Kingston CHS', Crossed: true},
  { id: 15, Code: 215,Name: 'John Doe', Locked: false , Society: 'Raheja CHS', Crossed: false },
  { id: 16, Code: 216,Name: 'Jane Doe', Locked: true , Society: 'Kingston CHS', Crossed: true}
  // Add more rows as needed
];

export const CustomizedTables = () => {
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
    <TableContainer className='TContainer'>
      <Table className='TContainer'>
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
                    style={{ color: '0f0' }}
                    onClick={() => handleIconClick(row.id)}
                  />
                ) : (
                  <LockOutlinedIcon
                    style={{ color: '#f00' }}
                    onClick={() => handleIconClick(row.id)}
                  />
                )}
              </TableCell>
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
export default CustomizedTables;

export const CustomizedTables2 = () => {
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
  //for editing
  const navigate = useNavigate();

  const handleModifyClick = (rowData) => {
    // Navigate to another page and pass the row data as a parameter
    navigate('/Home/ModifyBilling', { rowData });
  };
  return (
    <TableContainer className='TContainer2'>
      <Table className='TContainer'>
        <TableHead>
          <TableRow>
            <TableCell className={Style.tableCell}>Code</TableCell>
            <TableCell className={Style.tableCell}>Group</TableCell>
            <TableCell className={Style.tableCell}>Ledger Name</TableCell>
            <TableCell className={Style.tableCell}>Compul GST</TableCell>
            <TableCell className={Style.tableCell}>Service Tax</TableCell>
            <TableCell className={Style.tableCell}>
              Interest Calculation
            </TableCell>
            <TableCell className={Style.tableCell}>Action</TableCell>
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
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Name}</TableCell>

              <TableCell>{row.Name}</TableCell>

              <TableCell>{row.Name}</TableCell>

              <TableCell>
                <ModifyButton onClick={() => handleModifyClick(row)} />
              </TableCell>
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

export const ADLTable = () => {
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

export const AcGTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState(initialRows);  

  const handleIconClick = (Code) => {
    setRows((prevRows) =>
      prevRows.map((item) =>
        item.Code === Code ? { ...item, Crossed: !item.Crossed } : item
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
    <TableContainer className='TContainer'>
      <Table className='TContainer'>
        <TableHead>
          <TableRow>
            <TableCell className={Style.tableCell}>Code</TableCell>
            <TableCell className={Style.tableCell}>Account Group</TableCell>
            <TableCell className={Style.tableCell}>Status</TableCell>
            <TableCell className={Style.tableCell}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow
              key={row.id}
              style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}
            >
              <TableCell>{row.Code}</TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>
                {row.Crossed ? (
                  <CheckCircleOutlineOutlinedIcon
                    style={{ color: '0f0' }}
                    onClick={() => handleIconClick(row.Code)}
                  />
                ) : (
                  <CancelOutlinedIcon
                    style={{ color: '#f00' }}
                    onClick={() => handleIconClick(row.Code)}
                  />
                )}
              </TableCell>
              <TableCell><ModifyButton/></TableCell>
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

