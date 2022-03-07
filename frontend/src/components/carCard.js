import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CarCardTitle from "./carTitle";
import CarCardDesc from "./carDesc";
export default function carCard({ carDetails }) {
  let {
    name: carTitle,
    brand: carBrand,
    // : carDescription,
  } = carDetails;
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="
        alt="green iguana"
      />
      <CardContent>
        <CarCardTitle carTitle={carTitle} carBrand={carBrand} />
        <CarCardDesc carDescription={carDetails} />
      </CardContent>
    </Card>
  );
}
