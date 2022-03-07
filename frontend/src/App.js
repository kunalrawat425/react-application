import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import CarsFilter from "./components/cars/carsFilter";
import CarsList from "./components/cars/carsList";

const link = from([
  // errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function useFilters() {
  const [filters, _updateFilter] = useState({
    id: undefined,
    name: undefined,
  });

  const updateFilter = (filterType, value) => {
    _updateFilter({
      [filterType]: value,
    });
  };

  return {
    models: { filters },
    operations: { updateFilter },
  };
}

function App() {
  let [active, setActive] = useState(false);
  const { operations, models } = useFilters();

  return (
    <ApolloProvider client={client}>
      <Grid container spacing={2} pt={10} sx={{ background: "#fbfbfb" }}>
        <Grid item xs={3}>
          <CarsFilter />
        </Grid>
        <Grid item xs={9}>
          <CarsList active={active} filter={models} />
        </Grid>
      </Grid>
    </ApolloProvider>
  );
}

export default App;
