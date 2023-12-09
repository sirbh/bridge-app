import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MediaCard({
    title="Title",
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    image,
    date="21st Dec 2021 6:00 PM",
    location="A233",
    organizer="TRES",
    titleColor="white",
    descriptionColor="white",
    dateColor="white",
    locationColor="white",
    organizerColor="white",
    onClick=()=>{console.log("clicked")}
}) {
  return (
    <Card
      onClick={
            ()=>{
              onClick(title, description, image, date, location, organizer, titleColor, descriptionColor, dateColor, locationColor, organizerColor)
            }
      }
      sx={{
        width: 345,
        height: 450,
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        '&:hover': {
            border: '10px solid black',
            cursor: 'pointer',
          },
      }}
    >
      <CardContent sx={{ height: 200 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: titleColor, fontSize: "3rem" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color={descriptionColor}
          sx={{ fontSize: "1rem", color: "white" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "absolute", bottom: 0 }}>
        <Typography
          gutterBottom
          variant="h2"
          sx={{ color: dateColor, fontSize: "20px", fontWeight: "900" }}
        >
          {date}
        </Typography>
        <Typography
          gutterBottom
          variant="h2"
          sx={{ color: locationColor, fontSize: "20px", fontWeight: "900" }}
        >
          {location}
        </Typography>
        <Typography
          gutterBottom
          variant="h2"
          sx={{ color: organizerColor, fontSize: "20px", fontWeight: "900" }}
        >
          {organizer}
        </Typography>
      </CardActions>
    </Card>
  );
}
