import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import PlaceDetails from "./PlaceDetails";

const List = ({ places }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);

  console.log(type);

  const options = [
    {
      value: "restaurants",
      label: "Restaurants",
    },
    {
      value: "hotels",
      label: "Hotels",
    },
    {
      value: "attractions",
      label: "Attractions",
    },
  ];

  const ratings = [
    {
      value: 0,
      label: "All",
    },
    {
      value: 3,
      label: "Above 3.0",
    },
    {
      value: 4,
      label: "Above 4.0",
    },
    {
      value: 4.5,
      label: "Above 4.5",
    },
  ];

  

  return (
    <div>
      <Typography variant="h4" component="h2" className="list__title">
        Restaurants, Hotels & Attractions Near you
      </Typography>

      <div className="flex flex-col md:flex-row gap-4 py-8">
        <FormControl className="list__formcontrol">
          <InputLabel htmlFor="my-input" id="filled-basic">
            Type
          </InputLabel>

          <Select
            value={type}
            className="list__select"
            onChange={(e) => setType(e.target.value)}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">Rating</InputLabel>
          <Select
            value={rating}
            className="list__select"
            onChange={(e) => setRating(e.target.value)}>
            {ratings.map((rating) => (
              <MenuItem key={rating.value} value={rating.value}>
                {rating.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      
      <Grid container spacing={3}>
        {places?.map((place) => (
          <Grid item xs={12} key={place?.location_id}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
