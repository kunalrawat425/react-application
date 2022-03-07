import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import Card from "../../components/carCard";
import { useState, useEffect } from "react";
import { LOAD_CARS } from "../../graphQL/queries";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
export default function CarsList({ active,filter }) {
  
  const [carsList, setCarsList] = useState([]);
  const { error, loading, data } = useQuery(gql`
    query {
      getAllCars(brand: "Toyota", type: "SUV") {
        type
        brand
        name
        priceinLacs
      }
    }
  `);

  useEffect(() => {
    if (data?.getAllCars) {
      setCarsList(data.getAllCars);
    }
  });

  return (
    <Box sx={{ flexGrow: 1 }} p={2}>
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        {carsList &&
          carsList.map((list, index) => (
            <Grid item xs={4} sm={4} md={3} key={index}>
              <Card carDetails={list} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
