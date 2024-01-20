import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../Css/DropdownTable.css'
import ModifyButton from './ModifyButton';

// function createData(name, calories, fat, carbs, protein, price) {
function createData(name, price) {

  return {
    name,
    // calories,
    // fat,
    // carbs,
    // protein,
    price,
    history: [
      {
        userid: '6HS9BA7FD8',
        username: 'Rajendra Prasad',
        societyname: 'Raheja CHS',
      },
      {
        userid: '9HS9BA7FD8',
        username: 'Harsh Raju',
        societyname: 'Kingston CHS',
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            className="arrow"
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        {/* <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                History
              </Typography> */}
              <Table size="small" aria-label="purchases">
                
                  {row.history.map((historyRow) => (
                    <TableRow  key={historyRow.userid}>
                      <TableCell className="content" align="center" component="th" scope="row">{historyRow.userid}</TableCell>
                      <TableCell className="content"  align="center">{historyRow.username}</TableCell>
                      <TableCell className="content" align="center">{historyRow.societyname}</TableCell>
                      {/* <TableCell align="right">
                        {Math.round(historyRow.societyname * row.price * 100) / 100}
                      </TableCell> */}
                    </TableRow>
                  ))}
                
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    // calories: PropTypes.number.isRequired,
    // carbs: PropTypes.number.isRequired,
    // fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        societyname: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        userid: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const level1 = [
  createData('Level 1'),

];

const level2 = [
  createData('Level 2'),

];
const level3 = [
  createData('Level 3'),

];
const societygrp = [
  createData(''),

];

export default function DropdownTable() {
  // return (
  //   <TableContainer component={Paper} className="table-container">
  //     <Table aria-label="collapsible table" className="table">
  //       <TableHead>
  //         <TableRow className="table-cell">Admin<ModifyButton /></TableRow>
  //           {/* <TableCell /> */}
  //           {/* <TableCell </TableCell> */}


  //         <TableCell>
  //           {level1.map((row) => (
  //             <Row key={row.name} row={row} className="table-row" />
  //           ))}
  //           {level2.map((row) => (
  //             <Row key={row.name} row={row} className="table-row" />
  //           ))}
  //           {level3.map((row) => (
  //             <Row key={row.name} row={row} className="table-row" />
  //           ))}
  //         </TableCell>
  //         <TableCell>

  //           {societygrp.map((row) => (
  //             <Row key={row.name} row={row} className="table-row" />
  //           ))}
  //         </TableCell>

  //       </TableHead>

  //     </Table>
  //   </TableContainer>
  // );
  return (
    <TableContainer component={Paper} className="table-container">
      <Table aria-label="collapsible table" className="table">
        <TableRow className="table-cell">Admin</TableRow>
        <TableRow >
          <ModifyButton />
          {level1.map((row) => (
            <Row key={row.name} row={row} className='level1' />
          ))}
        </TableRow>
        <TableRow>
          <ModifyButton />
          {level2.map((row) => (
            <Row key={row.name} row={row} className="table-row" />
          ))}
        </TableRow>
        <TableRow>
          <ModifyButton />
          {level3.map((row) => (
            <Row key={row.name} row={row} className="table-row" />
          ))}
        </TableRow>
        <TableRow className="societygrp">Soceity Group
          <ModifyButton />
          {societygrp.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableRow>


      </Table>
    </TableContainer>

  );

}