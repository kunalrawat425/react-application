import { gql } from "@apollo/client";

export const LOAD_CARS = gql`
query {
  getAllCars {
    type
    brand
    name
    priceinLacs
  }
}
`;
