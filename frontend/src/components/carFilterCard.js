import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,Box
} from "@mui/material";
import { useState } from "react";
// import PropTypes from "prop-types";

// CarFilterCard.propTypes = {
//   filter: PropTypes.oneOf(["asc", "desc"]),
// };
export default function CarFilterCard({ filter }) {
  let { category, values } = filter;
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
    
    // setCheckBox(event.target.value]);
  };
  let [checkBox,setCheckBox] = useState([]);
  let [filters,setFilter] = useState([]);

  return (
    <Card>
      <CardContent>
        <Typography my={2} variant="h6" component="div">{category.toUpperCase()}</Typography>
        <Divider />
        <Box p={3}> {values.map((value) => (
          <FormGroup>
            <FormControlLabel control={<Checkbox  onChange={handleChange} checked={checked} />} label={value} />
          </FormGroup>
        ))}
        </Box>
      </CardContent>
    </Card>
  );
}
