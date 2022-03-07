import Typography from "@mui/material/Typography";

export default function CarCardTitle({ carTitle,carBrand }) {
  return (
    <Typography gutterBottom variant="h6" component="div">
      {carTitle} - {carBrand}
    </Typography>
  );
}
