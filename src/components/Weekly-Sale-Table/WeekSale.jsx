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
import graphImg from "../../assets/avatars/grap2.jpeg"
import { Height } from "@mui/icons-material";

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

function createData(name, role, btn1) {
  return { name, role, btn1 };
}

const rows = [
  createData("Dipanshu Saini", "Senior full stack", "$20",),
  createData("Tanish Badass", "Frontend ", "$20",),
  createData("Pandey Aman", "Comp. Programmer", "$20",)
];

export default function WeekSale() {
  return (
    <>
    <img style={{height: "142px",
    width: "450px", margin:"8px 8px"}} src={graphImg}></img>
      <TableContainer component={Paper} sx={{m: "0 10px"}}>
        <Table sx={{ minWidth: 350}} aria-label="customized table">
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{ display: "flex" }}
                >
                  <span className="table-name-span">
                    <span className="table-name">{row.name}</span>
                    <span className="table-name-role">{row.role}</span>
                  </span>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <StyledButton
                    variant="contained"
                    sx={{ color: "#1294e1", bgcolor: "#dff5ff" }}
                  >
                    {row.btn1}
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
