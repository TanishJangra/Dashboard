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
import Button from "@mui/material/Button";
import avatar from "../../assets/avatars/avatar.png";
// import "./studenttable.css";


const StyledButton = styled(Button)(({ theme }) => ({
  // your regular styles here

  "&:hover": {
    backgroundColor: theme.palette.secondary.main, // Change to your desired hover background color
    color: theme.palette.secondary.contrastText, // Change to your desired hover text color
    // add any other styles you want to apply on hover
  },
}));

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

function createData(name, role, btn1, btn2) {
  return { name, role, btn1, btn2 };
}

const rows = [
  createData("Tanish", "Frontend ", "Approval",
    "Decline"),
    createData(
      "Dipanshu",
      "Senior full stack",
      "View",
      "Decline"
    ),
  createData(
    "Pandey",
    "Comp. Programmer",
    "Approval",
    "Decline",
  ),
  createData("Ankit","CourseLover", "Approval",
    "Decline")
];

export default function StudentTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Sale</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ display: "flex" }}
                >
                  <img className="table-avatar" src={avatar}></img>
                  <span className="table-name-span">
                    <span className="table-name">{row.name}</span>
                    <span className="table-name-role">{row.role}</span>
                  </span>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <StyledButton
                    variant="contained"
                    sx={{ color: "#28cdba", bgcolor: "#cff7f7" }}
                  >
                    {row.btn1}
                  </StyledButton>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <StyledButton
                    variant="contained"
                    sx={{ color: "#d89ca1", bgcolor: "#fbe8e9" }}
                  >
                    {" "}
                    {row.btn2}
                  </StyledButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
