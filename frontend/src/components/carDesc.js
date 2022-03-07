import {Typography,Stack} from "@mui/material";

export default function CarCardDesc({carDescription}) {
  return (
    <Typography variant="body1" color="text.secondary">
      <Stack>
        <Typography>Type : {carDescription.type}</Typography>
        <Typography>Price : {carDescription.priceinLacs} Lacs</Typography>
        {/* <Typography>Mileage : {carDescription.options.mileage}</Typography> */}
      </Stack>
    </Typography>
  );
}
