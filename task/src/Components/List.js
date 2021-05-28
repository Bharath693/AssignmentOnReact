import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './List.css'

const List = () => {
    const LocalStorageItems = JSON.parse(localStorage.getItem("details"))
    const {MobileName , Brand , Price , Color , Ram} = LocalStorageItems
    const StyledTableCell = withStyles((theme) => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);
    
    const StyledTableRow = withStyles((theme) => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }))(TableRow);

    const rows = [
      createData(MobileName, Brand, Price, Color, Ram),
      // createData('Eclair', 262, 16.0, 24, 6.0),
      // createData('Cupcake', 305, 3.7, 67, 4.3),
      // createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    
    const useStyles = makeStyles({
      table: {
        minWidth: 700,
      },
    });

    function createData(MobileName, Brand, Price, Color, Ram) {
      return { MobileName, Brand, Price, Color, Ram };
    }
    const classes = useStyles()
    return (
       <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>MobileName</StyledTableCell>
            <StyledTableCell align="right">Brand</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
            <StyledTableCell align="right">Ram</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.MobileName}</StyledTableCell>
              <StyledTableCell align="right">{row.Brand}</StyledTableCell>
              <StyledTableCell align="right">{row.Price}</StyledTableCell>
              <StyledTableCell align="right">{row.Color}</StyledTableCell>
              <StyledTableCell align="right">{row.Ram}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       </>
    )
}

export default List