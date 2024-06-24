import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  state: string,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
) {
  return { state, name, calories, fat, carbs };
}

const rows = [
  createData("외출", "Frozen yoghurt", 159, 6.0, 24),
  createData("재실", "Ice cream sandwich", 237, 9.0, 37),
  createData("재실", "Eclair", 262, 16.0, 24),
  createData("외박", "Cupcake", 305, 3.7, 67),
  createData("외출", "Gingerbread", 356, 16.0, 49),
];
const CustomTable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>상태</TableCell>
              <TableCell align="right">이름</TableCell>
              <TableCell align="right">호실</TableCell>
              <TableCell align="right">마지막 업데이트</TableCell>
              <TableCell align="right">상세</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.state}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
