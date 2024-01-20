import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
  Rating,
  Link,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const PlaceDetails = ({ place }) => {
  const loc = "24 Dong Khoi, Dien Dien 650000 Vietnam";
  const num = "+84 92 873 90 87";

  return (
    <Card sx={{ maxWidth: 450 }} className="mui-card">
      <CardMedia
        sx={{ height: 150 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        title={place.name}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {place.name}
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="textSecondary"
          mt={2}>
          <Rating name="read-only" value={place?.rating} readOnly />
          <Typography variant="body2">{place?.num_reviews} Reviews</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography variant="subtitle2">Price</Typography>
          <Typography variant="body2" color="textSecondary">
            {place?.price ? place?.price : "$1,000 - $20,000"}
          </Typography>
        </Box>

        {place?.rating && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="1rem"
            my={1}>
            <Typography variant="subtitle2" gutterBottom>
              Ranking
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {place?.ranking}
            </Typography>
          </Box>
        )}

        {place?.awards?.map((award) => (
          <Box
            key={award.display_name}
            my={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle1">{award.display_name}</Typography>
          </Box>
        ))}

        <div className="flex flex-wrap gap-2 my-2">
          {place?.cuisine?.map(({ key, name }) => (
            <Chip key={key} size={"small"} label={name} mx={1} />
          ))}
        </div>

        <Box display="flex" flexDirection="column" gap="1rem">
          <div className="flex items-center justify-between">
            <LocationOnIcon />
            <Typography variant="caption" color="textSecondary">
              {place?.address ? place?.address : loc}
            </Typography>
          </div>
          <div className="flex items-center justify-between gap-2">
            <PhoneIcon />
            <Typography
              variant="caption"
              color="textSecondary"
              className="phone">
              {place?.phone ? place?.phone : num}
            </Typography>
          </div>
        </Box>
      </CardContent>
      <CardActions>
        {place.website && (
          <Link
            cursor="pointer"
            href={place?.website}
            underline="hover"
            target="_blank"
            rel="noopener">
            Website
          </Link>
        )}

        {place.web_url && (
          <Link
            href={place?.web_url}
            underline="hover"
            target="_blank"
            rel="noopener">
            Trip Advisor
          </Link>
        )}
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
