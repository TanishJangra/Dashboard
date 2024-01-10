import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StarIcon from "@mui/icons-material/Star";
import avatar from "../../assets/avatars/avatar.png"
import "./courseTable.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name,role, category, sale, rating, earning, visitor) {
  return { name, role,category, sale, rating, earning, visitor };
}

const rows = [
  createData("Tanish Badass", "Frontend ", "Designer", 92, 4.5, 430, 12121),
  createData("Dipanshu Saini","Senior full stack", "Development", 62, 2.5, 400, 12121),
  createData("Pandey Aman","Comp. Programmer", "Logical", 166, 3.5, 602, 12123),
  createData("Ankit Escorts", "Dont Know", "Course", 36, 4.5, 432, 12123),
  createData("Jetha Lal C. GADA","comedian", "Babita", 166, 4.5, 912, 12321),
];

export default function CourseTable() {
  return (
    <>
      <div className="head same">
        <h3 >Course Status </h3>
        <div className="rght">
          <h3>Course Visit</h3>
          <div className="circle bl"></div>
          <h3>Course Sale</h3>
          <div className="circle or"></div>
          <h3>This Month</h3>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Sale</StyledTableCell>
              <StyledTableCell align="right">Rating</StyledTableCell>
              <StyledTableCell align="right">Earning</StyledTableCell>
              <StyledTableCell align="right">Visitor</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ display: "flex", }}
                >
                  <img className="table-avatar" src={avatar}></img>
                  <span className="table-name-span">
                    <span className="table-name">{row.name}</span>
                    <span className="table-name-role">{row.role}</span>
                  </span>
                </StyledTableCell>
                <StyledTableCell align="right">{row.category}</StyledTableCell>
                <StyledTableCell align="right">{row.sale}</StyledTableCell>
                <StyledTableCell align="right">
                  <span>
                    <span className="table-rating-star">
                      <StarIcon />
                    </span>
                    {row.rating}
                  </span>
                </StyledTableCell>
                <StyledTableCell align="right">{row.earning}</StyledTableCell>
                <StyledTableCell align="right">{row.visitor}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
