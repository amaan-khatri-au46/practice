import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Country, fetchCountries } from "../store/countrySlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
// import { CountryTable } from "./CountryTable";
import { CountryTanstack } from "./CountryTanstack";
import { ColumnDef } from "@tanstack/react-table";

export const CountryData = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const countries = useSelector(
    (state: RootState) => state.countries.countries
  );

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const cols = useMemo<ColumnDef<Country>[]>(
    () => [
      {
        header: "Common Name",
        footer: "Common Name",
        accessorKey: "name.common",
      },
      {
        header: "Official Name",
        footer: "Official Name",
        accessorKey: "name.official",
      },
      {
        header: "Capital",
        footer: "Capital",

        accessorKey: "capital",
      },
      {
        header: "Region",
        footer: "Region",

        accessorKey: "region",
      },
      {
        header: "Area",
        footer: "Area",

        accessorKey: "area",
      },
      {
        header: "Population",
        footer: "Area",
        accessorKey: "capital",
      },
      {
        header: "Flag",
        cell(props) {
          return <img src={props.row.original.flags.png} alt={`${props.row.original.name.common} flag`} style={{width:"40px"}} />
        },
      },
    ],
    []
  );

  // Grouping the new constant
  // export const groupingColumns =  [
  //   {
  //     header: "Name",
  //     footer: "Name",
  //   }
  // ]
  return (
    <div>
      {/* <CountryTable data={countries}/> */}
      <CountryTanstack data={countries} columns={cols} />
    </div>
  );
};
