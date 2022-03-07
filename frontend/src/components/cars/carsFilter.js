import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CarFilterCard from "../carFilterCard";

export default function CarsFilter() {
  const filters = [
    {
      category: "brand",
      values: ["Maruti suzuki", "Hyundai", "Toyota", "BMW", "Mercedes", "Audi"],
    },
    { category: "price", values: ["5-10", "11-20", "21-35", "36-Above"] },
    { category: "type", values: ["HatchBack", "Sedan", "SUV", "Luxury"] },
    { category: "transmission", values: ["Automatic", "Manual"] },
  ];
  return (
    <Box sx={{ flexGrow: 1 }} p={4}>
      <Stack spacing={2}>
        {filters.map((filter, index) => (
          <CarFilterCard filter={filter} key={index} />
        ))}
      </Stack>
    </Box>
  );
}
