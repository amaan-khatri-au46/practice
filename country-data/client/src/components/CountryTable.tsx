import React, { useState } from "react";
import { Country } from "../store/countrySlice";

import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface CountryTableProps {
  data: Country[];
}

export const CountryTable: React.FC<CountryTableProps> = ({ data }) => {
  console.log(data[0])
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rowsPerPageOptions = [5, 10, 25];

  console.log(data[0]);
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh",}}>
      <TableContainer component={Paper} style={{height:"700 px" , boxSizing:"border-box", margin:"auto"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Common Name</TableCell>
              <TableCell>Official Name</TableCell>
              <TableCell>Capital</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Area</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Flag</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((country) => (
                <TableRow key={country.name.common} style={{width:"auto"}}>
                  <TableCell>{country.name.common}</TableCell>
                  <TableCell>{country.name.official}</TableCell>
                  <TableCell>{country.capital}</TableCell>
                  <TableCell>{country.region}</TableCell>
                  <TableCell>{country.area}</TableCell>
                  <TableCell>{country.population}</TableCell>
                  <TableCell>
                    {/* <img
                      src={country.flags.png}
                      alt={"img"}
                      style={{ width: "50px" }}
                    /> */}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      <TablePagination 
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </TableContainer>
    </div>
  );
};
